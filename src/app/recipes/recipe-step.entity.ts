import { Property } from "@tsed/schema";
import { Column, Entity, ManyToOne, Unique } from "typeorm";

import { BaseEntity } from "../../common";
import { Recipe } from "./recipe.entity";

@Entity()
@Unique(["recipe", "step"])
export class RecipeStep extends BaseEntity {
  @Column()
  @Property()
  step!: number;

  @Column()
  @Property()
  instruction?: string;

  @ManyToOne("Recipe", "steps", { onDelete: "CASCADE", onUpdate: "CASCADE" })
  recipe!: Recipe;
}
