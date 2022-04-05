import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Dashboard from "./Dashboard";

it("matches snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  