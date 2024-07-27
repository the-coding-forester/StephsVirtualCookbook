import { Property, Required } from "@tsed/schema";
import { Column, Entity } from "typeorm";

import { BaseEntity } from "../../common";
import { Measurement } from "../shared/measurement";

class FatNutrientFacts {
  @Column(() => Measurement)
  @Property()
  total?: Measurement;

  @Column(() => Measurement)
  @Property()
  saturated?: Measurement;

  @Column(() => Measurement)
  @Property()
  trans?: Measurement;
}

class CarbNutrientFacts {
  @Column(() => Measurement)
  @Property()
  total?: Measurement;

  @Column(() => Measurement)
  @Property()
  totalSugars?: Measurement;

  @Column(() => Measurement)
  @Property()
  addedSugars?: Measurement;

  @Column(() => Measurement)
  @Property()
  dietaryFibers?: Measurement;
}

class NutrientFacts {
  @Column(() => Measurement)
  @Property()
  @Required()
  servingSize!: Measurement;

  @Column({ nullable: true })
  @Property()
  calories?: number;

  @Column(() => FatNutrientFacts)
  @Property()
  fat?: FatNutrientFacts;

  @Column(() => Measurement)
  @Property()
  cholesterol?: Measurement;

  @Column(() => Measurement)
  @Property()
  sodium?: Measurement;

  @Column(() => CarbNutrientFacts)
  @Property()
  carbs?: CarbNutrientFacts;

  @Column(() => Measurement)
  @Property()
  protein?: Measurement;
}

@Entity()
export class Ingredient extends BaseEntity {
  @Column()
  @Property()
  @Required()
  name!: string;

  @Column(() => NutrientFacts)
  @Property()
  nutrientFacts?: NutrientFacts;
}
