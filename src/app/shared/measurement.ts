import { Property } from "@tsed/schema";
import { Column } from "typeorm";

export class Measurement {
  @Column()
  @Property()
  unit?: string;

  @Column()
  @Property()
  quantity?: number;
}
