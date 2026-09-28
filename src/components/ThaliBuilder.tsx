import React, { useState, useMemo } from 'react';
import { Utensils, Check, RotateCcw, Sparkles, Flame, Clock, Award } from 'lucide-react';

interface FoodOption {
  id: string;
  name: string;
  portion: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber: number;
  dosha: string;
  isVeg: boolean;
}

const BASE_CARBS: FoodOption[] = [
  { id: 'jowar-roti', name: '2 Jowar (Sorghum) Rotis', portion: '2 rotis (70g)', calories: 210, protein: 6, carbs: 44, fats: 2, fiber: 6, dosha: 'Pacifies Pitta & Kapha', isVeg: true },
  { id: 'wheat-phulka', name: '2 Whole Wheat Phulkas', portion: '2 phulkas (60g)', calories: 180, protein: 6, carbs: 36, fats: 1, fiber: 5, dosha: 'Nourishes Vata & Pitta', isVeg: true },
  { id: 'foxtail-millet', name: 'Cooked Foxtail Millet (Korralu)', portion: '1 medium bowl (150g)', calories: 205, protein: 6, carbs: 42, fats: 2, fiber: 7, dosha: 'Low GI, Tridoshic', isVeg: true },
  { id: 'brown-rice', name: 'Steamed Brown Rice', portion: '1 medium bowl (150g)', calories: 190, protein: 4, carbs: 40, fats: 1.5, fiber: 3.5, dosha: 'Balances Pitta', isVeg: true },
  { id: 'white-rice', name: 'Steamed Sona Masoori Rice', portion: '1 medium bowl (150g)', calories: 195, protein: 3.5, carbs: 44, fats: 0.5, fiber: 1, dosha: 'Easy to digest, cooling', isVeg: true }
];

const PROTEIN_SOURCES: FoodOption[] = [
  { id: 'moong-dal', name: 'Split Yellow Moong Dal Tadka', portion: '1 katori (150g)', calories: 150, protein: 9, carbs: 22, fats: 3, fiber: 6, dosha: 'Tridoshic, zero gas', isVeg: true },
  { id: 'paneer-bhurji', name: 'Spiced Low-Fat Paneer Bhurji', portion: '1 katori (120g)', calories: 240, protein: 18, carbs: 4, fats: 16, fiber: 1, dosha: 'Strengthens Ojas & Muscle', isVeg: true },
  { id: 'soya-curry', name: 'Soya Chunks Masala Curry', portion: '1 katori (120g)', calories: 210, protein: 26, carbs: 14, fats: 4, fiber: 8, dosha: 'High protein vegetarian powerhouse', isVeg: true },
  { id: 'chana-dal', name: 'Toor / Chana Dal with Palak', portion: '1 katori (150g)', calories: 175, protein: 10, carbs: 24, fats: 4, fiber: 7, dosha: 'Hearty, iron-rich', isVeg: true },
  { id: 'egg-curry', name: '2 Boiled Eggs Homestyle Curry', portion: '2 eggs in gravy', calories: 230, protein: 14, carbs: 5, fats: 16, fiber: 1, dosha: 'Nutritive, builds Dhatus', isVeg: false },
  { id: 'chicken-tikka', name: 'Grilled Herb Chicken Breast', portion: '150g grilled', calories: 220, protein: 34, carbs: 2, fats: 6, fiber: 0.5, dosha: 'Lean muscle repair', isVeg: false }
];

const VEGETABLES: FoodOption[] = [
  { id: 'lauki-curry', name: 'Stewed Lauki (Bottle Gourd) Curry', portion: '1 katori (120g)', calories: 65, protein: 1.5, carbs: 8, fats: 3, fiber: 3, dosha: 'Alkaline, cools Pitta acidity', isVeg: true },
  { id: 'palak-sabzi', name: 'Sautéed Garlic Spinach (Palak)', portion: '1 katori (100g)', calories: 75, protein: 3, carbs: 6, fats: 4, fiber: 4, dosha: 'High iron, blood purifier', isVeg: true },
  { id: 'bhindi-masala', name: 'Crispy Bhindi (Okra) Masala', portion: '1 katori (100g)', calories: 110, protein: 2.5, carbs: 12, fats: 6, fiber: 4, dosha: 'Soluble mucilage, gut health', isVeg: true },
  { id: 'mixed-beans-carrot', name: 'Steamed Beans, Carrots & Peas', portion: '1 katori (120g)', calories: 85, protein: 3, carbs: 14, fats: 2, fiber: 5, dosha: 'Balanced vitamins', isVeg: true }
];

const ACCOMPANIMENTS: FoodOption[] = [
  { id: 'cumin-chaas', name: 'Cumin-Mint Buttermilk (Chaas)', portion: '1 tall glass (200ml)', calories: 50, protein: 3.5, carbs: 5, fats: 1.5, fiber: 0.5, dosha: 'Probiotic, ignites digestion', isVeg: true },
  { id: 'garlic-rasam', name: 'Piping Hot Garlic-Pepper Rasam', portion: '1 small bowl (150ml)', calories: 45, protein: 1.5, carbs: 6, fats: 1.5, fiber: 1.5, dosha: 'Stimulates bile & digestive enzymes', isVeg: true },
  { id: 'kachumber-salad', name: 'Cucumber-Tomato-Carrot Salad', portion: '1 bowl with lemon juice', calories: 40, protein: 1, carbs: 8, fats: 0.2, fiber: 3, dosha: 'Prebiotic enzyme fiber', isVeg: true },
  { id: 'fresh-curd', name: 'Fresh Homemade Cow Curd (Dahi)', portion: '1 small bowl (100g)', calories: 80, protein: 4, carbs: 4.5, fats: 4.5, fiber: 0, dosha: 'Best for lunch only (avoid at night)', isVeg: true }
];

const GHEE_OPTIONS: FoodOption[] = [
  { id: 'none', name: 'No Added Fat', portion: '0g', calories: 0, protein: 0, carbs: 0, fats: 0, fiber: 0, dosha: 'Light', isVeg: true },
  { id: 'ghee-1tsp', name: '1 tsp Pure A2 Desi Cow Ghee', portion: '5g', calories: 45, protein: 0, carbs: 0, fats: 5, fiber: 0, dosha: 'Ojas builder, carries fat-soluble vitamins', isVeg: true },
  { id: 'flax-powder', name: '1 tbsp Roasted Flaxseed Powder', portion: '10g', calories: 55, protein: 2, carbs: 3, fats: 4, fiber: 3, dosha: 'Omega-3 vascular support', isVeg: true }
];

export const ThaliBuilder: React.FC = () => {
  const [selectedCarb, setSelectedCarb] = useState<FoodOption>(BASE_CARBS[0]);
  const [selectedProtein, setSelectedProtein] = useState<FoodOption>(PROTEIN_SOURCES[0]);
  const [selectedVeg, setSelectedVeg] = useState<FoodOption>(VEGETABLES[0]);
  const [selectedAccomp, setSelectedAccomp] = useState<FoodOption>(ACCOMPANIMENTS[0]);
  const [selectedGhee, setSelectedGhee] = useState<FoodOption>(GHEE_OPTIONS[1]);

  const totals = useMemo(() => {
    const items = [selectedCarb, selectedProtein, selectedVeg, selectedAccomp, selectedGhee];
    return {
      calories: items.reduce((sum, i) => sum + i.calories, 0),
      protein: items.reduce((sum, i) => sum + i.protein, 0),
      carbs: items.reduce((sum, i) => sum + i.carbs, 0),
      fats: items.reduce((sum, i) => sum + i.fats, 0),
      fiber: items.reduce((sum, i) => sum + i.fiber, 0)
    };
  }, [selectedCarb, selectedProtein, selectedVeg, selectedAccomp, selectedGhee]);

  const handleReset = () => {
    setSelectedCarb(BASE_CARBS[0]);
    setSelectedProtein(PROTEIN_SOURCES[0]);
    setSelectedVeg(VEGETABLES[0]);
    setSelectedAccomp(ACCOMPANIMENTS[0]);
    setSelectedGhee(GHEE_OPTIONS[1]);
  };

  return (
    <section className="space-y-8">
      {/* Intro Header */}
      <div className="bg-stone-900 text-stone-100 p-8 sm:p-10 rounded-2xl border border-stone-800 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
            <Utensils className="w-3.5 h-3.5" />
            <span>Interactive Nutrition Plate Studio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Build & Balance Your Indian Thali
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Customize each component of an authentic Indian thali: healthy grains, protein, greens, digestive beverages, and pure fats. See instant real-time macros, dietary fiber, and Ayurvedic compatibility score.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Selection Columns (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Step 1: Carbohydrate Base */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wide flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-bold">1</span>
                <span>Select Your Grain / Carbohydrate Base</span>
              </h3>
              <span className="text-xs text-stone-400">Essential fuel</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {BASE_CARBS.map((carb) => {
                const isSelected = selectedCarb.id === carb.id;
                return (
                  <button
                    key={carb.id}
                    onClick={() => setSelectedCarb(carb)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                      isSelected
                        ? 'bg-amber-50 border-amber-600 ring-1 ring-amber-600 text-stone-900 shadow-xs'
                        : 'bg-stone-50/50 hover:bg-stone-50 border-stone-200 text-stone-700'
                    }`}
                  >
                    <div className="font-semibold text-xs leading-snug">{carb.name}</div>
                    <div className="text-[11px] text-stone-500 font-mono">
                      {carb.calories} kcal · {carb.protein}g protein
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Main Protein Source */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wide flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-bold">2</span>
                <span>Select Primary Protein Element</span>
              </h3>
              <span className="text-xs text-stone-400">Muscle & repair</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {PROTEIN_SOURCES.map((protein) => {
                const isSelected = selectedProtein.id === protein.id;
                return (
                  <button
                    key={protein.id}
                    onClick={() => setSelectedProtein(protein)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                      isSelected
                        ? 'bg-amber-50 border-amber-600 ring-1 ring-amber-600 text-stone-900 shadow-xs'
                        : 'bg-stone-50/50 hover:bg-stone-50 border-stone-200 text-stone-700'
                    }`}
                  >
                    <div className="font-semibold text-xs leading-snug flex items-center justify-between gap-1">
                      <span>{protein.name}</span>
                      <span className={`text-[10px] px-1 rounded ${protein.isVeg ? 'text-emerald-700 bg-emerald-50' : 'text-amber-800 bg-amber-50'}`}>
                        {protein.isVeg ? 'Veg' : 'NV'}
                      </span>
                    </div>
                    <div className="text-[11px] font-bold text-amber-800 font-mono">
                      {protein.protein}g protein ({protein.calories} kcal)
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Green Vegetable */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wide flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-bold">3</span>
                <span>Select Green Sabzi (Fiber & Micronutrients)</span>
              </h3>
              <span className="text-xs text-stone-400">Cellular health</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {VEGETABLES.map((veg) => {
                const isSelected = selectedVeg.id === veg.id;
                return (
                  <button
                    key={veg.id}
                    onClick={() => setSelectedVeg(veg)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                      isSelected
                        ? 'bg-amber-50 border-amber-600 ring-1 ring-amber-600 text-stone-900 shadow-xs'
                        : 'bg-stone-50/50 hover:bg-stone-50 border-stone-200 text-stone-700'
                    }`}
                  >
                    <div className="font-semibold text-xs leading-snug">{veg.name}</div>
                    <div className="text-[11px] text-stone-500 font-mono">
                      {veg.calories} kcal · {veg.fiber}g fiber · {veg.dosha}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4 & 5: Accompaniment and Fat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-3">
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wide flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-bold">4</span>
                <span>Digestive Accompaniment</span>
              </h3>
              <div className="space-y-2">
                {ACCOMPANIMENTS.map((item) => {
                  const isSelected = selectedAccomp.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedAccomp(item)}
                      className={`w-full p-2.5 rounded-lg border text-left transition-all cursor-pointer text-xs flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-50 border-amber-600 font-semibold text-stone-900'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="font-mono text-stone-400">{item.calories} kcal</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-3">
              <h3 className="font-bold text-stone-900 text-sm uppercase tracking-wide flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-bold">5</span>
                <span>Healthy Lipid / Fat Addition</span>
              </h3>
              <div className="space-y-2">
                {GHEE_OPTIONS.map((item) => {
                  const isSelected = selectedGhee.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedGhee(item)}
                      className={`w-full p-2.5 rounded-lg border text-left transition-all cursor-pointer text-xs flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-50 border-amber-600 font-semibold text-stone-900'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="font-mono text-stone-400">+{item.calories} kcal</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Live Thali Scoreboard (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="sticky top-20 bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div>
                <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                  Plate Analysis
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900">
                  Your Thali Profile
                </h3>
              </div>
              <button
                onClick={handleReset}
                title="Reset to default"
                className="p-1.5 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Big Calorie & Protein Counter */}
            <div className="grid grid-cols-2 gap-4 text-center bg-stone-50 rounded-xl p-4 border border-stone-200">
              <div>
                <div className="text-[11px] font-semibold text-stone-500 uppercase">
                  Total Energy
                </div>
                <div className="text-2xl font-bold text-stone-900 font-mono tabular-nums">
                  {totals.calories}
                  <span className="text-xs font-normal text-stone-500 ml-1">kcal</span>
                </div>
              </div>
              <div className="border-l border-stone-200 pl-4">
                <div className="text-[11px] font-semibold text-stone-500 uppercase">
                  Total Protein
                </div>
                <div className="text-2xl font-bold text-amber-800 font-mono tabular-nums">
                  {totals.protein.toFixed(1)}
                  <span className="text-xs font-normal text-stone-500 ml-1">g</span>
                </div>
              </div>
            </div>

            {/* Macro Details */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-stone-600">
                <span>Carbohydrates</span>
                <span className="font-mono font-semibold text-stone-900 tabular-nums">{totals.carbs.toFixed(1)}g</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-1.5">
                <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: `${Math.min(100, totals.carbs)}%` }}></div>
              </div>

              <div className="flex items-center justify-between text-stone-600 pt-1">
                <span>Fats (Lipids)</span>
                <span className="font-mono font-semibold text-stone-900 tabular-nums">{totals.fats.toFixed(1)}g</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-1.5">
                <div className="bg-stone-400 h-1.5 rounded-full" style={{ width: `${Math.min(100, totals.fats * 2.5)}%` }}></div>
              </div>

              <div className="flex items-center justify-between text-stone-600 pt-1">
                <span>Dietary Fiber</span>
                <span className="font-mono font-semibold text-emerald-700 tabular-nums">{totals.fiber.toFixed(1)}g</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-1.5">
                <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${Math.min(100, totals.fiber * 5)}%` }}></div>
              </div>
            </div>

            {/* Selected Items Summary */}
            <div className="border-t border-stone-200 pt-4 space-y-2 text-xs">
              <div className="font-semibold text-stone-800">Plate Contents:</div>
              <ul className="space-y-1 text-stone-600 text-[11px]">
                <li className="truncate">· {selectedCarb.name}</li>
                <li className="truncate">· {selectedProtein.name}</li>
                <li className="truncate">· {selectedVeg.name}</li>
                <li className="truncate">· {selectedAccomp.name}</li>
                {selectedGhee.id !== 'none' && <li className="truncate">· {selectedGhee.name}</li>}
              </ul>
            </div>

            {/* Ayurvedic Timing Verdict */}
            <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs space-y-1.5">
              <div className="font-bold text-amber-900 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Optimal Intake Timing</span>
              </div>
              <p className="text-stone-700 text-[11px] leading-relaxed">
                Best consumed during <strong>Lunch (1:00 PM – 2:00 PM)</strong> when digestive fire (Pitta Agni) is peak, ensuring complete assimilation of proteins and healthy fats without lethargy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
