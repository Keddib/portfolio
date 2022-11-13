export default function Number({ children, className }) {
  return (
    <div className={`${className}`}>
      <span className="block mb-4 text--label text-secondary dark:text-secondary-dark uppercase">
        {children}
      </span>
    </div >
  );
}
