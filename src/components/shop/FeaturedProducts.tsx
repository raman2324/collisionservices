import { useState } from "react";
import { ProductCard, type Product } from "./ProductCard";
import sg from "@/assets/p-spraygun.jpg";
import tape from "@/assets/p-tape.jpg";
import jacket from "@/assets/p-jacket.jpg";
import sand from "@/assets/p-sandpaper.jpg";
import frame from "@/assets/p-frame.jpg";
import markers from "@/assets/p-markers.jpg";
import sander from "@/assets/p-sander.jpg";
import wipes from "@/assets/p-wipes.jpg";

const products: Product[] = [
  { name: "SATA Jet 5500 B HVLP Spray Gun", brand: "SATA", sku: "SAT-5500-HVLP", price: "$789.00", bulk: "3+ from $759.00", status: "in-stock", badge: "QUICK SHIP", img: sg },
  { name: "3M Performance Masking Tape 18mm × 55m", brand: "3M", sku: "3M-2364-18", price: "$8.95", bulk: "24+ from $7.95 · 96+ from $6.95", status: "in-stock", img: tape },
  { name: "Color-Coded Repair Order Job Jackets · Box of 250", brand: "Collision Services", sku: "CS-RO-250", price: "$66.00", bulk: "5+ from $59.95 · 25+ from $54.95", status: "in-stock", img: jacket },
  { name: "Mirka Gold 6\" Sanding Discs · 320-grit Box", brand: "Mirka", sku: "MIR-G6-320", price: "$24.50", bulk: "10+ from $22.00", status: "in-stock", img: sand },
  { name: "CHAMP Frame Rack Anchoring System", brand: "CHAMP", sku: "CHM-FR-420", price: "Quote required", status: "quote", badge: "CHAMP", img: frame },
  { name: "AutoWriter Markers · Red · Pack of 12", brand: "AutoWriter", sku: "AW-MK-RED-12", price: "$18.75", bulk: "10+ from $16.95", status: "in-stock", img: markers },
  { name: "DeVilbiss DA Random Orbital Sander 6\"", brand: "DeVilbiss", sku: "DV-DA-6", price: "$142.00", status: "backorder", img: sander },
  { name: "Nitrile Prep Gloves & Tack Wipes Bundle", brand: "Collision Services", sku: "CS-PREP-BNDL", price: "$48.00", bulk: "6+ from $44.00", status: "in-stock", badge: "USA-MADE", img: wipes },
];

const tabs = ["All", "Paint Department", "Workflow Forms", "Equipment", "CHAMP", "On Sale", "Quick Ship"];

export const FeaturedProducts = () => {
  const [active, setActive] = useState("All");
  return (
    <section className="bg-bone-50 py-20">
      <div className="container-shop">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-shop-red-600">TOP REORDERS THIS WEEK</p>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase text-asphalt-900 md:text-5xl">
              What's moving off the shelf.
            </h2>
          </div>
          <a href="#" className="font-mono text-[12px] font-semibold uppercase tracking-wider text-shop-blue-700 hover:underline">View all featured →</a>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-md border px-4 py-2 text-[13px] font-semibold transition ${active === t ? "border-shop-blue-700 bg-shop-blue-700 text-white" : "border-line-200 bg-white text-asphalt-900 hover:border-shop-blue-700"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.sku} p={p} />)}
        </div>
      </div>
    </section>
  );
};
