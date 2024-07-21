import { Property } from "@tsed/schema";
import { Column, ManyToOne } from "typeorm";

import BaseEntity from "./BaseEntity";
import type TagType from "./TagType";

export default class Tag extends BaseEntity {
  @Column()
  @Property()
  name!: string;

  @Column()
  @Property()
  type_id!: string;

  @ManyToOne("TagType", "tags")
  tagType: TagType;
}
