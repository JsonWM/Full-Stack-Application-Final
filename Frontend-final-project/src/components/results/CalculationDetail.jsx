import { useParams, Link } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import SavingsChart from "./SavingsChart";
import DetailTips from "./DetailTips";
import { Leaf, Wallet, Heart } from "lucide-react";

export default function CalculationDetail() {
  const { id } = useParams();

  const saved = JSON.parse(localStorage.getItem("energy_history") || "[]");
  const data = saved.find((item) => item.id.toString() === id);

  // 1. Validation check
  if (!data) {
    return (
      <div className="text-center py-20 dark:text-white">
        <p className="mb-4">Record not found.</p>
        <Link to="/calculator" className="text-emerald-600 underline">Back to Calculator</Link>
      </div>
    );
  }

  const monthlySavings = parseFloat(data.savings) || 0;
  const kgCO2 = (monthlySavings * 0.4).toFixed(1);
  const equivalentTrees = (parseFloat(kgCO2) / 2).toFixed(1);

  return (
    <div className="max-w-4xl mx-auto p-6 animate-in fade-in duration-500">
      {/* Passing the updated props to DetailHeader */}
      <DetailHeader stateName={data.stateName} date={data.date} id={id} />

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
              <Wallet className="text-emerald-500 mb-2" />
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Monthly Savings</h4>
              <p className="text-2xl font-black text-emerald-600">${data.savings} USD</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
              <Leaf className="text-emerald-500 mb-2" />
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">CO2 Impact</h4>
              <p className="text-2xl font-black text-slate-800 dark:text-white">-{kgCO2} kg</p>
            </div>
          </div>

          <DetailTips
            bulbs={data.bulbs || 0}
            plugs={data.plugs || 0}
            tvs={data.tvs || 0}
            ac={data.ac || false}
          />

          <Link to="/why-it-matters" className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 mt-4 hover:underline font-medium">
            <Heart size={16} className="fill-emerald-600 dark:fill-emerald-400" />
            Why does your saving of {kgCO2}kg of CO₂ equal {equivalentTrees} trees? Find out here.
          </Link>
        </div>

        <div className="md:col-span-1">
          <SavingsChart
            savings={data.savings}
            currentSpending={data.currentSpending}
            stateName={data.stateName}
            bulbs={data.bulbs || 0}
            plugs={data.plugs || 0}
            tvs={data.tvs || 0}
            ac={data.ac || false}
          />
        </div>
      </div>
    </div>
  );
}