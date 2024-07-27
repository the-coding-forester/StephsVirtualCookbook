import { Property } from "@tsed/schema";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { Ingredient } from "../ingredients/ingredient.entity";
import { Measurement } from "../shared/measurement";
import { Recipe } from "./recipe.entity";

@Entity()
export class RecipeIngredient {
  @PrimaryColumn()
  ingredient_id!: string;

  @PrimaryColumn()
  recipe_id!: string;

  @ManyToOne("Ingredient", "recipes")
  @JoinColumn({ name: "ingredient_id" })
  ingredient!: Ingredient;

  @ManyToOne("Recipe", "ingredients", {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "recipe_id" })
  recipe!: Recipe;

  @Column(() => Measurement)
  @Property()
  measurement?: Measurement;
}
