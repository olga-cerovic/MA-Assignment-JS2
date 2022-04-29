import { renderProducts } from "./renderProducts.js";

export function searchProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    console.log(event);

    const searchValue = event.target.value;

    const filteredProducts = products.filter(function (product) {
      if (product.price < searchValue) {
        return true;
      }
    });

    // console.log(filteredProducts);

    // productsToRender = filteredProducts;

    renderProducts(filteredProducts);
  };
}
