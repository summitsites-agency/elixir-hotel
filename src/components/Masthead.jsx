import { site } from '../data/site.js';
import Figure from './Figure.jsx';
import PillButton from './PillButton.jsx';
import './Masthead.css';

// Editorial cover: oversized nameplate, a wide cinematic hero band, standfirst + CTA.
export default function Masthead() {
  return (
    <section className="cover" id="top">
      <div className="wrap">
        <div className="cover__meta">
          <span>{site.issue}</span>
          <span>{site.contact.address}</span>
          <span>Est. MCMXXIV</span>
        </div>

        <div className="cover__head">
          <h1 className="cover__nameplate">ELIXIR</h1>
          <p className="cover__tag">{site.tagline}</p>
        </div>

        <div className="cover__band">
          <Figure
            media="video"
            src="/videos/hero.mp4"
            poster="/videos/hero-poster.jpg"
            alt="Elixir — the metropolitan grand hotel, above the city"
            variant="cover"
            caption="The Metropolitan"
            credit="Vol. 01 · Floor 42"
          />
        </div>

        <div className="cover__foot">
          <p className="cover__standfirst">{site.standfirst}</p>
          <div className="cover__actions">
            <PillButton href="#enquiries" variant="solid">Reserve a room</PillButton>
            <a className="cover__scroll" href="#hotel">Read the issue ↓</a>
          </div>
        </div>
      </div>
    </section>
  );
}
