import { expect } from "chai";

import fibonacci from "./Fibonacci";

describe("fibonacci", () => {
  it("should return 0", () => {
    expect(fibonacci(0)).to.eql([0]);
  });
});
