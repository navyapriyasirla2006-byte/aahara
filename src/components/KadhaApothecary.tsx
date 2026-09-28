import React, { useState } from 'react';
import { TRADITIONAL_REMEDIES } from '../data/remediesData';
import { RemedyRecipe } from '../types/nutrition';
import { Clock, Sparkles, Flame, CheckCircle, ChefHat, HeartPulse } from 'lucide-react';

export const KadhaApothecary: React.FC = () => {
  const [selectedRemedyId, setSelectedRemedyId] = useState<string>(TRADITIONAL_REMEDIES[0].id);

  const activeRemedy: RemedyRecipe =
    TRADITIONAL_REMEDIES.find((r) => r.id === selectedRemedyId) || TRADITIONAL_REMEDIES[0];

  return (
    <section className="space-y-8">
      {/* Intro Banner */}
      <div className="bg-amber-900/95 text-stone-100 p-8 sm:p-10 rounded-2xl border border-amber-800 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ayurvedic Home Dispensary</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Traditional Indian Kadhas & Healing Concoctions
          </h2>
          <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
            Time-tested artisanal decoctions brewed with potent kitchen spices—turmeric, black pepper, holy basil (tulsi), dry ginger, and carom seeds. Brew fresh to alleviate cough, break fevers, clear chest congestion, and soothe gastrointestinal acidity.
          </p>
        </div>
      </div>

      {/* Remedy Selector Horizontal Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {TRADITIONAL_REMEDIES.map((remedy) => {
          const isSelected = remedy.id === selectedRemedyId;
          return (
            <button
              key={remedy.id}
              onClick={() => setSelectedRemedyId(remedy.id)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                isSelected
                  ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                  : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <div className="text-[11px] font-semibold opacity-75 truncate">
                {remedy.commonName}
              </div>
              <div className="font-bold text-xs sm:text-sm line-clamp-2 leading-tight">
                {remedy.name}
              </div>
              <div className={`text-[10px] flex items-center gap-1 ${isSelected ? 'text-amber-200' : 'text-stone-400'}`}>
                <Clock className="w-3 h-3" />
                <span>{remedy.prepTime}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Detail Recipe Card */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
        <div className="p-6 sm:p-8 bg-stone-50/60 border-b border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wide">
              <span>{activeRemedy.commonName}</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-500 font-mono">Prep: {activeRemedy.prepTime}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
              {activeRemedy.name}
            </h3>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-stone-600">
              <span className="font-semibold text-stone-800">Best for:</span>
              {activeRemedy.bestFor.map((symp, i) => (
                <span key={i} className="bg-stone-200/70 text-stone-800 px-2 py-0.5 rounded text-[11px]">
                  {symp}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-stone-800 max-w-sm space-y-1 shrink-0">
            <div className="font-bold text-amber-900 flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>Ideal Time of Intake</span>
            </div>
            <p className="text-stone-700 leading-relaxed font-medium">
              {activeRemedy.bestTimeToDrink}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Ingredients Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-amber-700" />
              <span>Ingredients List</span>
            </h4>
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
              <ul className="space-y-2.5 text-xs text-stone-700">
                {activeRemedy.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5"></span>
                    <span className="leading-snug">{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cooking Instructions Column */}
          <div className="lg:col-span-8 space-y-4">
            <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-700" />
              <span>Step-by-Step Brewing Method</span>
            </h4>
            <div className="space-y-3">
              {activeRemedy.steps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-stone-200/80 bg-stone-50/40 text-xs text-stone-800"
                >
                  <span className="font-mono font-bold text-amber-900 text-xs bg-amber-100 rounded w-6 h-6 flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>

            {/* Ayurvedic Clinical Insight */}
            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/80 text-xs text-stone-700 flex items-start gap-3 mt-4">
              <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-950 font-semibold">Ayurvedic Action:</strong>{' '}
                {activeRemedy.ayurvedicInsight}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
