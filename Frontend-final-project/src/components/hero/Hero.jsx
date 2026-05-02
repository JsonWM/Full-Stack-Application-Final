import { Link } from 'react-router-dom'
import { ArrowRight, Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white dark:from-slate-900 dark:to-slate-950 pt-20 pb-12 flex flex-col items-center justify-center text-center px-4 transition-colors duration-500">

      {/* Badge: Smart Consumption */}
      <span className="bg-green-100 dark:bg-emerald-900/30 text-green-700 dark:text-emerald-400 text-xs md:text-sm font-bold px-4 py-1 rounded-full mb-4 flex items-center gap-2 uppercase tracking-widest border border-transparent dark:border-emerald-800/50">
        <Leaf size={14} /> Smart Consumption
      </span>

      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
        Save energy, <br />
        <span className="text-emerald-600 dark:text-emerald-500">simple billing.</span>
      </h1>

      {/* Description Paragraph */}
      <p className="text-lg text-gray-600 dark:text-slate-400 max-w-xl mb-10">
        Calculate your real spending, identify energy leaks, and receive personalized tips to lower your bill today.
      </p>

      {/* Call to Action Button */}
      <Link
        to="/calculator" // Make sure this matches your Route path in App.jsx
        className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-200 dark:shadow-none flex items-center gap-2 group"
      >
        Get started
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  )
}