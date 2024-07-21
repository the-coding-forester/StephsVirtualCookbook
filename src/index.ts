import { $log } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";

import { Server } from "./Server";

async function bootstrap() {
  try {
    const platform = await PlatformExpress.bootstrap(Server);
    await platform.listen();

    process.on("SIGINT", () => {
      platform.stop();
    });
  } catch (error) {
    if (error instanceof Error) {
      $log.error({
        event: "SERVER_BOOTSTRAP_ERROR",
        message: error.message,
        stack: error.stack,
      });
    } else {
      $log.error({
        event: "UNKNOWN_SERVER_BOOTSTRAP_ERROR",
        error,
      });
    }
  }
}

bootstrap();
