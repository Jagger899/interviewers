export const dropdownWork = function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownBox = document.querySelectorAll(".dropdown__box");
    const menu = document.querySelectorAll(".dropdown__menu");
    const options = document.querySelectorAll(".dropdown__menu-item");
    const arrowSvg = document.querySelectorAll(".dropdown__svg-arrow");
    const selectedText = document.querySelectorAll(".dropdown__text");

    dropdownBox.forEach((box) => {
        box.addEventListener("click", () => {
            arrowSvg.forEach((svg) => {
                svg.classList.toggle("dropdown__svg-arrow_rotate");
            });
            menu.forEach((item) => {
                item.classList.toggle("dropdown__menu_open");
            });
        });
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            selectedText.forEach((text) => {
                text.innerText = option.innerText;
            });
            menu.forEach((item) => {
                item.classList.remove("dropdown__menu_open");
            });
            arrowSvg.forEach((svg) => {
                svg.classList.remove("dropdown__svg-arrow_rotate");
            });
            options.forEach((option) => {
                option.classList.remove("dropdown__menu-item_active");
            });
            option.classList.add("dropdown__menu-item_active");
        });
    });
};
