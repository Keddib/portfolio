export default function Title2({ children, className }) {
  return (
    <div className={`capitalize ${className}`}>
      <h2 className="mb-6 heading heading--2 font-FivoSansModern">{children}</h2>
    </div>);
}
