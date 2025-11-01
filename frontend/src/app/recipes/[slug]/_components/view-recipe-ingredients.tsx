import { Card } from "@/components/ui/card";
import type { Recipes } from "@/types/recipe";
import { SquarePen } from "lucide-react";

export const ViewRecipeIngredients = ({ recipe }: { recipe: Recipes }) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <p className="text-xl font-medium">Ingredients</p>
        <SquarePen size={20} className="cursor-pointer" />
      </div>
      <div className="flex flex-col gap-4">
        {recipe.ingredients?.map((ingredient, index) => (
          <div key={index} className="flex justify-between">
            <p>{ingredient.name}</p>
            <p>
              {ingredient.amount} {ingredient.unit}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};
