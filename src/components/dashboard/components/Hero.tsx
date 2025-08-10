const Hero = () => {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-10 md:grid-cols-2 md:py-14">
        <div className="space-y-4">
          <span className="inline-block rounded-full border px-3 py-1 text-xs">Wholesale Prices</span>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">For all your varied <span className="text-primary">safety</span> needs</h1>
          <p className="text-muted-foreground">Shop circuit breakers, distribution boxes, modular switches, wires & more — delivered across India.</p>
          <div className="flex gap-3">
            <a href="#categories" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Shop by Categories</a>
            <a href="#brands" className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">Browse Brands</a>
          </div>
        </div>
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/30" />
          <img
            src="https://plus.unsplash.com/premium_photo-1695185954894-e9382c6f4da8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Electrical supplies"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;