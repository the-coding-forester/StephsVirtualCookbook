import { registerProvider } from "@tsed/di";
import { DataSource } from "typeorm";
import { Logger } from "@tsed/logger";

export const POSTGRES_DATASOURCE = Symbol.for("PostgresDatasource");
export const PostgresDatasource = new DataSource({
  type: "postgres",
  entities: [],
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
});

registerProvider<DataSource>({
  provide: POSTGRES_DATASOURCE,
  type: "typeorm:datasource",
  deps: [Logger],
  async useAsyncFactory(logger: Logger) {
    await PostgresDatasource.initialize();

    logger.info("Connected with typeorm to database: Postgres");

    return PostgresDatasource;
  },
  hooks: {
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.close();
    },
  },
});
