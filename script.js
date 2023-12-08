const navEl = document.querySelector(".nav-wrapper");
const textEl = document.querySelector(".text");
const hamEl = document.querySelector(".mobile-hamburger");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 198) {
        navEl.classList.add("nav-wrapper-scrolled");
        textEl.classList.add("text-scrolled");
        hamEl.classList.add("mobile-hamburger-scrolled");
    } else if (window.scrollY < 198) {
        navEl.classList.remove("nav-wrapper-scrolled");
        textEl.classList.remove("text-scrolled");
        hamEl.classList.remove("mobile-hamburger-scrolled");
    }
});
