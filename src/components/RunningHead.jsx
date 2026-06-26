import { site } from '../data/site.js';
import './RunningHead.css';

export default function RunningHead() {
  return (
    <header className="runhead">
      <div className="wrap runhead__inner">
        <a href="#top" className="runhead__brand">{site.brand}</a>
        <nav className="runhead__nav">
          {site.navLinks.map((l) => (
            <a key={l.href} href={l.href} className="ul">{l.label}</a>
          ))}
        </nav>
        <a href="#enquiries" className="runhead__cta">Reserve&nbsp;↗</a>
      </div>
    </header>
  );
}
