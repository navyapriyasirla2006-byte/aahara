import { RemedyRecipe } from '../types/nutrition';

export const TRADITIONAL_REMEDIES: RemedyRecipe[] = [
  {
    id: 'tulsi-ginger-kadha',
    name: 'Ayush Tulsi-Adrak-Kali Mirch Kadha',
    commonName: 'Immunity & Congestion Brew',
    bestFor: ['Cold & Runny Nose', 'Fever & Chills', 'Chest Heaviness', 'Seasonal Flu'],
    prepTime: '7 minutes',
    ingredients: [
      '8–10 fresh Holy Basil (Tulsi) leaves',
      '1 inch fresh Ginger root (roughly crushed)',
      '4 whole Black Peppercorns (lightly cracked)',
      '1 small piece Cinnamon bark (Dalchini)',
      '2 Cloves (Laung)',
      '2 cups Water (450 ml)',
      '1 tsp raw Honey or crushed Jaggery (optional)'
    ],
    steps: [
      'Bring 2 cups of water to a boil in a stainless steel saucepan.',
      'Add crushed ginger, black peppercorns, cinnamon, cloves, and tulsi leaves.',
      'Reduce heat to medium-low and simmer for 5–7 minutes until the liquid reduces to about 1 cup.',
      'Strain through a fine tea sieve into a mug.',
      'Allow to cool until warm/lukewarm, then stir in honey (never add honey to boiling hot water).'
    ],
    bestTimeToDrink: 'Early morning or late afternoon (4:30 PM). Take in warm, deliberate sips.',
    ayurvedicInsight: 'Balances Kapha and Vata doshas, opens bronchial airways, and expels deep-seated bronchial phlegm.'
  },
  {
    id: 'golden-haldi-doodh',
    name: 'Traditional Haldi Doodh with Black Pepper',
    commonName: 'Golden Rejuvenation Milk',
    bestFor: ['Dry Hacking Cough', 'Body Aches & Soreness', 'Joint Inflammation', 'Insomnia'],
    prepTime: '5 minutes',
    ingredients: [
      '1 cup whole Cow Milk (or Oat / Almond milk)',
      '1/4 tsp pure organic Turmeric powder',
      '2 pinches freshly ground Black Pepper',
      '1 pinch ground Nutmeg (Jaiphal)',
      '1/2 tsp Desi Cow Ghee (enhances bioavailability)',
      '1/2 tsp crushed Jaggery or raw Honey'
    ],
    steps: [
      'Heat milk in a small saucepan on medium flame until small bubbles form around edges.',
      'Whisk in turmeric, black pepper, nutmeg, and 1/2 tsp cow ghee.',
      'Simmer gently on low flame for 2–3 minutes so the lipid compounds absorb the curcumin.',
      'Pour into your favorite cup, sweeten with jaggery or honey, and serve steaming warm.'
    ],
    bestTimeToDrink: '30 minutes before bedtime. Promotes restorative delta-wave sleep.',
    ayurvedicInsight: 'Piperine in black pepper boosts curcumin absorption by 2000%; ghee carries nutrients deep into the bone and nerve tissues (Majja Dhatu).'
  },
  {
    id: 'garlic-pepper-rasam',
    name: 'Poondu-Milagu Rasam (Garlic Pepper Rasam)',
    commonName: 'South Indian Medicinal Rasam',
    bestFor: ['Sinus Pressure', 'Cold & Chills', 'Loss of Taste', 'Sluggish Digestion'],
    prepTime: '10 minutes',
    ingredients: [
      '6 Garlic cloves (crushed with skins on)',
      '1 tsp Black Peppercorns',
      '1 tsp Cumin seeds (Jeera)',
      '1 small ripe Tomato (chopped)',
      '1 small marble-sized Tamarind (soaked in warm water and extracted)',
      '1/2 tsp Turmeric powder',
      '1 sprig fresh Curry leaves & Coriander leaves',
      '1/2 tsp Mustard seeds & 1 dry red chilli (for tempering in 1 tsp ghee)'
    ],
    steps: [
      'Coarsely pound garlic, black pepper, and cumin in a mortar and pestle.',
      'In a pot, boil tamarind water, chopped tomato, turmeric, salt, and curry leaves for 5 minutes until raw aroma leaves.',
      'Add the crushed garlic-pepper-cumin paste along with 1.5 cups of water.',
      'Let it come to a gentle frothy boil (do not over-boil once pepper is added). Turn off flame.',
      'In a small ladle, heat 1 tsp ghee, splutter mustard seeds, hing, and red chilli. Pour hot tadka over rasam. Garnish with coriander.'
    ],
    bestTimeToDrink: 'Drink hot in a small cup before lunch, or mix with steaming hot rice and a spoon of cow ghee.',
    ayurvedicInsight: 'Garlic’s allicin combined with piperine clears sinus canals and fires up Jatharagni (digestive fire).'
  },
  {
    id: 'ccf-tea',
    name: 'CCF Digestive Nectar (Cumin-Coriander-Fennel)',
    commonName: 'Universal Tri-Dosha Tea',
    bestFor: ['Acid Reflux & Heartburn', 'Belly Bloating', 'Urinary Burning', 'Water Retention'],
    prepTime: '6 minutes',
    ingredients: [
      '1/2 tsp Cumin seeds (Jeera)',
      '1/2 tsp Coriander seeds (Dhaniya)',
      '1/2 tsp Fennel seeds (Saunf)',
      '2.5 cups Water'
    ],
    steps: [
      'Add cumin, coriander, and fennel seeds to 2.5 cups of fresh water in a pot.',
      'Bring to a boil, then lower heat and simmer for 5 minutes until liquid turns fragrant and golden-green.',
      'Strain into a thermos flask or cup. Can be enjoyed warm or at room temperature.'
    ],
    bestTimeToDrink: 'Sip throughout the day between meals, especially 30 minutes before lunch and dinner.',
    ayurvedicInsight: 'One of the rare formulations that pacifies all three doshas simultaneously without aggravating Pitta heat.'
  },
  {
    id: 'besan-sheera',
    name: 'Nani’s Warm Besan Ka Sheera',
    commonName: 'Warm Chest & Throat Unclogger',
    bestFor: ['Stubborn Phlegm', 'Nasal Congestion', 'Scratchy Throat', 'Fatigue from Cold'],
    prepTime: '8 minutes',
    ingredients: [
      '1.5 tbsp Besan (Gram flour)',
      '1 tbsp Desi Cow Ghee',
      '1 cup warm Milk (or water)',
      '1/4 tsp Turmeric powder',
      '1/4 tsp freshly cracked Black Pepper',
      '1/4 tsp Cardamom powder',
      '1 tbsp organic Jaggery powder'
    ],
    steps: [
      'Heat ghee in a pan on medium-low flame. Add besan and roast continuously for 4–5 minutes until fragrant, nutty, and golden-brown.',
      'Slowly pour in warm milk while whisking vigorously to prevent lumps.',
      'Add turmeric, black pepper, cardamom, and jaggery.',
      'Cook for 2 minutes until it reaches a velvety, flowing soup consistency. Pour into a bowl.'
    ],
    bestTimeToDrink: 'Drink/eat hot immediately before going to bed. Wrap yourself in a warm blanket and do not drink cold water.',
    ayurvedicInsight: 'The warm roasted gram flour and ghee create a nourishing hyper-thermal coating that liquefies trapped bronchial mucus.'
  },
  {
    id: 'sukku-kaapi',
    name: 'Sukku Kaapi (Dry Ginger & Coriander Herbal Brew)',
    commonName: 'Traditional Digestive Coffee Alternative',
    bestFor: ['Indigestion & Heaviness', 'Headaches', 'Lethargy', 'Throat Irritation'],
    prepTime: '5 minutes',
    ingredients: [
      '1 tsp Dry Ginger powder (Sukku / Sonth)',
      '1 tsp Coriander seeds (crushed)',
      '4 Black Peppercorns',
      '2 Cardamom pods (crushed)',
      '2 cups Water',
      '1.5 tbsp Palm Jaggery (Karupatti) or regular Jaggery'
    ],
    steps: [
      'Crush coriander seeds, peppercorns, and cardamom lightly.',
      'Boil 2 cups of water with the crushed spices and dry ginger powder for 5 minutes.',
      'Add palm jaggery and stir until completely dissolved.',
      'Strain and enjoy hot as a soothing caffeine-free beverage.'
    ],
    bestTimeToDrink: 'Mid-morning (10:30 AM) or sunset (5:00 PM).',
    ayurvedicInsight: 'Dry ginger (Shunti) has a sweet post-digestive effect (Vipaka), making it less drying and more nourishing than fresh ginger.'
  }
];
