
export default function Title4({ children, className }) {
  return (
    <div className={`capitalize ${className}`}>
      <h4 className="mb-6 heading heading--4 font-FivoSansModern">
        {children}
      </h4>
    </div>
  );
}
