import { getExistingFaves } from "./faveFunction.js";
import { saveFaves } from "./saveFaves.js";
export function renderProducts(productsToRender) {
  const productContainer = document.querySelector(".product-container");

  const favourites = getExistingFaves();

  productContainer.innerHTML = "";

  productsToRender.forEach(function (product) {
    let cssClass = "far";

    const doesObjectExist = favourites.find(function (fave) {
      console.log(fave);

      return parseInt(fave.id) === product.id;
    });

    console.log(doesObjectExist);

    if (doesObjectExist) {
      cssClass = "fa";
    }

    productContainer.innerHTML += `<div class="product">
                                                <h4>${product.title}</h4>
                                                <p>${product.price}</p>
                                                <i class="${cssClass} fa-heart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}">
                                            </div>`;
  });

  const favButtons = document.querySelectorAll(".product i");

  favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    event.target.classList.toggle("fa");
    event.target.classList.toggle("far");

    const id = event.target.dataset.id;
    const title = event.target.dataset.title;
    const price = event.target.dataset.price;

    const currentFaves = getExistingFaves();

    const productItemExists = currentFaves.find(function (fave) {
      return fave.id === id;
    });

    if (productItemExists === undefined) {
      const productItem = { id: id, title: title, price: price };
      currentFaves.push(productItem);
      saveFaves(currentFaves);
    } else {
      const newFaves = currentFaves.filter((fave) => fave.id !== id);
      saveFaves(newFaves);
    }
  }
}
