const navToggle = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".navBar");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navBar--visible")
})