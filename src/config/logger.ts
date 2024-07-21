import { $log, DILoggerOptions } from "@tsed/common";

import { appConfig } from "./app";

if (appConfig.isProduction) {
  $log.appenders.set("stdout", {
    type: "stdout",
    levels: ["info", "debug"],
    layout: {
      type: "json",
    },
  });

  $log.appenders.set("stderr", {
    levels: ["trace", "fatal", "error", "warn"],
    type: "stderr",
    layout: {
      type: "json",
    },
  });
}

export default <DILoggerOptions>{
  disableRoutesSummary: appConfig.isProduction,
};
