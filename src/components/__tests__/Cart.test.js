import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Cart from "../Cart";
import Header from "../Header";
import store from "../../utils/store";
import Menu from "../Menu";
import API_MOCK from "../MOCKS/menuApiMock.json";
import { act } from "react";
import "@testing-library/jest-dom";
import { clearItems } from "../../utils/cartSlice";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(API_MOCK) })
);

describe("Test the expand/collapse of menu accordions, add items to cart and clear cart", () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <Menu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
  });

  it("Should render the category Recommended (2)", () => {
    expect(screen.getByText("Recommended (2)")).toBeInTheDocument();
    expect(screen.getByText("Dumroot")).toBeInTheDocument();
  });

  it("Should collapse and expand the accordion Recommended (2)", () => {
    const item = screen.getByText("Dumroot");
    expect(item).toBeInTheDocument();
    fireEvent.click(screen.getByText("Recommended (2)"));
    expect(item).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Recommended (2)"));
    expect(screen.getByText("Dumroot")).toBeInTheDocument();
  });

  it("Should display empty cart message", () => {
    expect(screen.getByText("Your cart is empty!!")).toBeInTheDocument();
  });

  it("Should add, remove and display items in the cart", () => {
    fireEvent.click(screen.getAllByRole("button", { name: "ADD" })[0]);
    expect(screen.getByText("(1) items")).toBeInTheDocument();
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText("(2) items")).toBeInTheDocument();
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText("(1) items")).toBeInTheDocument();
    expect(screen.getAllByText("Dumroot").length).toBe(2);

    expect(
      screen.getByRole("button", { name: "Clear Cart" })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
    expect(screen.getByText("(0) items")).toBeInTheDocument();
    expect(screen.getByText("Your cart is empty!!")).toBeInTheDocument();
  });
});
