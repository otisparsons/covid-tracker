import React from "react";
import { render } from "@testing-library/react";
import Tooltip from "./Tooltip";

describe("Tooltip tests", () => {
  it("should render", () => {
    expect(render(<Tooltip />)).toBeTruthy();
  });
});
