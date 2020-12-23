import React from "react";
import { render } from "@testing-library/react";
import CasesGraph from "./CasesGraph";

describe("CasesGraph tests", () => {
  it("should render", () => {
    expect(render(<CasesGraph />)).toBeTruthy();
  });
});
