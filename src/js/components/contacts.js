export const contactsFunction = () => {
    const burger = document.querySelector(".background-trriger");
    burger.classList.add("header__white-background");

    const botton = document.querySelector(".button-trriger");
    botton.classList.add("header__white-button");

    const logo = document.querySelectorAll(".text-trriger");
    logo.forEach((add) => {
        add.classList.add("header__white-text");
    });

    const footer = document.querySelectorAll(".footer__text-trriger");
    footer.forEach((add) => {
        add.classList.add("footer__white-text");
    });

    const background = document.querySelector(".background-trriger-tr");
    background.classList.add("header__transperent");
};
