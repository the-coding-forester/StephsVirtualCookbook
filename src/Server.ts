import { join } from "node:path";

// /!\ keep this import
import "@tsed/ajv";
import { PlatformApplication } from "@tsed/common";
import { Configuration, Inject } from "@tsed/di";
import "@tsed/platform-express";
import "@tsed/swagger";

import * as pages from "./controllers/pages/index";
import * as rest from "./controllers/rest/index";
import config from "./config/index";

@Configuration({
  ...config,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpsPort: false,
  disableComponentsScan: true,
  ajv: {
    returnsCoercedValues: true,
  },
  mount: {
    "/rest": [...Object.values(rest)],
    "/": [...Object.values(pages)],
  },
  swagger: [
    {
      path: "/docs",
      specVersion: "3.0.1",
    },
  ],
  middlewares: [
    "cors",
    "cookie-parser",
    "compression",
    "method-override",
    "json-parser",
    { use: "urlencoded-parser", options: { extended: true } },
  ],
  views: {
    root: join(process.cwd(), "../views"),
    extensions: {
      ejs: "ejs",
    },
  },
  exclude: ["**/*.spec.ts"],
})
export class Server {
  @Inject()
  protected app: PlatformApplication;

  @Configuration()
  protected settings: Configuration;
}
