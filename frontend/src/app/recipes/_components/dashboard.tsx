import { CardRecipes } from "@/components/card-recipes";
import { recipesData } from "@/data/recipe";
import Link from "next/link";

export const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {recipesData.length > 0 ? (
        recipesData.map((recipe, index) => (
          <Link href={`/recipes/${recipe.slug}`} key={index}>
            <CardRecipes dataRecipe={recipe} />
          </Link>
        ))
      ) : (
        <div className="flex h-full w-full items-center justify-center text-lg text-white">
          Not My Recipe
        </div>
      )}
    </div>
  );
};
