"use client";
import { InputField } from "@/components/input-field";
import { TextareaField } from "@/components/textarea-field";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { useState } from "react";
import { useModal } from "./context/modal-context";

export const RecipeModal = ({
  onClose,
}: {
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  const { close } = useModal();
  const initialTitle = "";
  const initialIngredients = "";
  const initialSteps = "";

  const [title, setTitle] = useState(initialTitle);
  const [ingredientsText, setIngredientsText] = useState(initialIngredients);
  const [stepsText, setStepsText] = useState(initialSteps);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-2xl">
        <section className="flex items-center justify-between border-b pb-4">
          <p>Create New Recipe</p>
          <button className="cursor-pointer" onClick={onClose}>
            <X />
          </button>
        </section>
        <form className="space-y-4">
          <InputField
            label="Recipe Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Spicy Chicken Stir-Fry"
          />

          <TextareaField
            label="Ingredients (One per line)"
            value={ingredientsText}
            onChange={(e) => setIngredientsText(e.target.value)}
            placeholder={`1.5 lbs chicken breast\n2 tbsp soy sauce\n1 red bell pepper`}
          />

          <TextareaField
            label="Steps / Instructions (One per line)"
            value={stepsText}
            onChange={(e) => setStepsText(e.target.value)}
            placeholder={`1. Dice the chicken.\n2. Marinate in soy sauce for 10 minutes.\n3. Stir-fry bell pepper...`}
          />
          <div className="flex justify-end gap-2">
            <Button onClick={close} variant="outline">
              Cancel
            </Button>
            <Button>Add Recipe</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
