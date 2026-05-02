import { Info, Lightbulb, Zap, Tv, Wind, Star, Ghost } from "lucide-react";

export default function DetailTips({ bulbs = 0, plugs = 0, tvs = 0, ac = false }) {

  const hasConsumption = bulbs > 0 || plugs > 0 || tvs > 0 || ac === true;

  // 1. If there's no consumption, show the Master Consumer message
  if (!hasConsumption) {
    return (
      <div className="mt-10 p-8 bg-emerald-50 dark:bg-emerald-900/10 border-2 border-dashed border-emerald-200 dark:border-emerald-800 rounded-3xl text-center transition-colors">
        <Star className="text-emerald-500 mx-auto mb-2" size={32} />
        <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400">Master Consumer!</h3>
        <p className="text-emerald-600 dark:text-emerald-500/80 text-sm">
          No active devices found. Your current carbon footprint is minimal. Keep it up!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">

      {/* VAMPIRE ENERGY CARD (Plugs only) */}
      {plugs > 0 && (
        <div className="mt-6 bg-slate-900 text-white p-6 rounded-3xl relative overflow-hidden shadow-xl border border-slate-800 animate-in fade-in slide-in-from-bottom-4">
          <Ghost className="absolute -right-4 -bottom-4 text-slate-800/50" size={120} />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-amber-500 p-1.5 rounded-lg">
                <Ghost className="text-slate-900" size={18} />
              </div>
              <h4 className="font-bold text-amber-500 uppercase tracking-widest text-xs">
                Fun Fact: Vampire Energy
              </h4>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {plugs === 1 ? (
                <>Your <span className="font-bold text-white">1 active plug</span> could be generating </>
              ) : (
                <>Your <span className="font-bold text-white">{plugs} active plugs</span> could be generating </>
              )}
              <strong>"vampire consumption"</strong>. This represents up to <span className="text-amber-400 font-bold">10% of your bill</span>. Unplug them and say goodbye!
            </p>
          </div>
        </div>
      )}

      {/* PERSONALIZED TIPS SECTION */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-slate-100">
          <Info className="text-emerald-500" /> Personalized Tips
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Lightbulbs Tip */}
          {bulbs > 0 && (
            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/50 rounded-2xl transition-colors">
              <h4 className="font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2 mb-2">
                <Lightbulb size={18} /> Optimize your bulbs
              </h4>
              <p className="text-amber-900 dark:text-amber-200/70 text-sm">
                Use LED technology to reduce lighting costs by up to 80%.
              </p>
            </div>
          )}

          {/* Plugs Tip */}
          {plugs > 0 && (
            <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 rounded-2xl transition-colors">
              <h4 className="font-bold text-blue-800 dark:text-blue-400 flex items-center gap-2 mb-2">
                <Zap size={18} /> Ghost Loads
              </h4>
              <p className="text-blue-900 dark:text-blue-200/70 text-sm">
                Disconnect chargers you aren't using to avoid "pocket-drain" expenses.
              </p>
            </div>
          )}

          {/* TV Tip */}
          {tvs > 0 && (
            <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl transition-colors">
              <h4 className="font-bold text-indigo-800 dark:text-indigo-400 flex items-center gap-2 mb-2">
                <Tv size={18} /> TV Sleep Timer
              </h4>
              <p className="text-indigo-900 dark:text-indigo-200/70 text-sm">
                Set a "Sleep Timer" so the TV doesn't stay on all night.
              </p>
            </div>
          )}

          {/* AC Tip */}
          {ac && (
            <div className="p-6 bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/50 rounded-2xl transition-colors">
              <h4 className="font-bold text-cyan-800 dark:text-cyan-400 flex items-center gap-2 mb-2">
                <Wind size={18} /> Smart Climate
              </h4>
              <p className="text-cyan-900 dark:text-cyan-200/70 text-sm">
                Keeping the AC at 75°F (24°C) is the perfect balance between savings and comfort.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}