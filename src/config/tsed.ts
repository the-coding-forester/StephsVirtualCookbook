import { readFileSync } from "node:fs";

import { Config, appConfig } from "./app";
import loggerConfig from "./logger";

const pkg = JSON.parse(readFileSync("./package.json", { encoding: "utf8" }));

export const tsedConfig: Partial<TsED.Configuration> & {
  appConfig: Config;
} = {
  appConfig,
  version: pkg.version,
  logger: loggerConfig,
};
