import { MapPin } from "lucide-react";

export default function LocationStep({ state, setState, onNext, rates }) {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-center">
                <MapPin className="text-emerald-500" size={40} />
            </div>
            <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white">
                Select your location
            </h2>
            <select
                required
                className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 
                bg-white dark:bg-slate-800 
                text-slate-700 dark:text-slate-100 
                focus:ring-2 focus:ring-emerald-500 outline-none transition-colors"
                value={state}
                onChange={(e) => setState(e.target.value)}
            >
                <option value="" className="dark:text-slate-400">Where are you located?</option>
                {Object.keys(rates).map(id => (
                    <option key={id} value={id} className="dark:bg-slate-800 dark:text-white">
                        {rates[id].name}
                    </option>
                ))}
            </select>
            <button
                type="button"
                onClick={onNext}
                disabled={!state}
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold disabled:opacity-50 hover:bg-emerald-700 transition-colors"
            >
                Next
            </button>
        </div>
    );
}