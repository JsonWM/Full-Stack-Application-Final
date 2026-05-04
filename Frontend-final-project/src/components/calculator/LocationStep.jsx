import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

export default function LocationStep({ state, setState, onNext, rates }) {


    const [dbRates, setDbRates] = useState({
        ny: { name: "New York", kwhCost: 0.23 },
        ma: { name: "Massachusetts", kwhCost: 0.28 },
        ct: { name: "Connecticut", kwhCost: 0.29 }
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/energy/rates`)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                setDbRates(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching rates:", error);
                setLoading(false);
            });
    }, []);

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
                <option value="" className="dark:text-slate-400">{loading ? "Loading states..." : "Choose your state"}</option>
                {Array.isArray(dbRates) ? (
                    dbRates.map((rate) => (
                        <option key={rate.state_code} value={rate.state_code} className="dark:bg-slate-800 dark:text-white">{rate.name}</option>
                    ))
                ) : (
                    Object.keys(dbRates).map(id => (
                        <option key={id} value={id} className="dark:bg-slate-800 dark:text-white">{dbRates[id].name}</option>
                    ))
                )}
            </select>
            <button
                type="button"
                onClick={onNext}
                disabled={!state || loading}
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold disabled:opacity-50 hover:bg-emerald-700 transition-colors"
            >
                Next
            </button>
        </div>
    );
}