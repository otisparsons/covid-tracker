import React from "react";
import { render } from "@testing-library/react";
import CountryList from "./CountryList";

describe("CountryList tests", () => {
  it("should render", () => {
    expect(render(<CountryList />)).toBeTruthy();
  });
});
