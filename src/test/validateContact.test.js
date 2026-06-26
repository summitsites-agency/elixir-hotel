import { describe, it, expect } from 'vitest';
import { validateContact } from '../lib/validateContact.js';

describe('validateContact', () => {
  const ok = { name: 'Ada', email: 'ada@example.com', room: 'The Meridian Suite', message: 'Looking forward to it.' };

  it('passes a fully valid submission', () => {
    expect(validateContact(ok)).toEqual({ valid: true, errors: {} });
  });

  it('requires name, email, message', () => {
    const r = validateContact({ name: '', email: '', room: '', message: '' });
    expect(r.valid).toBe(false);
    expect(r.errors.name).toBeTruthy();
    expect(r.errors.email).toBeTruthy();
    expect(r.errors.message).toBeTruthy();
  });

  it('rejects a malformed email', () => {
    const r = validateContact({ ...ok, email: 'not-an-email' });
    expect(r.valid).toBe(false);
    expect(r.errors.email).toBeTruthy();
  });

  it('treats room as optional', () => {
    const r = validateContact({ ...ok, room: '' });
    expect(r.valid).toBe(true);
  });
});
