import { PlatformTest } from "@tsed/common";
import { expect } from "chai";
import SuperTest from "supertest";
import TestAgent from "supertest/lib/agent";

import { Server } from "./Server";

describe("Server", () => {
  let request: TestAgent<SuperTest.Test>;

  beforeEach(PlatformTest.bootstrap(Server));
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);

  it("should call GET /rest", async () => {
    const response = await request.get("/rest").expect(404);

    expect(response.body).to.deep.equal({
      errors: [],
      message: 'Resource "/rest" not found',
      name: "NOT_FOUND",
      status: 404,
    });
  });
});
