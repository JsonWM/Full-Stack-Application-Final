export const STATE_RATES = {
  ny: { kwhCost: 0.23, name: "New York" },
  ma: { kwhCost: 0.28, name: "Massachusetts" },
  ct: { kwhCost: 0.29, name: "Connecticut" },
};

export const calculateEnergyResults = (formData) => {

const rate = STATE_RATES[formData.state]?.kwhCost || 0.25;

  const plugSpending = formData.plugs * formData.usageHours * 0.05 * 30 * rate;
  const bulbSpending = formData.bulbs * formData.usageHours * 0.06 * 30 * rate;
  const tvSpending = formData.tvs * formData.usageHours * 0.1 * 30 * rate;
  const acKwhConsumption = formData.btu / 10000; 
  const acSpending = formData.ac ? (acKwhConsumption * formData.usageHours * 30 * rate) : 0;

  const totalCurrentSpending = plugSpending + bulbSpending + tvSpending + acSpending;
  const totalSavings = (bulbSpending * 0.8) + (tvSpending * 0.4) + (acSpending * 0.2) + (plugSpending * 0.2);

  return {
    spending: totalCurrentSpending.toFixed(2),
    savings: totalSavings.toFixed(2)
  };
};