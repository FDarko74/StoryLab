const core = document.querySelector("#core");
const pro = document.querySelector("#pro");
const elite = document.querySelector("#elite");
const pers = document.querySelector("#pers");

core.addEventListener("click", (event) => {
  event.preventDefault();
  window.open(
    "https://wa.me/5592991770223?text=Ol%C3%A1%21%20Gostaria%20de%20contratar%20o%20plano%20Core",
    "_blank",
  );
});
pro.addEventListener("click", (event) => {
  event.preventDefault();
  window.open(
    "https://wa.me/5592991770223?text=Ol%C3%A1%21%20Gostaria%20de%20contratar%20o%20plano%20Pro",
    "_blank",
  );
});
elite.addEventListener("click", (event) => {
  event.preventDefault();
  window.open(
    "https://wa.me/5592991770223?text=Ol%C3%A1%21%20Gostaria%20de%20contratar%20o%20plano%20Elite",
    "_blank",
  );
});
pers.addEventListener("click", (event) => {
  event.preventDefault();
  window.open(
    "https://wa.me/5592991770223?text=Ol%C3%A1%21%20Gostaria%20de%20personalizar%20um%20plano%20pr%C3%B3prio",
    "_blank",
  );
});
