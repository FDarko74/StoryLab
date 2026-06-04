const inst = document.querySelector("#instagram");
const face = document.querySelector("#facebook");
const what = document.querySelector("#whatsapp");
const tik = document.querySelector("#tiktok");
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");
const social = document.querySelector("#social-icons");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  social.classList.toggle("active");
});

inst.addEventListener("click", async (event) => {
  event.preventDefault();
  window.open(
    "https://www.instagram.com/agencia.storylab?igsh=MXAweXRqc3U0Z3B0Mg==",
    "_blank",
  );
});
face.addEventListener("click", async (event) => {
  event.preventDefault();
  window.open(
    "https://www.facebook.com/profile.php?id=61577453846957",
    "_blank",
  );
});
what.addEventListener("click", async (event) => {
  event.preventDefault();
  window.open("https://wa.me/5592991770223", "_blank");
});
tik.addEventListener("click", async (event) => {
  event.preventDefault();
  window.open(
    "https://www.tiktok.com/@storylab.ilha.cri?_r=1&_t=ZS-96gV7Df17BQ",
    "_blank",
  );
});
