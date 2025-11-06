export default function Section({
  id,
  title,
  className = "",
  children,
}: {
  id?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`max-w-5xl mx-auto ${className}`}>
      {title && <h2 className="text-2xl sm:text-3xl font-semibold mb-6">{title}</h2>}
      {children}
    </section>
  );
}
