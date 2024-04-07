export const modalOpen = function () {
  const buttons = document.querySelectorAll('.button-trriger');
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector(".modal__content");
  const modalClose = document.querySelector(".modal__close");
  const modalFormButton = document.getElementById("modal-first-button");
  const requestButton = document.getElementById("modal-second-button");
  const modalRequest = document.querySelector(".modal__request");
  
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.classList.add("modal_active");
      modalContent.classList.add("modal__content_active");
      modalRequest.classList.remove("modal__request_active");
    })
  })

  modalClose.addEventListener('click', () => {
    modal.classList.remove("modal_active");
    modalContent.classList.remove("modal__content_active");
  })

  modalFormButton.addEventListener('click', () => {
    modalContent.classList.remove("modal__content_active");
    modalRequest.classList.add('modal__request_active');
  });

  requestButton.addEventListener('click', () => {
    modal.classList.remove("modal_active");
  });
}