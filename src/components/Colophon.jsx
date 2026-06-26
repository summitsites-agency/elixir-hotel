import { site } from '../data/site.js';
import './Colophon.css';

export default function Colophon() {
  const year = new Date().getFullYear();
  return (
    <footer className="colophon">
      <div className="wrap">
        <div className="colophon__top">
          <span className="colophon__brand">ELIXIR</span>
          <span className="colophon__issue">{site.issue} · A Summit Sites editorial demo</span>
        </div>

        <div className="colophon__grid">
          <div className="colophon__col">
            <h4>The Hotel</h4>
            <p>{site.contact.address}</p>
            <p>{site.contact.hours}</p>
          </div>
          <div className="colophon__col">
            <h4>Reservations</h4>
            <p><a className="ul" href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`}>{site.contact.phone}</a></p>
            <p><a className="ul" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
          </div>
          <div className="colophon__col">
            <h4>Index</h4>
            <nav className="colophon__nav">
              {site.navLinks.map((l) => <a key={l.href} className="ul" href={l.href}>{l.label}</a>)}
            </nav>
          </div>
          <div className="colophon__col">
            <h4>Follow</h4>
            <nav className="colophon__nav">
              <a className="ul" href="#top">Instagram</a>
              <a className="ul" href="#top">Journal</a>
              <a className="ul" href="#top">Newsletter</a>
            </nav>
          </div>
        </div>

        <div className="colophon__base">
          <span>© {year} {site.brandFull}.</span>
          <span>A fictional brand, set in type for demonstration.</span>
        </div>
      </div>
    </footer>
  );
}
