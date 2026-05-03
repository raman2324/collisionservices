import bay from "@/assets/bay-setup.jpg";
import paintRoom from "@/assets/paint-room.jpg";
import merch from "@/assets/shop-merch.jpg";
import { ArrowRight } from "lucide-react";

const flows = [
  { eyebrow: "TASK · NEW BAY", title: "Setting up a new bay", dek: "Frame machine, lift, air compressor, hand tool kit, prep table.", kit: "FRAME · LIFT · AIR · HAND TOOLS · PREP", cta: "Start the setup", img: bay },
  { eyebrow: "TASK · PAINT ROOM", title: "Refilling the paint room", dek: "Masking, sandpaper, mix sticks, prep wipes, gun cleaning solvents.", kit: "MASKING · ABRASIVES · MIX · PREP · SOLVENTS", cta: "Build the refill order", img: paintRoom },
  { eyebrow: "TASK · BRAND", title: "Marketing my shop", dek: "Apparel, banners, mailers, decals, branded merch.", kit: "APPAREL · SIGNAGE · MAILERS · DECALS", cta: "Brand my shop", img: merch },
];

export const TaskFlows = () => (
  <section className="bg-bone-50 py-20">
    <div className="container-shop">
      <p className="eyebrow text-shop-red-600">TASK-BASED SHOPPING</p>
      <h2 className="mt-2 font-display text-4xl font-bold uppercase text-asphalt-900 md:text-5xl">
        We bundled the SKUs by the job.
      </h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {flows.map((f) => (
          <article key={f.title} className="group flex flex-col overflow-hidden rounded-md border border-line-200 bg-white">
            <div className="aspect-[16/9] overflow-hidden bg-paper-100">
              <img src={f.img} alt={f.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="eyebrow text-shop-blue-700">{f.eyebrow}</p>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase text-asphalt-900">{f.title}</h3>
              <p className="mt-2 text-[14px] text-steel-500">{f.dek}</p>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-wider text-asphalt-900">{f.kit}</div>
              <a href="#" className="mt-6 inline-flex items-center gap-2 self-start rounded-md bg-shop-blue-700 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-shop-blue-600">
                {f.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
