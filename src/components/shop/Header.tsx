import { PhoneCall, Search, ShoppingCart, Truck, User, FolderOpen, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { label: "Equipment & Tools", subs: ["Frame & Alignment", "Lifts & Jacks", "Air Tools", "Hand Tools", "Welding", "Sanders & Polishers", "Measuring", "CHAMP"] },
  { label: "Paint Department", subs: ["Spray Guns", "Mixing & Tinting", "Sandpaper & Abrasives", "Masking", "Prep & Cleaning", "Booth Filters", "Solvents", "Refinish"] },
  { label: "Paint Booths", subs: ["Shop Booths", "Compare Booths", "Booth Financing", "Powder Coating", "Booth Filters", "Booth Maintenance", "Schedule a Consultation"] },
  { label: "Workflow & Forms", subs: ["Job Jackets", "Repair Order Forms", "Color-Coded Filing", "AutoWriter Markers", "Window Markers", "Tags & Labels"] },
  { label: "Marketing & Promo", subs: ["Shop Apparel", "Signage", "Customer Mailers", "Window Decals", "Branded Promos"] },
  { label: "Shop By Brand", subs: ["CHAMP", "3M", "SATA", "Iwata", "DeVilbiss", "Sherwin-Williams", "PPG", "BASF", "Sid Savage", "IDEA", "Auto Body Toolmart"] },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-line-200 bg-bone-50">
      {/* Utility row */}
      <div className="bg-asphalt-900 text-bone-50">
        <div className="container-shop flex h-9 items-center justify-between text-[12px]">
          <a href="tel:8003676575" className="flex items-center gap-2 font-mono hover:text-shop-amber-500">
            <PhoneCall className="h-3.5 w-3.5" />
            <span>800-367-6575 · Mon–Fri 7AM–6PM CT</span>
          </a>
          <div className="hidden items-center gap-5 font-mono uppercase tracking-wider md:flex">
            <button className="flex items-center gap-1 hover:text-shop-amber-500">
              Shop the Network <ChevronDown className="h-3 w-3" />
            </button>
            <a href="/track" className="flex items-center gap-1 hover:text-shop-amber-500"><Truck className="h-3 w-3" /> Track Order</a>
            <a href="/sign-in" className="flex items-center gap-1 hover:text-shop-amber-500"><User className="h-3 w-3" /> Sign In</a>
            <a href="/shop-accounts" className="text-shop-amber-500">Shop Account</a>
          </div>
        </div>
      </div>

      {/* Main row */}
      <div className="container-shop flex h-20 items-center gap-6">
        <Logo />
        <div className="relative mx-auto hidden w-full max-w-[640px] md:block">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-steel-500" />
          <input
            type="search"
            placeholder="Search 4,000+ products, SKUs, or paint codes — try '3M masking tape 18mm'"
            className="h-12 w-full rounded-md border border-line-200 bg-white pl-11 pr-32 text-[14px] outline-none ring-shop-blue-700/20 focus:border-shop-blue-700 focus:ring-4"
            aria-label="Site search"
          />
          <button className="absolute right-1.5 top-1.5 h-9 rounded-md bg-shop-blue-700 px-4 text-[13px] font-semibold text-white hover:bg-shop-blue-600">
            Search
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden items-center gap-2 text-[13px] font-medium text-asphalt-900 hover:text-shop-blue-700 lg:flex">
            <FolderOpen className="h-4 w-4" /> Quick Order
          </button>
          <button className="hidden items-center gap-1 text-[13px] font-medium text-asphalt-900 hover:text-shop-blue-700 lg:flex">
            My Shop <ChevronDown className="h-3 w-3" />
          </button>
          <a href="/cart" className="flex items-center gap-2 rounded-md border border-line-200 bg-white px-3 py-2 text-[13px] font-semibold text-asphalt-900 hover:border-shop-blue-700">
            <ShoppingCart className="h-4 w-4" />
            <span className="font-mono">Cart 0 · $0.00</span>
          </a>
        </div>
      </div>

      {/* Megamenu nav */}
      <nav className="hidden border-t border-line-200 bg-bone-50 md:block" aria-label="Primary">
        <div className="container-shop flex h-12 items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <button className="flex h-12 items-center gap-1 px-4 text-[13px] font-semibold uppercase tracking-wide text-asphalt-900 hover:text-shop-blue-700">
                {item.label}
                <ChevronDown className="h-3 w-3" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-[520px] border border-line-200 bg-white p-6 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {item.subs.map((s) => (
                    <a key={s} href="#" className="text-[13px] text-asphalt-900 hover:text-shop-blue-700">{s}</a>
                  ))}
                </div>
                <div className="mt-4 border-t border-line-200 pt-3">
                  <a href="#" className="font-mono text-[11px] font-semibold uppercase tracking-wider text-shop-blue-700">View all in {item.label} →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};
