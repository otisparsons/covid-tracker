import React from "react";
import { render } from "@testing-library/react";
import InfoCard from "./InfoCard";

describe("InfoCard tests", () => {
  it("should render", () => {
    expect(render(<InfoCard />)).toBeTruthy();
  });
});
