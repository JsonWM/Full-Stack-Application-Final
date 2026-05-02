import { useState, useEffect } from "react";
import { History } from "lucide-react";

// Sub-component imports
import StepIndicator from "./StepIndicator";
import LocationStep from "./LocationStep";
import ConsumptionStep from "./ConsumptionStep";
import SuccessStep from "./SuccessStep";
import HistoryItem from "./HistoryItem";

// Logic imports
import { STATE_RATES, calculateEnergyResults } from "../../utils/energyLogic";

export default function EnergyForm() {
  const [lastId, setLastId] = useState(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    state: "",
    plugs: 0,
    bulbs: 0,
    tvs: 0,
    ac: false,
    btu: 12000,
    usageHours: 5
  });

  // Data Persistence
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("energy_history");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("energy_history", JSON.stringify(history));
  }, [history]);

  // Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const { spending, savings } = calculateEnergyResults(formData);
      const uniqueId = Date.now();

      const newCalculation = {
        id: uniqueId,
        stateName: STATE_RATES[formData.state]?.name || "Unknown",
        bulbs: formData.bulbs,
        plugs: formData.plugs,
        tvs: formData.tvs,
        ac: formData.ac,
        usageHours: formData.usageHours,
        currentSpending: spending,
        savings: savings,
        date: new Date().toLocaleDateString('en-US')
      };

      setHistory([newCalculation, ...history]);
      setLastId(uniqueId);
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-12">
      <div className="bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-xl dark:shadow-none rounded-[2.5rem] overflow-hidden transition-colors">
        <StepIndicator step={step} />

        <div className="p-8 md:p-12">
          {step === 1 && (
            <LocationStep
              state={formData.state}
              setState={(v) => setFormData({ ...formData, state: v })}
              onNext={() => setStep(2)}
              rates={STATE_RATES}
            />
          )}

          {step === 2 && (
            <ConsumptionStep
              formData={formData}
              setFormData={setFormData}
              onPrev={() => setStep(1)}
              onSubmit={handleSubmit}
              loading={loading}
            />
          )}

          {step === 3 && (
            <SuccessStep
              results={calculateEnergyResults(formData)}
              formData={formData}
              lastId={lastId}
              onReset={() => setStep(1)}
            />
          )}
        </div>
      </div>

      {history.length > 0 && (
        <section className="animate-in fade-in duration-700">
          <h3 className="flex items-center gap-2 font-black text-slate-800 dark:text-slate-100 mb-6 text-xl tracking-tight">
            <History className="text-emerald-500" /> Savings History
          </h3>
          <div className="space-y-4">
            {history.map(item => (
              <HistoryItem
                key={item.id}
                item={item}
                onDelete={(id) => setHistory(history.filter(i => i.id !== id))}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}