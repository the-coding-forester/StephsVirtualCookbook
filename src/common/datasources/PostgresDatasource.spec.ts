import { PlatformTest } from "@tsed/common";
import { expect } from "chai";
import { DataSource } from "typeorm";

import { POSTGRES_DATASOURCE, datasource } from "./PostgresDatasource";

describe("PostgresDatasource", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<DataSource>(POSTGRES_DATASOURCE);

    expect(instance).to.be.instanceof(datasource);
  });
});
