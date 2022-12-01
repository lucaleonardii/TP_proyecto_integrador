let carto = [];
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("card__link")) {
    console.log(e.target.href.split("/",4)[3])
    console.log(e.target)
  }
});
