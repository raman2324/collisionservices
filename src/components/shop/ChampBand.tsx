import champ from "@/assets/champ-frame.jpg";
import { ArrowRight } from "lucide-react";

export const ChampBand = () => (
  <section className="bg-shop-red-700 text-bone-50">
    <div className="container-shop grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-24">
      <div className="overflow-hidden rounded-md">
        <img src={champ} alt="CHAMP frame machine on a body shop floor" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div>
        <p className="eyebrow text-shop-amber-500">CHAMP® · MADE IN AMERICA</p>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] md:text-5xl">
          Our line. Built right.<br />Made for the shop floor.
        </h2>
        <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-bone-50/90">
          CHAMP is engineered in-house, tested in real shops, and only sold through Collision Services and the US Auto Supply network. Frame machines, benches, and rack systems built to take a beating and keep pulling square.
        </p>
        <div className="mt-6 space-y-1 font-mono text-[12px] uppercase tracking-wider text-bone-50/80">
          <div>DESIGNED IN USA</div>
          <div>BUILT FOR BODY SHOPS</div>
          <div>2-YEAR WORKMANSHIP WARRANTY</div>
        </div>
        <a href="/champ" className="mt-8 inline-flex items-center gap-2 rounded-md bg-shop-blue-700 px-6 py-3 text-[14px] font-semibold text-white hover:bg-shop-blue-600">
          Shop CHAMP <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);
