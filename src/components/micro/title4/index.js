
export default function Title4({ children, className }) {
  return (
    <div className={`${className}`}>
      <h4 className="mb-6 heading heading--4 font-FivoSansModern capitalize">
        {children}
      </h4>
    </div>
  );
}
