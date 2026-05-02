export default function StepIndicator({ step }) {
  return (
    <div className="bg-slate-100 h-2 w-full flex">
      <div 
        className="bg-emerald-500 h-full transition-all duration-500" 
        style={{ width: `${(step / 3) * 100}%` }}
      ></div>
    </div>
  );
}