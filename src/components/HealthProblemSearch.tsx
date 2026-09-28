import React, { useState, useMemo } from 'react';
import { HEALTH_CONDITIONS_DATA } from '../data/healthConditionsData';
import { HealthCondition, HealthCategory } from '../types/nutrition';
import {
  Search,
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle,
  Sparkles,
  Flame,
  ShieldAlert,
  ChevronRight,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface HealthProblemSearchProps {
  remedyImage: string;
}

export const HealthProblemSearch: React.FC<HealthProblemSearchProps> = ({ remedyImage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedConditionId, setSelectedConditionId] = useState<string>('cold-congestion');

  const categories: (HealthCategory | 'All')[] = [
    'All',
    'Respiratory & Fever',
    'Digestive & Gut',
    'Vitality & Pain',
    'Metabolic & Hormonal'
  ];

  const filteredConditions = useMemo(() => {
    return HEALTH_CONDITIONS_DATA.filter((cond) => {
      const matchesCategory =
        selectedCategory === 'All' || cond.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        cond.name.toLowerCase().includes(q) ||
        (cond.teluguName && cond.teluguName.toLowerCase().includes(q)) ||
        cond.summary.toLowerCase().includes(q) ||
        cond.curativeFoods.some(f => f.name.toLowerCase().includes(q)) ||
        cond.foodsToAvoid.some(f => f.name.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const activeCondition = useMemo(() => {
    return (
      HEALTH_CONDITIONS_DATA.find((c) => c.id === selectedConditionId) ||
      filteredConditions[0] ||
      HEALTH_CONDITIONS_DATA[0]
    );
  }, [selectedConditionId, filteredConditions]);

  return (
    <section className="space-y-8">
      {/* Header Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-stone-900 text-stone-100 p-8 sm:p-12 border border-stone-800 shadow-sm">
        <img
          src={remedyImage}
          alt="Ayurvedic Kadha and Herbal Tea"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-900/85 to-stone-950/50"></div>
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Symptom-Targeted Curative Nutrition
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Food as Medicine: Cure from the Kitchen.
          </h1>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Search any health issue or bodily discomfort to discover <span className="text-amber-300 font-medium">exact foods to consume</span>, <span className="text-rose-300 font-medium">foods to strictly avoid</span>, and <span className="text-amber-300 font-medium">precise timing</span> to accelerate natural recovery.
          </p>
        </div>
      </div>

      {/* Interactive Search & Filter Deck */}
      <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search symptoms or health conditions (e.g., cold, cough, fever, acidity, bloating, loose motions, cramps)..."
            className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-800 text-white font-semibold'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick Symptom Chips */}
        <div className="pt-2 border-t border-stone-100">
          <div className="text-xs font-semibold text-stone-500 mb-2">
            Select an illness to view full dietary protocol:
          </div>
          <div className="flex flex-wrap gap-2">
            {filteredConditions.map((cond) => {
              const isActive = cond.id === activeCondition.id;
              return (
                <button
                  key={cond.id}
                  onClick={() => setSelectedConditionId(cond.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-stone-900 text-amber-300 font-semibold shadow-xs ring-1 ring-stone-900'
                      : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200/80'
                  }`}
                >
                  <span>{cond.name}</span>
                  {cond.teluguName && (
                    <span className="text-[10px] opacity-75 font-normal">
                      ({cond.teluguName.split(' ')[0]})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Condition Detail Protocol */}
      {activeCondition && (
        <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden space-y-0">
          {/* Condition Header Bar */}
          <div className="p-6 sm:p-8 bg-stone-50/70 border-b border-stone-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
                  <span className="uppercase tracking-wider">{activeCondition.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-stone-600">Dosha: {activeCondition.doshaImbalance}</span>
                </div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                    {activeCondition.name}
                  </h2>
                  {activeCondition.teluguName && (
                    <span className="text-sm font-medium text-amber-900/80">
                      {activeCondition.teluguName}
                    </span>
                  )}
                </div>
                <p className="text-sm text-stone-600 max-w-3xl">
                  {activeCondition.summary}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-950 max-w-sm space-y-1 shrink-0">
                <div className="font-semibold flex items-center gap-1.5 text-amber-900">
                  <Flame className="w-3.5 h-3.5 text-amber-700" />
                  <span>Root Imbalance</span>
                </div>
                <p className="text-stone-700 leading-relaxed">
                  {activeCondition.rootCause}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Split: What to Eat & Timing vs What to Avoid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Curative Foods with Ideal Timing */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Curative Foods to Consume & When</span>
                </div>

                <div className="space-y-3">
                  {activeCondition.curativeFoods.map((food, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-emerald-50/30 border border-emerald-200/70 space-y-2 hover:bg-emerald-50/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-stone-900 text-sm">
                          {food.name}
                        </h4>
                        <span className="text-[11px] font-medium text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded whitespace-nowrap flex items-center gap-1">
                          <Clock className="w-3 h-3 text-emerald-700" />
                          <span>{food.idealTiming}</span>
                        </span>
                      </div>
                      <p className="text-xs text-stone-700">
                        <strong className="text-stone-900">How it cures:</strong> {food.role}
                      </p>
                      <p className="text-xs text-stone-500 italic">
                        {food.preparationNote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Foods to Strictly Avoid */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Foods to Strictly Avoid (Aggravates Condition)</span>
                </div>

                <div className="space-y-3">
                  {activeCondition.foodsToAvoid.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-rose-50/30 border border-rose-200/70 space-y-1.5 hover:bg-rose-50/50 transition-colors"
                    >
                      <div className="font-semibold text-rose-950 text-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        <span>{item.name}</span>
                      </div>
                      <p className="text-xs text-stone-600 pl-3">
                        <strong className="text-rose-900 font-medium">Why to avoid:</strong> {item.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Signature Indian Home Remedy (Kadha / Kashayam) */}
            <div className="rounded-xl border border-amber-300/80 bg-gradient-to-br from-amber-50/60 to-orange-50/30 p-6 sm:p-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/80 pb-3">
                <div className="space-y-0.5">
                  <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Signature Ayurvedic Remedy</span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">
                    {activeCondition.signatureRemedy.title}
                  </h3>
                </div>
                <div className="text-xs text-stone-600 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Ready in {activeCondition.signatureRemedy.prepTime}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 text-xs">
                {/* Ingredients */}
                <div className="space-y-2">
                  <div className="font-semibold text-stone-900 uppercase tracking-wide">
                    Exact Ingredients
                  </div>
                  <ul className="space-y-1.5">
                    {activeCondition.signatureRemedy.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-start gap-2 text-stone-700">
                        <span className="text-amber-600 font-bold">·</span>
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Preparation Steps & Dosage */}
                <div className="space-y-3">
                  <div className="font-semibold text-stone-900 uppercase tracking-wide">
                    Preparation Instructions
                  </div>
                  <ol className="space-y-2">
                    {activeCondition.signatureRemedy.instructions.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-stone-700">
                        <span className="font-mono font-bold text-amber-800 text-[11px] shrink-0 mt-0.5">
                          {i + 1}.
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="p-2.5 rounded-lg bg-white/80 border border-amber-200 text-stone-800 font-medium text-xs">
                    <strong className="text-amber-900">Dosage:</strong> {activeCondition.signatureRemedy.dosage}
                  </div>
                </div>
              </div>
            </div>

            {/* 24-Hour Recovery Meal Timeline */}
            <div className="space-y-3 pt-2">
              <h4 className="font-display text-base font-bold text-stone-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>Full Day Recovery Meal Plan for {activeCondition.name}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1">
                  <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wide">
                    Morning (7:30 AM)
                  </div>
                  <p className="text-xs text-stone-800 leading-snug">
                    {activeCondition.dailyMealTimeline.morning}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1">
                  <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wide">
                    Lunch (1:00 PM)
                  </div>
                  <p className="text-xs text-stone-800 leading-snug">
                    {activeCondition.dailyMealTimeline.noon}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1">
                  <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wide">
                    Evening (4:30 PM)
                  </div>
                  <p className="text-xs text-stone-800 leading-snug">
                    {activeCondition.dailyMealTimeline.evening}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1">
                  <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wide">
                    Dinner (8:00 PM)
                  </div>
                  <p className="text-xs text-stone-800 leading-snug">
                    {activeCondition.dailyMealTimeline.night}
                  </p>
                </div>
              </div>
            </div>

            {/* Scientific Insight Box */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900 font-semibold">Clinical & Ayurvedic Mechanism:</strong>{' '}
                {activeCondition.keyScienceInsight}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
