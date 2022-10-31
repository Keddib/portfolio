export default function Number({ children }) {
  return (
    <div className="stagger-child js-reveal-child">
      <span className="block mb-4 text--label text-secondary dark:text-secondary-dark uppercase">
        {children}
      </span>
    </div >
  );
}
