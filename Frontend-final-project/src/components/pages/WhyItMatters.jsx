import { Globe, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyItMatters() {
  const reasons = [
    {
      icon: <Globe className="text-emerald-500" />,
      title: "Stop Climate Change",
      desc: "Most energy comes from burning fossil fuels. Lower consumption = less heat for our planet."
    },
    {
      icon: <ShieldCheck className="text-blue-500" />,
      title: "Energy Resilience",
      desc: "By saving, we reduce pressure on the power grid, helping prevent blackouts in your community."
    },
    {
      icon: <Zap className="text-amber-500" />,
      title: "Real Savings",
      desc: "It's not just the planet; it's your wallet. The money you save today is financial freedom for tomorrow."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 animate-in fade-in duration-700">
      <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-6 leading-tight">
        Why does every Watt <span className="text-emerald-600">count?</span>
      </h1>
      <div className="grid gap-6">
        {reasons.map((r, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-6 items-start transition-colors">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl shrink-0">{r.icon}</div>
            <div>
              <h3 className="text-xl font-bold dark:text-white">{r.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/calculator" className="inline-block mt-10 text-emerald-600 font-bold hover:underline">
        ← Back to calculating my impact
      </Link>
    </div>
  );
}