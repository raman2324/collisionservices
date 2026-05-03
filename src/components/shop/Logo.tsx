export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="/" className={`flex items-baseline gap-2 ${className}`} aria-label="Collision Services home">
    <div className="flex items-baseline">
      <span className="font-display text-[28px] font-bold leading-none text-shop-blue-700">
        Collision
      </span>
      <span className="relative ml-1 inline-block h-3 w-3 -translate-y-[2px]">
        <span className="absolute inset-0 rotate-12 bg-shop-red-600" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
      </span>
      <span className="ml-1 font-display text-[28px] font-bold leading-none text-asphalt-900">
        Services
      </span>
    </div>
    <span className="hidden font-mono text-[10px] uppercase tracking-wider text-steel-500 md:inline">
      by US Auto Supply
    </span>
  </a>
);
