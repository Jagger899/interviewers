import JustValidate from "just-validate";

export const modalOpen = function () {
    const validator = new JustValidate("#form", {
        tooltip: {
            position: "top",
        },
    });

    validator
        .addField("#name", [
            {
                rule: "required",
            },
        ])
        .addField("#email", [
            {
                rule: "required",
            },
            {
                rule: "email",
            },
        ])
        .addField("#phone", [
            {
                rule: "required",
            },
            {
                rule: "number",
            },
        ])
        .addField("#city", [
            {
                rule: "required",
            },
        ])

        .addField("#comment", [
            {
                rule: "required",
            },
        ])

        .addField(
            "#last-name",
            [
                {
                    rule: "required",
                },
            ],
        );

    const buttons = document.querySelectorAll(".button-trriger");
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal__form");
    const modalClose = document.querySelector(".modal__close");
    const modalFormButton = document.getElementById("modal-first-button");
    const requestButton = document.getElementById("modal-second-button");
    const modalRequest = document.querySelector(".modal__request");
    const body = document.querySelector("body");
    // const inputFile = document.getElementById("file");

    // const inputFileLabel = document.querySelector(".change-box__file-label");
    // console.log(inputFileLabel);

    // inputFileLabel.addEventListener("click", () => {
    //     // inputFile.classList.add('change-box__file_vis')
    //     console.log(inputFile.files);
    // });

    modal.addEventListener("click", (event) => {
        const modalClick = event.composedPath().includes(modalContent);
        if (!modalClick) {
            modal.classList.remove("modal_active");
            modalContent.classList.remove("modal__form_active");
            body.classList.remove("body_lock");
        }
    });

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          console.log('click')
            modal.classList.add("modal_active");
            body.classList.add("body_lock");
            modalContent.classList.add("modal__form_active");
            modalRequest.classList.remove("modal__request_active");
        });
    });

    modalClose.addEventListener("click", () => {
        modal.classList.remove("modal_active");
        modalContent.classList.remove("modal__form_active");
        body.classList.remove("body_lock");
    });

    modalFormButton.addEventListener("click", () => {
        if (validator.isValid === true) {
            modalContent.classList.remove("modal__form_active");
            modalRequest.classList.add("modal__request_active");
        }

        console.log(validator.isValid);
    });

    requestButton.addEventListener("click", () => {
        modal.classList.remove("modal_active");
        body.classList.remove("body_lock");
    });
};
