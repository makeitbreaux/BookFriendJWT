import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ProfileEditForm from "./components/ProfileEditForm";
import Login from "./components/Login";

it("renders without crashing", function() {
  render(<App />);
});

it("renders without crashing", function () {
  render(
      <MemoryRouter>
            <Login />
            <Register />
            <Dashboard />
            <ProfileEditForm />
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
            <Login />
            <Register />
            <Dashboard />
            <ProfileEditForm />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
