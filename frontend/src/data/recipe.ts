import type { Recipes } from "@/types/recipe";

export const recipesData: Recipes[] = [
  {
    slug: "recipe-1",
    image: "/section.png",
    title: "Recipe 1",
    description: "This is the description for Recipe 1.",
    category: ["Category 1", "Category 1"],
    createdAt: "2023-10-01",
    ingredients: [
      { name: "ไก่", amount: 200, unit: "กรัม" },
      { name: "ไข่", amount: 20, unit: "ฟอง" },
    ],
    instructions: [
      "ทำ quick and healthy stir-fry featuring succulent shrimp sautéed to perfection, vibrant, crunchy vegetables, and aside of nutty brown rice. This dish is not only packed with",
      "ทำ quick and healthy stir-fry featuring succulent shrimp sautéed to perfection, vibrant, crunchy vegetables, and aside of nutty brown rice. This dish is not only packed with",
    ],
  },
  {
    slug: "recipe-2",
    image: "/section.png",
    title: "Recipe 2",
    description: "This is the description for Recipe 2.",
    category: ["Category 2"],
    createdAt: "2023-10-02",
    ingredients: [
      { name: "ไก่", amount: 200, unit: "กรัม" },
      { name: "ไข่", amount: 20, unit: "ฟอง" },
    ],
    instructions: [
      "ทำ quick and healthy stir-fry featuring succulent shrimp sautéed to perfection, vibrant, crunchy vegetables, and aside of nutty brown rice. This dish is not only packed with",
      "ทำ quick and healthy stir-fry featuring succulent shrimp sautéed to perfection, vibrant, crunchy vegetables, and aside of nutty brown rice. This dish is not only packed with",
    ],
  },
];
