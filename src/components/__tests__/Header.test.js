import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render the Header Component", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const Home = screen.getByText("Home");
  expect(Home).toBeInTheDocument();
});

it("Should change login to logout  on click", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login = screen.getByText("Login");

  fireEvent.click(login);

  const logout = screen.getByText("Logout");

  expect(logout).toBeInTheDocument();
});
