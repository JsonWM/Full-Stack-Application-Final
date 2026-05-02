import { Leaf, TreeDeciduous, Car } from "lucide-react";

export default function EnvironmentalImpact({ kgCO2, trees }) {
  return (
    <div className="bg-emerald-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
      {/* Decorative background icon */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Leaf size={120} />
      </div>

      <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">Positive Environmental Impact</h3>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="text-center md:text-left">
          <span className="text-6xl font-black">{kgCO2}</span>
          <span className="text-xl font-bold text-emerald-300 ml-2">kg CO₂ / month</span>
          <p className="text-emerald-100/60 text-sm mt-2">Carbon dioxide you stop emitting</p>
        </div>

        <div className="flex gap-4">
          <div className="bg-emerald-800/50 p-4 rounded-2xl flex items-center gap-3">
            <TreeDeciduous className="text-emerald-400" />
            <div>
              <p className="text-xl font-bold">{trees}</p>
              <p className="text-[10px] uppercase opacity-50 font-bold">Trees saved</p>
            </div>
          </div>

          <div className="bg-emerald-800/50 p-4 rounded-2xl flex items-center gap-3">
            <Car className="text-emerald-400" />
            <div>
              <p className="text-xl font-bold">{(kgCO2 * 3).toFixed(0)}mi</p>
              <p className="text-[10px] uppercase opacity-50 font-bold">Driving avoided</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}