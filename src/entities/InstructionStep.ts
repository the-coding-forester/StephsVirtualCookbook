import { Property } from "@tsed/schema";
import { Column, Entity, ManyToOne, Unique } from "typeorm";

import BaseEntity from "./BaseEntity";
import type Recipe from "./Recipe";

@Entity()
@Unique(["recipe", "step"])
export default class InstructionStep extends BaseEntity {
  @Column()
  @Property({ nullable: true })
  step?: number;

  @Column()
  @Property({ nullable: true })
  instruction?: string;

  @ManyToOne("Recipe", "steps", { onDelete: "CASCADE", onUpdate: "CASCADE" })
  recipe: Recipe;
}
