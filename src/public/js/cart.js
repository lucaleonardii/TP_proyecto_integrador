const cartContainer = document.querySelector(
  ".cart-container__modal-background"
);

const cartContent = document.querySelector(".cart__content");
let cart = [];

document.addEventListener("click", (e) => {
  // console.log(e.target.classList)
  if (
    e.target.classList.contains("main-header__cart-button-container") ||
    e.target.classList.contains("cart")
  ) {
    cartContainer.style.display = "block";
  }
  if (e.target.classList.contains("modal__close-window")) {
    cartContainer.style.display = "none";
    window.onscroll = () => {
      0;
    };
  }
  if (e.target.classList.contains("cart-container__modal-background")) {
    cartContainer.style.display = "none";
    window.onscroll = () => {
      0;
    };
  }

  if (e.target.classList.contains("card__link")) {
    e.preventDefault();
    const product = {
      pId: e.target.href.split("/", 4)[3].split("*", 3)[0],
      pName: e.target.href.split("/", 4)[3].split("*", 3)[1],
      pPrice: e.target.href.split("/", 4)[3].split("*", 3)[2],
    };
    cart.push(product);

    cartContent.innerHTML = ``;
    cart.forEach((element) => {
      cartContent.innerHTML += `
      <div class="cart__product ${element.pId}">
        <img src="/img/products/baby_doll.jpg" alt="babyDoll" class="product__img">
        <span>${element.pName}</span>
        <span>${element.pPrice}</span>
        <div class="delete-button ${element.pId}">X</div>
      </div>
      `;
    });

    console.log(cart);
  }

  if (e.target.classList.contains("delete-button")) {
    console.log(e.target.classList[1]);
    const found = cart.findIndex((x) => x.pId === e.target.classList[1]);
    cart.splice(found, 1);
    cartContent.innerHTML = ``;
    cart.forEach((element) => {
      cartContent.innerHTML += `
      <div class="cart__product ${element.pId}">
        <img src="/img/products/baby_doll.jpg" alt="babyDoll" class="product__img">
        <span>${element.pName}</span>
        <span>${element.pPrice}</span>
        <div class="delete-button ${element.pId}">X</div>
      </div>
      `;
    });
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    cartContainer.style.display = "none";
  }
});
