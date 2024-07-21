import { Property } from "@tsed/schema";
import { CreateDateColumn, PrimaryColumn, UpdateDateColumn, VersionColumn } from "typeorm";

export default abstract class BaseEntity {
  @PrimaryColumn({ type: "uuid" })
  @Property()
  id!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @VersionColumn()
  version!: number;
}
