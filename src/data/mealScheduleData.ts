import { TimeSlotInfo } from '../types/nutrition';

export const MEAL_TIME_SLOTS: TimeSlotInfo[] = [
  {
    id: 'early-morning',
    title: 'Early Morning Awakening',
    timeRange: '6:00 AM – 7:30 AM',
    startHour: 6,
    endHour: 7.5,
    ayurvedicTime: 'Brahma Muhurta / Vata Dominance',
    tagline: 'Internal cellular awakening & gentle digestive detox',
    digestiveState: 'Digestive fire (Jatharagni) is just igniting; requires warm, light fluid intake.',
    recommendations: [
      {
        name: 'Warm Jeera-Ginger Water or Tulsi Tea',
        category: 'Herbal',
        description: 'Boil 1 glass of water with 1/2 tsp cumin seeds and grated fresh ginger. Drink warm.',
        isVeg: true,
        benefits: 'Flushes metabolic toxins (Ama), stimulates peristalsis and bowel regularity.',
        portion: '200–250 ml warm'
      },
      {
        name: 'Soaked Almonds & Walnuts',
        category: 'Solid',
        description: '5 peeled soaked almonds and 2 walnut halves soaked overnight in water.',
        isVeg: true,
        benefits: 'Removes enzyme-inhibiting phytic acid, delivers vitamin E & healthy brain fats without burdening the stomach.',
        portion: '5 almonds + 2 walnuts'
      },
      {
        name: 'Copper Vessel Water (Tamra Jal)',
        category: 'Drink',
        description: 'Water kept overnight in a clean pure copper bottle or jug, drunk at room temperature.',
        isVeg: true,
        benefits: 'Natural antibacterial properties, balances all three doshas (Tridoshic).',
        portion: '1 tall glass'
      }
    ],
    avoidAtThisTime: [
      'Empty stomach milk tea or heavy black coffee (triggers gastric mucosal acid surge)',
      'Refrigerated cold water or icy drinks (shuts down nascent digestive fire)',
      'Heavy bakery puffs, biscuits, or fried savories'
    ],
    goldenRule: 'Always drink warm water sitting down. Never shock your empty gut with refrigerator-cold liquids.'
  },
  {
    id: 'breakfast',
    title: 'Nourishing Breakfast',
    timeRange: '8:00 AM – 9:30 AM',
    startHour: 8,
    endHour: 9.5,
    ayurvedicTime: 'Kapha Transition',
    tagline: 'Warm, nutrient-dense sustained energy for cognitive & physical output',
    digestiveState: 'Agni is building up. Requires warm, cooked, easy-to-digest carbs with good protein.',
    recommendations: [
      {
        name: 'Steamed Idli with Sambar & Coconut-Mint Chutney',
        category: 'Solid',
        description: 'Fermented lentil and rice batter steamed softly, served with hot drumstick-lentil sambar.',
        isVeg: true,
        benefits: 'Fermentation enhances B-vitamins & gut microbiome bio-availability; sambar supplies vegetable fiber and plant protein.',
        portion: '3–4 idlis + 1 bowl sambar'
      },
      {
        name: 'Besan & Moong Dal Cheela with Paneer Stuffing',
        category: 'Solid',
        description: 'Golden gram flour crepe spiced with ajwain, coriander, and filled with grated low-fat paneer.',
        isVeg: true,
        benefits: 'High protein (16–20g), low glycemic index, prevents mid-morning energy crashes.',
        portion: '2 medium cheelas'
      },
      {
        name: 'Vegetable Poha with Roasted Peanuts & Lime',
        category: 'Solid',
        description: 'Flattened rice tossed with mustard seeds, curry leaves, carrots, green peas, and crunchy peanuts.',
        isVeg: true,
        benefits: 'Natural plant iron from flattened rice enhanced by vitamin C from fresh lime squeeze.',
        portion: '1 medium plate'
      },
      {
        name: 'Sprouted Moong & Boiled Egg Bowl (Non-Veg Option)',
        category: 'Solid',
        description: '2 boiled whole eggs or 3 egg whites paired with warm steamed green moong sprouts tossed with lemon & rock salt.',
        isVeg: false,
        benefits: '22g complete bioavailable amino acids for muscle preservation and mental alertness.',
        portion: '1 bowl + 2 eggs'
      }
    ],
    avoidAtThisTime: [
      'Skipping breakfast entirely (leads to midday bingeing and sluggish bile secretion)',
      'High-sugar processed breakfast cereals or frosted flakes',
      'Stale leftovers from 2 days prior'
    ],
    goldenRule: 'Eat within 2 hours of waking. Keep it warm and freshly prepared rather than dry or chilled.'
  },
  {
    id: 'mid-morning',
    title: 'Mid-Morning Hydration & Mineral Boost',
    timeRange: '11:00 AM – 11:30 AM',
    startHour: 11,
    endHour: 12,
    ayurvedicTime: 'Pitta Rising',
    tagline: 'Electrolyte replenishment & natural body cooling',
    digestiveState: 'Breakfast is mostly processed; cellular hydration window before midday lunch.',
    recommendations: [
      {
        name: 'Tender Coconut Water (Elaneer / Kobbari Neellu)',
        category: 'Drink',
        description: 'Fresh coconut water straight from green coconut, preferably with soft malai.',
        isVeg: true,
        benefits: 'Abundant natural potassium, magnesium, and enzymes; instantly rehydrates cells and lowers internal acidity.',
        portion: '1 fresh coconut (250ml)'
      },
      {
        name: 'Spiced Chaas (Neer Mor / Masala Buttermilk)',
        category: 'Drink',
        description: 'Churned curd diluted with 3x water, tempered with crushed ginger, green chilli, roasted jeera, and curry leaves.',
        isVeg: true,
        benefits: 'Light probiotic, clears pitta heat, prepares stomach lining for lunch without adding heavy calories.',
        portion: '1 tall glass (250ml)'
      },
      {
        name: 'Seasonal Indian Fruit (Papaya / Guava / Sweet Lime)',
        category: 'Snack',
        description: 'Fresh sliced ripe papaya with black salt, or crunchy pink guava.',
        isVeg: true,
        benefits: 'Papain enzyme aids natural digestion; high soluble pectin fiber.',
        portion: '1 small bowl (150g)'
      }
    ],
    avoidAtThisTime: [
      'Carbonated sugary sodas or packaged canned fruit juices (empty sugar spikes)',
      'Heavy fried samosas or pakoras (will ruin midday lunch digestion)'
    ],
    goldenRule: 'Eat whole fruits standalone between meals, never combine sweet raw fruits directly with heavy cooked milk meals.'
  },
  {
    id: 'lunch',
    title: 'Midday Royal Lunch (Peak Agni)',
    timeRange: '1:00 PM – 2:00 PM',
    startHour: 12.5,
    endHour: 14.5,
    ayurvedicTime: 'Pitta Peak / Madhyahna Bhojan',
    tagline: 'The most comprehensive, wholesome balanced meal of your 24-hour cycle',
    digestiveState: 'Digestive fire is at its absolute thermodynamic zenith, mirroring the sun at its highest point.',
    recommendations: [
      {
        name: 'Classic Balanced Indian Thali',
        category: 'Solid',
        description: '2 Jowar/Wheat rotis or 1 bowl brown/red rice + 1 katori Dal Tadka + 1 katori green vegetable (Palak/Methi/Bhindi) + cucumber-tomato salad.',
        isVeg: true,
        benefits: 'Perfect 50% fiber, 25% complex slow carbs, 25% plant protein split. Keeps blood sugar stable for 4 hours.',
        portion: 'Standard thali plate'
      },
      {
        name: 'Curry Leaf Pepper Rasam with Steamed Rice & Ghee',
        category: 'Solid',
        description: 'Tangy tamarind-tomato rasam with black pepper, garlic cloves, cumin, and hing over warm rice with 1 tsp A2 ghee.',
        isVeg: true,
        benefits: 'Piperine in pepper ignites digestive enzymes; garlic lowers cholesterol; ghee coats gut lining.',
        portion: '1 plate'
      },
      {
        name: 'Grilled Chicken Curry or Fish Pulusu (Non-Veg Option)',
        category: 'Solid',
        description: 'Home-cooked country chicken or fresh fish curry prepared with ginger-garlic paste, coriander powder, turmeric, and light gravy.',
        isVeg: false,
        benefits: 'High biological value lean protein, zinc, omega-3 fatty acids, readily assimilated by peak lunch digestion.',
        portion: '150g meat + 1 cup rice/2 rotis'
      }
    ],
    avoidAtThisTime: [
      'Gulping large tumblers of cold water during meals (dilutes gastric juices; take tiny warm sips only)',
      'Immediate deep daytime sleep (Divaswapna causes Kapha congestion and sluggish metabolism; 10 min left-side lounge is ideal)'
    ],
    goldenRule: 'Make lunch your most substantial meal. Eat until 75% full, leaving 25% stomach space for air and digestive motion.'
  },
  {
    id: 'evening',
    title: 'Evening Sunset Refuel',
    timeRange: '4:30 PM – 5:30 PM',
    startHour: 16.5,
    endHour: 17.5,
    ayurvedicTime: 'Vata Period',
    tagline: 'Wholesome crunch to beat the 5 PM slump without sabotaging dinner',
    digestiveState: 'Lunch is completely absorbed; blood glucose dips slightly, demanding clean fuel.',
    recommendations: [
      {
        name: 'Roasted Makhana (Foxnuts) with Ghee & Turmeric',
        category: 'Snack',
        description: 'Puffed lotus seeds dry-roasted in 1/2 tsp ghee with rock salt, turmeric, and black pepper.',
        isVeg: true,
        benefits: 'Extremely low glycemic index, rich in calcium and anti-aging kaempferol flavonoids, zero bloat.',
        portion: '1 generous bowl (30g)'
      },
      {
        name: 'Boiled Chana & Sprout Sundal / Chaat',
        category: 'Snack',
        description: 'Boiled black chana or white chickpeas tossed with mustard seeds, curry leaves, grated fresh coconut, and lemon juice.',
        isVeg: true,
        benefits: 'Delivers 9g sustained fiber and 8g protein to prevent cravings for fried street snacks.',
        portion: '1 small katori'
      },
      {
        name: 'Fresh Ginger-Elaichi Masala Tea or Green Tea',
        category: 'Herbal',
        description: 'Brewed with crushed fresh ginger root, green cardamom pod, and minimal jaggery or plain water infusion.',
        isVeg: true,
        benefits: 'Cardamom dispels abdominal flatulence; ginger stimulates peripheral circulation.',
        portion: '1 small cup (120ml)'
      }
    ],
    avoidAtThisTime: [
      'Deep fried street samosas, bajjis, and bakery pastries (trans-fats trigger evening acidity)',
      'Heavy late caffeine after 6:00 PM (disrupts adenosine sleep receptors)'
    ],
    goldenRule: 'Snack lightly. If your evening snack is too heavy, your dinner will get pushed late into the night.'
  },
  {
    id: 'dinner',
    title: 'Light & Early Dinner',
    timeRange: '7:30 PM – 8:30 PM',
    startHour: 19.5,
    endHour: 20.5,
    ayurvedicTime: 'Kapha Accumulation',
    tagline: 'Light, restorative nourishment finished at least 2–3 hours before sleep',
    digestiveState: 'Digestive fire naturally wanes as the sun sets; heavy food will ferment and cause sluggishness.',
    recommendations: [
      {
        name: 'Moong Dal & Vegetable Khichdi with Ghee',
        category: 'Solid',
        description: 'Split yellow moong dal and rice cooked soft with cumin, ginger, turmeric, and diced carrots/beans, topped with 1 tsp ghee.',
        isVeg: true,
        benefits: 'The ultimate Ayurvedic healing meal; completely effortless on the gastrointestinal tract, promotes restorative sleep.',
        portion: '1.5 bowls'
      },
      {
        name: 'Lauki (Bottle Gourd) or Tomato Soup with Grilled Paneer',
        category: 'Solid',
        description: 'Smooth warm bottle gourd soup seasoned with roasted jeera and black pepper, accompanied by 80g pan-seared paneer cubes.',
        isVeg: true,
        benefits: 'Ultra low calorie, highly hydrating, provides 15g slow-release casein protein overnight without gastric reflux.',
        portion: '1 large bowl soup + paneer'
      },
      {
        name: 'Phulka with Stewed Tinda / Bottle Gourd / Tori Curry',
        category: 'Solid',
        description: '1 to 2 thin soft rotis made from whole wheat or jowar flour with lightly spiced water-based gourd sabzi.',
        isVeg: true,
        benefits: 'Gourds contain over 90% water, cooling internal inflammation while preventing midnight acid reflux.',
        portion: '2 phulkas + 1 cup sabzi'
      }
    ],
    avoidAtThisTime: [
      'Cold curd or yogurt at night (severely aggravates Kapha dosha, induces sinus congestion and mucus)',
      'Heavy rajma, chana, or raw heavy salads at night (causes nighttime gas, bloating, and disturbed sleep)',
      'Eating dinner right before lying down into bed'
    ],
    goldenRule: 'Finish dinner by 8:30 PM. Keep your dinner lighter than your lunch to allow cellular autophagy overnight.'
  },
  {
    id: 'bedtime',
    title: 'Pre-Sleep Rejuvenation Elixir',
    timeRange: '9:45 PM – 10:15 PM',
    startHour: 21.75,
    endHour: 22.5,
    ayurvedicTime: 'Rest & Repair (Ojas Nurturing)',
    tagline: 'Deep cellular restoration, nerve relaxation & uninterrupted REM sleep',
    digestiveState: 'Digestive organs winding down; nervous system requires parasympathetic activation.',
    recommendations: [
      {
        name: 'Golden Turmeric Milk (Haldi Doodh)',
        category: 'Drink',
        description: 'Warm boiled milk (cow milk or almond milk) with 1/4 tsp pure turmeric, pinch of black pepper, and tiny pinch of nutmeg.',
        isVeg: true,
        benefits: 'Curcumin reduces systemic inflammation; piperine boosts absorption by 2000%; nutmeg (jaiphal) naturally triggers GABA for deep sleep.',
        portion: '150 ml warm'
      },
      {
        name: 'Chamomile or Fennel-Ajwain Infusion (Dairy-Free)',
        category: 'Herbal',
        description: '1 tsp fennel seeds and chamomile steeped in hot water for 6 minutes, strained and sipped warm.',
        isVeg: true,
        benefits: 'Relaxes smooth muscles of the digestive tract, eliminates evening gas, calms overactive mind.',
        portion: '1 cup'
      }
    ],
    avoidAtThisTime: [
      'Late-night snacking on chocolates, cookies, or leftover savories',
      'Alcohol or sugary nightcaps (disrupts REM sleep architecture and dehydrates vocal cords)'
    ],
    goldenRule: 'Drink your warm herbal elixir 30 minutes before shut-eye, put screens away, and let your body restore.'
  }
];
