import { getExistingFaves } from "./ui/faveFunction.js";

const favourites = getExistingFaves();

const productContainer = document.querySelector(".product-container");

if (favourites.length === 0) {
  productContainer.innerHTML = "You haven't selected any favorites yet.";
}

favourites.forEach((favourite) => {
  productContainer.innerHTML += `<div class="product"
                                    <h4>${favourite.title}</h4>
                                    <i class="fa fa-heart"></i>
                                  </div>`;
});
