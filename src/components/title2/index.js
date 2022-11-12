export default function Title2({ children, className }) {
  return (
    <div className={`stagger-child js-reveal-child ${className}`}>
      <h2 className="mb-6 heading heading--2 font-FivoSansModern">{children}</h2>
    </div>);
}
