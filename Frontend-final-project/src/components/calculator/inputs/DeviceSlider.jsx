export default function DeviceSlider({ label, icon: Icon, iconColor, value, min, max, onChange }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-transparent dark:border-slate-700 transition-colors">
      <div className="flex justify-between items-center mb-4">
        <label className="font-bold flex items-center gap-2 text-slate-700 dark:text-slate-200">
          <Icon className={iconColor} size={20} /> {label}
        </label>
        <span className="text-emerald-600 dark:text-emerald-400 font-black text-2xl transition-transform hover:scale-110">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none accent-emerald-500 cursor-pointer"
      />
    </div>
  );
}