import { url } from "./data/url.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import { displayMessage } from "./ui/displayMessage.js";

async function getProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    renderProducts(products);
    searchProducts(products);
  } catch (err) {
    console.log(err);
    displayMessage("error", err, ".product-container");
  }
}

getProducts();
