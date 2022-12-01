// import { pid } from "process";

console.log("Alta.html working");

function altaHtmlVerification() {
  function generateId(max, min) {
    var chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var idLenght = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomId = Array(idLenght)
      .fill(chars)
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
    console.log("33");
    return randomId;
  }
  const pId = document.querySelector(".product-id");
  pId.setAttribute("value", generateId(16, 16));

  const mainForm = document.querySelector(".main-form");

  const productName = document.querySelector("#product-name");
  const productPrice = document.querySelector("#product-price");
  const productStock = document.querySelector("#product-stock");
  const productTrademark = document.querySelector("#product-trademark");
  const productCategory = document.querySelector("#product-category");
  const productShortDescription = document.querySelector(
    "#product-short-description"
  );

  mainForm.addEventListener("submit", (e) => {
    if (productName.value === "" || productName.value === null) {
      productName.parentNode.setAttribute(
        "data-error",
        "Debe completar este campo para continuar"
      );
      window.scrollTo(0, 0);
      e.preventDefault();
    } else {
      productName.parentNode.removeAttribute("data-error");
    }

    if (productPrice.value === "" || productPrice.value === null) {
      productPrice.parentNode.setAttribute(
        "data-error",
        "Debe completar este campo para continuar"
      );
      window.scrollTo(0, 0);
      e.preventDefault();
    } else {
      productPrice.parentNode.removeAttribute("data-error");
    }

    if (productStock.value === "" || productStock.value === null) {
      productStock.parentNode.setAttribute(
        "data-error",
        "Debe completar este campo para continuar"
      );
      window.scrollTo(0, 0);
      e.preventDefault();
    } else {
      productStock.parentNode.removeAttribute("data-error");
    }

    if (productTrademark.value === "" || productTrademark.value === null) {
      productTrademark.parentNode.setAttribute(
        "data-error",
        "Debe completar este campo para continuar"
      );
      window.scrollTo(0, 0);
      e.preventDefault();
    } else {
      productTrademark.parentNode.removeAttribute("data-error");
    }

    if (productCategory.value === "" || productCategory.value === null) {
      productCategory.parentNode.setAttribute(
        "data-error",
        "Debe completar este campo para continuar"
      );
      window.scrollTo(0, 0);
      e.preventDefault();
    } else {
      productCategory.parentNode.removeAttribute("data-error");
    }

    if (
      productShortDescription.value === "" ||
      productShortDescription.value === null
    ) {
      productShortDescription.parentNode.setAttribute(
        "data-error",
        "Debe completar este campo para continuar"
      );
      window.scrollTo(0, 0);
      e.preventDefault();
    } else {
      productShortDescription.parentNode.removeAttribute("data-error");
    }
  });
}

altaHtmlVerification();
