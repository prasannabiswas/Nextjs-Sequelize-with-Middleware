import HoverMenu from "../partials/HoverMenu";

const MainNav = () => {
  return (
    <div className="w-full border-b bg-card/50">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex items-center gap-2 py-2">
          <HoverMenu
            label="Electrical Products"
            columns={[
              { title: "Circuit Breakers", links: ["MCB", "RCCB", "Isolator Switches", "MCCB", "MCB Boxes"] },
              { title: "Power Distribution", links: ["Bus Bar Boxes", "TPN/SPN DB", "Industrial Plug & Socket", "Enclosures"] },
              { title: "Modular Switchboard", links: ["Switches", "Sockets", "Fan Regulators", "Cover Plates", "Mounting Boxes"] },
            ]}
          />
          <HoverMenu
            label="Price Lists"
            columns={[
              { title: "Top Brands", links: ["Anchor", "Legrand", "Siemens", "Schneider"] },
              { title: "More", links: ["L&T", "HPL", "V-Guard", "Honeywell"] },
              { title: "Resources", links: ["Catalogs", "Datasheets", "Guides"] },
            ]}
          />
          <a href="#track" className="rounded-md px-3 py-2 text-sm hover:text-primary">Track Order</a>
          <a href="#contact" className="rounded-md px-3 py-2 text-sm hover:text-primary">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default MainNav;