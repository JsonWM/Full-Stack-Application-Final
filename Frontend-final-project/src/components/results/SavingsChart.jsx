import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function SavingsChart({ savings, stateName, currentSpending, bulbs, plugs, tvs, ac }) {

    const savingsNum = parseFloat(savings);
    const totalSpendingNum = parseFloat(currentSpending);
    const efficientSpending = (totalSpendingNum - savingsNum).toFixed(2);

    // Empty state validation
    if (!bulbs && !plugs && !tvs && !ac) {
        return (
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center h-full min-h-[300px] transition-colors">
                <div className="w-16 h-16 rounded-full border-4 border-slate-100 dark:border-slate-800 border-t-emerald-500 animate-spin mb-4"></div>
                <p className="text-sm text-slate-500 text-center italic">No data available for chart</p>
            </div>
        );
    }

    const chartData = [
        {
            name: "Savings",
            value: Number(savingsNum.toFixed(2))
        },
        {
            name: "Efficient",
            value: Number(parseFloat(efficientSpending).toFixed(2))
        },
    ];

    const COLORS = ["#10b981", "#94a3b8"]; // Emerald Green and Slate Gray



    const generateDynamicMessage = () => {
        let tips = [];

        if (ac) tips.push("optimizing Air Conditioning usage");
        if (bulbs > 0) tips.push("switching to LED bulbs");
        if (tvs > 0) tips.push("avoiding leaving TVs on");
        if (plugs > 0) tips.push("eliminating vampire power from your outlets");

        if (tips.length === 0) return "by improving your daily consumption habits.";

        if (tips.length === 1) return `This is what you recover by ${tips[0]}.`;

        const lastTip = tips.pop();
        return `This is what you recover by ${tips.join(", ")} and ${lastTip}.`;
    };

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm h-full transition-colors">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-6 text-center underline decoration-emerald-500/30">
                Spending Distribution
            </h3>

            <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%" cy="50%"
                            innerRadius={60} outerRadius={80}
                            paddingAngle={5} dataKey="value"
                            stroke="none"
                        >
                            {chartData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                        </Pie>
                        <Tooltip
                            formatter={(value) => `$${Number(value).toFixed(2)} USD`}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* CUSTOM DESCRIPTIVE EXPLANATION */}
            <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1 shrink-0"></div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                            Your Savings (${savingsNum.toFixed(2)}):
                        </span> {generateDynamicMessage()}
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="w-3 h-3 rounded-full bg-slate-400 mt-1 shrink-0"></div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                            Efficient Spending:
                        </span> This would be your new monthly bill of <strong>${Number(efficientSpending).toFixed(2)}</strong> after applying all the savings tips.
                    </p>
                </div>
            </div>
        </div>
    );
}
