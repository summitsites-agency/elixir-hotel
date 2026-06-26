import { describe, it, expect } from 'vitest';
import { rooms } from '../data/rooms.js';
import { stats, bar, dining, city } from '../data/site.js';

describe('rooms data', () => {
  it('has unique-id rooms', () => {
    expect(rooms.length).toBeGreaterThan(0);
    expect(new Set(rooms.map((r) => r.id)).size).toBe(rooms.length);
  });

  it('every room has the editorial fields and an /images path', () => {
    for (const r of rooms) {
      expect(r.name).toBeTruthy();
      expect(r.line).toBeTruthy();
      expect(r.rate).toMatch(/^\$/);
      expect(r.sqm).toBeTruthy();
      expect(r.view).toBeTruthy();
      expect(r.bed).toBeTruthy();
      expect(r.blurb).toBeTruthy();
      expect(r.image).toMatch(/^\/images\//);
    }
  });
});

describe('content data', () => {
  it('cover stats are numeric with a label', () => {
    expect(stats.length).toBeGreaterThan(0);
    for (const s of stats) {
      expect(typeof s.to).toBe('number');
      expect(s.label).toBeTruthy();
    }
  });

  it('dining menu and bar pours are populated', () => {
    expect(dining.menu.length).toBeGreaterThan(0);
    for (const m of dining.menu) {
      expect(m.course).toBeTruthy();
      expect(m.name).toBeTruthy();
    }
    expect(bar.pours.length).toBeGreaterThan(0);
    for (const p of bar.pours) {
      expect(p.name).toBeTruthy();
      expect(p.base).toBeTruthy();
    }
  });

  it('city has neighbourhood notes', () => {
    expect(city.notes.length).toBeGreaterThan(0);
    for (const n of city.notes) {
      expect(n.k).toBeTruthy();
      expect(n.v).toBeTruthy();
    }
  });
});
