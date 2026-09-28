import React from 'react';
import { Utensils, Clock, HeartPulse, Dumbbell, Sparkles, BookOpen } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onTimeJump: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onTimeJump }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-2">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setActiveTab('time-schedule'); }}
              className="font-display font-bold text-2xl tracking-tight text-stone-900 hover:text-amber-800 transition-colors flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block"></span>
              Aahara
            </a>
          </div>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-600">
            <button
              onClick={() => setActiveTab('time-schedule')}
              className={`transition-colors hover:text-stone-900 pb-1 ${
                activeTab === 'time-schedule'
                  ? 'text-amber-800 font-semibold border-b-2 border-amber-700'
                  : ''
              }`}
            >
              Meal Clock
            </button>
            <button
              onClick={() => setActiveTab('curative-foods')}
              className={`transition-colors hover:text-stone-900 pb-1 ${
                activeTab === 'curative-foods'
                  ? 'text-amber-800 font-semibold border-b-2 border-amber-700'
                  : ''
              }`}
            >
              Curative Foods & Illness
            </button>
            <button
              onClick={() => setActiveTab('diet-plans')}
              className={`transition-colors hover:text-stone-900 pb-1 ${
                activeTab === 'diet-plans'
                  ? 'text-amber-800 font-semibold border-b-2 border-amber-700'
                  : ''
              }`}
            >
              Bulking & Diets
            </button>
            <button
              onClick={() => setActiveTab('remedies')}
              className={`transition-colors hover:text-stone-900 pb-1 ${
                activeTab === 'remedies'
                  ? 'text-amber-800 font-semibold border-b-2 border-amber-700'
                  : ''
              }`}
            >
              Kadha & Brews
            </button>
            <button
              onClick={() => setActiveTab('thali-builder')}
              className={`transition-colors hover:text-stone-900 pb-1 ${
                activeTab === 'thali-builder'
                  ? 'text-amber-800 font-semibold border-b-2 border-amber-700'
                  : ''
              }`}
            >
              Thali Plate Builder
            </button>
            <button
              onClick={() => setActiveTab('macro-calc')}
              className={`transition-colors hover:text-stone-900 pb-1 ${
                activeTab === 'macro-calc'
                  ? 'text-amber-800 font-semibold border-b-2 border-amber-700'
                  : ''
              }`}
            >
              Macro Calculator
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onTimeJump}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-stone-900 bg-amber-100 hover:bg-amber-200 border border-amber-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <Clock className="w-3.5 h-3.5 text-amber-800" />
              <span>What to Eat Now</span>
            </button>
            <button
              onClick={() => setActiveTab('ai-advisor')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'ai-advisor'
                  ? 'bg-amber-900 text-white'
                  : 'bg-stone-900 text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Ask Dietician</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden overflow-x-auto border-t border-stone-200/60 bg-stone-50 px-4 py-2 flex items-center gap-2 text-xs font-medium no-scrollbar">
        <button
          onClick={() => setActiveTab('time-schedule')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'time-schedule' ? 'bg-amber-800 text-white font-semibold' : 'text-stone-700'
          }`}
        >
          Meal Clock
        </button>
        <button
          onClick={() => setActiveTab('curative-foods')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'curative-foods' ? 'bg-amber-800 text-white font-semibold' : 'text-stone-700'
          }`}
        >
          Curative Foods
        </button>
        <button
          onClick={() => setActiveTab('diet-plans')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'diet-plans' ? 'bg-amber-800 text-white font-semibold' : 'text-stone-700'
          }`}
        >
          Bulking & Diets
        </button>
        <button
          onClick={() => setActiveTab('remedies')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'remedies' ? 'bg-amber-800 text-white font-semibold' : 'text-stone-700'
          }`}
        >
          Kadhas
        </button>
        <button
          onClick={() => setActiveTab('thali-builder')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'thali-builder' ? 'bg-amber-800 text-white font-semibold' : 'text-stone-700'
          }`}
        >
          Thali Builder
        </button>
        <button
          onClick={() => setActiveTab('macro-calc')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'macro-calc' ? 'bg-amber-800 text-white font-semibold' : 'text-stone-700'
          }`}
        >
          Calculator
        </button>
        <button
          onClick={() => setActiveTab('ai-advisor')}
          className={`px-3 py-1 rounded-md whitespace-nowrap flex items-center gap-1 ${
            activeTab === 'ai-advisor' ? 'bg-amber-800 text-white font-semibold' : 'text-stone-700'
          }`}
        >
          <Sparkles className="w-3 h-3 text-amber-500" />
          AI Advisor
        </button>
      </div>
    </header>
  );
};
