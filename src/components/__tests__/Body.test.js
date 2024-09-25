import Body from "../Body";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../MOCKS/allResCards.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should search the cards with input text", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("res-card");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBar = screen.getByPlaceholderText("Search");
  expect(searchBar).toBeInTheDocument();

  fireEvent.change(searchBar, {
    target: { value: "burger" },
  });

  const cardsAfterSearch = screen.getAllByTestId("res-card");

  expect(cardsAfterSearch.length).toBe(5);
});

it("Should filter top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("res-card");
  expect(cardsBeforeFilter.length).toBe(20);

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  expect(filterBtn).toBeInTheDocument();

  fireEvent.click(filterBtn);

  const cardsAfterFilter = screen.getAllByTestId("res-card");
  expect(cardsAfterFilter.length).toBe(2);
});
