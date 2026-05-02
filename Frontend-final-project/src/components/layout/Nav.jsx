import { Link } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

export default function Nav() {
  return (
    <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center transition-colors">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg shadow-lg shadow-emerald-200 dark:shadow-none transition-transform group-hover:rotate-12"></div>
        <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">MyEcoBill</span>
      </Link>
      <Link to="/why-it-matters" className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors">
        Why save?
      </Link>
      <Link to="/about" className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors">
        About
      </Link>

      <ThemeToggle />
    </nav>
  );
}