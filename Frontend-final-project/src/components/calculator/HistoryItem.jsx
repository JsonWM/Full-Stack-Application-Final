import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

export default function HistoryItem({ item, onDelete }) {
  return (
    <div className="flex gap-2 items-center">
      <Link
        to={`/details/${item.id}`}
        className="flex-1 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex justify-between items-center group hover:border-emerald-300 transition-all active:scale-[0.98]"
      >
        <div>
          <p className="text-xs text-slate-400 font-medium uppercase">{item.date}</p>
          <p className="font-bold text-slate-700 dark:text-slate-200">
            {item.stateName} • <span className="text-emerald-600 dark:text-emerald-400">
              ${item.savings} USD
            </span>
          </p>
        </div>
        <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-sm">
          View Details →
        </span>
      </Link>

      <button
        onClick={() => onDelete(item.id)}
        className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all hover:scale-110 active:scale-90"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}