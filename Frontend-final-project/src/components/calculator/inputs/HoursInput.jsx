import { Clock } from "lucide-react";

export default function HoursInput({ value, onChange }) {
  return (
    <div className="flex flex-col items-center bg-emerald-50/50 dark:bg-emerald-900/20 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-800 transition-colors">
      <label className="text-sm font-medium text-emerald-800 dark:text-emerald-400 mb-2 flex items-center gap-2 text-center">
        <Clock size={16} /> Average daily usage hours
      </label>
      <input
        type="number"
        min="1"
        max="24"
        className="w-24 p-3 border-2 border-emerald-200 dark:border-emerald-700 rounded-xl text-center font-black text-xl bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 focus:ring-4 focus:ring-emerald-100 dark:focus:ring-emerald-900/30 outline-none transition-all"
        value={value}
        onChange={(e) => {
          let val = parseInt(e.target.value);
          if (val > 24) val = 24;
          if (val < 1 || isNaN(val)) val = 1;
          onChange(val);
        }}
      />
    </div>
  );
}