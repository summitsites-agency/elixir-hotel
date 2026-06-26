import { site } from '../data/site.js';
import './Contents.css';

// "In this issue" — an editorial contents index linking to each department.
export default function Contents() {
  return (
    <section className="contents" aria-label="Contents">
      <div className="wrap">
        <div className="contents__head">In this issue — {site.issue}</div>
        <ol className="contents__list">
          {site.navLinks.map((l, i) => (
            <li key={l.href}>
              <a className="contents__item" href={l.href}>
                <span className="contents__no">{String(i + 1).padStart(2, '0')}</span>
                <span className="contents__name">{l.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
