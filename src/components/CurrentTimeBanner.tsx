import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight, Sun, Moon, Coffee, Sparkles } from 'lucide-react';
import { MEAL_TIME_SLOTS } from '../data/mealScheduleData';
import { MealTimeSlotId, TimeSlotInfo } from '../types/nutrition';

interface CurrentTimeBannerProps {
  onSelectSlot: (slotId: MealTimeSlotId) => void;
}

export const CurrentTimeBanner: React.FC<CurrentTimeBannerProps> = ({ onSelectSlot }) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const hours = currentTime.getHours() + currentTime.getMinutes() / 60;

  // Determine current active slot
  let activeSlot: TimeSlotInfo = MEAL_TIME_SLOTS[0];
  if (hours >= 5 && hours < 8) {
    activeSlot = MEAL_TIME_SLOTS.find(s => s.id === 'early-morning') || MEAL_TIME_SLOTS[0];
  } else if (hours >= 8 && hours < 10.5) {
    activeSlot = MEAL_TIME_SLOTS.find(s => s.id === 'breakfast') || MEAL_TIME_SLOTS[1];
  } else if (hours >= 10.5 && hours < 12.5) {
    activeSlot = MEAL_TIME_SLOTS.find(s => s.id === 'mid-morning') || MEAL_TIME_SLOTS[2];
  } else if (hours >= 12.5 && hours < 15.5) {
    activeSlot = MEAL_TIME_SLOTS.find(s => s.id === 'lunch') || MEAL_TIME_SLOTS[3];
  } else if (hours >= 15.5 && hours < 18.5) {
    activeSlot = MEAL_TIME_SLOTS.find(s => s.id === 'evening') || MEAL_TIME_SLOTS[4];
  } else if (hours >= 18.5 && hours < 21.5) {
    activeSlot = MEAL_TIME_SLOTS.find(s => s.id === 'dinner') || MEAL_TIME_SLOTS[5];
  } else {
    activeSlot = MEAL_TIME_SLOTS.find(s => s.id === 'bedtime') || MEAL_TIME_SLOTS[6];
  }

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
          {/* Left: Clock & Detected Phase */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-stone-800/80 border border-stone-700 font-mono text-xs tabular-nums text-amber-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{formattedTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-stone-400">Current Phase:</span>
              <span className="font-semibold text-stone-100">{activeSlot.title}</span>
              <span className="text-stone-500 hidden sm:inline">({activeSlot.timeRange})</span>
            </div>
          </div>

          {/* Center: Recommended Quick Action */}
          <div className="flex items-center gap-2 text-stone-300 text-xs sm:text-sm">
            <span className="text-amber-400 font-medium hidden lg:inline">Ideal Right Now:</span>
            <span className="truncate max-w-md text-stone-200 font-medium">
              {activeSlot.recommendations[0]?.name}
            </span>
          </div>

          {/* Right: Quick Action to Jump */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onSelectSlot(activeSlot.id)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer group"
            >
              <span>Explore {activeSlot.title}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
