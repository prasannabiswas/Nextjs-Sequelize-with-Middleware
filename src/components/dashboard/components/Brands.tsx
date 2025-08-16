const Brands = () => {
  const brands = ["Siemens", "Honeywell", "Anchor", "ABB", "Schneider", "Havells", "L&T", "Legrand"];
  return (
    <section id="brands" className="border-t bg-muted/10">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="mb-4 text-xl font-semibold">Popular Brands</h2>
        <div className="mb-6 h-px w-full bg-border" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {brands.map((b) => (
            <div key={b} className="flex h-16 items-center justify-center rounded-lg border bg-card p-3 text-sm text-muted-foreground">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;