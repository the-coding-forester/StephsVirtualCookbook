import { readFileSync } from "node:fs";

import appConfig, { Config } from "./envs";
import loggerConfig from "./logger/index";

const pkg = JSON.parse(readFileSync("./package.json", { encoding: "utf8" }));

const config: Partial<TsED.Configuration> & {
  appConfig: Config;
} = {
  appConfig,
  version: pkg.version,
  logger: loggerConfig,
};

export default config;
