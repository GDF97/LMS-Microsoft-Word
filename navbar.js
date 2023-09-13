const btnMobile = document.getElementById("btn-mobile");
const headerNavbar = document.querySelector(".header-navbar");

btnMobile.addEventListener("click", () => {
  headerNavbar.classList.toggle("active");
});
