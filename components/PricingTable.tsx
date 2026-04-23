import type { PriceTier } from "@/lib/products";

export function PricingTable({ tiers }: { tiers: PriceTier[] }) {
  if (!tiers.length) return null;
  const best = tiers.reduce((a, b) => (a.unit < b.unit ? a : b));
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-4 py-3 font-semibold">Quantity</th>
            <th className="px-4 py-3 font-semibold">Price per piece</th>
            <th className="px-4 py-3 font-semibold">Total</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {tiers.map((t) => (
            <tr key={t.qty} className={t === best ? "bg-ink-50" : ""}>
              <td className="px-4 py-3 font-medium text-slate-900">
                {t.qty.toLocaleString()}
                {t === best && (
                  <span className="ml-2 rounded-full bg-accent-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    Best value
                  </span>
                )}
              </td>
              <td className="px-4 py-3 text-slate-700">${t.unit.toFixed(2)}</td>
              <td className="px-4 py-3 text-slate-700">${(t.unit * t.qty).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
