export const colorFooter = () => {
    let colorText = document.querySelectorAll(".footer__text-trriger");
    colorText.forEach((add) => {
        add.classList.add("footer__white-text");
    });
};
