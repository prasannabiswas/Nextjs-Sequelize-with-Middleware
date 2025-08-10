const Categories = () => {
  const items = [
    { title: "Circuit Breakers", img: "https://plus.unsplash.com/premium_photo-1661911021547-b0188f22d548?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Power Distribution", img: "https://plus.unsplash.com/premium_photo-1679672989156-9bdea1329761?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Modular Switchboard", img: "https://images.unsplash.com/photo-1467733238130-bb6846885316?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Starters & Switches", img: "https://orpatgroup.com/wp-content/uploads/2020/12/1-Silver-Series-Switches25A-Motor-Starter-SwitchOSMS-2107White-Pack-of-10.jpg" },
    { title: "Wires & Cables", img: "https://images.unsplash.com/photo-1687038520693-e528c10e450a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Automation & Security", img: "https://images.unsplash.com/photo-1723187024776-e3d4f6627e22?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Meters", img: "https://images.unsplash.com/photo-1684684383508-261dd0e8f467?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Accessories", img: "https://images.unsplash.com/photo-1642444616393-df04dcb1492c?q=80&w=1007&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Shop by Categories</h2>
        <a href="#" className="text-sm text-primary hover:underline">View all</a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="group overflow-hidden rounded-xl border bg-card">
            <div className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer">
              <img src={it.img} alt={it.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <p className="text-sm font-medium">{it.title}</p>
              <a href="#" className="text-sm text-primary hover:underline">Shop</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;