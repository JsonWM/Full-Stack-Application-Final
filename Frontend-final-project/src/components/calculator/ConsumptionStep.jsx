import { Zap, Lightbulb, Tv } from "lucide-react";
import DeviceSlider from "./inputs/DeviceSlider";
import HoursInput from "./inputs/HoursInput";
import AirConditionerToggle from "./inputs/AirConditionerToggle";
import FormButtons from "./inputs/FormButtons";

export default function ConsumptionStep({ formData, setFormData, onPrev, onSubmit, loading }) {
    return (
        <form onSubmit={onSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100">
                Usage Details
            </h2>

            <DeviceSlider
                label="Active Plugs"
                icon={Zap}
                iconColor="text-amber-500"
                value={formData.plugs}
                min={0} max={20}
                onChange={(val) => setFormData({ ...formData, plugs: val })}
            />

            <DeviceSlider
                label="Active Lightbulbs"
                icon={Lightbulb}
                iconColor="text-yellow-500"
                value={formData.bulbs}
                min={0} max={30}
                onChange={(val) => setFormData({ ...formData, bulbs: val })}
            />

            <DeviceSlider
                label="Televisions"
                icon={Tv}
                iconColor="text-blue-500"
                value={formData.tvs}
                min={0} max={10}
                onChange={(val) => setFormData({ ...formData, tvs: val })}
            />

            <AirConditionerToggle
                checked={formData.ac}
                btu={formData.btu}
                onChange={(val) => setFormData({ ...formData, ac: val })}
                onBtuChange={(val) => setFormData({ ...formData, btu: val })}
            />

            <HoursInput
                value={formData.usageHours}
                onChange={(val) => setFormData({ ...formData, usageHours: val })}
            />

            <FormButtons onPrev={onPrev} loading={loading} />
        </form>
    );
}