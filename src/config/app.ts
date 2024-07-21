import * as env from "env-var";
import dotenv from "dotenv-flow";

dotenv.config({
  node_env: process.env.NODE_ENV,
  default_node_env: "dev",
});

export type Config = Readonly<{
  isProduction: boolean;

  database: Readonly<{
    host: string;
    port: number;
    username: string;
    password: string;
    databaseName: string;
  }>;
}>;

export const appConfig: Config = {
  isProduction: process.env.NODE_ENV === "production",

  database: {
    host: env.get("DB_HOST").required().asString(),
    port: env.get("DB_PORT").default(5432).asIntPositive(),
    username: env.get("DB_USER").required().asString(),
    password: env.get("DB_PASSWORD").required().asString(),
    databaseName: env.get("DB_NAME").required().asString(),
  },
};
