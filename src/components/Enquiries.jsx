import { useState } from 'react';
import { site } from '../data/site.js';
import { rooms } from '../data/rooms.js';
import { validateContact } from '../lib/validateContact.js';
import Reveal from './Reveal.jsx';
import './Enquiries.css';

export default function Enquiries() {
  const [form, setForm] = useState({ name: '', email: '', room: '', dates: '', guests: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function sendForm(data) {
    if (!site.formEndpoint) return false;
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = validateContact(form);
    setErrors(result.errors);
    if (!result.valid) return;

    setStatus('sending');
    const ok = await sendForm(form);
    if (ok) {
      setStatus('sent');
      setForm({ name: '', email: '', room: '', dates: '', guests: '', message: '' });
    } else {
      const body =
        `Name: ${form.name}%0D` +
        `Email: ${form.email}%0D` +
        `Room: ${form.room || 'No preference'}%0D` +
        `Dates: ${form.dates || 'Flexible'}%0D` +
        `Guests: ${form.guests || '—'}%0D%0D` +
        `${form.message}`;
      window.location.href = `mailto:${site.contact.email}?subject=Elixir reservation enquiry&body=${body}`;
      setStatus('idle');
    }
  };

  return (
    <section className="dept enq" id="enquiries">
      <div className="wrap">
        <div className="dept__head">
          <span>06 · <b>Elixir</b> · Reservations</span>
          <span>{site.contact.hours}</span>
        </div>
        <Reveal as="h2" className="dept__title">Enquiries</Reveal>

        <div className="enq__grid">
          <Reveal className="enq__intro">
            <p className="lede">Write to the front desk. We confirm every enquiry by hand, within one business day.</p>
            <ul className="metalist enq__details">
              <li className="meta-row"><span>Address</span><span>{site.contact.address}</span></li>
              <li className="meta-row"><span>Telephone</span><span><a className="ul" href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`}>{site.contact.phone}</a></span></li>
              <li className="meta-row"><span>Email</span><span><a className="ul" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></span></li>
              <li className="meta-row"><span>Desk</span><span>{site.contact.hours}</span></li>
            </ul>
          </Reveal>

          <Reveal as="form" className="enq__form" delay={80} onSubmit={onSubmit} noValidate>
            <div className="enq__row">
              <label className="field">
                <span>Name</span>
                <input value={form.name} onChange={update('name')} aria-invalid={!!errors.name} />
                {errors.name && <em className="field__err">{errors.name}</em>}
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" value={form.email} onChange={update('email')} aria-invalid={!!errors.email} />
                {errors.email && <em className="field__err">{errors.email}</em>}
              </label>
            </div>
            <div className="enq__row">
              <label className="field">
                <span>Room</span>
                <select value={form.room} onChange={update('room')}>
                  <option value="">No preference</option>
                  {rooms.map((r) => <option key={r.id} value={r.name}>{r.name}</option>)}
                </select>
              </label>
              <label className="field">
                <span>Guests</span>
                <input type="text" placeholder="e.g. 2 adults" value={form.guests} onChange={update('guests')} />
              </label>
            </div>
            <label className="field">
              <span>Dates</span>
              <input type="text" placeholder="e.g. 14 – 17 Sept" value={form.dates} onChange={update('dates')} />
            </label>
            <label className="field">
              <span>Anything we should arrange?</span>
              <textarea rows={3} value={form.message} onChange={update('message')} aria-invalid={!!errors.message} />
              {errors.message && <em className="field__err">{errors.message}</em>}
            </label>
            <button className="pill pill--solid" type="submit" disabled={status === 'sending'}>
              {status === 'sent' ? 'Thank you' : status === 'sending' ? 'Sending…' : 'Send enquiry'}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
