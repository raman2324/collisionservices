import { Logo } from "./Logo";
import { Facebook, Twitter, Youtube, ShieldCheck } from "lucide-react";

const cols = [
  { title: "Shop By Vertical", links: ["Equipment & Tools", "Paint Department", "Paint Booths", "Workflow & Forms", "Marketing & Promo"] },
  { title: "Paint Booths", links: ["Shop", "Compare", "Powder Coating", "Financing", "Filters", "Maintenance", "Consultation"] },
  { title: "For Shops", links: ["NET-30 Application", "Multi-Location", "Find Your Rep", "Sample Requests", "Bulk Pricing", "Catalog Request"] },
  { title: "Customer Care", links: ["Contact", "Track Order", "Returns", "Shipping", "Privacy", "Terms", "ADA Compliance", "FAQs"] },
  { title: "Shop the Network", links: ["Collision Services", "Auto Body Toolmart", "IDEA", "Sid Savage", "US Auto Supply"] },
];

export const Footer = () => (
  <footer className="bg-asphalt-900 text-bone-50">
    <div className="container-shop py-16">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <div className="rounded-md bg-bone-50 p-3 inline-block">
            <Logo />
          </div>
          <address className="mt-5 not-italic text-[13px] leading-relaxed text-bone-50/75">
            Collision Services, by US Auto Supply<br />
            7110 Industrial Pkwy<br />
            Saint Louis, MO 63134<br />
            <a className="font-mono hover:text-shop-amber-500" href="tel:8003676575">800-367-6575</a><br />
            <span className="font-mono text-[11px]">Mon–Fri 7AM–6PM CT</span>
          </address>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Youtube].map((I, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-md border border-bone-50/15 hover:border-shop-amber-500 hover:text-shop-amber-500" aria-label="social">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title} className="md:col-span-2">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-shop-amber-500">{c.title}</div>
            <ul className="mt-4 space-y-2">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="text-[13px] text-bone-50/80 hover:text-bone-50">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="border-t border-bone-50/10">
      <div className="container-shop flex flex-col items-center justify-between gap-4 py-6 text-[12px] text-bone-50/65 md:flex-row">
        <div className="flex flex-wrap items-center gap-3 font-mono">
          {["VISA", "MC", "AMEX", "DISCOVER", "SEZZLE"].map((p) => (
            <span key={p} className="rounded border border-bone-50/15 px-2 py-1 text-[10px] font-semibold tracking-wider">{p}</span>
          ))}
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Sectigo SSL Secured</span>
        </div>
        <div className="font-mono">
          © {new Date().getFullYear()} Collision Services · A US Auto Supply Brand
        </div>
      </div>
    </div>
  </footer>
);
