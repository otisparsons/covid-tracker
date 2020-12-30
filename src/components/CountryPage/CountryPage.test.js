import React from "react";
import { render } from "@testing-library/react";
import CountryPage from "./CountryPage";

describe("CountryPage tests", () => {
  it("should render", () => {
    expect(render(<CountryPage />)).toBeTruthy();
  });
});
