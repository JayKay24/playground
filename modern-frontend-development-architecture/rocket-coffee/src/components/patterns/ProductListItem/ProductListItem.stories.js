import React from "react";
import { action } from "@storybook/addon-actions";

import ProductListItem from "./ProductListItem";

export default {
  title: "patterns/ProductListItem",
  component: ProductListItem,
};

const Template = (args) => (
  <ProductListItem onAddToCart={action("Add to cart clicked")} {...args} />
);

const commonArgs = {
  name: "Standard Coffee",
  price: "2.50",
  imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
};

const Standard = Template.bind({});
Standard.args = { ...commonArgs };

const SoldOut = Template.bind({});
SoldOut.args = { ...Standard.args, isSoldOut: true };

const OnSale = Template.bind({});
OnSale.args = { ...Standard.args, isOnSale: true };

export { Standard, SoldOut, OnSale };
