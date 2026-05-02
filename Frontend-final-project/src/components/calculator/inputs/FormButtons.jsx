import { Loader2 } from "lucide-react";

export default function FormButtons({ onPrev, loading }) {
  return (
    <div className="flex gap-4 pt-4">
      <button
        type="button"
        onClick={onPrev}
        className="flex-1 text-slate-400 font-bold hover:text-slate-600 transition-colors"
      >
        Back
      </button>
      <button
        type="submit"
        className="flex-[2] bg-emerald-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-emerald-200 dark:shadow-none hover:bg-emerald-700 transition-all flex justify-center items-center gap-2"
      >
        {loading ? <Loader2 className="animate-spin" /> : "Calculate Savings"}
      </button>
    </div>
  );
}