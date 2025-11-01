"use client";
import { useParams } from "next/navigation";
import { ViewRecipeDetail } from "./view-recipe-detail";
import { ViewRecipeIngredients } from "./view-recipe-ingredients";
import { recipesData } from "@/data/recipe";
import { ViewRecipeInstructions } from "./view-recipe-instructions";

export const ViewRecipe = () => {
  const { slug } = useParams();
  const recipe = recipesData.find((r) => r.slug === slug);
  return (
    <>
      {recipe && (
        <div className="flex flex-col justify-center gap-6 p-8">
          <ViewRecipeDetail recipe={recipe} />
          <div className="grid gap-6 lg:grid-cols-2">
            <ViewRecipeIngredients recipe={recipe} />
            <ViewRecipeInstructions recipe={recipe} />
          </div>
        </div>
      )}
    </>
  );
};
