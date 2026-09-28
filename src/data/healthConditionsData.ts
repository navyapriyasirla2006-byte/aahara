import { HealthCondition } from '../types/nutrition';

export const HEALTH_CONDITIONS_DATA: HealthCondition[] = [
  {
    id: 'fever',
    name: 'Fever & Chills',
    teluguName: 'Jwaram (జ్వరం)',
    category: 'Respiratory & Fever',
    summary: 'Elevated body temperature with loss of appetite, chills, shivering, and systemic body aches.',
    rootCause: 'Impaired Jatharagni (digestive fire) leading to endotoxin accumulation (Ama), causing immune pyrogen release.',
    doshaImbalance: 'Pitta-Vata',
    curativeFoods: [
      {
        name: 'Thin Yellow Moong Dal Soup / Kanji (Manda)',
        idealTiming: 'Lunch & Dinner (Warm)',
        role: 'Primary nutritional medicine',
        preparationNote: 'Boil 2 tbsp split moong dal in 4 cups water with a pinch of turmeric, roasted cumin, and rock salt. Strain the clear broth.'
      },
      {
        name: 'Warm Barley Water or Sago (Sabudana) Gruel',
        idealTiming: 'Mid-Morning & Afternoon',
        role: 'Easily absorbable electrolyte and carbohydrate replenishment',
        preparationNote: 'Boil pearl barley until soft; drink the strained warm fluid with a drop of fresh lemon juice.'
      },
      {
        name: 'Steamed Apple or Stewed Pear',
        idealTiming: 'Late Morning',
        role: 'Gentle pectin-rich fruit that requires zero heavy digestion',
        preparationNote: 'Steam peeled apple slices with a clove and tiny pinch of cinnamon until completely soft.'
      },
      {
        name: 'Boiled & Cooled Water Infused with Tulsi & Coriander Seeds',
        idealTiming: 'Throughout the day in small warm sips',
        role: 'Natural antipyretic, cools pitta without suppressing digestion',
        preparationNote: 'Boil 1 liter water with 1 tsp crushed dhaniya seeds and 5 holy basil leaves.'
      }
    ],
    foodsToAvoid: [
      { name: 'Cold water, ice creams, or refrigerated fruits', reason: 'Instantly suppresses body’s healing metabolic fire and causes severe shivering' },
      { name: 'Heavy fried foods, biryani, or oily curries', reason: 'Digesting fats during fever severely exhausts immune energy' },
      { name: 'Cold milk, heavy curd, or cheese', reason: 'Creates thick Ama (mucus and metabolic sludge) aggravating fever duration' },
      { name: 'Hard nuts, raw salads, and heavy non-veg gravies', reason: 'Digestive enzymes are near zero during acute fever' }
    ],
    signatureRemedy: {
      title: 'Ginger-Tulsi-Giloy Healing Antipyretic Decoction',
      prepTime: '8 minutes',
      ingredients: [
        '10 fresh Tulsi (Holy Basil) leaves',
        '1 inch fresh Ginger root (crushed)',
        '1/2 stick Cinnamon',
        '2 crushed Black Peppercorns',
        '1 glass Water (300 ml)',
        '1 tsp raw Honey (added strictly when decoction cools to lukewarm)'
      ],
      instructions: [
        'Bring 300 ml water to a vigorous rolling boil in a stainless steel pan.',
        'Add crushed ginger, black peppercorns, cinnamon, and tulsi leaves.',
        'Simmer on medium flame until liquid reduces to half (approx 150 ml).',
        'Strain into a cup. Wait 3 minutes until lukewarm, then stir in honey.'
      ],
      dosage: 'Take 50–75 ml twice daily after light warm meals.'
    },
    dailyMealTimeline: {
      morning: 'Warm Tulsi-Ginger water + 2 soaked almonds (peeled)',
      noon: 'Warm Moong Dal Kanji (clear lentil soup) with pinch of rock salt and roasted cumin',
      evening: 'Warm stewed apple with clove or light roasted makhana',
      night: 'Ultra-soft well-cooked Moong Dal Khichdi with a drop of warm A2 cow ghee'
    },
    keyScienceInsight: 'During fever, the body deliberately diverts energy away from gastric digestion to fight pathogen replication. Fasting or light liquid feeding (Langhana) accelerates fever resolution.'
  },
  {
    id: 'cold-congestion',
    name: 'Cold, Sinusitis & Nasal Congestion',
    teluguName: 'Jaladosham / Padiyasam (జలుబు)',
    category: 'Respiratory & Fever',
    summary: 'Stuffy nose, sneezing, sinus pressure, watery eyes, and heaviness in the frontal head region.',
    rootCause: 'Aggravated Kapha dosha blocking the Pranavaha Srotas (respiratory channels), with cold Vata causing constriction.',
    doshaImbalance: 'Kapha',
    curativeFoods: [
      {
        name: 'Hot Garlic-Black Pepper Rasam',
        idealTiming: 'Lunch (over warm rice or sipped as soup)',
        role: 'Potent natural decongestant and sinus clearing agent',
        preparationNote: 'Crush 4 cloves garlic with 1 tsp black pepper, 1 tsp cumin, curry leaves, and simmer in tomato-tamarind water with turmeric.'
      },
      {
        name: 'Warm Besan Ka Sheera (Gram Flour Healing Brew)',
        idealTiming: 'Bedtime (Warm)',
        role: 'Traditional north/central Indian instant chest decongestant',
        preparationNote: 'Roast 1 tbsp besan in 1/2 tsp ghee until fragrant golden; add 1 cup warm milk or water, black pepper, turmeric, and pinch of jaggery.'
      },
      {
        name: 'Adrak Chai (Fresh Ginger-Tulsi Tea without Milk)',
        idealTiming: 'Early Morning & 4:00 PM',
        role: 'Gingerol and Shogaol break down stagnant sinus mucus',
        preparationNote: 'Boil crushed ginger root, holy basil, and crushed green cardamom in plain water.'
      },
      {
        name: 'Warm Vegetable Clear Soup with Black Pepper & Hing',
        idealTiming: 'Dinner',
        role: 'Hydrates mucous membranes and liquefies sticky catarrh',
        preparationNote: 'Carrot, beans, and bottle gourd boiled in light broth seasoned with black pepper.'
      }
    ],
    foodsToAvoid: [
      { name: 'Curd, yogurt, and chilled lassi', reason: 'Highly Kapha-aggravating; triggers instant mucus production in airways' },
      { name: 'Bananas, custard apple, and chilled citrus juices', reason: 'High mucous-forming properties during acute respiratory inflammation' },
      { name: 'Deep fried snacks and sweets made with refined sugar', reason: 'Paralyzes white blood cell motility and thickens sinus secretions' },
      { name: 'Refrigerated drinking water', reason: 'Causes instant constriction of nasal capillaries' }
    ],
    signatureRemedy: {
      title: 'Grandmother’s Black Pepper-Garlic Kashayam',
      prepTime: '6 minutes',
      ingredients: [
        '1 tsp freshly cracked Black Peppercorns',
        '4 crushed Garlic cloves',
        '1/2 tsp Cumin seeds',
        '6 fresh Curry leaves',
        '2 cups Water',
        'Pinch of Rock salt'
      ],
      instructions: [
        'Crush garlic, black pepper, and cumin lightly in a mortar.',
        'Boil in 2 cups of water along with curry leaves and rock salt for 5 minutes.',
        'Sip hot like an aromatic healing tea.'
      ],
      dosage: '1 cup in the morning and 1 cup before bed.'
    },
    dailyMealTimeline: {
      morning: 'Hot ginger-tulsi black tea + 1 warm plain toasted millet roti or idli with warm rasam',
      noon: 'Steamed rice with hot garlic-pepper rasam and sautéed methi (fenugreek) leaves',
      evening: 'Warm roasted makhana tossed with black pepper and turmeric',
      night: 'Warm Moong Dal Khichdi seasoned with crushed ginger and hing, followed by warm Besan Sheera'
    },
    keyScienceInsight: 'Capsaicin and piperine activate TRPV1 receptors on airway sensory neurons, thinning mucosal secretions and reducing sinus swelling.'
  },
  {
    id: 'cough',
    name: 'Cough (Dry & Wet / Chest Phlegm)',
    teluguName: 'Daggu & Kaph (దగ్గు & కఫం)',
    category: 'Respiratory & Fever',
    summary: 'Hacking dry tickling in the throat, or rattling chest phlegm with constant throat clearing.',
    rootCause: 'Vata-type dry cough causes throat tickling; Kapha-type wet cough produces heavy lung mucus.',
    doshaImbalance: 'Kapha-Vata',
    curativeFoods: [
      {
        name: 'Warm Honey with Fresh Ginger Juice & Black Pepper',
        idealTiming: 'Immediate relief, 3–4 times daily',
        role: 'Demulcent throat coating and antimicrobial action',
        preparationNote: 'Grate fresh ginger, squeeze 1 tsp raw juice, mix with 1 tsp raw wild honey and a tiny pinch of freshly ground black pepper.'
      },
      {
        name: 'Turmeric-Black Pepper Golden Milk (Haldi Doodh)',
        idealTiming: 'Bedtime (Warm)',
        role: 'Soothes inflamed bronchial passages and arrests nighttime coughing fits',
        preparationNote: 'Boil cow milk or oat milk with 1/4 tsp organic turmeric powder and 2 crushed peppercorns.'
      },
      {
        name: 'Roasted Mulethi (Licorice Root) or Clove In Mouth',
        idealTiming: 'Whenever throat feels scratchy',
        role: 'Stimulates salivation and coats the pharynx with protective mucilage',
        preparationNote: 'Keep a small piece of organic Mulethi stick or 1 clove in cheek and gently suck on its juice.'
      },
      {
        name: 'Warm Steamed Idli with Pepper-Tomato Soup',
        idealTiming: 'Breakfast / Dinner',
        role: 'Soft on raw throat lining while providing easy calories',
        preparationNote: 'Serve hot idlis moistened with mild warm tomato-pepper broth.'
      }
    ],
    foodsToAvoid: [
      { name: 'Ice-cold liquids, soft drinks, and popsicles', reason: 'Triggers severe airway bronchospasm and prolonged coughing fits' },
      { name: 'Crispy fried foods (chips, murukku, fried chicken)', reason: 'Abrasive sharp crumbs irritate inflamed laryngeal mucosa' },
      { name: 'Excessive white refined sugar', reason: 'Feeds local pathogenic bacteria and slows ciliary clearance' },
      { name: 'Raw sour curds and buttermilk at night', reason: 'Causes heavy nocturnal mucus dripping down posterior pharynx' }
    ],
    signatureRemedy: {
      title: 'Ayurvedic Sithopaladi & Ginger Cough Soother',
      prepTime: '3 minutes',
      ingredients: [
        '1 tsp pure raw Honey',
        '1/2 tsp fresh Ginger juice',
        '1 pinch organic Turmeric',
        '1 pinch Cinnamon powder',
        '1 pinch crushed Black Pepper'
      ],
      instructions: [
        'In a small ceramic spoon or bowl, combine raw honey, ginger juice, turmeric, cinnamon, and black pepper.',
        'Stir into a golden syrup.',
        'Lick very slowly, letting it coat the back of your throat. Do not drink water for 15 minutes afterwards.'
      ],
      dosage: 'Take 1 tsp, 3 times a day (morning, post-lunch, bedtime).'
    },
    dailyMealTimeline: {
      morning: 'Warm water with ginger & honey + warm soft vegetable upma or oatmeal',
      noon: 'Steamed rice with light pepper-cumin dal and cooked bottle gourd',
      evening: 'Warm clove and cinnamon herbal tea + 2 plain biscuits or steamed sweet potato',
      night: 'Warm Moong Dal Soup + soft phulkas, followed by warm Haldi Doodh'
    },
    keyScienceInsight: 'Honey has proven clinical superiority over dextromethorphan in pediatric and adult nocturnal cough trials by reducing mucosal hypersensitivity.'
  },
  {
    id: 'sore-throat',
    name: 'Sore Throat, Throat Tickle & Tonsillitis',
    teluguName: 'Gontu Noppi (గొంతు నొప్పి)',
    category: 'Respiratory & Fever',
    summary: 'Painful swallowing, raspy voice, dry burning throat sensation, and inflamed red tonsils.',
    rootCause: 'Bacterial/viral pharyngitis creating intense Pitta inflammation in the Kantha (throat) region.',
    doshaImbalance: 'Pitta',
    curativeFoods: [
      {
        name: 'Warm Salt & Turmeric Gargle Water',
        idealTiming: 'Every 3 hours (especially upon waking & before sleep)',
        role: 'Hypertonic osmotic reduction of pharyngeal edema',
        preparationNote: 'Dissolve 1/2 tsp rock salt and 1/4 tsp pure turmeric powder in 1 glass comfortably warm water.'
      },
      {
        name: 'Mulethi (Licorice) & Cardamom Warm Tea',
        idealTiming: 'Mid-Morning & Late Afternoon',
        role: 'Glycyrrhizin in licorice coats inflamed vocal folds',
        preparationNote: 'Boil crushed licorice root with crushed green cardamom in water for 5 minutes.'
      },
      {
        name: 'Soft Moong Dal Khichdi Mashed with Warm Cow Ghee',
        idealTiming: 'Lunch & Dinner',
        role: 'Glides down throat without mechanical scraping; ghee soothes burning tissues',
        preparationNote: 'Overcook dal and rice until velvety smooth and porridge-like.'
      }
    ],
    foodsToAvoid: [
      { name: 'Very spicy food, red chilli powder, hot green chillies', reason: 'Burns raw ulcerated throat lining' },
      { name: 'Acidic citrus (raw lemon juice, unriped tamarind, vinegar)', reason: 'Severe stinging and acid burn on inflamed vocal folds' },
      { name: 'Dry crunchy toasts, hard crackers, or chips', reason: 'Physically scratches and tears inflamed pharyngeal mucosa' }
    ],
    signatureRemedy: {
      title: 'Turmeric-Salt Gargle & Ghee-Honey Throat Lubricant',
      prepTime: '4 minutes',
      ingredients: [
        '1 tsp warm pure Desi Cow Ghee',
        '1/2 tsp raw Honey (ensure ghee and honey are unequal volumes)',
        'Pinch of Turmeric',
        'Pinch of Black Pepper'
      ],
      instructions: [
        'Mix warm liquid ghee with honey, turmeric, and black pepper.',
        'Swallow slowly so the soothing fat coats the entire larynx and tonsillar pillars.'
      ],
      dosage: 'Take 1/2 tsp before bed after completing your warm saltwater gargle.'
    },
    dailyMealTimeline: {
      morning: 'Salt-turmeric gargle + warm oatmeal or soft ragi porridge with jaggery',
      noon: 'Warm silky moong dal soup with soft mashed rice and ghee',
      evening: 'Warm licorice-tulsi herbal brew',
      night: 'Velvety pumpkin or bottle gourd soup + warm turmeric almond milk'
    },
    keyScienceInsight: 'Osmotic action of warm saline draws fluid out of swollen throat tissues, while turmeric’s curcumin inhibits COX-2 inflammatory pathways.'
  },
  {
    id: 'acidity-gerd',
    name: 'Acidity, Heartburn & Acid Reflux',
    teluguName: 'Kallu Manta / Acidity (ఎసిడిటీ)',
    category: 'Digestive & Gut',
    summary: 'Burning chest pain behind breastbone, sour water brash in mouth, belching, and upper epigastric heat.',
    rootCause: 'Hyperchlorhydria and aggravated Pitta dosha overflowing from the stomach into the esophagus.',
    doshaImbalance: 'Pitta',
    curativeFoods: [
      {
        name: 'Cold Pressed Tender Coconut Water',
        idealTiming: 'Mid-Morning (11:00 AM) or when burning starts',
        role: 'Alkalizes stomach pH instantly without rebound acidity',
        preparationNote: 'Drink fresh green coconut water at room temperature (never refrigerated).'
      },
      {
        name: 'Fresh Chaas (Buttermilk) Churned with Roasted Cumin & Mint',
        idealTiming: 'Immediately after lunch',
        role: 'Lactic acid binds to stomach lining and neutralizes excess hydrochloric acid',
        preparationNote: 'Blend 1/4 cup fresh homemade curd with 3/4 cup water, discard top butter, add roasted jeera powder and rock salt.'
      },
      {
        name: 'Saunf (Fennel Seeds) & Mishri Chew',
        idealTiming: '10 minutes after every meal',
        role: 'Anethole compound calms esophageal spasms and prevents regurgitation',
        preparationNote: 'Chew 1 tsp organic fennel seeds slowly and swallow the aromatic saliva.'
      },
      {
        name: 'Chilled Ash Gourd (Safed Petha) Juice',
        idealTiming: 'Early morning on an empty stomach',
        role: 'Highest alkaline pranic vegetable juice known in Ayurveda',
        preparationNote: 'Peel ash gourd, discard seeds, juice pulp with water, strain and drink pure without salt.'
      }
    ],
    foodsToAvoid: [
      { name: 'Red chilli, black pepper overdose, and hot pickles (Achar)', reason: 'Directly triggers gastric histamine release and ulcers' },
      { name: 'Deep fried vadas, samosas, and re-used cooking oil', reason: 'Relaxes lower esophageal sphincter (LES), sending acid into food pipe' },
      { name: 'Black coffee, energy drinks, and strong black tea', reason: 'High caffeine stimulates continuous gastric acid pumps' },
      { name: 'Late night heavy dinners right before lying flat', reason: 'Gravity causes acidic stomach slurry to flow upwards' }
    ],
    signatureRemedy: {
      title: 'Three-Seed Cooling Digestive Nectar (CCF Elixir)',
      prepTime: '5 minutes',
      ingredients: [
        '1/2 tsp Cumin seeds (Jeera)',
        '1/2 tsp Coriander seeds (Dhaniya)',
        '1/2 tsp Fennel seeds (Saunf)',
        '2 cups Water'
      ],
      instructions: [
        'Lightly crush the three seeds together.',
        'Boil in 2 cups of water for 4–5 minutes until the water turns golden green.',
        'Strain, let cool to room temperature or warm, and sip.'
      ],
      dosage: 'Drink 1 glass 30 minutes before lunch and 1 glass before dinner.'
    },
    dailyMealTimeline: {
      morning: 'Fresh Ash Gourd Juice or Tender Coconut water + 2 soaked figs',
      noon: 'Steamed rice with yellow moong dal, bottle gourd curry, and 1 glass cumin buttermilk',
      evening: '1 bowl chilled cucumber slices or soaked sabja (basil seeds) in coconut water',
      night: 'Light Jowar / Wheat roti with stewed ridge gourd (turai) curry; chew fennel seeds after'
    },
    keyScienceInsight: 'Fennel contains anethole and estragole which possess anti-spasmodic properties on the lower esophageal sphincter, preventing gastric reflux.'
  },
  {
    id: 'gas-bloating',
    name: 'Indigestion, Gas & Abdominal Bloating',
    teluguName: 'Kadapulo Manta / Gas Problem (గ్యాస్ & ఉబ్బరం)',
    category: 'Digestive & Gut',
    summary: 'Distended drum-like belly, uncomfortable intestinal trapped gas, loud borborygmi, and sluggish fullness.',
    rootCause: 'Aggravated Samana Vata combined with weak Agni, causing incomplete fermentation of food.',
    doshaImbalance: 'Vata',
    curativeFoods: [
      {
        name: 'Warm Ajwain (Carom Seeds) & Rock Salt Water',
        idealTiming: 'Immediately when feeling bloated',
        role: 'Thymol instantly relieves flatulence and intestinal spasms',
        preparationNote: 'Boil 1/2 tsp carom seeds in 1 glass water for 3 minutes, add pinch of black salt (Kala Namak).'
      },
      {
        name: 'Hing (Asafoetida) & Cumin Buttermilk',
        idealTiming: 'Post Lunch',
        role: 'Carminative volatile oils break gas bubble surface tension',
        preparationNote: 'Whisk fresh dilute buttermilk with a pinch of roasted hing, roasted jeera, and curry leaves.'
      },
      {
        name: 'Fresh Ginger Slice with Rock Salt & Lemon',
        idealTiming: '15 minutes before lunch',
        role: 'Ignites dormant digestive enzymes (Agni Deepana)',
        preparationNote: 'Cut a thin coin of fresh ginger, sprinkle with pink Himalayan salt and 3 drops lemon juice. Chew thoroughly.'
      }
    ],
    foodsToAvoid: [
      { name: 'Raw cruciferous vegetables (cabbage, cauliflower, broccoli salads)', reason: 'Raffinose oligosaccharides ferment rapidly, creating painful methane pockets' },
      { name: 'Heavy unsoaked rajma, chana, or whole black urad dal', reason: 'High in gas-producing galactooligosaccharides' },
      { name: 'Carbonated soda water or fizzy soft drinks', reason: 'Pumps liters of carbonic acid gas directly into stomach' },
      { name: 'Eating while talking rapidly or chewing gum', reason: 'Causes aerophagia (swallowing ambient air)' }
    ],
    signatureRemedy: {
      title: 'Ajwain-Jeera-Hing Gas Buster Carminative',
      prepTime: '3 minutes',
      ingredients: [
        '1/2 tsp Ajwain (Carom seeds)',
        '1/2 tsp Jeera (Cumin seeds)',
        'Pinch of Hing (Pure Asafoetida)',
        'Pinch of Kala Namak (Black salt)',
        '1 glass warm Water'
      ],
      instructions: [
        'Warm the water in a pan.',
        'Crush ajwain and jeera between your palms.',
        'Stir all ingredients into the warm water and drink in continuous gentle sips.'
      ],
      dosage: 'Take as needed 20 minutes post meal.'
    },
    dailyMealTimeline: {
      morning: 'Warm ginger-ajwain water + light vegetable poha cooked with mustard and curry leaves',
      noon: 'Steamed rice with warm yellow moong dal tempered with ghee, jeera, and hing',
      evening: 'Warm roasted makhana with black pepper + cup of warm fennel tea',
      night: 'Light vegetable khichdi or soft phulkas with stewed pumpkin curry'
    },
    keyScienceInsight: 'Thymol present in ajwain stimulates bile acid secretion and activates digestive enzyme activity in the small intestine mucosa.'
  },
  {
    id: 'diarrhea',
    name: 'Diarrhea, Loose Motions & Stomach Bug',
    teluguName: 'Virechanaalu (విరేచనాలు)',
    category: 'Digestive & Gut',
    summary: 'Watery, frequent bowel movements, abdominal cramping, and rapid electrolyte depletion.',
    rootCause: 'Intestinal hypermotility, bacterial toxin irritation, or severe Pitta-Vata vitiation in Grahani.',
    doshaImbalance: 'Pitta-Vata',
    curativeFoods: [
      {
        name: 'Homemade Oral Rehydration Electrolyte Water (ORS)',
        idealTiming: 'After every single loose stool episode',
        role: 'Maintains sodium-glucose cotransport to prevent critical dehydration',
        preparationNote: 'In 1 liter boiled & cooled water, dissolve 6 level tsp sugar and 1/2 level tsp salt.'
      },
      {
        name: 'Fresh Pomegranate (Anar) Juice or Stewed Raw Banana',
        idealTiming: 'Mid-Morning & Afternoon',
        role: 'Potent natural astringent (Kashaya rasa) that binds loose bowels',
        preparationNote: 'Eat boiled green plantain / raw banana mashed with a pinch of roasted cumin and salt.'
      },
      {
        name: 'Curd Rice with Pounded Ginger & Roasted Mustard Seeds',
        idealTiming: 'Lunch & Early Dinner',
        role: 'Restores beneficial Bifidobacteria and Lactobacillus flora in colon',
        preparationNote: 'Soft overcooked white rice mixed with fresh homemade curd and tempered with mustard and ginger.'
      },
      {
        name: 'Arrowroot (Koova) Gruel or Sago Porridge',
        idealTiming: 'Morning & Evening',
        role: 'Coats ulcerated intestinal lining with soothing non-irritating starch',
        preparationNote: 'Cook arrowroot powder in water until translucent, sweeten with minimal jaggery.'
      }
    ],
    foodsToAvoid: [
      { name: 'Whole raw milk, cheese, and butter', reason: 'Transient lactase enzyme deficiency during diarrhea causes explosive spasms' },
      { name: 'Oily spicy gravies and deep fried food', reason: 'Triggers gastrocolic reflex and accelerates bowel evacuation' },
      { name: 'Raw coarse salads, leafy greens, and whole nuts', reason: 'Insoluble fiber irritates already inflamed intestinal walls' },
      { name: 'Caffeine and alcohol', reason: 'Acts as powerful intestinal secretagogues that worsen fluid loss' }
    ],
    signatureRemedy: {
      title: 'Grandma’s Roasted Jeera-Curd Bowel Binder',
      prepTime: '2 minutes',
      ingredients: [
        '1 cup fresh homemade Curd (not sour)',
        '1/2 tsp Cumin seeds (dry roasted and powdered)',
        '1/4 tsp Fenugreek (Methi) seeds (swallowed whole with water)',
        'Pinch of Rock salt'
      ],
      instructions: [
        'Whip fresh curd with rock salt and freshly powdered roasted cumin.',
        'Swallow 1/4 tsp methi seeds with 2 sips of water and follow by eating the seasoned curd bowl.'
      ],
      dosage: 'Twice daily with lunch and dinner.'
    },
    dailyMealTimeline: {
      morning: 'Light arrowroot / sago kanji with pinch of salt + continuous ORS sips',
      noon: 'Soft curd rice with roasted cumin and boiled green banana sabzi',
      evening: 'Fresh sweet pomegranate juice (strained) or coconut water',
      night: 'Moong dal and white rice kanji (watery porridge) with pinch of rock salt'
    },
    keyScienceInsight: 'Raw banana contains resistant starch and pectins that undergo fermentation into short-chain fatty acids (SCFAs), promoting colon fluid absorption.'
  },
  {
    id: 'constipation',
    name: 'Constipation & Sluggish Bowels',
    teluguName: 'Malabaddhakam (మలబద్ధకం)',
    category: 'Digestive & Gut',
    summary: 'Hard dry pellet-like stools, straining, incomplete bowel evacuation, and chronic rectal dryness.',
    rootCause: 'Excess dryness and coldness in Apana Vata, dehydrating fecal matter in the large intestine.',
    doshaImbalance: 'Vata',
    curativeFoods: [
      {
        name: 'Warm Milk with 1 Spoon Desi Cow Ghee at Bedtime',
        idealTiming: '10:00 PM (Right before sleep)',
        role: 'Lubricates dried colon walls and facilitates gentle morning evacuation',
        preparationNote: 'Warm 1 cup cow milk and stir in 1 full tablespoon pure A2 cow ghee.'
      },
      {
        name: 'Soaked Black Raisins (Munakka) & Dried Figs (Anjeer)',
        idealTiming: 'Early Morning on empty stomach',
        role: 'Natural osmotic sorbitol and soluble fiber draw water into stools',
        preparationNote: 'Soak 8 black raisins and 2 figs overnight in 1/2 cup warm water. Eat fruit and drink water.'
      },
      {
        name: 'Isabgol (Psyllium Husk) in Warm Water or Milk',
        idealTiming: 'Bedtime',
        role: 'Expands into a gelatinous mass that forms soft, bulked stools',
        preparationNote: 'Stir 1 tbsp isabgol into warm water or milk; drink immediately before it congeals.'
      },
      {
        name: 'Ripe Papaya Bowl with Lime',
        idealTiming: 'Mid-Morning or 4:00 PM',
        role: 'Enzyme papain and soluble fiber stimulate peristaltic waves',
        preparationNote: 'Eat 1 medium bowl of ripe orange papaya slices.'
      }
    ],
    foodsToAvoid: [
      { name: 'Dry biscuits, rusks, white bread, and maida products', reason: 'Stripped of fiber, cakes up the colon like glue' },
      { name: 'Excessive astringent tea or black coffee', reason: 'Dehydrates intestinal mucosa and parches fecal moisture' },
      { name: 'Unripe bananas', reason: 'High tannin content causes extreme bowel stasis' }
    ],
    signatureRemedy: {
      title: 'Ayurvedic Triphala & Castor/Ghee Bowel Cleanser',
      prepTime: '2 minutes',
      ingredients: [
        '1 tsp pure Triphala powder',
        '1 cup warm Water',
        '1/2 tsp Cow Ghee or 1 tsp Castor Oil (for stubborn cases)'
      ],
      instructions: [
        'Dissolve Triphala powder and ghee into warm water.',
        'Drink 30 minutes before sleep.'
      ],
      dosage: 'Once every night for 7 days.'
    },
    dailyMealTimeline: {
      morning: 'Warm water + overnight soaked figs and black raisins',
      noon: '2 whole wheat/multigrain rotis + generous bowl of spinach (palak) dal + cucumber salad',
      evening: '1 generous bowl of ripe papaya or guava',
      night: 'Warm vegetable oats porridge with ghee, followed by warm milk with 1 tbsp ghee'
    },
    keyScienceInsight: 'Triphala contains anthraquinones that stimulate colon contraction, while butyric acid in ghee nourishes colonocytes and enhances motility.'
  },
  {
    id: 'fatigue-weakness',
    name: 'Fatigue, Lethargy & Post-Illness Recovery',
    teluguName: 'Neerasam / Balaheenatha (నీరసం)',
    category: 'Vitality & Pain',
    summary: 'Exhaustion after minimal exertion, brain fog, heavy limbs, and slow convalescence after illness.',
    rootCause: 'Depletion of Ojas (vital immunity essence) and loss of Dhatus (bodily tissues) after viral or physical stress.',
    doshaImbalance: 'Vata',
    curativeFoods: [
      {
        name: 'Ragi Malt / Finger Millet Porridge with Milk & Jaggery',
        idealTiming: 'Breakfast or Mid-Morning',
        role: 'Exceptional bioavailable calcium, iron, and slow sustained complex carbs',
        preparationNote: 'Whisk 2 tbsp sprouted ragi flour with water, cook until thick, add milk, cardamom, and organic jaggery.'
      },
      {
        name: 'Soaked Almond, Date & Dry Fruit Energy Drink',
        idealTiming: '4:00 PM Afternoon Boost',
        role: 'Instant replenishment of glycogen, magnesium, and mitochondrial energy',
        preparationNote: 'Blend 5 soaked almonds, 2 Medjool dates, 1 walnut, pinch of cinnamon with warm milk.'
      },
      {
        name: 'Bone Broth / Clear Mutton Paya Soup (Non-Veg Option)',
        idealTiming: 'Lunch',
        role: 'Concentrated collagen, glycine, and glutamine for cellular tissue repair',
        preparationNote: 'Slow cook goat trotters or bones with ginger, garlic, turmeric, and black pepper for 2 hours.'
      },
      {
        name: 'Sattu (Roasted Gram Flour) Energy Drink',
        idealTiming: 'Late Morning',
        role: 'Ancient Indian high-protein stamina elixir (15g protein)',
        preparationNote: 'Mix 3 tbsp Bihar sattu flour in chilled water with lemon, roasted jeera, and rock salt.'
      }
    ],
    foodsToAvoid: [
      { name: 'Refined sugar sweets and sodas', reason: 'Causes reactive hypoglycemia crash within 45 minutes, worsening fatigue' },
      { name: 'Ultra-processed packaged chips and instant noodles', reason: 'Depletes B-vitamin reserves needed for ATP energy synthesis' },
      { name: 'Heavy greasy deep-fried meals', reason: 'Draws massive blood flow to gut, causing acute postprandial somnolence' }
    ],
    signatureRemedy: {
      title: 'Ashwagandha & Nutmeg Restorative Bedtime Elixir',
      prepTime: '5 minutes',
      ingredients: [
        '1/2 tsp organic Ashwagandha powder',
        '1 cup warm whole Milk',
        'Pinch of ground Nutmeg (Jaiphal)',
        'Pinch of Cardamom powder',
        '1 tsp pure Honey or Jaggery'
      ],
      instructions: [
        'Whisk Ashwagandha and spices into gently warming milk on low flame.',
        'Pour into a cup and sip while comfortably warm.'
      ],
      dosage: 'Every night 30 minutes before sleep.'
    },
    dailyMealTimeline: {
      morning: 'Warm water with soaked almonds & walnuts + warm Ragi malt porridge',
      noon: 'Steamed rice with Moong Dal, sautéed drumstick leaves, and A2 cow ghee',
      evening: 'Sattu savory drink or Date-Almond smoothie',
      night: 'Light Paneer bhurji with 2 soft phulkas + warm Ashwagandha milk'
    },
    keyScienceInsight: 'Withanolides in Ashwagandha act as adaptogens that modulate the HPA (hypothalamic-pituitary-adrenal) axis, lowering cortisol and restoring mitochondrial resilience.'
  },
  {
    id: 'menstrual-cramps',
    name: 'Menstrual Cramps & PMS Bloating',
    teluguName: 'Bhadha tho koodina Periods / Menstrual Cramps (పీరియడ్స్ నొప్పి)',
    category: 'Metabolic & Hormonal',
    summary: 'Lower abdominal throbbing spasms, lower back pain, mood lability, water retention, and fatigue.',
    rootCause: 'Uterine prostaglandin F2a release causing myometrial ischemia, aggravated by Apana Vata obstruction.',
    doshaImbalance: 'Vata',
    curativeFoods: [
      {
        name: 'Warm Ajwain & Jaggery (Gud) Decoction',
        idealTiming: 'Morning & Evening during cycle days',
        role: 'Natural uterine antispasmodic; jaggery replenishes iron',
        preparationNote: 'Boil 1 tsp carom seeds and 1 small cube organic dark jaggery in 1.5 cups water until dissolved.'
      },
      {
        name: 'Roasted Sesame Seeds (Til) & Flaxseed Ladoo',
        idealTiming: 'Late Morning',
        role: 'Rich in zinc, magnesium, and lignans that regulate prostaglandin balance',
        preparationNote: 'Mix lightly toasted sesame seeds with melted jaggery into small spheres.'
      },
      {
        name: 'Fresh Ginger-Cinnamon Tea with Honey',
        idealTiming: 'Mid-Afternoon',
        role: 'Prostaglandin synthase inhibitor equal in clinical trials to ibuprofen',
        preparationNote: 'Boil 1 inch fresh ginger with 1 cinnamon stick for 6 minutes.'
      }
    ],
    foodsToAvoid: [
      { name: 'Excessive table salt and salty chips', reason: 'Worsens severe fluid retention, bloating, and breast tenderness' },
      { name: 'Heavy caffeine (multiple coffees)', reason: 'Causes vasoconstriction of uterine blood vessels, worsening cramps' },
      { name: 'Icy cold beverages', reason: 'Vitiates Vata dosha and increases uterine smooth muscle spasm' }
    ],
    signatureRemedy: {
      title: 'Warm Ajwain-Ginger-Jaggery Cramp Soother',
      prepTime: '5 minutes',
      ingredients: [
        '1 tsp Ajwain (Carom seeds)',
        '1/2 inch crushed fresh Ginger',
        '1 tbsp crushed organic Jaggery',
        '1.5 cups Water'
      ],
      instructions: [
        'Boil all ingredients together until liquid reduces by one-third.',
        'Sip hot, feeling the warmth relax your lower pelvis.'
      ],
      dosage: 'Twice daily on days 1–3 of menstrual flow.'
    },
    dailyMealTimeline: {
      morning: 'Warm Ajwain-Jaggery tea + warm oatmeal or besan chilla',
      noon: 'Warm rice with palak (spinach) dal, beetroot poriyal, and dollop of ghee',
      evening: 'Ginger-cinnamon tea + 1 sesame ladoo',
      night: 'Comforting moong dal khichdi + warm turmeric milk with nutmeg'
    },
    keyScienceInsight: 'Ginger exhibits cyclooxygenase and lipoxygenase inhibition, reducing prostaglandin synthesis with proven efficacy comparable to NSAIDs.'
  },
  {
    id: 'diabetes',
    name: 'High Blood Sugar & Insulin Resistance',
    teluguName: 'Sugar Vyadhi / Madhumeha (డయాబెటిస్)',
    category: 'Metabolic & Hormonal',
    summary: 'Elevated fasting and postprandial glucose, frequent urination, fatigue, and sluggish insulin sensitivity.',
    rootCause: 'Kapha-Meda vitiation leading to sluggish cellular glucose uptake and pancreas beta-cell exhaustion.',
    doshaImbalance: 'Kapha-Pitta',
    curativeFoods: [
      {
        name: 'Soaked Methi (Fenugreek) Water & Seeds',
        idealTiming: 'Early Morning on empty stomach',
        role: '4-hydroxyisoleucine stimulates insulin release; galactomannan delays carbohydrate absorption',
        preparationNote: 'Soak 1 tsp fenugreek seeds overnight in 1 cup warm water. Drink water and chew softened seeds.'
      },
      {
        name: 'Bitter Gourd (Karela) & Jamun Juice',
        idealTiming: 'Mid-Morning (30 min before lunch)',
        role: 'Charantin and polypeptide-p act as natural plant-insulin mimics',
        preparationNote: 'Blend fresh bitter gourd with water and pinch of rock salt; strain and drink 50 ml.'
      },
      {
        name: 'Millet Swaps (Foxtail / Barnyard / Ragi) instead of White Rice',
        idealTiming: 'Lunch & Dinner',
        role: 'Low glycemic index and high resistant fiber prevents rapid post-meal glucose spikes',
        preparationNote: 'Cook foxtail millet 1:2.5 with water as a substitute for polished white rice.'
      },
      {
        name: 'Ceylon Cinnamon (Dalchini) Herbal Infusion',
        idealTiming: 'Late Afternoon',
        role: 'Improves muscle cell insulin receptor phosphorylation',
        preparationNote: 'Boil 1 stick true Ceylon cinnamon in water for 5 minutes.'
      }
    ],
    foodsToAvoid: [
      { name: 'Refined white maida, bakery white bread, and pastries', reason: 'Immediate glucose spike with glycemic index above 75' },
      { name: 'Packaged fruit juices and canned sodas', reason: 'High fructose induces fatty liver and worsening insulin resistance' },
      { name: 'Deep fried snacks and sweets made with sugar syrup', reason: 'Causes chronic low-grade vascular endothelial inflammation' }
    ],
    signatureRemedy: {
      title: 'Methi-Dalchini Blood Sugar Stabilizer',
      prepTime: '2 minutes',
      ingredients: [
        '1 tsp Fenugreek seeds (soaked overnight)',
        '1/2 tsp Ceylon Cinnamon powder',
        '1 cup warm Water'
      ],
      instructions: [
        'Warm the soaking fenugreek water.',
        'Stir in the cinnamon powder and chew the soaked seeds alongside.'
      ],
      dosage: 'Every morning on an empty stomach.'
    },
    dailyMealTimeline: {
      morning: 'Methi dana water + 2 Besan-Vegetable Cheelas with mint chutney',
      noon: 'Foxtail millet / Jowar roti with Methi Dal, bitter gourd curry, and raw salad',
      evening: 'Roasted black chana with lemon + Ceylon cinnamon tea',
      night: 'Sautéed paneer/tofu with stir-fry beans and carrots + 1 small Jowar roti'
    },
    keyScienceInsight: 'Soluble dietary fibers like galactomannan slow gastric emptying and retard glucose diffusion across intestinal enterocytes.'
  },
  {
    id: 'hypertension',
    name: 'High Blood Pressure & Stress Tension',
    teluguName: 'High BP / Raktachapa (రక్తపోటు)',
    category: 'Metabolic & Hormonal',
    summary: 'Systolic/diastolic blood pressure elevation, temple throbbing, irritability, and arterial vascular stiffness.',
    rootCause: 'Vyana Vata and Pitta vitiation causing peripheral vasoconstriction and high sympathetic nervous tone.',
    doshaImbalance: 'Pitta-Vata',
    curativeFoods: [
      {
        name: 'Fresh Garlic Clove Swallow with Warm Water',
        idealTiming: 'Early Morning',
        role: 'Allicin triggers endothelial nitric oxide synthase, relaxing blood vessels',
        preparationNote: 'Crush 1 small garlic clove, wait 5 minutes to activate allicin, swallow with water.'
      },
      {
        name: 'Beetroot & Amla (Indian Gooseberry) Juice',
        idealTiming: 'Mid-Morning',
        role: 'Natural dietary nitrates convert to nitric oxide, delivering rapid 4–6 mmHg drop in systolic BP',
        preparationNote: 'Juice 1 medium fresh beetroot with 1 seeded amla and a sprig of mint.'
      },
      {
        name: 'Flaxseed (Alsi) Powder in Warm Water or Curd',
        idealTiming: 'Lunch or Evening',
        role: 'Alpha-linolenic acid (ALA) lowers vascular stiffness and arterial resistance',
        preparationNote: 'Add 1 tbsp freshly roasted and ground flaxseeds to lunch dal or buttermilk.'
      },
      {
        name: 'Hibiscus (Gudhal) & Cardamom Herbal Tea',
        idealTiming: '4:30 PM',
        role: 'Acts as a natural gentle ACE (angiotensin-converting enzyme) inhibitor',
        preparationNote: 'Steep dried red hibiscus calyces with crushed cardamom in boiling water for 6 minutes.'
      }
    ],
    foodsToAvoid: [
      { name: 'High-sodium Indian pickles (Achar), papads, and namkeen', reason: 'High sodium retains water in intravascular space, skyrocketing blood pressure' },
      { name: 'Canned soups and processed packaged sauces', reason: 'Loaded with hidden monosodium glutamate and sodium benzoate' },
      { name: 'Excessive licorice (Mulethi) candy', reason: 'Can inhibit 11-beta-HSD2 enzyme, elevating cortisol and blood pressure' }
    ],
    signatureRemedy: {
      title: 'Beetroot-Amla Nitric Oxide Vascular Relaxer',
      prepTime: '5 minutes',
      ingredients: [
        '1 fresh medium Beetroot',
        '1 fresh Amla (Indian Gooseberry)',
        '4 fresh Mint leaves',
        'Pinch of roasted Cumin'
      ],
      instructions: [
        'Blend beetroot and amla with 100 ml water.',
        'Strain through a fine sieve, add crushed cumin, and drink fresh.'
      ],
      dosage: 'Drink once daily in the late morning.'
    },
    dailyMealTimeline: {
      morning: 'Crushed garlic clove with warm water + 2 whole wheat rotis with palak sabzi',
      noon: 'Brown rice / Millet with drumstick sambar, beetroot poriyal, and low-salt buttermilk',
      evening: 'Roasted unsalted makhana + Hibiscus herbal tea',
      night: 'Vegetable khichdi with plenty of bottle gourd and carrots'
    },
    keyScienceInsight: 'Dietary inorganic nitrate from beetroot is reduced by oral bacteria to nitrite, which is converted to nitric oxide (NO) in the stomach and blood, causing vasodilation.'
  }
];
