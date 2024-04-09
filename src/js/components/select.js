export const selectWork = function () {
    const selectButton = document.querySelector(".select__button");
    const select = document.querySelector(".select");
    const selectList = document.querySelector(".select__list");
    const selectItems = document.querySelectorAll(".select__item");
    const selectSvg = document.querySelector(".select__button-svg");
    const cardBlocks = document.querySelectorAll(".cards");

    selectButton.addEventListener("click", () => {
        selectList.classList.toggle("select__list_active");
        selectSvg.classList.toggle("select__button-svg_rotate");
    });

    selectItems.forEach((selectItem) => {
        selectItem.addEventListener("click", () => {
            const tabId = selectItem.getAttribute("data-tab");
            const currentTab = document.querySelector(tabId);
            selectButton.innerText = selectItem.innerText;
            selectList.classList.remove("select__list_active");
            selectSvg.classList.remove("select__button-svg_rotate");
            cardBlocks.forEach((cardBlock) => {
                cardBlock.classList.remove("cards_active");
            });
            currentTab.classList.add("cards_active");
        });
    });
  
};
