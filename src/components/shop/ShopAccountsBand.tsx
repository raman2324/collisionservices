import owner from "@/assets/shop-owner.jpg";
import { ArrowRight } from "lucide-react";

const chips = [
  "Apply for NET-30",
  "Multi-location pricing",
  "Find your rep",
  "Booth financing",
  "Request samples",
  "Request a printed catalog",
];

export const ShopAccountsBand = () => (
  <section className="bg-shop-blue-900 text-bone-50">
    <div className="container-shop grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-24">
      <div className="overflow-hidden rounded-md">
        <img src={owner} alt="Auto body shop owner at the parts counter" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div>
        <p className="eyebrow text-shop-amber-500">FOR SHOP ACCOUNTS</p>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] md:text-5xl">
          Built for the way shops actually buy.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-bone-50/85">
          NET-30 terms for verified shops. Multi-location pricing for MSO and dealer groups. A dedicated regional sales rep — named, with a phone number that's answered. Sample programs for paint, masking, and abrasives before you commit to a case.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-bone-50/85">
          Paint booth financing from 0% APR through our partners. Printed catalog, free, mailed to your shop.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map((c) => (
            <a key={c} href="#" className="inline-flex items-center gap-1 rounded-md bg-paper-100 px-3 py-2 text-[13px] font-semibold text-asphalt-900 hover:bg-bone-50">
              {c} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 border-t border-bone-50/15 pt-6 font-mono text-[11px] uppercase tracking-wider text-bone-50/80 sm:grid-cols-4">
          <div><div className="text-shop-amber-500">24 HRS</div>Avg quote turnaround</div>
          <div><div className="text-shop-amber-500">NET-30</div>For verified shops</div>
          <div><div className="text-shop-amber-500">50 STATES</div>Dedicated rep</div>
          <div><div className="text-shop-amber-500">0% APR</div>Booth financing</div>
        </div>
      </div>
    </div>
  </section>
);
