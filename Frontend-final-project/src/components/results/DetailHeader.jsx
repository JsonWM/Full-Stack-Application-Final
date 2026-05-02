import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function DetailHeader({ stateName, date, id }) {
  return (
    <>
      <Link to="/calculator" className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 mb-8 transition-colors group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to history
      </Link>

      <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16"></div>
        <h1 className="text-3xl font-black mb-2 relative z-10">{stateName}</h1>
        <p className="opacity-60 relative z-10">ID: {id} • Generated on {date}</p>
      </div>
    </>
  );
}