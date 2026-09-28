import React, { useState } from 'react';
import { Calculator, Dumbbell, Flame, Scale, CheckCircle2, ArrowRight } from 'lucide-react';

export const MacroCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(25);
  const [weightKg, setWeightKg] = useState<number>(68);
  const [heightCm, setHeightCm] = useState<number>(172);
  const [activity, setActivity] = useState<number>(1.375); // Light activity
  const [goal, setGoal] = useState<'bulking' | 'fat-loss' | 'maintenance'>('bulking');

  // Mifflin-St Jeor Formula
  const bmr =
    gender === 'male'
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  const tdee = Math.round(bmr * activity);

  let targetCalories = tdee;
  let proteinTarget = Math.round(weightKg * 1.5);

  if (goal === 'bulking') {
    targetCalories = tdee + 400;
    proteinTarget = Math.round(weightKg * 1.8);
  } else if (goal === 'fat-loss') {
    targetCalories = Math.max(1300, tdee - 450);
    proteinTarget = Math.round(weightKg * 1.6);
  } else {
    targetCalories = tdee;
    proteinTarget = Math.round(weightKg * 1.4);
  }

  // Macro splits
  const proteinCals = proteinTarget * 4;
  const fatsTarget = Math.round((targetCalories * 0.25) / 9);
  const fatCals = fatsTarget * 9;
  const carbsCals = Math.max(0, targetCalories - (proteinCals + fatCals));
  const carbsTarget = Math.round(carbsCals / 4);

  return (
    <section className="space-y-8">
      {/* Intro Header */}
      <div className="bg-stone-900 text-stone-100 p-8 sm:p-10 rounded-2xl border border-stone-800 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Desi Macro Engine</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Indian Calorie & Macro Target Calculator
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Calculate your Basal Metabolic Rate (BMR), Total Daily Energy Expenditure (TDEE), and daily protein target calibrated for Indian meal planning.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Inputs (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs space-y-5">
          <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wide">
            Your Body & Lifestyle Parameters
          </h3>

          {/* Gender */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-700">Gender</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`py-2 px-4 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  gender === 'male'
                    ? 'bg-amber-800 text-white border-amber-900 shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                Male
              </button>
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`py-2 px-4 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  gender === 'female'
                    ? 'bg-amber-800 text-white border-amber-900 shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                Female
              </button>
            </div>
          </div>

          {/* Age, Weight, Height Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700">Age (years)</label>
              <input
                type="number"
                min="14"
                max="90"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm font-mono text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700">Weight (kg)</label>
              <input
                type="number"
                min="35"
                max="200"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm font-mono text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700">Height (cm)</label>
              <input
                type="number"
                min="120"
                max="230"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm font-mono text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
              />
            </div>
          </div>

          {/* Activity Level */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-700">Daily Physical Activity</label>
            <select
              value={activity}
              onChange={(e) => setActivity(Number(e.target.value))}
              className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
            >
              <option value={1.2}>Sedentary (Desk job, minimal exercise)</option>
              <option value={1.375}>Lightly Active (Workout or brisk walk 1–3 days/wk)</option>
              <option value={1.55}>Moderately Active (Gym or sports 3–5 days/wk)</option>
              <option value={1.725}>Very Active (Intense training 6–7 days/wk)</option>
            </select>
          </div>

          {/* Goal Selector */}
          <div className="space-y-1.5 pt-2">
            <label className="text-xs font-semibold text-stone-700">Your Primary Fitness Goal</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setGoal('bulking')}
                className={`p-2.5 rounded-lg border text-center text-xs font-semibold transition-all cursor-pointer ${
                  goal === 'bulking'
                    ? 'bg-amber-800 text-white border-amber-900 shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                Muscle Bulking (+400 kcal)
              </button>
              <button
                type="button"
                onClick={() => setGoal('fat-loss')}
                className={`p-2.5 rounded-lg border text-center text-xs font-semibold transition-all cursor-pointer ${
                  goal === 'fat-loss'
                    ? 'bg-amber-800 text-white border-amber-900 shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                Fat Loss (-450 kcal)
              </button>
              <button
                type="button"
                onClick={() => setGoal('maintenance')}
                className={`p-2.5 rounded-lg border text-center text-xs font-semibold transition-all cursor-pointer ${
                  goal === 'maintenance'
                    ? 'bg-amber-800 text-white border-amber-900 shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                Maintenance (TDEE)
              </button>
            </div>
          </div>
        </div>

        {/* Calculation Results Card (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
              Calculated Target
            </div>
            <h3 className="font-display text-2xl font-bold text-stone-900">
              Your Daily Nutrition Blueprint
            </h3>
          </div>

          {/* Big Score Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 text-center">
              <div className="text-[11px] font-bold text-stone-500 uppercase">Daily Target Energy</div>
              <div className="text-3xl font-bold text-stone-900 font-mono tabular-nums mt-1">
                {targetCalories}
                <span className="text-xs font-normal text-stone-500 ml-1">kcal</span>
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                (Maintenance: {tdee} kcal)
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 text-center">
              <div className="text-[11px] font-bold text-amber-900 uppercase">Target Daily Protein</div>
              <div className="text-3xl font-bold text-amber-800 font-mono tabular-nums mt-1">
                {proteinTarget}
                <span className="text-xs font-normal text-stone-500 ml-1">g</span>
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                ({(proteinTarget / weightKg).toFixed(1)}g per kg bodyweight)
              </div>
            </div>
          </div>

          {/* Macro Breakdown */}
          <div className="space-y-3 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="text-xs font-bold text-stone-800 uppercase">
              Recommended Daily Macronutrient Split
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-white border border-stone-200">
                <div className="text-stone-500 font-medium">Carbohydrates</div>
                <div className="text-base font-bold text-amber-700 font-mono tabular-nums">{carbsTarget}g</div>
                <div className="text-[10px] text-stone-400">~{carbsCals} kcal</div>
              </div>
              <div className="p-2 rounded-lg bg-white border border-stone-200">
                <div className="text-stone-500 font-medium">Protein</div>
                <div className="text-base font-bold text-amber-900 font-mono tabular-nums">{proteinTarget}g</div>
                <div className="text-[10px] text-stone-400">~{proteinCals} kcal</div>
              </div>
              <div className="p-2 rounded-lg bg-white border border-stone-200">
                <div className="text-stone-500 font-medium">Healthy Fats</div>
                <div className="text-base font-bold text-stone-700 font-mono tabular-nums">{fatsTarget}g</div>
                <div className="text-[10px] text-stone-400">~{fatCals} kcal</div>
              </div>
            </div>
          </div>

          {/* Indian Meal Allocation Advice */}
          <div className="space-y-2 text-xs text-stone-700">
            <div className="font-semibold text-stone-900">Recommended Indian Meal Distribution:</div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Breakfast (25%):</strong> ~{Math.round(targetCalories * 0.25)} kcal ({Math.round(proteinTarget * 0.25)}g protein) · E.g. Besan Cheela with paneer or Eggs + Idli</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Lunch (35%):</strong> ~{Math.round(targetCalories * 0.35)} kcal ({Math.round(proteinTarget * 0.35)}g protein) · E.g. Jowar rotis + Soya chunks / Chicken + Dal + Salad</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Evening (15%):</strong> ~{Math.round(targetCalories * 0.15)} kcal ({Math.round(proteinTarget * 0.15)}g protein) · E.g. Sattu shake or Boiled chana sundal</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Dinner (25%):</strong> ~{Math.round(targetCalories * 0.25)} kcal ({Math.round(proteinTarget * 0.25)}g protein) · E.g. Light Moong Khichdi or Grilled Paneer/Fish + Soup</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
