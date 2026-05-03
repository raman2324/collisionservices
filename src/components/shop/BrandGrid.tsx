const brands = ["CHAMP", "3M", "SATA", "Iwata", "DeVilbiss", "PPG", "Sherwin-Williams", "BASF / Glasurit"];

export const BrandGrid = () => (
  <section className="bg-bone-50 py-20">
    <div className="container-shop">
      <p className="eyebrow text-shop-red-600">SHOP BY BRAND</p>
      <h2 className="mt-2 font-display text-4xl font-bold uppercase text-asphalt-900 md:text-5xl">
        The brands that work in real shops.
      </h2>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9">
        {brands.map((b) => (
          <a
            key={b}
            href="#"
            className="group flex aspect-[3/2] items-center justify-center rounded-md border border-line-200 bg-white px-3 transition hover:border-shop-blue-700 hover:bg-shop-blue-100"
          >
            <span className={`font-display text-[18px] font-bold uppercase tracking-tight transition ${b === "CHAMP" ? "text-shop-red-700" : "text-steel-500 group-hover:text-asphalt-900"}`}>
              {b}
            </span>
          </a>
        ))}
        <a href="#" className="flex aspect-[3/2] items-center justify-center rounded-md border border-dashed border-shop-blue-700 px-3 text-center text-[12px] font-semibold text-shop-blue-700 hover:bg-shop-blue-100">
          View all 40+ brands →
        </a>
      </div>
    </div>
  </section>
);
