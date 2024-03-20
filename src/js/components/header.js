export const burgerFunction = () => {
  const burger = document.querySelector(".header__burger-icon");
  const background = document.querySelector(".header__burger-background");
  const botton = document.querySelector(".header__button");
  const logo = document.querySelector(".header__logo");
  const language = document.querySelector(".header__language");

  burger.addEventListener("click", function () {
    burger.classList.toggle("header__burger-icon_active");
    background.classList.toggle("header__burger-background_active");
    botton.classList.toggle("header__button_active");
    logo.classList.toggle("header__logo_active");
    language.classList.toggle("header__language_active");
  });
};
