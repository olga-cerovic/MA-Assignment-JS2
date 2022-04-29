export function renderProducts(productsToRender) {
  const productContainer = document.querySelector(".product-container");

  productContainer.innerHTML = "";

  productsToRender.forEach(function (product) {
    productContainer.innerHTML += `<div class="product">
                                                <h4>${product.title}</h4>
                                                <p>${product.price}</p>
                                                <i class="far fa-heart" data-id="${product.id}" data-title="${product.title}">
                                            </div>`;
  });

  const favButtons = document.querySelectorAll(".product i");

  favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    console.log(event);
    event.target.classList.toggle("fa");
    event.target.classList.toggle("far");

    const id = event.target.dataset.id;
    const title = event.target.dataset.title;

    console.log("id", id);
  }
}
