export default function PullQuote({ children, cite, className = '' }) {
  return (
    <blockquote className={`pull ${className}`.trim()}>
      {children}
      {cite && <cite>{cite}</cite>}
    </blockquote>
  );
}
