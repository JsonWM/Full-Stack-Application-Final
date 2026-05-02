import { Info, ShieldAlert, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="max-w-3xl mx-auto p-8 animate-in fade-in duration-700">
            <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-6">
                About <span className="text-emerald-600">MyEcoBill</span>
            </h1>

            <div className="space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
                <section className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-2 text-emerald-600 font-bold mb-3 uppercase text-xs tracking-widest">
                        <Cpu size={16} />Methodology
                    </div>
                    <p>
                        MyEcoBill uses average consumption algorithms based on standard household appliances. For big energy users like Air Conditioners, MyEcoBill use the BTU capacity to give you a more realistic number. MyEcoBill also use global environmental data to turn those saved Watts into something you can actually visualize, like trees and CO₂. While these are approximations, they are designed to give you a very good idea of where your money is going and how you can save both your wallet and the planet.
                    </p>
                </section>

                <section className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-3xl border border-amber-100 dark:border-amber-900/50">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold mb-3 uppercase text-xs tracking-widest">
                        <ShieldAlert size={16} /> Disclaimer
                    </div>
                    <p className="text-amber-900 dark:text-amber-200/70">
                        <strong>Please note:</strong> All calculations provided by this app are
                        <strong> approximations</strong>. Actual energy costs may vary based on
                        appliance age, specific model efficiency (SEER ratings), and utility provider
                        fluctuations. This tool is for educational purposes and should not be
                        considered a 100% accurate financial statement.
                    </p>
                </section>
            </div>

            <Link to="/calculator" className="inline-block mt-10 text-emerald-600 font-bold hover:underline">
                ← Ready to calculate? Go back
            </Link>
        </div>
    );
}