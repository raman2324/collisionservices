import { Star, BadgeCheck, Quote } from "lucide-react";

const ts = [
  {
    quote: "Switched our paint room over to the bundled refill program last year. Mix sticks, masking, sandpaper, prep wipes — one PO, NET-30, no chasing. Painters stopped running out mid-job.",
    name: "Mike R.", shop: "Liberty Collision · Mesa, AZ",
    project: "Used in: Paint room refill — 3M masking, Mirka abrasives, monthly auto-PO",
  },
  {
    quote: "The CHAMP frame machine has been on our floor since 2019. Pulls square, takes a beating. Our regional rep actually called us back same-day when we had a parts question.",
    name: "Dani P.", shop: "Foothill Auto Body · Boulder, CO",
    project: "Used in: New bay setup — CHAMP frame rack, $42K project",
  },
  {
    quote: "We've ordered the same color-coded job jackets from Collision Services since the front office got computers. Beats every dispatch app for shop floor visibility.",
    name: "Tom L.", shop: "Lakeside Collision · Erie, PA",
    project: "Used in: Front office workflow — color-coded RO jackets, 36-yr customer",
  },
];

export const Testimonials = () => (
  <section className="bg-bone-50 py-20">
    <div className="container-shop">
      <p className="eyebrow text-shop-red-600">FROM SHOPS WE SUPPLY</p>
      <h2 className="mt-2 font-display text-4xl font-bold uppercase text-asphalt-900 md:text-5xl">
        Verified shop owners. Real projects.
      </h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {ts.map((t) => (
          <article key={t.name} className="relative rounded-md border border-line-200 bg-paper-100 p-6">
            <Quote className="absolute right-4 top-4 h-8 w-8 text-shop-red-600/30" />
            <div className="flex gap-1 text-shop-amber-500">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-4 italic text-asphalt-900 leading-relaxed">"{t.quote}"</p>
            <div className="mt-5 border-t border-line-200 pt-4">
              <div className="text-[14px] font-semibold text-asphalt-900">{t.name}</div>
              <div className="font-mono text-[11px] text-steel-500">{t.shop}</div>
              <div className="mt-2 font-mono text-[11px] text-steel-500">{t.project}</div>
              <div className="mt-3 inline-flex items-center gap-1 rounded-md bg-shop-amber-100 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-shop-red-700">
                <BadgeCheck className="h-3 w-3" /> Verified Buyer
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
