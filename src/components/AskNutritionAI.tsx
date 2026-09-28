import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { HEALTH_CONDITIONS_DATA } from '../data/healthConditionsData';
import { MEAL_TIME_SLOTS } from '../data/mealScheduleData';
import { DIET_PLANS_DATA } from '../data/dietPlansData';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const PRESET_QUERIES = [
  'I have severe cold and cough, what should I eat for dinner tonight?',
  'Best vegetarian Indian foods to hit 120g protein without whey?',
  'What should I eat when I have burning acidity after spicy food?',
  'Can I eat curd at night if I am trying to build muscle?',
  'Best breakfast for weight loss with Indian ingredients?'
];

export const AskNutritionAI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Namaste! I am your Indian Clinical Nutrition & Ayurvedic Food Advisor. You can ask me what to eat right now, how to cure specific health issues (cold, fever, cough, acidity, bloating), or how to optimize Indian meals for bulking and weight loss. How can I guide you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Intelligent domain response generator
  const generateExpertResponse = (query: string): string => {
    const q = query.toLowerCase();

    // Cold / Cough / Congestion
    if (q.includes('cold') || q.includes('cough') || q.includes('cuff') || q.includes('congestion') || q.includes('sinus') || q.includes('phlegm') || q.includes('jaladosham')) {
      return `### Curative Protocol for Cold & Cough:

**What to Eat & Drink Immediately:**
1. **Garlic-Black Pepper Rasam:** Take 1 warm cup before lunch or with steaming rice and 1/2 tsp cow ghee. Piperine and allicin clear bronchial passages.
2. **Raw Ginger Juice + Wild Honey + Black Pepper:** Mix 1 tsp fresh ginger juice with 1 tsp raw honey and a pinch of black pepper. Lick slowly 3 times a day; do not drink water for 15 minutes after.
3. **Bedtime Golden Milk (Haldi Doodh):** Warm boiled milk with 1/4 tsp pure turmeric, crushed black pepper, and nutmeg.
4. **Nani's Besan Ka Sheera:** Roast 1 tbsp besan in 1 tsp ghee, add warm milk, turmeric, black pepper, and jaggery. Eat warm before bed for instant chest decongestion.

**Strictly Avoid:**
- Cold refrigerated water, ice cream, and chilled drinks.
- Curd (dahi) and buttermilk, especially after sunset (causes instant mucus surge).
- Deep fried snacks (bajjis, pakoras) and sweet confectionery.

**Ideal Meal Timing:**
- **Morning:** Hot ginger-tulsi tea + warm soft idlis with pepper rasam.
- **Lunch:** Rice with hot garlic rasam and sautéed methi (fenugreek).
- **Dinner:** Warm moong dal khichdi with ghee, followed by Haldi Doodh.`;
    }

    // Fever / Jwaram
    if (q.includes('fever') || q.includes('jwaram') || q.includes('chills') || q.includes('temperature')) {
      return `### Curative Protocol for Fever (Jwaram):

In Ayurveda, fever occurs when digestive fire (Jatharagni) is impaired, resulting in endotoxins (Ama). The core principle is **Langhana** (light, warm liquid feeding to let the immune system fight the infection):

**What to Consume:**
1. **Thin Moong Dal Kanji (Manda):** Boil 2 tbsp yellow split moong dal in 4 cups water with turmeric, roasted cumin, and rock salt. Drink the warm, clear broth.
2. **Tulsi-Ginger-Giloy Decoction:** Boil 10 holy basil leaves, 1 inch ginger, and cinnamon in 300ml water until reduced to half. Drink warm twice daily.
3. **Warm Boiled Water Infused with Dhaniya (Coriander) Seeds:** Keeps you hydrated and gently cools internal Pitta heat without chilling the body.
4. **Steamed Apple or Stewed Pear:** Light pectin nourishment that requires zero heavy digestion.

**Strictly Avoid:**
- Heavy fried foods, biryani, or non-veg gravies (the body cannot process fats during fever).
- Cold dairy, chilled curd, or ice water.
- Force-feeding heavy solids when appetite is absent.`;
    }

    // Acidity / Heartburn / GERD
    if (q.includes('acid') || q.includes('heartburn') || q.includes('gerd') || q.includes('reflux') || q.includes('burning') || q.includes('chest burn')) {
      return `### Protocol for Acidity & Heartburn (Amlapitta):

**Instant Soothers:**
1. **Tender Coconut Water:** Drink 1 fresh green coconut water at room temperature. Its high potassium and alkaline minerals soothe the gastric mucosa within minutes.
2. **Cumin-Fennel-Mint Buttermilk (Chaas):** Blend 1/4 cup fresh homemade curd with 3/4 cup water, discard top butter, add roasted jeera and mint. Drink after lunch.
3. **Chew Saunf (Fennel Seeds) with Mishri:** Chew 1 tsp fennel seeds slowly after meals; the anethole compound relaxes esophageal spasms.
4. **Fresh Ash Gourd (Safed Petha) Juice:** The most alkaline vegetable juice in nature. Drink 100ml early morning on an empty stomach.

**Strictly Avoid:**
- Red chilli powder, raw green chillies, and oily Indian pickles (achar).
- Black tea or coffee on an empty stomach.
- Lying down flat immediately after dinner. Maintain at least 2.5 hours between dinner and sleep.`;
    }

    // Bulking / High Protein Indian
    if (q.includes('bulk') || q.includes('muscle') || q.includes('protein') || q.includes('gym') || q.includes('hypertrophy') || q.includes('gains')) {
      return `### High-Protein Indian Bulking Blueprint (130g–160g Protein):

Bulking on an Indian diet requires **protein densification** rather than simply eating more white rice and roti.

**Top Indian Protein Champions:**
1. **Soya Chunks:** 52g protein per 100g. Prepare as Soya Bhurji with onions, tomatoes, and garam masala (gives 26g protein per katori).
2. **Low-Fat Paneer:** 18g–20g protein per 100g. Have 100g grilled or lightly tossed with capsicum.
3. **Bihar Roasted Gram Flour (Sattu):** 20g natural protein per 100g. Mix 40g sattu in milk or spiced water for an effortless 16g protein boost.
4. **Sprouted Moong & Kala Chana:** Sprouting increases protein bioavailability by 30%. Have a large bowl tossed with paneer and lemon post-workout.
5. **Eggs & Chicken Breast (if Non-Veg):** 3 whole eggs + 2 egg whites for breakfast (24g protein), 150g chicken breast curry for lunch (38g protein).

**Sample Day:**
- **Breakfast:** 3 Moong dal cheelas stuffed with 100g paneer (32g protein).
- **Mid-Morning:** Desi Mass Shake: Whole milk + banana + 40g oats + 2 tbsp peanut butter (22g protein).
- **Lunch:** 3 Rotis + 1 bowl Rajma + 80g Soya chunks curry (40g protein).
- **Post-Workout:** Sprouted chana chaat + 2 boiled eggs or paneer cubes (24g protein).
- **Dinner:** 2 Phulkas + Dal Tadka + 100g Paneer / Fish (28g protein).`;
    }

    // Weight Loss / Fat Loss
    if (q.includes('weight loss') || q.includes('fat loss') || q.includes('diet') || q.includes('belly fat') || q.includes('cutting')) {
      return `### Indian Fat Loss & Lean Transformation Protocol:

**The Golden 3 Rules:**
1. **Eat Fiber First:** Eat a raw cucumber, tomato, and carrot salad with lemon juice 10 minutes *before* your roti or rice. This forms a fiber barrier in the gut that slows glucose spikes by 40%.
2. **Swap Polished Rice with Millets:** Replace white rice with Foxtail Millet (Korralu), Jowar roti, or Besan Cheela. Millets possess a low glycemic index and high satiety.
3. **Light, Early Dinner (Before 8:00 PM):** Keep dinner low-carb (Moong Dal Soup + Grilled Paneer or Steamed Chicken). This allows overnight lipolysis (fat burning) while sleeping.

**Calorie-Efficient High-Satiety Indian Foods:**
- **Sprouted Moong Cheela:** High protein, under 300 kcal.
- **Cumin Chaas (Buttermilk):** Fills the stomach with fluid and probiotics for only 50 kcal.
- **Roasted Makhana (Foxnuts):** The ultimate evening crunch substitute for fried chips.
- **Palak Dal & Lauki (Bottle Gourd) Curry:** Water-dense, nutrient-rich, ultra-low calorie density.`;
    }

    // General fallback
    return `### Indian Nutritional Recommendation:

Based on your query:
1. **Circadian Meal Timing:** Align your heaviest meal with peak midday sun (1:00 PM – 2:00 PM) when your Jatharagni (digestive fire) is naturally strongest.
2. **Morning Digestive Reset:** Start your morning between 6:00 AM – 7:30 AM with warm ginger-cumin water and soaked peeled almonds to cleanse metabolic toxins (Ama).
3. **Light Dinner:** Finish dinner by 8:00 PM (at least 2.5 hours before sleeping) with light dishes like Moong Dal Khichdi or Bottle Gourd Soup to ensure deep cellular recovery overnight.

Would you like specific food choices for a particular symptom, or a custom bulking/cutting meal plan?`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setInput('');
    const newMessages: Message[] = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setIsTyping(true);

    // Simulate thoughtful dietician response
    setTimeout(() => {
      const reply = generateExpertResponse(userText);
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section className="space-y-8">
      {/* Intro Header */}
      <div className="bg-stone-900 text-stone-100 p-8 sm:p-10 rounded-2xl border border-stone-800 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Nutrition Consultant</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Ask Your Indian Food & Remedy Dietician
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Have a specific scenario? Ask about illness recovery meals, timing questions, vegetarian protein alternatives, or foods for gut healing.
          </p>
        </div>
      </div>

      {/* Preset Queries */}
      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs space-y-2">
        <div className="text-xs font-semibold text-stone-500">Popular nutrition questions:</div>
        <div className="flex flex-wrap gap-2">
          {PRESET_QUERIES.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInput(preset);
              }}
              className="text-xs px-3 py-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/80 transition-colors text-left cursor-pointer"
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden flex flex-col h-[560px]">
        {/* Messages List */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 no-scrollbar">
          {messages.map((msg, i) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={i}
                className={`flex gap-3 text-xs sm:text-sm ${
                  isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-full bg-amber-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-amber-200" />
                  </div>
                )}
                <div
                  className={`p-4 rounded-2xl max-w-2xl leading-relaxed ${
                    isUser
                      ? 'bg-stone-900 text-stone-100 rounded-tr-xs'
                      : 'bg-stone-50 border border-stone-200 text-stone-800 rounded-tl-xs whitespace-pre-line'
                  }`}
                >
                  {msg.content}
                </div>
                {isUser && (
                  <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
          {isTyping && (
            <div className="flex gap-3 text-xs text-stone-500 items-center">
              <div className="w-8 h-8 rounded-full bg-amber-800 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-amber-200" />
              </div>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700 animate-pulse"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700 animate-pulse delay-100"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700 animate-pulse delay-200"></span>
                <span className="text-stone-500 text-xs ml-1">Consulting Ayurvedic nutrition...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-stone-200 bg-stone-50/60">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about meal timing, remedies for cold/fever, or bulking foods..."
              className="flex-1 px-4 py-2.5 text-sm bg-white border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="px-4 py-2.5 bg-amber-800 text-white rounded-xl text-xs font-semibold hover:bg-amber-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>Ask</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
