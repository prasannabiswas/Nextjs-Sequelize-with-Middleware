import { Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full border-b bg-muted/30 text-muted-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> +91 7439 484 979</span>
          <span className="hidden sm:inline">GSTIN available • Free Delivery Across India • COD</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-foreground">Contact</a>
          <a href="#" className="hover:text-foreground">FAQs</a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;