import { Phone, Truck, User, Wallet } from "lucide-react";

const FeaturesStrip = () => {
  return (
    <section className="border-y bg-muted/20">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-4 sm:grid-cols-2 lg:grid-cols-4">
        <Feature icon={<Truck className="h-5 w-5" />} title="Free Delivery" text="Across India" />
        <Feature icon={<Wallet className="h-5 w-5" />} title="Cash on Delivery" text="Available" />
        <Feature icon={<Phone className="h-5 w-5" />} title="Support" text="+91 7439 448 917" />
        <Feature icon={<User className="h-5 w-5" />} title="B2B Friendly" text="GST invoices" />
      </div>
    </section>
  );
}
function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3">
      <div className="rounded-lg border bg-background p-2">{icon}</div>
      <div>
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-xs text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

export default FeaturesStrip;