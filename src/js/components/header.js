export function burgerFunction() {
    const header = document.querySelector(".header");
    const burger = document.querySelector(".header__burger-icon");
    const background = document.querySelector(".header__burger-background");
    const bottom = document.querySelector(".header__button");
    const logo = document.querySelector(".header__logo");
    const language = document.querySelector(".header__language");
    const body = document.body;

    window.addEventListener("scroll", function () {
        if (this.window.scrollY > 0) {
            header.classList.add("header_black");
        } else {
            header.classList.remove("header_black");
        }
    });

    burger.addEventListener("click", function () {
        burger.classList.toggle("header__burger-icon_active");
        background.classList.toggle("header__burger-background_active");
        bottom.classList.toggle("header__button_active");
        logo.classList.toggle("header__logo_active");
        language.classList.toggle("header__language_active");
        body.classList.toggle("block");
    });
}
