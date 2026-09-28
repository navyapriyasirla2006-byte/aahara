import { DietPlan } from '../types/nutrition';

export const DIET_PLANS_DATA: DietPlan[] = [
  {
    id: 'bulking',
    title: 'Indian Muscle Bulking & Strength Gain',
    subtitle: 'High-protein, calorie-surplus Indian nutrition for lean muscle mass without dirty fat gain',
    targetGoal: 'Hypertrophy, strength progression, and healthy weight gain (approx. 2800 – 3200 kcal)',
    dailyCalorieRange: '2,800 – 3,200 kcal',
    proteinTarget: '130g – 160g daily',
    macroSplit: {
      carbs: 50,
      protein: 25,
      fats: 25
    },
    overview: 'Bulking on an Indian diet requires deliberate protein densification. Relying solely on standard dal and white rice results in carb-heavy bloat. This plan combines high-yield vegetarian proteins (Paneer, Soya chunks, Sattu, Sprouted legumes, Greek-style curd) with bioavailable complex carbohydrates and healthy fats (A2 cow ghee, nuts, seeds). Non-vegetarians can incorporate eggs and chicken breast for effortless protein targets.',
    meals: [
      {
        slot: 'Early Morning (6:30 AM)',
        timing: '6:30 AM',
        vegOption: '1 glass warm milk with 1 scoop Sattu + 10 soaked almonds + 4 soaked walnuts + 2 Medjool dates',
        nonVegOption: 'Same as veg (optimal for morning micronutrients)',
        caloriesApprox: 380,
        proteinGrams: 16,
        proTip: 'Sattu (roasted Bengal gram) is the ancient Indian superfood containing 20g natural protein per 100g with high digestibility.'
      },
      {
        slot: 'Power Breakfast (8:30 AM)',
        timing: '8:30 AM',
        vegOption: '3 Besan & Moong Dal Cheelas stuffed with 100g grated paneer + mint coriander chutney + 1 banana',
        nonVegOption: '3 whole eggs (scrambled or boiled) + 2 slices whole wheat toast with peanut butter + 1 banana',
        caloriesApprox: 620,
        proteinGrams: 32,
        proTip: 'Pairing paneer with legumes creates a complete amino acid profile with optimal leucine for muscle protein synthesis.'
      },
      {
        slot: 'Mid-Morning Mass Shake (11:00 AM)',
        timing: '11:00 AM',
        vegOption: 'Desi Bulking Smoothie: 300ml whole milk + 40g oats + 1 banana + 2 tbsp peanut butter + 1 tbsp chia seeds + pinch of cinnamon',
        nonVegOption: 'Same as veg (smoothies are universally efficient for clean liquid calories)',
        caloriesApprox: 540,
        proteinGrams: 22,
        proTip: 'Liquid calories are key for Indian bulking because they bypass early gastric fullness from bulky fiber.'
      },
      {
        slot: 'Midday Heavy Lunch (1:30 PM)',
        timing: '1:30 PM',
        vegOption: '3 Whole wheat / Jowar rotis + 1.5 cups Rajma or Chole + 100g Soya chunks bhurji (sautéed with onions, tomatoes & spices) + 1 bowl cucumber raita',
        nonVegOption: '1.5 cups brown/white rice + 180g Chicken breast curry (cooked in light olive or mustard oil) + 1 bowl yellow dal + green salad',
        caloriesApprox: 750,
        proteinGrams: 42,
        proTip: 'Soya chunks boast 52g protein per 100g—the undisputed champion of vegetarian bodybuilding.'
      },
      {
        slot: 'Pre-Workout Fuel (4:30 PM)',
        timing: '4:30 PM',
        vegOption: '2 boiled sweet potatoes or 2 whole grain rotis with 1 tbsp peanut butter + black coffee or ginger green tea',
        nonVegOption: '2 boiled potatoes with pinch of rock salt + black coffee',
        caloriesApprox: 260,
        proteinGrams: 6,
        proTip: 'Consume complex carbs 60–90 minutes before your workout to fully saturate muscle glycogen stores.'
      },
      {
        slot: 'Post-Workout Anabolic Window (6:30 PM)',
        timing: '6:30 PM',
        vegOption: '1 bowl boiled Sprouted Moong & Kala Chana Chaat (tossed with paneer cubes, tomatoes, lemon & chaat masala)',
        nonVegOption: '4 Boiled Egg Whites + 1 Whole Egg or 150g grilled chicken cubes with lime',
        caloriesApprox: 320,
        proteinGrams: 26,
        proTip: 'Sprouting legumes increases protein bioavailability by 30% and dramatically reduces flatulence-causing phytates.'
      },
      {
        slot: 'Restorative Dinner (8:30 PM)',
        timing: '8:30 PM',
        vegOption: '2 Whole wheat phulkas with 1 tsp ghee + 1 bowl Dal Tadka + 100g Paneer cubes dry-tossed with capsicum & tomatoes (Paneer Tikka style)',
        nonVegOption: '2 Phulkas + 150g Rohu / Salmon fish curry or light chicken curry + 1 bowl mixed vegetable sabzi',
        caloriesApprox: 580,
        proteinGrams: 30,
        proTip: 'Paneer contains slow-digesting micellar casein, providing a steady stream of amino acids into the bloodstream across the night.'
      }
    ],
    groceryStaples: [
      'Low-fat or Malai Paneer (200g daily)',
      'Soya Chunks / Nutrela (Defatted soy meal)',
      'Bihar Roasted Gram Flour (Sattu)',
      'Kala Chana & Green Whole Moong for sprouting',
      'Whole raw Peanuts & Peanut Butter',
      'Desi Cow Ghee (for calorie density and joint lubrication)',
      'Eggs (if non-vegetarian) & Lean Chicken Breast'
    ],
    goldenHabits: [
      'Eat in a consistent 300–500 kcal surplus above your maintenance calories.',
      'Progressive overload: Track your lifting weights weekly alongside your food intake.',
      'Sleep 7.5 to 8.5 hours—90% of growth hormone is secreted during deep stage-3 sleep.'
    ]
  },
  {
    id: 'fat-loss',
    title: 'Indian Fat Loss & Lean Transformation',
    subtitle: 'Calorie-deficit, high-satiety Indian meals to burn stubborn belly fat while retaining tone',
    targetGoal: 'Fat burning, waist reduction, and metabolic acceleration (approx. 1500 – 1800 kcal)',
    dailyCalorieRange: '1,500 – 1,800 kcal',
    proteinTarget: '90g – 120g daily',
    macroSplit: {
      carbs: 40,
      protein: 35,
      fats: 25
    },
    overview: 'The biggest mistake in Indian weight loss is surviving on plain biscuits, fruits, and starving at night. This scientifically structured plan replaces high-GI polished white rice with low-glycemic millets, boosts high-satiety fiber via cruciferous vegetables and cucumber, and delivers 100g+ protein without excess saturated fat.',
    meals: [
      {
        slot: 'Awakening Detox (6:30 AM)',
        timing: '6:30 AM',
        vegOption: 'Warm water with 1/2 lemon juice, 1/2 inch crushed ginger, and a pinch of cinnamon + 5 soaked almonds',
        nonVegOption: 'Same as veg',
        caloriesApprox: 70,
        proteinGrams: 3,
        proTip: 'Cinnamon mimics insulin and suppresses morning cortisol-driven sugar cravings.'
      },
      {
        slot: 'High-Satiety Breakfast (8:30 AM)',
        timing: '8:30 AM',
        vegOption: '2 Sprouted Moong Dal Cheelas cooked with minimal oil spray + mint-coriander chutney + 1 cup unsweetened black/green tea',
        nonVegOption: '1 Whole Egg + 3 Egg Whites omelette loaded with spinach, onions, and tomatoes + 1 slice multigrain toast',
        caloriesApprox: 310,
        proteinGrams: 20,
        proTip: 'Protein has a high Thermic Effect of Food (TEF); 25% of its calories are burned merely during digestion.'
      },
      {
        slot: 'Mid-Morning Appetite Regulator (11:00 AM)',
        timing: '11:00 AM',
        vegOption: '1 tall glass Cumin-Spiced Buttermilk (Chaas) with fresh mint and curry leaves',
        nonVegOption: 'Same as veg',
        caloriesApprox: 60,
        proteinGrams: 4,
        proTip: 'Buttermilk fills the stomach with fluid and probiotics for less than 70 calories.'
      },
      {
        slot: 'Clean Portion-Controlled Lunch (1:30 PM)',
        timing: '1:30 PM',
        vegOption: '1 bowl raw cucumber-tomato-onion salad with lemon (eaten first!) + 1 Jowar/Bajra roti + 1 large katori Palak Dal (Spinach Lentils) + 1 bowl sautéed Lauki (Bottle Gourd)',
        nonVegOption: '1 Jowar roti + 150g grilled chicken breast or steamed fish pulusu + 1 large bowl green salad',
        caloriesApprox: 450,
        proteinGrams: 28,
        proTip: 'Always eat the fiber (salad) first. This forms a viscous mesh in the stomach that slows carbohydrate absorption.'
      },
      {
        slot: 'Crunchy Evening Snack (5:00 PM)',
        timing: '5:00 PM',
        vegOption: '1 bowl dry roasted Makhana (foxnuts) seasoned with black pepper and turmeric + 1 cup green tea',
        nonVegOption: '1 bowl boiled black chana chaat with chopped tomatoes and lime',
        caloriesApprox: 130,
        proteinGrams: 5,
        proTip: 'Makhana contains zero cholesterol and satisfies the oral crunchy urge without potato chip calories.'
      },
      {
        slot: 'Light & Early Dinner (7:45 PM)',
        timing: '7:45 PM',
        vegOption: '1 large bowl Warm Moong Dal & Vegetable Soup with 75g lightly grilled low-fat paneer or tofu cubes',
        nonVegOption: '1 large bowl Clear Chicken Vegetable Soup with 1 boiled egg',
        caloriesApprox: 340,
        proteinGrams: 24,
        proTip: 'Keeping dinner low in carbs reduces overnight insulin and allows high lipolysis (fat breakdown) while sleeping.'
      }
    ],
    groceryStaples: [
      'Jowar (Sorghum) and Bajra (Pearl Millet) flour',
      'Whole green moong & yellow split moong dal',
      'Low-fat paneer or firm Tofu',
      'Bottle gourd (Lauki), Ridge gourd (Turai), Spinach',
      'Makhana (Foxnuts) for mindful snacking',
      'Egg whites and lean skinless chicken breast'
    ],
    goldenHabits: [
      'Drink 3 liters of water throughout the day. Dehydration often mimics hunger.',
      'Stop eating by 8:00 PM. Follow a natural 12–14 hour overnight fasting window (e.g. 8 PM to 8 AM).',
      'Aim for 8,000 to 10,000 daily steps for steady non-exercise physical thermogenesis (NEAT).'
    ]
  },
  {
    id: 'maintenance',
    title: 'Balanced Indian Vitality & Longevity',
    subtitle: 'Timeless Ayurvedic thali balance for sustained energy, gut harmony, and mental clarity',
    targetGoal: 'Maintenance of ideal body composition and long-term health (approx. 2000 – 2200 kcal)',
    dailyCalorieRange: '2,000 – 2,200 kcal',
    proteinTarget: '80g – 100g daily',
    macroSplit: {
      carbs: 50,
      protein: 25,
      fats: 25
    },
    overview: 'Designed for working professionals, students, and families who want delicious, authentic home-cooked Indian meals without feeling lethargic. Focuses on the Shad Rasa (six tastes) principle: Sweet, Sour, Salty, Pungent, Bitter, and Astringent in every meal to prevent post-meal cravings.',
    meals: [
      {
        slot: 'Morning Awakening (7:00 AM)',
        timing: '7:00 AM',
        vegOption: 'Warm water with soaked almonds (5) + soaked walnuts (2) + 1 tsp chyawanprash or amla juice',
        caloriesApprox: 120,
        proteinGrams: 4,
        proTip: 'Amla provides 20x the vitamin C of an orange, strengthening cellular collagen and immunity.'
      },
      {
        slot: 'Wholesome Breakfast (8:30 AM)',
        timing: '8:30 AM',
        vegOption: '3 Steamed Idlis with drumstick-tomato sambar and coconut-mint chutney + 1 cup warm spiced chai',
        nonVegOption: '2 Eggs poached or boiled + 2 Idlis with hot vegetable sambar',
        caloriesApprox: 420,
        proteinGrams: 16,
        proTip: 'Idli and sambar combined provides all 9 essential amino acids with near-zero saturated fat.'
      },
      {
        slot: 'Hydration Break (11:00 AM)',
        timing: '11:00 AM',
        vegOption: '1 fresh tender coconut water or 1 bowl of seasonal fresh papaya / guava slices',
        caloriesApprox: 90,
        proteinGrams: 2,
        proTip: 'Hydrate before you feel thirsty; thirst signals a 2% cellular dehydration state.'
      },
      {
        slot: 'Royal Lunch Thali (1:30 PM)',
        timing: '1:30 PM',
        vegOption: '2 Whole wheat rotis + 1 small cup red/brown rice + 1 bowl Dal Tadka + 1 cup seasonal vegetable sabzi (Bhindi / Aloo-Gobi / Beans) + 1 glass spiced buttermilk',
        nonVegOption: '2 Rotis + 1 small cup rice + 150g Fish Curry or Egg Curry + vegetable salad + buttermilk',
        caloriesApprox: 680,
        proteinGrams: 28,
        proTip: 'Include a splash of desi cow ghee; fat-soluble vitamins (A, D, E, K) require lipid carriers.'
      },
      {
        slot: 'Sunset Snack (5:00 PM)',
        timing: '5:00 PM',
        vegOption: 'Handful of roasted chana + 1 cup ginger cardamom tea (minimal jaggery)',
        caloriesApprox: 140,
        proteinGrams: 6,
        proTip: 'Roasted chana provides low-calorie crunch with high satiety index.'
      },
      {
        slot: 'Light Dinner (8:00 PM)',
        timing: '8:00 PM',
        vegOption: '1.5 bowls comforting Moong Dal Khichdi cooked with diced carrots, beans, and cumin + roasted papad + cucumber slices',
        nonVegOption: 'Clear chicken noodle soup or 2 soft phulkas with light chicken stew',
        caloriesApprox: 480,
        proteinGrams: 18,
        proTip: 'Finishing dinner 2–3 hours before bed allows core body temperature to drop for restful sleep.'
      },
      {
        slot: 'Bedtime Elixir (10:00 PM)',
        timing: '10:00 PM',
        vegOption: '150ml warm Haldi Doodh (turmeric golden milk with black pepper and pinch of nutmeg)',
        caloriesApprox: 110,
        proteinGrams: 5,
        proTip: 'Nutmeg stimulates natural neurotransmitters that induce slow-wave delta sleep.'
      }
    ],
    groceryStaples: [
      'Traditional whole wheat flour, Ragi, and Brown/Handpound rice',
      'Toor dal, Moong dal, and Chana dal',
      'Fresh local seasonal vegetables and greens',
      'Cold-pressed sesame, groundnut, or mustard oil + A2 Cow Ghee',
      'Amla, Curd, and whole spices (Jeera, Methi, Ajwain, Haldi)'
    ],
    goldenHabits: [
      'Chew every mouthful 20 times. Digestion begins in the mouth with salivary amylase.',
      'Sit cross-legged (Sukhasana) when possible to promote pelvic blood circulation during eating.',
      'Never drink ice-cold water with hot meals; it congeals fats and suppresses digestive acids.'
    ]
  },
  {
    id: 'gut-detox',
    title: 'Sattvic Gut Reset & Detoxification',
    subtitle: 'Gentle, anti-inflammatory Ayurvedic reset to clear endotoxins (Ama) and heal the microbiome',
    targetGoal: 'Gut lining repair, resolving chronic bloat, and restoring vibrant energy (approx. 1400 – 1600 kcal)',
    dailyCalorieRange: '1,400 – 1,600 kcal',
    proteinTarget: '65g – 80g daily',
    macroSplit: {
      carbs: 55,
      protein: 20,
      fats: 25
    },
    overview: 'When the gut feels sluggish, heavy, or inflamed from irregular meals, processed foods, or stress, the Ayurvedic Sattvic Gut Reset acts as a gentle reboot. Centered on Kitchari (the ancient Ayurvedic medicinal dish of split yellow moong and basmati/millet), light broths, cooling curds, and digestive herbal waters.',
    meals: [
      {
        slot: 'Dawn Detox (6:30 AM)',
        timing: '6:30 AM',
        vegOption: '1 glass warm CCF Tea (Cumin, Coriander, Fennel seeds boiled together) on empty stomach',
        caloriesApprox: 15,
        proteinGrams: 0,
        proTip: 'CCF tea flushes lymphatic congestion and calms irritated gut lining.'
      },
      {
        slot: 'Gentle Breakfast (8:30 AM)',
        timing: '8:30 AM',
        vegOption: 'Warm stewed apples with cloves and cinnamon + warm thin Ragi malt porridge with water and pinch of jaggery',
        caloriesApprox: 240,
        proteinGrams: 5,
        proTip: 'Stewed apples release high concentrations of pectin, a prebiotic that binds to gut epithelial cells.'
      },
      {
        slot: 'Mid-Morning Hydration (11:00 AM)',
        timing: '11:00 AM',
        vegOption: '1 glass fresh Tender Coconut Water or Ash Gourd (Petha) juice',
        caloriesApprox: 60,
        proteinGrams: 1,
        proTip: 'Ash gourd juice possesses an ultra-alkaline nature that cools visceral inflammation.'
      },
      {
        slot: 'Medicinal Kitchari Lunch (1:30 PM)',
        timing: '1:30 PM',
        vegOption: '1 large bowl Classic Ayurvedic Kitchari (split yellow moong dal + rice cooked soft with cumin, turmeric, ginger, and 1 tsp pure ghee) + 1 glass thin spiced chaas',
        caloriesApprox: 460,
        proteinGrams: 16,
        proTip: 'Yellow moong dal is the only legume in Ayurveda that does not cause gas; its amino acids rebuild gut tight junctions.'
      },
      {
        slot: 'Digestive Tea (4:30 PM)',
        timing: '4:30 PM',
        vegOption: 'Warm Licorice (Mulethi) & Fresh Mint tea + 4 soaked dried figs (Anjeer)',
        caloriesApprox: 90,
        proteinGrams: 2,
        proTip: 'Mulethi forms a protective mucus-like coating across the entire gastrointestinal tract.'
      },
      {
        slot: 'Restorative Soup Dinner (7:30 PM)',
        timing: '7:30 PM',
        vegOption: '1 large bowl Bottle Gourd (Lauki) & Moong Dal Soup tempered with cumin and hing + steamed zucchini/beans',
        caloriesApprox: 280,
        proteinGrams: 12,
        proTip: 'A light, water-rich soup at night ensures total digestive rest during sleeping hours.'
      }
    ],
    groceryStaples: [
      'Split Yellow Moong Dal (Dhuli Moong)',
      'Basmati or Aged Brown Rice',
      'Ash Gourd, Bottle Gourd, Pumpkin, and Carrots',
      'A2 Cow Ghee (contains gut-healing Butyrate)',
      'Whole Cumin, Coriander, Fennel seeds, and Licorice root'
    ],
    goldenHabits: [
      'Do this gut reset for 3 to 7 days whenever you feel lethargic or recovering from heavy celebrations.',
      'Avoid all dairy (except pure ghee and thin chaas), refined wheat, fried foods, and refined sugars.',
      'Sip warm water throughout the day. Never drink iced liquids.'
    ]
  }
];
