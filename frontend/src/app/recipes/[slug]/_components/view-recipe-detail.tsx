import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Recipes } from "@/types/recipe";
import { SquarePen } from "lucide-react";
import Image from "next/image";

export const ViewRecipeDetail = ({ recipe }: { recipe: Recipes }) => {
  return (
    <Card className="bg-secondary flex flex-row gap-4 lg:gap-6 p-6">
      <section className="relative h-80 w-1/2 max-w-150">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="rounded-xl object-cover"
        />
      </section>
      <section className="flex w-1/2 flex-col gap-4">
        <div>
          <SquarePen size={20} className="ml-auto cursor-pointer" />
          <p className="text-3xl font-bold capitalize">{recipe.title}</p>
        </div>
        <div className="flex gap-2">
          {recipe.category.length > 0 &&
            recipe.category.map((category, index) => (
              <Badge key={index}>{category}</Badge>
            ))}
        </div>

        <div>
          <p className="text-xl font-medium">Description</p>
          <p>{recipe.description}</p>
        </div>
        <p className="text-muted-foreground mt-auto text-end text-xs">
          created at: {recipe.createdAt}
        </p>
      </section>
    </Card>
  );
};
