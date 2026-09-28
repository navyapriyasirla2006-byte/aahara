export type MealTimeSlotId =
  | 'early-morning'
  | 'breakfast'
  | 'mid-morning'
  | 'lunch'
  | 'evening'
  | 'dinner'
  | 'bedtime';

export interface MealRecommendation {
  name: string;
  category: 'Drink' | 'Solid' | 'Snack' | 'Herbal';
  description: string;
  isVeg: boolean;
  benefits: string;
  portion: string;
}

export interface TimeSlotInfo {
  id: MealTimeSlotId;
  title: string;
  timeRange: string;
  startHour: number;
  endHour: number;
  ayurvedicTime: string;
  tagline: string;
  digestiveState: string;
  recommendations: MealRecommendation[];
  avoidAtThisTime: string[];
  goldenRule: string;
}

export type HealthCategory =
  | 'Respiratory & Fever'
  | 'Digestive & Gut'
  | 'Vitality & Pain'
  | 'Metabolic & Hormonal';

export interface CurativeFoodItem {
  name: string;
  idealTiming: string;
  role: string;
  preparationNote: string;
}

export interface HealthCondition {
  id: string;
  name: string;
  teluguName?: string;
  category: HealthCategory;
  summary: string;
  rootCause: string;
  doshaImbalance: 'Kapha' | 'Pitta' | 'Vata' | 'Kapha-Vata' | 'Pitta-Vata' | 'Kapha-Pitta' | 'Tridoshic';
  curativeFoods: CurativeFoodItem[];
  foodsToAvoid: {
    name: string;
    reason: string;
  }[];
  signatureRemedy: {
    title: string;
    prepTime: string;
    ingredients: string[];
    instructions: string[];
    dosage: string;
  };
  dailyMealTimeline: {
    morning: string;
    noon: string;
    evening: string;
    night: string;
  };
  keyScienceInsight: string;
}

export type DietGoalId =
  | 'bulking'
  | 'fat-loss'
  | 'maintenance'
  | 'gut-detox'
  | 'diabetes-control';

export interface DietMealOption {
  slot: string;
  timing: string;
  vegOption: string;
  nonVegOption?: string;
  caloriesApprox: number;
  proteinGrams: number;
  proTip: string;
}

export interface DietPlan {
  id: DietGoalId;
  title: string;
  subtitle: string;
  targetGoal: string;
  dailyCalorieRange: string;
  proteinTarget: string;
  macroSplit: {
    carbs: number;
    protein: number;
    fats: number;
  };
  overview: string;
  meals: DietMealOption[];
  groceryStaples: string[];
  goldenHabits: string[];
}

export interface RemedyRecipe {
  id: string;
  name: string;
  commonName: string;
  bestFor: string[];
  prepTime: string;
  ingredients: string[];
  steps: string[];
  bestTimeToDrink: string;
  ayurvedicInsight: string;
}
