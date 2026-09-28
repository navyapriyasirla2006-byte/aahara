import React, { useState } from 'react';
import { DIET_PLANS_DATA } from '../data/dietPlansData';
import { DietGoalId, DietPlan } from '../types/nutrition';
import {
  Dumbbell,
  Flame,
  Scale,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  Clock,
  Leaf,
  Drumstick,
  ArrowRight
} from 'lucide-react';

interface DietGoalPlansProps {
  bulkingImage: string;
}

export const DietGoalPlans: React.FC<DietGoalPlansProps> = ({ bulkingImage }) => {
  const [selectedGoalId, setSelectedGoalId] = useState<DietGoalId>('bulking');
  const [preferenceFilter, setPreferenceFilter] = useState<'veg' | 'all'>('all');

  const activePlan: DietPlan =
    DIET_PLANS_DATA.find((p) => p.id === selectedGoalId) || DIET_PLANS_DATA[0];

  const getGoalIcon = (id: DietGoalId) => {
    switch (id) {
      case 'bulking':
        return <Dumbbell className="w-4 h-4 text-amber-600" />;
      case 'fat-loss':
        return <Flame className="w-4 h-4 text-orange-600" />;
      case 'maintenance':
        return <Scale className="w-4 h-4 text-blue-600" />;
      case 'gut-detox':
        return <Sparkles className="w-4 h-4 text-emerald-600" />;
      default:
        return <Dumbbell className="w-4 h-4" />;
    }
  };

  return (
    <section className="space-y-8">
      {/* Editorial Header */}
      <div className="relative rounded-2xl overflow-hidden bg-stone-900 text-stone-100 p-8 sm:p-12 border border-stone-800 shadow-sm">
        <img
          src={bulkingImage}
          alt="High Protein Indian Fitness Meal"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-900/85 to-stone-950/40"></div>
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Goal-Oriented Indian Meal Blueprints
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Indian Diets for Bulking & Fat Loss.
          </h1>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            You don't need bland boiled chicken or tasteless salads to build muscle or lose fat. Master high-protein, calorie-calibrated Indian meals utilizing <span className="text-amber-300 font-medium">paneer, soya chunks, sattu, sprouted legumes, millets, eggs, and chicken</span>.
          </p>
        </div>
      </div>

      {/* Goal Selector Segmented Tabs */}
      <div className="bg-white p-2 rounded-xl border border-stone-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {DIET_PLANS_DATA.map((plan) => {
            const isSelected = plan.id === selectedGoalId;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedGoalId(plan.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-amber-800 text-white font-semibold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <span>{getGoalIcon(plan.id)}</span>
                <span>{plan.title.split(' ')[1] || plan.title}</span>
              </button>
            );
          })}
        </div>

        {/* Veg vs All Toggle */}
        <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg self-start sm:self-center shrink-0 text-xs">
          <button
            onClick={() => setPreferenceFilter('all')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              preferenceFilter === 'all'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All (Veg + Non-Veg)
          </button>
          <button
            onClick={() => setPreferenceFilter('veg')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer flex items-center gap-1 ${
              preferenceFilter === 'veg'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Leaf className="w-3 h-3" />
            <span>Strict Vegetarian</span>
          </button>
        </div>
      </div>

      {/* Main Diet Plan Matrix */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden space-y-0">
        {/* Plan Header */}
        <div className="p-6 sm:p-8 bg-stone-50/70 border-b border-stone-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                {activePlan.targetGoal}
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                {activePlan.title}
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                {activePlan.overview}
              </p>
            </div>

            {/* Nutrition Targets Scoreboard */}
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-4 shrink-0 min-w-[280px]">
              <div className="grid grid-cols-2 gap-4 text-center divide-x divide-stone-100">
                <div>
                  <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                    Daily Calories
                  </div>
                  <div className="text-lg font-bold text-stone-900 font-mono tabular-nums">
                    {activePlan.dailyCalorieRange}
                  </div>
                </div>
                <div className="pl-4">
                  <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                    Protein Target
                  </div>
                  <div className="text-lg font-bold text-amber-700 font-mono tabular-nums">
                    {activePlan.proteinTarget}
                  </div>
                </div>
              </div>

              {/* Macro Split Bar */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-[11px] text-stone-600 font-medium">
                  <span>Carbs {activePlan.macroSplit.carbs}%</span>
                  <span>Protein {activePlan.macroSplit.protein}%</span>
                  <span>Fats {activePlan.macroSplit.fats}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden bg-stone-100 flex">
                  <div
                    style={{ width: `${activePlan.macroSplit.carbs}%` }}
                    className="bg-amber-400"
                    title="Carbohydrates"
                  ></div>
                  <div
                    style={{ width: `${activePlan.macroSplit.protein}%` }}
                    className="bg-amber-700"
                    title="Protein"
                  ></div>
                  <div
                    style={{ width: `${activePlan.macroSplit.fats}%` }}
                    className="bg-stone-400"
                    title="Healthy Fats"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meal by Meal Timetable */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-stone-900">
              Daily Meal Timing & Food Breakdown
            </h3>
            <span className="text-xs text-stone-500">
              {activePlan.meals.length} structured meals
            </span>
          </div>

          <div className="space-y-4">
            {activePlan.meals.map((meal, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-stone-200 bg-stone-50/40 hover:bg-stone-50 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                      {meal.timing}
                    </span>
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                      {meal.slot}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-stone-500 font-mono tabular-nums">
                    <span>~{meal.caloriesApprox} kcal</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-bold text-amber-800">~{meal.proteinGrams}g protein</span>
                  </div>
                </div>

                {/* Meal Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Veg Option */}
                  <div className="p-3 rounded-lg bg-white border border-stone-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold uppercase text-[10px] tracking-wider">
                      <Leaf className="w-3 h-3 text-emerald-600" />
                      <span>Vegetarian Prescription</span>
                    </div>
                    <p className="text-stone-800 leading-relaxed font-medium">
                      {meal.vegOption}
                    </p>
                  </div>

                  {/* Non-Veg Option (if applicable & filter allows) */}
                  {preferenceFilter === 'all' && meal.nonVegOption && (
                    <div className="p-3 rounded-lg bg-white border border-stone-200 space-y-1">
                      <div className="flex items-center gap-1.5 text-amber-900 font-bold uppercase text-[10px] tracking-wider">
                        <Drumstick className="w-3 h-3 text-amber-700" />
                        <span>Non-Vegetarian Alternative</span>
                      </div>
                      <p className="text-stone-800 leading-relaxed font-medium">
                        {meal.nonVegOption}
                      </p>
                    </div>
                  )}
                </div>

                {/* Dietician Pro Tip */}
                <div className="text-xs text-stone-600 flex items-start gap-2 pt-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-800">Dietician Insight:</strong> {meal.proTip}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Grocery Staples & Golden Habits Deck */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Indian Grocery Staples */}
            <div className="p-5 rounded-xl bg-amber-50/40 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                <ShoppingBag className="w-4 h-4 text-amber-700" />
                <span>Essential Indian Grocery Staples</span>
              </div>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {activePlan.groceryStaples.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Golden Habits */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Golden Rules for This Diet Goal</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                {activePlan.goldenHabits.map((habit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-1.5"></span>
                    <span className="leading-relaxed">{habit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
