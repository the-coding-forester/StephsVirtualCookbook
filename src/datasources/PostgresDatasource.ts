import { registerProvider } from "@tsed/di";
import { Logger } from "@tsed/logger";
import { DataSource } from "typeorm";

import config from "../config";

export const POSTGRES_DATASOURCE = Symbol.for("PostgresDatasource");
export const datasource = new DataSource({
  type: "postgres",
  entities: [],
  host: config.appConfig.database.host,
  port: config.appConfig.database.port,
  username: config.appConfig.database.username,
  password: config.appConfig.database.password,
  database: config.appConfig.database.databaseName,
});

registerProvider<DataSource>({
  provide: POSTGRES_DATASOURCE,
  type: "typeorm:datasource",
  deps: [Logger],
  async useAsyncFactory(logger: Logger) {
    await datasource.initialize();

    logger.info(
      `Connected to database: ${config.appConfig.database.databaseName}`,
    );

    return datasource;
  },
  hooks: {
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.destroy();
    },
  },
});
