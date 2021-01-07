import React from "react";
import { render } from "@testing-library/react";
import MapVisual from "./MapVisual";

describe("MapVisual tests", () => {
  it("should render", () => {
    expect(render(<MapVisual />)).toBeTruthy();
  });
});
