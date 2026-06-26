import RunningHead from './components/RunningHead.jsx';
import Masthead from './components/Masthead.jsx';
import Contents from './components/Contents.jsx';
import Dept from './components/Dept.jsx';
import Reveal from './components/Reveal.jsx';
import Figure from './components/Figure.jsx';
import PullQuote from './components/PullQuote.jsx';
import CountUp from './components/CountUp.jsx';
import Enquiries from './components/Enquiries.jsx';
import Colophon from './components/Colophon.jsx';
import { stats, hotelEssay, dining, bar, city } from './data/site.js';
import { rooms } from './data/rooms.js';
import './App.css';

export default function App() {
  return (
    <>
      <RunningHead />
      <main>
        <Masthead />
        <Contents />

        {/* 01 — The Hotel */}
        <Dept id="hotel" no="01" kicker={hotelEssay.kicker} meta="Founded 1924 · Tribeca, New York" title="The Hotel">
          <div className="mag">
            <Reveal className="span-7">
              <p className="lede">{hotelEssay.lead}</p>
            </Reveal>
            <Reveal className="span-4 start-9 colrule stats" delay={80}>
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <span className="stat__num"><CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} /></span>
                  <span className="stat__label">{s.label}</span>
                </div>
              ))}
            </Reveal>

            <Reveal className="span-7">
              <Figure media="image" src="/images/hotel-lobby.jpg" alt="The Elixir lobby, terrazzo and brass" variant="wide" caption="The Lobby" credit="Carrara &amp; terrazzo" />
            </Reveal>
            <Reveal className="span-4 start-9 colrule prose" delay={80}>
              <p className="dropcap">{hotelEssay.body[0]}</p>
              <p>{hotelEssay.body[1]}</p>
            </Reveal>

            <Reveal className="span-10 start-2">
              <PullQuote cite={hotelEssay.pullCite}>{hotelEssay.pull}</PullQuote>
            </Reveal>
          </div>
        </Dept>

        {/* 02 — Rooms & Suites */}
        <Dept id="rooms" tone="dept--tint" no="02" kicker="Rooms &amp; Suites" meta="Floors 12–41 · 128 keys" title="Rooms & Suites">
          <Reveal className="dept__lede">
            One hundred and twenty-eight rooms rise through the tower — each a quiet argument that less, done well, is more.
          </Reveal>
          <div className="mag rooms__grid">
            {rooms.map((r, i) => (
              <Reveal className="span-6 room" key={r.id} delay={(i % 2) * 100}>
                <Figure media="image" src={r.image} alt={r.name} variant="land" caption={r.name} credit={r.rate} />
                <div className="room__body">
                  <span className="eyebrow">{r.line}</span>
                  <p className="prose room__blurb">{r.blurb}</p>
                  <ul className="metalist">
                    <li className="meta-row"><span>Size</span><span className="tabular">{r.sqm}</span></li>
                    <li className="meta-row"><span>View</span><span>{r.view}</span></li>
                    <li className="meta-row"><span>Bed</span><span>{r.bed}</span></li>
                    <li className="meta-row"><span>From</span><span className="tabular">{r.rate} / night</span></li>
                  </ul>
                  <a className="room__cta" href="#enquiries">Reserve the {r.name.replace(/^The /, '')} ↗</a>
                </div>
              </Reveal>
            ))}
          </div>
        </Dept>

        {/* 03 — Dining */}
        <Dept id="dining" no="03" kicker="Vermillion" meta="Floor 41 · One seating" title={<>Dining at <em>Vermillion</em></>}>
          <div className="mag">
            <Reveal className="span-5">
              <Figure media="video" src="/videos/clip-1.mp4" poster="/videos/clip-1-poster.jpg" alt="Vermillion, the tower restaurant" variant="portrait" caption="Vermillion" credit="Floor 41" />
            </Reveal>
            <Reveal className="span-6 start-7" delay={80}>
              <p className="lede">{dining.lead}</p>
              <p className="prose dining__body">{dining.body}</p>
              <ol className="menu">
                {dining.menu.map((m) => (
                  <li className="menu__row" key={m.course}>
                    <span className="menu__course">{m.course}</span>
                    <span className="menu__name">{m.name}</span>
                    <span className="menu__note">{m.note}</span>
                  </li>
                ))}
              </ol>
              <p className="marginalia">{dining.marginalia}</p>
            </Reveal>
          </div>
        </Dept>

        {/* 04 — The Bar (Elixir) */}
        <Dept id="bar" tone="dept--dark" no="04" kicker="Elixir" meta="Floor 42 · No reservations" title="The Bar">
          <div className="mag">
            <Reveal className="span-7">
              <p className="lede">{bar.lead}</p>
              <p className="prose bar__body">{bar.body}</p>
            </Reveal>
            <Reveal className="span-4 start-9 colrule" delay={80}>
              <Figure media="video" src="/videos/clip-2.mp4" poster="/videos/clip-2-poster.jpg" alt="Elixir, the forty-second-floor bar" variant="portrait" caption="Elixir" credit="Since 1924" />
            </Reveal>

            <Reveal className="span-7">
              <PullQuote cite={bar.pullCite}>{bar.pull}</PullQuote>
            </Reveal>
            <Reveal className="span-4 start-9" delay={80}>
              <ul className="pours">
                {bar.pours.map((p) => (
                  <li className="pour" key={p.name}>
                    <div className="pour__top">
                      <span className="pour__name">{p.name}</span>
                      <span className="pour__price tabular">{p.price}</span>
                    </div>
                    <span className="pour__base">{p.base}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Dept>

        {/* 05 — The City */}
        <Dept id="city" no="05" kicker="The Neighbourhood" meta="Meridian Plaza · Tribeca" title="The City">
          <div className="mag">
            <Reveal className="span-7">
              <p className="lede">{city.lead}</p>
            </Reveal>
            <Reveal className="span-4 start-9" delay={80}>
              <Figure media="video" src="/videos/clip-3.mp4" poster="/videos/clip-3-poster.jpg" alt="The neighbourhood around Meridian Plaza" variant="portrait" caption="Meridian Plaza" credit="Tribeca" />
            </Reveal>

            <Reveal className="span-6 prose">
              <p className="dropcap">{city.body[0]}</p>
              <p>{city.body[1]}</p>
            </Reveal>
            <Reveal className="span-4 start-9 colrule" delay={80}>
              <ul className="metalist">
                {city.notes.map((n) => (
                  <li className="meta-row" key={n.k}><span>{n.k}</span><span>{n.v}</span></li>
                ))}
              </ul>
              <p className="marginalia city__note">Concierge ledger · updated weekly.</p>
            </Reveal>
          </div>
        </Dept>

        <Enquiries />
      </main>
      <Colophon />
    </>
  );
}
