import React from "react";
import { createServer } from "miragejs";
import Products from "./Products";

export default { title: "screens/Products", component: Products };

createServer({
  routes() {
    this.namespace = "api";

    this.get("/products", () => {
      return {
        data: [
          {
            id: 1,
            name: "Mocha",
            price: 3.5,
            imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
          },
          {
            id: 2,
            name: "Latte",
            price: 3.5,
            imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
          },
          {
            id: 3,
            name: "Vanilla Latte",
            price: 3.5,
            imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
          },
        ],
      };
    });
  },
});

const Template = (args) => <Products />;

const Standard = Template.bind({});

export { Standard };
