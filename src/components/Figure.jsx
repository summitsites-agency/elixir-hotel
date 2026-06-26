// Captioned editorial media plate. Centralizes the <video> tag so every
// clip autoplays muted/looping inline with a poster, and images lazy-load.
export default function Figure({
  media = 'image',
  src,
  poster,
  alt = '',
  caption,
  credit,
  variant = 'land',
  className = '',
}) {
  return (
    <figure className={`figure figure--${variant} ${className}`.trim()}>
      <div className="figure__media">
        {media === 'video' ? (
          <video
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={alt}
          />
        ) : (
          <img src={src} alt={alt} loading="lazy" />
        )}
      </div>
      {(caption || credit) && (
        <figcaption>
          <b>{caption}</b>
          {credit && <span>{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}
