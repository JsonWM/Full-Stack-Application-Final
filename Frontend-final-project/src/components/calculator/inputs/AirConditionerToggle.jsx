import { Wind } from "lucide-react";

export default function AirConditionerToggle({ checked, btu, onChange, onBtuChange }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 transition-colors">
        <div className="flex items-center gap-3">
          <Wind className="text-blue-600 dark:text-blue-400" />
          <div>
            <p className="font-bold text-blue-900 dark:text-blue-200">Air Conditioning</p>
            <p className="text-xs text-blue-700 dark:text-blue-400 italic font-medium tracking-tight">
              Capacity: {btu.toLocaleString()} BTU
            </p>
          </div>
        </div>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-6 h-6 accent-blue-600 cursor-pointer"
        />
      </div>

      {/* Capacity Selector */}
      {checked && (
        <div className="animate-in slide-in-from-top-2 duration-300 p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-slate-700 shadow-sm">
          <label className="block text-xs font-black text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">
            Select unit capacity:
          </label>
          <select
            value={btu}
            onChange={(e) => onBtuChange(parseInt(e.target.value))}
            className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer"
          >
            <option value="9000">9,000 BTU - Small Bedroom</option>
            <option value="10000">10,000 BTU - Study / Office</option>
            <option value="12000">12,000 BTU (1 Ton) - Standard Bedroom</option>
            <option value="18000">18,000 BTU (1.5 Ton) - Living Room</option>
            <option value="24000">24,000 BTU (2 Ton) - Large Area</option>
            <option value="36000">36,000 BTU (3 Ton) - Commercial Space</option>
          </select>
        </div>
      )}
    </div>
  );
}