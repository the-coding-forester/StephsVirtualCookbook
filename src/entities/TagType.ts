import { Column, Entity, OneToMany } from "typeorm";
import { Property } from "@tsed/schema";

import BaseEntity from "./BaseEntity";
import type Tag from "./Tag";

@Entity()
export default class TagType extends BaseEntity {
  @Column()
  @Property()
  name!: string;

  @Column()
  @Property({ nullable: true })
  color?: string;

  @OneToMany("Tag", "tagType")
  tags?: Tag[];
}
