import { Column, Entity } from "typeorm";
import BaseEntity from "./BaseEntity";
import { Property } from '@tsed/schema';

class Measurement {
  @Column({ nullable: true })
  @Property()
  unit?: string;

  @Column({ nullable: true })
  @Property()
  quantity?: number;
}

@Entity()
export default class Ingredient extends BaseEntity {
  @Column()
  @Property()
  name!: string;

  @Column()
  @Property()
  servingSize!: Measurement;

  @Column()
  @Property()
  totalFat!: Measurement;

  @Column({ nullable: true })
  @Property()
  saturatedFat?: Measurement;

  @Column({ nullable: true })
  @Property()
  transFat?: Measurement;

  @Column({ nullable: true })
  @Property()
  cholesterol?: Measurement;

  @Column({ nullable: true })
  @Property()
  sodium?: Measurement;

  @Column()
  @Property()
  totalCarbs!: Measurement;

  @Column({ nullable: true })
  @Property()
  totalSugars?: Measurement;

  @Column({ nullable: true })
  @Property()
  addedSugars?: Measurement;

  @Column()
  @Property()
  protein!: Measurement;
}
