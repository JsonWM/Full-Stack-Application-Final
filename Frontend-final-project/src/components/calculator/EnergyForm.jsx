import { useState, useEffect } from "react";
import { History } from "lucide-react";

// Sub-component imports
import StepIndicator from "./StepIndicator";
import LocationStep from "./LocationStep";
import ConsumptionStep from "./ConsumptionStep";
import SuccessStep from "./SuccessStep";
import HistoryItem from "./HistoryItem";

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
    fetch(`${import.meta.env.VITE_API_URL}/api/energy/history`)
      .then(res => res.json())
      .then(data => setHistory(data))
      .catch(err => console.error("Error loading history:", err));
  }, []);

  // Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sending data to the Backend API
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/energy/calculate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error in calculation');

      const data = await response.json();
      const newRecord = Array.isArray(data) ? data[0] : data;

      setLastId(newRecord.id);
      setHistory([newRecord, ...history]);
      setStep(3);

    } catch (error) {
      console.error("Fetch error:", error);
      alert("Could not connect to the server. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/energy/history/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) setHistory(history.filter(item => item.id !== id))
    } catch (error) {
      alert("Could not delete the record. Is the server running?");
    }
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
              results={history[0]}
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
                onDelete={(id) => handleDelete(id)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}