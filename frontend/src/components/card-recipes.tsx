import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Recipes } from "@/types/recipe";
import Image from "next/image";

export const CardRecipes = ({ dataRecipe }: { dataRecipe: Recipes }) => {
  console.log("dataRecipe:", dataRecipe.image);
  return (
    <Card className="min-w-65 h-fit cursor-pointer hover:scale-105 transition-transform duration-200">
      <div className="h-44 relative">
        <Image
          src={dataRecipe.image}
          alt={dataRecipe.title}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>
      <CardHeader>
        <CardTitle>{dataRecipe.title}</CardTitle>
        <CardDescription className="line-clamp-2">{dataRecipe.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2">
        <Badge>{dataRecipe.category}</Badge>
        <Badge>{dataRecipe.category}</Badge>
      </CardContent>
      <CardFooter className="flex justify-end">
        <p className="text-xs">createdAt: {dataRecipe.createdAt}</p>
      </CardFooter>
    </Card>
  );
};
