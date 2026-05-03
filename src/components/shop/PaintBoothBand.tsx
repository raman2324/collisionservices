import booth from "@/assets/paint-booth.jpg";
import { ArrowRight } from "lucide-react";

export const PaintBoothBand = () => (
  <section className="relative overflow-hidden border-y border-line-200">
    <div className="absolute inset-0">
      <img src={booth} alt="" className="h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-bone-50/92" />
    </div>
    <div className="container-shop relative grid gap-10 py-20 md:grid-cols-12 md:py-24">
      <div className="md:col-span-7">
        <p className="eyebrow text-shop-red-600">PAINT BOOTHS</p>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] text-asphalt-900 md:text-5xl">
          From the booth itself to financing,<br />install, and powder coating.
        </h2>
        <p className="mt-4 text-[18px] text-steel-500">Six-figure decisions. Made simple.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Compare booths", "Booth financing calculator", "Schedule a consultation", "Powder coating booths"].map((c) => (
            <a key={c} href="#" className="inline-flex items-center gap-1 rounded-md border border-shop-blue-700 bg-white/60 px-4 py-2 text-[13px] font-semibold text-shop-blue-700 hover:bg-shop-blue-100">
              {c} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>

      <aside className="md:col-span-5">
        <div className="rounded-md border border-line-200 bg-paper-100 p-6">
          <p className="eyebrow text-shop-blue-700">BOOTH SIZE RECOMMENDER</p>
          <h3 className="mt-2 font-display text-2xl font-bold uppercase text-asphalt-900">What size booth do you need?</h3>
          <div className="mt-5 space-y-5">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-steel-500">Step 1 · Vehicle types</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Sedan", "SUV", "Truck", "Heavy"].map((v) => (
                  <button key={v} className="rounded-md border border-line-200 bg-white px-3 py-1.5 text-[13px] hover:border-shop-blue-700">{v}</button>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-steel-500">Step 2 · Cars per week</div>
              <input type="range" min={1} max={50} defaultValue={15} className="mt-2 w-full accent-shop-blue-700" aria-label="Cars per week" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-steel-500">Step 3 · Spray frequency</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Light", "Steady", "Heavy"].map((v) => (
                  <button key={v} className="rounded-md border border-line-200 bg-white px-3 py-1.5 text-[13px] hover:border-shop-blue-700">{v}</button>
                ))}
              </div>
            </div>
            <div className="rounded-md border border-line-200 bg-white p-4">
              <div className="font-mono text-[11px] uppercase tracking-wider text-steel-500">Recommended booth</div>
              <div className="mt-1 font-display text-xl font-bold uppercase text-asphalt-900">CHAMP DD-26 Downdraft</div>
              <div className="mt-1 font-mono text-[12px] text-asphalt-900">26'×14'×9' · 18,000 CFM · 230V</div>
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-shop-blue-700 px-4 py-3 text-[14px] font-semibold text-white hover:bg-shop-blue-600">
              Get a custom quote <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </div>
  </section>
);
