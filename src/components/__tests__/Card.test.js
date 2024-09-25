import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../MOCKS/cardMock.json";
import mock from "../MOCKS/higherOrderCardMock.json";
import Card from "../Card";
import { withDiscountInfo } from "../Card";
import "@testing-library/jest-dom";

it("Should render the Card component", () => {
  render(<Card data={MOCK_DATA} />);
  const name = screen.getByText("Meghana Foods");
  expect(name).toBeInTheDocument();
});

it("Should render the Higher Order Card component", () => {
  const DiscountedCard = withDiscountInfo(Card);
  render(<DiscountedCard data={mock} />);
});
