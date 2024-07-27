import { MaxLength, Min, Required } from "@tsed/schema";
import { Column, Entity, OneToMany } from "typeorm";

import { BaseEntity } from "../../common";
import { Measurement } from "../shared/measurement";
import type { RecipeIngredient } from "./recipe-ingredient.entity";
import { RecipeStep } from "./recipe-step.entity";

@Entity()
export class Recipe extends BaseEntity {
  @Column({ length: 100 })
  @MaxLength(100)
  @Required()
  name?: string;

  @Column()
  @Min(0)
  @Required()
  cookTimeMinutes?: number;

  @Column()
  @Min(0)
  @Required()
  prepTimeMinutes?: number;

  @Column(() => Measurement)
  @Min(1)
  @Required()
  servings?: Measurement;

  @OneToMany("RecipeIngredient", "recipe", { eager: true, cascade: true })
  ingredients?: RecipeIngredient[];

  @OneToMany("RecipeStep", "recipe", { eager: true, cascade: true })
  steps?: RecipeStep[];
}
