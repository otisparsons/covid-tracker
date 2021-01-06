import React from "react";
import { render } from "@testing-library/react";
import Legend from "./Legend";

describe("Legend tests", () => {
  it("should render", () => {
    expect(render(<Legend />)).toBeTruthy();
  });
});
