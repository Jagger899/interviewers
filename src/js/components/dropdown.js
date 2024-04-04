export const dropdownWork = function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownBox = document.querySelector(".dropdown__box");
  const dropdownBoxModal = document.querySelector(".dropdown__box-modal");
  const menu = document.querySelector(".dropdown__menu");
  const options = document.querySelectorAll(".dropdown__menu-item");
  const arrowSvg = document.querySelector(".dropdown__svg-arrow");
  const selectedText = document.querySelector(".dropdown__text");
  // 
  dropdownBoxModal.addEventListener("click", () => {
      arrowSvg.classList.toggle("dropdown__svg-arrow_rotate");
      menu.classList.toggle("dropdown__menu_open");
  });


  dropdownBox.addEventListener("click", () => {
      arrowSvg.classList.toggle("dropdown__svg-arrow_rotate");
      menu.classList.toggle("dropdown__menu_open");
  });

  options.forEach((option) => {
      option.addEventListener("click", () => {
          selectedText.innerText = option.innerText;
          menu.classList.remove("dropdown__menu_open");
          arrowSvg.classList.remove("dropdown__svg-arrow_rotate");
          options.forEach((option) => {
              option.classList.remove("dropdown__menu-item_active");
          });
          option.classList.add("dropdown__menu-item_active");
      });
  });
}