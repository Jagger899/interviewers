export const modalOpen = function () {
  const buttons = document.querySelectorAll('.button-trriger');
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector(".modal__content");
  const modalClose = document.querySelector(".modal__close");
  
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.classList.add("modal_active");
      modalContent.classList.add("modal__content_active");
    })
  })

  modalClose.addEventListener('click', () => {
    modal.classList.remove("modal_active");
    modalContent.classList.remove("modal__content_active");
  })
}