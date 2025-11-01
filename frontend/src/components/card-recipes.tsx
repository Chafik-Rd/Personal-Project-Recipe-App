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
  return (
    <Card className="h-fit min-w-65 cursor-pointer p-0 pb-6 transition-transform duration-200 hover:scale-105">
      <div className="relative h-44">
        <Image
          src={dataRecipe.image}
          alt={dataRecipe.title}
          fill
          className="rounded-t-xl object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{dataRecipe.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {dataRecipe.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2">
        {dataRecipe.category.length > 0 &&
          dataRecipe.category.map((category, index) => (
            <Badge key={index}>{category}</Badge>
          ))}
      </CardContent>
      <CardFooter className="flex justify-end">
        <p className="text-xs text-muted-foreground">created at: {dataRecipe.createdAt}</p>
      </CardFooter>
    </Card>
  );
};
