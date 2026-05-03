import booth from "@/assets/paint-booth.jpg";
import champ from "@/assets/champ-frame.jpg";
import paintRoom from "@/assets/paint-room.jpg";
import jackets from "@/assets/job-jackets.jpg";

const articles = [
  { title: "Choosing a paint booth: a 5-step shop-owner checklist", meta: "8 MIN READ · APR 2026", img: booth },
  { title: "Why color-coded job jackets still beat dispatch software", meta: "6 MIN READ · MAR 2026", img: jackets },
  { title: "Behind the build: how CHAMP frame machines are tested", meta: "VIDEO · 5:42", img: champ },
  { title: "VOC-compliant refinish: what painters need to know in 2026", meta: "10 MIN READ · FEB 2026", img: paintRoom },
];

export const ShopTalk = () => (
  <section className="bg-paper-100 py-20">
    <div className="container-shop">
      <p className="eyebrow text-shop-red-600">SHOP TALK</p>
      <h2 className="mt-2 font-display text-4xl font-bold uppercase text-asphalt-900 md:text-5xl">
        How body shops are evolving.
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((a) => (
          <a key={a.title} href="#" className="group flex flex-col overflow-hidden rounded-md border border-line-200 bg-white">
            <div className="aspect-[4/3] overflow-hidden bg-paper-100">
              <img src={a.img} alt={a.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-steel-500">{a.meta}</div>
              <h3 className="mt-2 flex-1 font-display text-[18px] font-bold uppercase leading-tight text-asphalt-900">{a.title}</h3>
              <span className="mt-4 font-mono text-[12px] font-semibold uppercase tracking-wider text-shop-blue-700">Read →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
