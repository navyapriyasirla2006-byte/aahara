/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { CurrentTimeBanner } from './components/CurrentTimeBanner';
import { TimeBasedSchedule } from './components/TimeBasedSchedule';
import { HealthProblemSearch } from './components/HealthProblemSearch';
import { DietGoalPlans } from './components/DietGoalPlans';
import { KadhaApothecary } from './components/KadhaApothecary';
import { ThaliBuilder } from './components/ThaliBuilder';
import { MacroCalculator } from './components/MacroCalculator';
import { AskNutritionAI } from './components/AskNutritionAI';
import { MealTimeSlotId } from './types/nutrition';
import {
  Clock,
  HeartPulse,
  Dumbbell,
  Sparkles,
  Utensils,
  Calculator,
  ShieldAlert,
  ChevronRight,
  Flame,
  Coffee,
  Sun,
  Moon
} from 'lucide-react';

const HERO_THALI_IMG = '/src/assets/images/hero_ayurvedic_thali_1790601713485.jpg';
const REMEDY_KADHA_IMG = '/src/assets/images/herbal_kadha_remedy_1790601737804.jpg';
const BULKING_IMG = '/src/assets/images/indian_bulking_nutrition_1790601755591.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('time-schedule');
  const [selectedSlotId, setSelectedSlotId] = useState<MealTimeSlotId>('breakfast');

  const handleTimeJump = () => {
    setActiveTab('time-schedule');
    const now = new Date();
    const hours = now.getHours() + now.getMinutes() / 60;
    if (hours >= 5 && hours < 8) setSelectedSlotId('early-morning');
    else if (hours >= 8 && hours < 10.5) setSelectedSlotId('breakfast');
    else if (hours >= 10.5 && hours < 12.5) setSelectedSlotId('mid-morning');
    else if (hours >= 12.5 && hours < 15.5) setSelectedSlotId('lunch');
    else if (hours >= 15.5 && hours < 18.5) setSelectedSlotId('evening');
    else if (hours >= 18.5 && hours < 21.5) setSelectedSlotId('dinner');
    else setSelectedSlotId('bedtime');

    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-800 flex flex-col font-sans">
      {/* Real-time Clock Banner */}
      <CurrentTimeBanner
        onSelectSlot={(slotId) => {
          setActiveTab('time-schedule');
          setSelectedSlotId(slotId);
          window.scrollTo({ top: 120, behavior: 'smooth' });
        }}
      />

      {/* Main Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onTimeJump={handleTimeJump}
      />

      {/* Hero Quick Navigation Strip */}
      <div className="bg-stone-100/70 border-b border-stone-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs overflow-x-auto gap-4 no-scrollbar">
            <div className="flex items-center gap-2 text-stone-500 whitespace-nowrap">
              <span className="font-semibold text-stone-800">Quick Modules:</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab('time-schedule')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'time-schedule' ? 'text-amber-900 font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Meal Timing (When to Eat)</span>
              </button>
              <span className="text-stone-300">·</span>
              <button
                onClick={() => setActiveTab('curative-foods')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'curative-foods' ? 'text-amber-900 font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
                <span>Cure Illness with Food</span>
              </button>
              <span className="text-stone-300">·</span>
              <button
                onClick={() => setActiveTab('diet-plans')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'diet-plans' ? 'text-amber-900 font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Dumbbell className="w-3.5 h-3.5 text-orange-600" />
                <span>Bulking & Weight Loss Diets</span>
              </button>
              <span className="text-stone-300">·</span>
              <button
                onClick={() => setActiveTab('remedies')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'remedies' ? 'text-amber-900 font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Kadhas & Home Remedies</span>
              </button>
              <span className="text-stone-300">·</span>
              <button
                onClick={() => setActiveTab('thali-builder')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'thali-builder' ? 'text-amber-900 font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Utensils className="w-3.5 h-3.5 text-stone-700" />
                <span>Thali Builder</span>
              </button>
              <span className="text-stone-300">·</span>
              <button
                onClick={() => setActiveTab('macro-calc')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'macro-calc' ? 'text-amber-900 font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Calculator className="w-3.5 h-3.5 text-blue-700" />
                <span>Macro Calculator</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === 'time-schedule' && (
          <TimeBasedSchedule
            selectedSlotId={selectedSlotId}
            setSelectedSlotId={setSelectedSlotId}
            heroImage={HERO_THALI_IMG}
          />
        )}

        {activeTab === 'curative-foods' && (
          <HealthProblemSearch
            remedyImage={REMEDY_KADHA_IMG}
          />
        )}

        {activeTab === 'diet-plans' && (
          <DietGoalPlans
            bulkingImage={BULKING_IMG}
          />
        )}

        {activeTab === 'remedies' && (
          <KadhaApothecary />
        )}

        {activeTab === 'thali-builder' && (
          <ThaliBuilder />
        )}

        {activeTab === 'macro-calc' && (
          <MacroCalculator />
        )}

        {activeTab === 'ai-advisor' && (
          <AskNutritionAI />
        )}
      </main>

      {/* Editorial Footer */}
      <footer className="mt-16 bg-stone-950 text-stone-400 border-t border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 md:col-span-2">
              <div className="font-display text-xl font-bold text-stone-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                Aahara Indian Nutrition & Food Therapy
              </div>
              <p className="text-stone-400 text-xs leading-relaxed max-w-lg">
                Rooted in authentic Dinacharya chronobiology and clinical Indian nutrition. We bridge ancient Ayurvedic wisdom—dosha balance, Jatharagni fire, and kitchen herbs—with modern macronutrient precision for sustainable physical strength and disease recovery.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-stone-200 font-semibold uppercase tracking-wider text-[11px]">
                Health Modules
              </div>
              <ul className="space-y-1.5 text-stone-400">
                <li><button onClick={() => { setActiveTab('time-schedule'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors">Circadian Meal Schedule</button></li>
                <li><button onClick={() => { setActiveTab('curative-foods'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors">Cold, Cough & Fever Remedies</button></li>
                <li><button onClick={() => { setActiveTab('curative-foods'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors">Acidity & Bloating Protocol</button></li>
                <li><button onClick={() => { setActiveTab('remedies'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors">Traditional Kadhas & Rasam</button></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-stone-200 font-semibold uppercase tracking-wider text-[11px]">
                Diets & Tools
              </div>
              <ul className="space-y-1.5 text-stone-400">
                <li><button onClick={() => { setActiveTab('diet-plans'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors">Indian Muscle Bulking</button></li>
                <li><button onClick={() => { setActiveTab('diet-plans'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors">Fat Loss & Millet Regimen</button></li>
                <li><button onClick={() => { setActiveTab('thali-builder'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors">Indian Thali Plate Visualizer</button></li>
                <li><button onClick={() => { setActiveTab('macro-calc'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors">Desi Macro Calculator</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-stone-500">
            <div>
              © {new Date().getFullYear()} Aahara Wellness. Designed for mindful living.
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-amber-500/80">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Nutritional food guidance only. For acute medical emergencies, always consult a qualified physician.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
