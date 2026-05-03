import jackets from "@/assets/job-jackets.jpg";
import { ArrowRight, RefreshCw } from "lucide-react";

const recent = [
  { name: "Color-coded job jackets · Box 250", sku: "CS-RO-250", price: "$66.00" },
  { name: "AutoWriter markers · Red · 12-pk", sku: "AW-MK-RED-12", price: "$18.75" },
  { name: "Repair order forms · 4-part NCR · 500", sku: "CS-RO-4P-500", price: "$112.00" },
];

export const WorkflowBand = () => (
  <section className="bg-shop-amber-100">
    <div className="container-shop grid gap-10 py-20 md:grid-cols-2 md:items-center">
      <div className="overflow-hidden rounded-md">
        <img src={jackets} alt="Color-coded job jackets and repair order forms on a shop counter" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div>
        <p className="eyebrow text-shop-red-600">WORKFLOW & SHOP-FLOOR FORMS</p>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] text-asphalt-900 md:text-5xl">
          The forms your shop has been ordering since 1998.
        </h2>
        <p className="mt-4 max-w-prose text-[16px] text-asphalt-900/85">
          Color-coded paper, repair-order jackets, and the markers that don't smudge under fluorescent shop light.
        </p>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {["Color-coded job jackets", "Repair order forms", "AutoWriter Markers", "Window & paint markers"].map((c) => (
            <a key={c} href="#" className="flex items-center justify-between rounded-md border border-asphalt-900/10 bg-paper-100 px-4 py-3 text-[13px] font-semibold text-asphalt-900 hover:border-shop-blue-700">
              {c} <ArrowRight className="h-4 w-4 text-shop-blue-700" />
            </a>
          ))}
        </div>

        <div className="mt-8 rounded-md border border-asphalt-900/10 bg-bone-50 p-5">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-shop-blue-700">
            <RefreshCw className="h-3.5 w-3.5" /> Reordered last 30 days at your shop
          </div>
          <ul className="mt-3 divide-y divide-line-200">
            {recent.map((r) => (
              <li key={r.sku} className="flex items-center justify-between gap-4 py-3">
                <div>
                  <div className="text-[13px] font-semibold text-asphalt-900">{r.name}</div>
                  <div className="font-mono text-[11px] text-steel-500">Item # {r.sku} · {r.price}</div>
                </div>
                <button className="rounded-md bg-shop-blue-700 px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-shop-blue-600">Add 1 box</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
