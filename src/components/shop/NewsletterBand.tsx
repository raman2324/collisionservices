export const NewsletterBand = () => (
  <section className="relative bg-asphalt-800 text-bone-50">
    <div className="container-shop grid gap-10 py-20 md:grid-cols-2 md:items-center">
      <div>
        <p className="eyebrow text-shop-amber-500">SHOP TIPS</p>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] md:text-5xl">
          New tools, paint trends, and process tips — monthly, no spam.
        </h2>
        <p className="mt-4 text-[15px] text-bone-50/80">
          Pick what you want to hear about. Painters get refinish updates. Owners get equipment, financing, and bay-setup deep dives.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-shop-amber-100 px-3 py-2 font-mono text-[12px] font-bold uppercase tracking-wider text-shop-red-700">
          $15 OFF your first order of $199+
        </div>
      </div>
      <form className="rounded-md border border-bone-50/10 bg-asphalt-900 p-6">
        <label className="font-mono text-[11px] uppercase tracking-wider text-bone-50/70">Email address</label>
        <input type="email" placeholder="painter@yourshop.com" className="mt-1 h-11 w-full rounded-md border border-bone-50/15 bg-asphalt-800 px-3 text-[14px] text-bone-50 outline-none focus:border-shop-amber-500" />
        <div className="mt-4 font-mono text-[11px] uppercase tracking-wider text-bone-50/70">I work in the shop as</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Owner", "Manager", "Painter", "Parts Coordinator"].map((r) => (
            <button key={r} type="button" className="rounded-md border border-bone-50/15 px-3 py-1.5 text-[12px] hover:border-shop-amber-500 hover:bg-bone-50/5">{r}</button>
          ))}
        </div>
        <button className="mt-6 w-full rounded-md bg-shop-blue-700 px-4 py-3 text-[14px] font-semibold text-white hover:bg-shop-blue-600">
          Subscribe & claim $15 off
        </button>
        <p className="mt-3 text-[11px] text-steel-300">We don't share your email. Unsubscribe anytime.</p>
      </form>
    </div>
  </section>
);
