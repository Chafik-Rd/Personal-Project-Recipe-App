import { Card } from "@/components/ui/card";
import type { Recipes } from "@/types/recipe";
import { SquarePen } from "lucide-react";

export const ViewRecipeInstructions = ({ recipe }: { recipe: Recipes }) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <p className="text-xl font-medium">Instructions</p>
        <SquarePen size={20} className="cursor-pointer" />
      </div>
      {recipe.instructions.map((instruction, index) => (
        <div key={index} className="flex gap-4 rounded-md bg-black p-3">
          <span className="bg-secondary flex h-7 w-7 items-center justify-center rounded-full font-medium">
            {index + 1}
          </span>
          <div className="bg-card border-primary w-full border p-3">
            <p>{instruction}</p>
          </div>
        </div>
      ))}
    </Card>
  );
};
