import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1722090155114 implements MigrationInterface {
  name = "InitialMigration1722090155114";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ingredient" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "name" character varying NOT NULL, "nutrientFactsCalories" integer, "nutrientFactsServingSizeUnit" character varying NOT NULL, "nutrientFactsServingSizeQuantity" integer NOT NULL, "nutrientFactsFatTotalUnit" character varying NOT NULL, "nutrientFactsFatTotalQuantity" integer NOT NULL, "nutrientFactsFatSaturatedUnit" character varying NOT NULL, "nutrientFactsFatSaturatedQuantity" integer NOT NULL, "nutrientFactsFatTransUnit" character varying NOT NULL, "nutrientFactsFatTransQuantity" integer NOT NULL, "nutrientFactsCholesterolUnit" character varying NOT NULL, "nutrientFactsCholesterolQuantity" integer NOT NULL, "nutrientFactsSodiumUnit" character varying NOT NULL, "nutrientFactsSodiumQuantity" integer NOT NULL, "nutrientFactsCarbsTotalUnit" character varying NOT NULL, "nutrientFactsCarbsTotalQuantity" integer NOT NULL, "nutrientFactsCarbsTotalSugarsUnit" character varying NOT NULL, "nutrientFactsCarbsTotalSugarsQuantity" integer NOT NULL, "nutrientFactsCarbsAddedSugarsUnit" character varying NOT NULL, "nutrientFactsCarbsAddedSugarsQuantity" integer NOT NULL, "nutrientFactsCarbsDietaryFibersUnit" character varying NOT NULL, "nutrientFactsCarbsDietaryFibersQuantity" integer NOT NULL, "nutrientFactsProteinUnit" character varying NOT NULL, "nutrientFactsProteinQuantity" integer NOT NULL, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "recipe" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "name" character varying(100) NOT NULL, "cookTimeMinutes" integer NOT NULL, "prepTimeMinutes" integer NOT NULL, "servingsUnit" character varying NOT NULL, "servingsQuantity" integer NOT NULL, CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "recipe_ingredient" ("ingredient_id" uuid NOT NULL, "recipe_id" uuid NOT NULL, "measurementUnit" character varying NOT NULL, "measurementQuantity" integer NOT NULL, CONSTRAINT "PK_87d66f3132a5cac4c048892f618" PRIMARY KEY ("ingredient_id", "recipe_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "recipe_step" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "step" integer NOT NULL, "instruction" character varying NOT NULL, "recipeId" uuid, CONSTRAINT "UQ_09329220d2bde1efcba98f73a66" UNIQUE ("recipeId", "step"), CONSTRAINT "PK_654c0969ac0899d321c00ea0eaf" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "FK_e1948973c93c7cabca7522b6ff3" FOREIGN KEY ("ingredient_id") REFERENCES "ingredient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "FK_256c22ec24d2d590b39e11a3ee4" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_step" ADD CONSTRAINT "FK_1c52f396004dadfb9357f762268" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "recipe_step" DROP CONSTRAINT "FK_1c52f396004dadfb9357f762268"`,
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "FK_256c22ec24d2d590b39e11a3ee4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "FK_e1948973c93c7cabca7522b6ff3"`,
    );
    await queryRunner.query(`DROP TABLE "recipe_step"`);
    await queryRunner.query(`DROP TABLE "recipe_ingredient"`);
    await queryRunner.query(`DROP TABLE "recipe"`);
    await queryRunner.query(`DROP TABLE "ingredient"`);
  }
}
