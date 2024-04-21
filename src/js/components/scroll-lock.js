const burger = document.querySelector(".header__burger-icon");

export const funcBodyScrollLock = () => {
    const targetElement = document.querySelector(".header__scroll");
    bodyScrollLock.disableBodyScroll(targetElement);
};
