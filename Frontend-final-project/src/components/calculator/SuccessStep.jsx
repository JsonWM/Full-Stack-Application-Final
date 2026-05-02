import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";

export default function SuccessStep({ results, formData, onReset, lastId }) {

    // Helper function to generate the main tip
    const getMainAdvice = () => {
        if (formData.ac) return "by setting your AC to 75°F (24°C) and using ECO mode";
        if (formData.bulbs > 5) return "by switching your current lightbulbs to LED technology";
        if (formData.tvs > 1) return "by avoiding leaving televisions on unnecessarily";
        return "by improving your daily consumption habits";
    };

    const percentage = ((results.savings / results.spending) * 100).toFixed(0);

    return (
        <div className="text-center space-y-6 animate-in zoom-in duration-500 py-4">
            <h2 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight italic uppercase">
                ANALYSIS READY
            </h2>

            <div className="grid gap-4">
                {/* CURRENT SPENDING */}
                <div className="bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-100 dark:border-rose-900/50 rounded-2xl p-6">
                    <p className="text-xs text-rose-600 dark:text-rose-400 font-bold uppercase tracking-widest mb-1">
                        Estimated Monthly Spending
                    </p>
                    <span className="text-3xl font-black text-rose-700 dark:text-rose-300">
                        ${results.spending} <small className="text-sm opacity-50 font-bold">USD</small>
                    </span>
                </div>

                {/* DESCRIPTIVE SAVINGS POTENTIAL */}
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-100 dark:border-emerald-900/50 rounded-3xl p-8 shadow-md transform -rotate-1">
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest mb-1">
                        Your Savings Potential
                    </p>
                    <span className="text-5xl font-black text-emerald-700 dark:text-emerald-400">
                        ${results.savings} <small className="text-lg opacity-50 font-bold">USD</small>
                    </span>

                    <p className="text-sm text-emerald-800 dark:text-emerald-200 font-medium mt-4 leading-relaxed">
                        {results.spending > 0 ? (
                            <>
                                You could reduce your bill by <b>{percentage}%</b> {getMainAdvice()}!
                            </>
                        ) : (
                            "Congratulations! Your consumption is optimal."
                        )}
                    </p>
                </div>

                <div className="flex flex-col gap-3 mt-8">
                    {/* Primary Button: Go to Detail */}
                    <Link
                        to={`/details/${lastId}`}
                        className="group w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 dark:shadow-none active:scale-95"
                    >
                        <BarChart3
                            size={20}
                            className="group-hover:-translate-y-1 transition-transform duration-300"
                        />
                        <span>View Detailed Analysis</span>
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                    </Link>

                    {/* Secondary Button: Restart */}
                    <button
                        onClick={onReset}
                        className="w-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 py-4 rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    >
                        Start New Calculation
                    </button>
                </div>
            </div>
        </div>
    );
}