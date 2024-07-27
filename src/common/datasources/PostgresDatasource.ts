import { registerProvider } from "@tsed/di";
import { Logger } from "@tsed/logger";
import { DataSource } from "typeorm";

import { Ingredient, Recipe, RecipeIngredient, RecipeStep } from "../../app";
import { appConfig } from "../../config";

export const POSTGRES_DATASOURCE = Symbol.for("PostgresDatasource");
export const datasource = new DataSource({
  type: "postgres",
  entities: [Ingredient, Recipe, RecipeIngredient, RecipeStep],
  host: appConfig.database.host,
  port: appConfig.database.port,
  username: appConfig.database.username,
  password: appConfig.database.password,
  database: appConfig.database.databaseName,
});

registerProvider<DataSource>({
  provide: POSTGRES_DATASOURCE,
  type: "typeorm:datasource",
  deps: [Logger],
  async useAsyncFactory(logger: Logger) {
    await datasource.initialize();

    logger.info(`Connected to database: ${appConfig.database.databaseName}`);

    return datasource;
  },
  hooks: {
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.destroy();
    },
  },
});
