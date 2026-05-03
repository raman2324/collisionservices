import { Package, Award, Truck, Tag, ShieldCheck, PhoneCall } from "lucide-react";

const items = [
  { Icon: Package, label: "4,000+ PRODUCTS" },
  { Icon: Award, label: "CHAMP MADE-IN-USA LINE" },
  { Icon: Truck, label: "SHIPS TODAY BY 4PM CT" },
  { Icon: Tag, label: "NET-30 FOR SHOP ACCOUNTS" },
  { Icon: ShieldCheck, label: "30-DAY RETURN" },
  { Icon: PhoneCall, label: "800-367-6575" },
];

export const TrustStrip = () => (
  <section className="border-y border-line-200 bg-paper-100">
    <div className="container-shop grid grid-cols-2 divide-x divide-line-200 py-4 md:grid-cols-3 lg:grid-cols-6">
      {items.map(({ Icon, label }) => (
        <div key={label} className="flex items-center justify-center gap-2 px-3 py-2">
          <Icon className="h-4 w-4 shrink-0 text-asphalt-900" strokeWidth={1.75} />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-asphalt-900">{label}</span>
        </div>
      ))}
    </div>
  </section>
);
