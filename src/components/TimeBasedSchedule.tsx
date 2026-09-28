import React, { useState } from 'react';
import { MEAL_TIME_SLOTS } from '../data/mealScheduleData';
import { MealTimeSlotId, TimeSlotInfo } from '../types/nutrition';
import { Clock, AlertCircle, CheckCircle2, Flame, Sparkles, Coffee, Sun, Sunset, Moon, Leaf, Drumstick } from 'lucide-react';

interface TimeBasedScheduleProps {
  selectedSlotId: MealTimeSlotId;
  setSelectedSlotId: (id: MealTimeSlotId) => void;
  heroImage: string;
}

export const TimeBasedSchedule: React.FC<TimeBasedScheduleProps> = ({
  selectedSlotId,
  setSelectedSlotId,
  heroImage
}) => {
  const [vegOnlyFilter, setVegOnlyFilter] = useState(false);

  const activeSlot = MEAL_TIME_SLOTS.find(s => s.id === selectedSlotId) || MEAL_TIME_SLOTS[0];

  const getSlotIcon = (id: MealTimeSlotId) => {
    switch (id) {
      case 'early-morning':
        return <Coffee className="w-4 h-4" />;
      case 'breakfast':
      case 'mid-morning':
        return <Sun className="w-4 h-4 text-amber-600" />;
      case 'lunch':
        return <Flame className="w-4 h-4 text-orange-600" />;
      case 'evening':
        return <Sunset className="w-4 h-4 text-amber-700" />;
      case 'dinner':
      case 'bedtime':
        return <Moon className="w-4 h-4 text-indigo-500" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const filteredRecs = vegOnlyFilter
    ? activeSlot.recommendations.filter(r => r.isVeg)
    : activeSlot.recommendations;

  return (
    <section className="space-y-8">
      {/* Editorial Header */}
      <div className="relative rounded-2xl overflow-hidden bg-stone-900 text-stone-100 p-8 sm:p-12 border border-stone-800 shadow-sm">
        <img
          src={heroImage}
          alt="Ayurvedic Thali spread"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-900/85 to-stone-950/40"></div>
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Dinacharya & Circadian Chrono-Nutrition
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            What to Eat, Exactly When to Eat It.
          </h1>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            In traditional Indian nutrition, <span className="text-amber-300 font-medium">timing is as vital as the food itself</span>. Your digestive fire (Agni) peaks and recedes with the sun. Follow your natural biological clock to maximize nutrient assimilation, eliminate bloat, and maintain high vitality throughout the day.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-400">
            <span>7 Circadian Time Slots</span>
            <span aria-hidden="true">·</span>
            <span>Digestive Fire (Agni) Sync</span>
            <span aria-hidden="true">·</span>
            <span>Dosha Balancing Rules</span>
          </div>
        </div>
      </div>

      {/* Horizontal Time Slot Selector Tabs */}
      <div className="bg-white p-2 rounded-xl border border-stone-200 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {MEAL_TIME_SLOTS.map((slot) => {
            const isSelected = slot.id === selectedSlotId;
            return (
              <button
                key={slot.id}
                onClick={() => setSelectedSlotId(slot.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <span>{getSlotIcon(slot.id)}</span>
                <span className="font-semibold">{slot.title.split(' ')[0]}</span>
                <span className={`text-[11px] tabular-nums ${isSelected ? 'text-amber-200' : 'text-stone-400'}`}>
                  {slot.timeRange.split('–')[0].trim()}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Time Slot Card */}
      <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs overflow-hidden">
        {/* Slot Top Meta Bar */}
        <div className="p-6 sm:p-8 border-b border-stone-200/80 bg-stone-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
              <span className="uppercase tracking-wider">{activeSlot.ayurvedicTime}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums text-stone-600">{activeSlot.timeRange}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
              {activeSlot.title}
            </h2>
            <p className="text-sm text-stone-600">
              {activeSlot.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Filter Veg toggle */}
            <button
              onClick={() => setVegOnlyFilter(!vegOnlyFilter)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                vegOnlyFilter
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>{vegOnlyFilter ? 'Showing Veg Only' : 'Filter Vegetarian'}</span>
            </button>
          </div>
        </div>

        {/* Agni State & Golden Rule Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200 border-b border-stone-200 bg-amber-50/30">
          <div className="p-5 flex items-start gap-3">
            <Flame className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <div className="font-semibold text-stone-900 uppercase tracking-wide">
                Digestive State (Agni)
              </div>
              <p className="text-stone-700 leading-relaxed">
                {activeSlot.digestiveState}
              </p>
            </div>
          </div>
          <div className="p-5 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <div className="font-semibold text-stone-900 uppercase tracking-wide">
                The Golden Rule of this Hour
              </div>
              <p className="text-stone-700 leading-relaxed font-medium">
                "{activeSlot.goldenRule}"
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-stone-900">
              What You Should Consume Right Now
            </h3>
            <span className="text-xs text-stone-500">
              {filteredRecs.length} curated {filteredRecs.length === 1 ? 'choice' : 'choices'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredRecs.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5 border border-stone-200 bg-stone-50/40 hover:bg-stone-50 hover:border-amber-200 transition-all space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-amber-800 font-semibold">{item.category}</span>
                      <span aria-hidden="true" className="text-stone-300">·</span>
                      <span className="text-stone-500">{item.portion}</span>
                    </div>
                    <h4 className="font-semibold text-stone-900 text-base">
                      {item.name}
                    </h4>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded ${
                      item.isVeg
                        ? 'text-emerald-800 bg-emerald-50 border border-emerald-200'
                        : 'text-amber-900 bg-amber-50 border border-amber-200'
                    }`}
                  >
                    {item.isVeg ? <Leaf className="w-3 h-3 text-emerald-600" /> : <Drumstick className="w-3 h-3 text-amber-700" />}
                    <span>{item.isVeg ? 'Vegetarian' : 'Non-Veg'}</span>
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-stone-200/60 flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="leading-tight"><strong className="text-stone-800">Benefit:</strong> {item.benefits}</span>
                </div>
              </div>
            ))}
          </div>

          {/* What to Avoid at this hour */}
          <div className="rounded-xl p-5 bg-rose-50/40 border border-rose-200/70 space-y-3">
            <div className="flex items-center gap-2 text-rose-800 font-semibold text-xs tracking-wide uppercase">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>What to Strictly Avoid During {activeSlot.title}</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
              {activeSlot.avoidAtThisTime.map((avoidText, idx) => (
                <li key={idx} className="text-xs text-rose-950 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                  <span className="leading-snug">{avoidText}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
