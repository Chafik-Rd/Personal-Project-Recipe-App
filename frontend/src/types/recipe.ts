export type Recipes = {
  slug: string;
  image: string;
  title: string;
  description: string;
  category: string[];
  createdAt: string;
  instructions: string[];
  ingredients?: {
    name: string;
    amount: number;
    unit: string;
  }[];
};
