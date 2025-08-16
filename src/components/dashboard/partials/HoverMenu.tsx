import { ChevronDown } from "lucide-react";

/* ---------------------- Nav Item with Hover Menu ---------------------- */
const HoverMenu = ({ label, columns }: { label: string; columns: { title: string; links: string[] }[] }) => {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm hover:text-primary" aria-haspopup="true">
        {label} <ChevronDown className="h-4 w-4" />
      </button>
      <div className="invisible absolute left-0 top-full z-40 mt-2 w-[680px] scale-95 opacity-0 transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100">
        <div className="grid grid-cols-3 gap-6 rounded-xl border bg-card p-6 shadow-xl">
          {columns.map((col) => (
            <div key={col.title} className="space-y-2">
              <p className="text-sm font-semibold">{col.title}</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-foreground">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HoverMenu;