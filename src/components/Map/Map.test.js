import React from "react";
import { render } from "@testing-library/react";
import Map from "./Map";

describe("Map tests", () => {
  it("should render", () => {
    expect(render(<Map />)).toBeTruthy();
  });
});
