import { CardRecipes } from "@/components/card-recipes";
import type { Recipes } from "@/types/recipe";
import Link from "next/link";

const recipesData: Recipes[] = [
  {
    image: "/section.png",
    title: "Recipe 1",
    description: "This is the description for Recipe 1.",
    category: "Category 1",
    createdAt: "2023-10-01",
  },
  {
    image: "/section.png",
    title: "Recipe 2",
    description: "This is the description for Recipe 2.",
    category: "Category 2",
    createdAt: "2023-10-02",
  },
];
export const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {recipesData.length > 0 ? (
        recipesData.map((recipe, index) => (
          <Link href={`/recipes/${index}`} key={index}>
            <CardRecipes dataRecipe={recipe} />
          </Link>
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-full text-white text-lg">
          Not My Recipe
        </div>
      )}
    </div>
  );
};
