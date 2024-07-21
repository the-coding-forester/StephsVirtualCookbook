import { Column, Entity, ManyToOne } from "typeorm";
import { Property } from "@tsed/schema";

import BaseEntity from "./BaseEntity";
import type Ingredient from "./Ingredient";
import type Recipe from "./Recipe";

@Entity()
export default class RecipeIngredient extends BaseEntity {
  @ManyToOne("Ingredient", "recipeIngredients")
  ingredient: Ingredient;

  @ManyToOne("Recipe", "recipeIngredients")
  recipe: Recipe;

  @Column({ nullable: true })
  @Property()
  unit?: string;

  @Column({ nullable: true })
  @Property()
  quantity?: number;
}
