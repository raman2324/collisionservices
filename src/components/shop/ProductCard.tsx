import { Plus, Minus, FolderPlus } from "lucide-react";
import { useState } from "react";
import { StockChip } from "./StockChip";

export type Product = {
  name: string;
  brand: string;
  sku: string;
  price: string;
  bulk?: string;
  status: "in-stock" | "backorder" | "quote" | "discontinued";
  badge?: "CHAMP" | "QUICK SHIP" | "USA-MADE";
  img: string;
};

export const ProductCard = ({ p }: { p: Product }) => {
  const [qty, setQty] = useState(1);
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-line-200 bg-white transition hover:shadow-md">
      <div className="relative aspect-square bg-paper-100">
        <img src={p.img} alt={`${p.brand} ${p.name}`} loading="lazy" className="h-full w-full object-cover" />
        {p.badge && (
          <span className={`absolute left-3 top-3 rounded-md px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${p.badge === "CHAMP" ? "bg-shop-amber-100 text-shop-red-700" : p.badge === "QUICK SHIP" ? "bg-shop-amber-100 text-shop-amber-600" : "bg-asphalt-900 text-bone-50"}`}>
            {p.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="font-mono text-[11px] uppercase tracking-wider text-steel-500">{p.brand}</div>
        <h3 className="mt-1 font-display text-[16px] font-semibold uppercase leading-tight text-asphalt-900 line-clamp-2">{p.name}</h3>
        <div className="mt-1 font-mono text-[11px] text-steel-500">Item # {p.sku}</div>
        <div className="mt-3 font-mono text-[15px] font-semibold text-asphalt-900">{p.price}</div>
        {p.bulk && <div className="font-mono text-[11px] text-steel-500">{p.bulk}</div>}
        <div className="mt-3"><StockChip status={p.status} /></div>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex h-9 items-center rounded-md border border-line-200">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-2 text-asphalt-900 hover:bg-paper-100" aria-label="Decrease"><Minus className="h-3.5 w-3.5" /></button>
            <span className="w-8 text-center font-mono text-[13px]">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="px-2 text-asphalt-900 hover:bg-paper-100" aria-label="Increase"><Plus className="h-3.5 w-3.5" /></button>
          </div>
          <button className="flex-1 rounded-md bg-shop-blue-700 px-3 py-2 text-[13px] font-semibold text-white hover:bg-shop-blue-600">
            Add to cart
          </button>
        </div>
        <button className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md border border-shop-blue-700 px-3 py-1.5 text-[12px] font-semibold text-shop-blue-700 hover:bg-shop-blue-100">
          <FolderPlus className="h-3.5 w-3.5" /> Save to shop list
        </button>
      </div>
    </article>
  );
};
