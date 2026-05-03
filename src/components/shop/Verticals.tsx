import { Wrench, Paintbrush, Building2, FolderOpen, Shirt, ArrowRight } from "lucide-react";
import bay from "@/assets/bay-setup.jpg";
import paintRoom from "@/assets/paint-room.jpg";
import booth from "@/assets/paint-booth.jpg";
import jackets from "@/assets/job-jackets.jpg";
import merch from "@/assets/shop-merch.jpg";

const verticals = [
  { Icon: Wrench, name: "Equipment & Tools", subs: "Frame, lifts, air, hand, welding", count: "1,240", img: bay },
  { Icon: Paintbrush, name: "Paint Department", subs: "Guns, mixing, masking, sandpaper, prep", count: "1,680", img: paintRoom },
  { Icon: Building2, name: "Paint Booths", subs: "Shop booths, financing, powder coating", count: "42", img: booth },
  { Icon: FolderOpen, name: "Workflow & Forms", subs: "Job jackets, repair orders, markers", count: "320", img: jackets },
  { Icon: Shirt, name: "Marketing & Promo", subs: "Apparel, signage, mailers, decals", count: "560", img: merch },
];

export const Verticals = () => (
  <section className="bg-bone-50 py-20">
    <div className="container-shop">
      <p className="eyebrow text-shop-red-600">SHOP BY VERTICAL</p>
      <h2 className="mt-2 max-w-3xl font-display text-4xl font-bold uppercase text-asphalt-900 md:text-5xl">
        Built around how a body shop runs.
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {verticals.map(({ Icon, name, subs, count, img }) => (
          <a
            key={name}
            href="#"
            className="group flex flex-col overflow-hidden rounded-md border border-line-200 bg-white transition hover:border-shop-blue-700/60 hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden bg-paper-100">
              <img src={img} alt={name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <Icon className="h-6 w-6 text-asphalt-900" strokeWidth={1.5} />
              <h3 className="mt-3 font-display text-[22px] font-bold uppercase leading-tight text-asphalt-900">{name}</h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-steel-500">{subs}</p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="font-mono text-[12px] text-asphalt-900">{count} products</span>
                <ArrowRight className="h-4 w-4 text-shop-blue-700 transition group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
