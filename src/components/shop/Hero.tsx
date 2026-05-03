import { Search, Wrench, Paintbrush, Building2, FolderOpen, Shirt, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-shop.jpg";

const tasks = [
  { Icon: Wrench, title: "Set up a new bay", sub: "Lifts, frame machines, hand tools, air." },
  { Icon: Paintbrush, title: "Refill the paint room", sub: "Mix sticks, masking, sandpaper, prep wipes." },
  { Icon: Building2, title: "Compare paint booths", sub: "Specs, financing, install." },
  { Icon: FolderOpen, title: "Restock job jackets & forms", sub: "Color-coded paper, repair orders, markers." },
  { Icon: Shirt, title: "Brand my shop", sub: "Apparel, signage, promo merch." },
];

export const Hero = () => (
  <section className="relative overflow-hidden border-b border-line-200">
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-bone-50 via-bone-50/85 to-transparent" />
    </div>
    <div className="container-shop relative grid gap-10 py-16 md:grid-cols-12 md:py-24">
      {/* Left */}
      <div className="md:col-span-7">
        <p className="eyebrow text-shop-red-600">B2B SHOP SUPPLY · SINCE 1985</p>
        <h1 className="mt-4 font-display text-[44px] font-bold uppercase leading-[0.95] text-asphalt-900 md:text-[68px]">
          Everything your shop needs,<br />in one catalog.
        </h1>
        <p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-asphalt-900/90">
          Equipment, paint booths, paint department, shop-floor workflow paper, and your branded merchandise. Built for the way auto body shops actually run.
        </p>
        <div className="relative mt-7 max-w-[600px]">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-steel-500" />
          <input
            type="search"
            placeholder="Search products, SKUs, or paint codes…"
            className="h-14 w-full rounded-md border border-line-200 bg-white pl-12 pr-40 text-[15px] outline-none ring-shop-blue-700/20 focus:border-shop-blue-700 focus:ring-4"
            aria-label="Hero search"
          />
          <button className="absolute right-2 top-2 h-10 rounded-md bg-shop-blue-700 px-5 text-[14px] font-semibold text-white hover:bg-shop-blue-600">
            Find products
          </button>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Shop By Brand", "Browse the catalog", "Request a free catalog"].map((c) => (
            <a key={c} href="#" className="inline-flex items-center gap-1 rounded-md border border-shop-blue-700 px-4 py-2 text-[13px] font-semibold text-shop-blue-700 hover:bg-shop-blue-100">
              {c} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>

      {/* Right: Task router */}
      <aside className="md:col-span-5">
        <div className="rounded-md border border-line-200 bg-paper-100 p-6 shadow-sm">
          <p className="eyebrow text-shop-blue-700">FOR YOUR SHOP TODAY</p>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase text-asphalt-900">
            What are you here for?
          </h2>
          <ul className="mt-5 divide-y divide-line-200 border-t border-line-200">
            {tasks.map(({ Icon, title, sub }) => (
              <li key={title}>
                <a href="#" className="group flex items-center gap-4 py-3.5 transition hover:bg-shop-blue-100">
                  <Icon className="h-6 w-6 shrink-0 text-asphalt-900" strokeWidth={1.75} />
                  <div className="flex-1">
                    <div className="font-semibold text-[14px] text-asphalt-900">{title}</div>
                    <div className="text-[12px] text-steel-500">{sub}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-shop-blue-700 transition group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  </section>
);
