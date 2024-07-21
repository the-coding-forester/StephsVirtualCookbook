import { Property } from "@tsed/schema";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";

import BaseEntity from "./BaseEntity";
import type InstructionStep from "./InstructionStep";
import Tag from './Tag';

@Entity()
export default class Recipe extends BaseEntity {
  @Column()
  @Property()
  name!: string;

  @Column({ nullable: true })
  @Property()
  cookTime?: number;

  @Column({ nullable: true })
  @Property()
  prepTime?: number;

  @Column({ nullable: true })
  @Property()
  totalServings?: number;

  @Column({ nullable: true })
  @Property()
  servingSize?: string;

  @OneToMany("InstructionStep", "recipe", { eager: true, cascade: true })
  steps?: InstructionStep[];

  @ManyToMany(() => Tag)
  @JoinTable({ name: 'recipe_tag' })
  tags?: Tag[]
}
