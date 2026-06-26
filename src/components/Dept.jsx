import Reveal from './Reveal.jsx';

// Department (section) scaffold: a strong top rule + mono running label,
// then an oversized Playfair title, then the bespoke content grid (children).
export default function Dept({ id, no, kicker, meta, title, tone = '', children }) {
  return (
    <section className={`dept ${tone}`.trim()} id={id}>
      <div className="wrap">
        <div className="dept__head">
          <span>{no} · <b>Elixir</b> · {kicker}</span>
          {meta && <span>{meta}</span>}
        </div>
        <Reveal as="h2" className="dept__title">{title}</Reveal>
        {children}
      </div>
    </section>
  );
}
