type Status = "in-stock" | "backorder" | "quote" | "discontinued";
const map: Record<Status, { dot: string; text: string; label: string }> = {
  "in-stock":   { dot: "bg-status-in-stock",   text: "text-status-in-stock",   label: "In stock · Ships today by 4PM CT" },
  backorder:    { dot: "bg-status-backorder",  text: "text-status-backorder",  label: "Backorder · Lead time 2–3 weeks" },
  quote:        { dot: "bg-status-quote",      text: "text-status-quote",      label: "Custom quote required" },
  discontinued: { dot: "bg-status-discontinued", text: "text-status-discontinued", label: "Discontinued · See replacement" },
};
export const StockChip = ({ status }: { status: Status }) => {
  const c = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold ${c.text}`}>
      <span className={`h-2 w-2 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
};
