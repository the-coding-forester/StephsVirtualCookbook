import { Property } from "@tsed/schema";
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from "typeorm";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Property()
  id!: string;

  @CreateDateColumn()
  @Property()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @VersionColumn()
  version?: number;
}
