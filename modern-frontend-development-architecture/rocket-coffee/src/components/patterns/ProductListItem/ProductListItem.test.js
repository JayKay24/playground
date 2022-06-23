/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import { OnSale, SoldOut, Standard } from "./ProductListItem.stories";

it("shows on sale label when isOnSale", () => {
  const { getByText } = render(<OnSale {...OnSale.args} />);

  expect(getByText(/on sale/i)).toBeInTheDocument();
});

it("disables the button when sold out", () => {
  const { getByText } = render(<SoldOut {...SoldOut.args} />);

  expect(getByText(/sold out/i)).toHaveAttribute("disabled");
});

it("calls callback when button Add to Cart pressed", () => {
  const onAddToCart = jest.fn();
  const { getByText } = render(
    <Standard {...Standard.args} onAddToCart={onAddToCart} />
  );

  fireEvent.click(getByText(/add to cart/i));

  expect(onAddToCart).toHaveBeenCalled();
});
