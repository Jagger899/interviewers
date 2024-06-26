import JustValidate from "just-validate";

export const modalOpen = function () {
    const validator = new JustValidate("#form", {
        validateBeforeSubmitting: true,
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
                validator: (value) => {
                    return value !== undefined && value.length > 16;
                },
                errorMessage: "Message should be more than 16 letters.",
            },
        ])

        .addField("#file", [
            {
                rule: "minFilesCount",
                value: 1,
            },
            {
                rule: "files",
                value: {
                    files: {
                        extensions: [
                            "jpeg",
                            "jpg",
                            "png",
                            "ico",
                            "gif",
                            "raw",
                            "tiff",
                            "bmp",
                            "psd",
                            "webp",
                            "heif",
                            "avif",
                            "svg",
                            "pdf",
                            "eps",
                            "ai",
                            "cdr",
                        ],
                        // maxSize: 200000,
                        // minSize: 10,
                        types: [
                            "image/jpeg",
                            "image/jpg",
                            "image/png",
                            "image/ico",
                            "image/gif",
                            "image/raw",
                            "image/tiff",
                            "image/bmp",
                            "image/psd",
                            "image/webp",
                            "image/heif",
                            "image/avif",
                            "image/svg",
                            "image/pdf",
                            "image/eps",
                            "image/ai",
                            "image/cdr",
                        ],
                    },
                },
                errorMessage: "Upload file should be only image type",
            },
        ])

        .addField("#last-name", [
            {
                rule: "required",
            },
        ]);

    const buttons = document.querySelectorAll(".button-trriger");
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal__form");
    const modalClose = document.querySelector(".modal__close");
    const modalFormButton = document.getElementById("modal-first-button");
    const requestButton = document.getElementById("modal-second-button");
    const modalRequest = document.querySelector(".modal__request");
    const body = document.querySelector("body");
    const inputFiles = document.querySelectorAll(".change-box__file");
    const label = document.querySelector(".change-box__file-label");
    const inputLabelText = document.querySelector(
        ".change-box__file-label-value",
    );
    const inputLabelAdd = document.querySelector(".change-box__file-label-add");
    const addFileTitle = document.querySelectorAll(".change-box__text");

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
            console.log("click");
            modal.classList.add("modal_active");
            body.classList.add("body_lock");
            modalContent.classList.add("modal__form_active");
            modalRequest.classList.remove("modal__request_active");
        });
    });

    modalClose.addEventListener("click", (event) => {
        event.preventDefault();
        modal.classList.remove("modal_active");
        modalContent.classList.remove("modal__form_active");
        body.classList.remove("body_lock");
    });

    modalFormButton.addEventListener("click", () => {
        if (validator.isValid === true) {
            modalContent.classList.remove("modal__form_active");
            modalRequest.classList.add("modal__request_active");
        }
    });

    requestButton.addEventListener("click", () => {
        modal.classList.remove("modal_active");
        body.classList.remove("body_lock");
    });

    inputFiles.forEach(function (input) {
        let label = input.nextElementSibling;
        let labelVal = label.innerHTML;

        input.addEventListener("change", function (event) {
            // let fileName = "";
            // if (this.files && this.files.length > 1) {
            //     fileName = (
            //         this.getAttribute("data-multiple-caption") || ""
            //     ).replace("{count}", this.files.length);
            // } else {
            //     fileName = event.target.value.split("\\").pop();
            // }

            // if (this.files && this.files.length > 1) {
            //     fileName = (
            //         this.getAttribute("data-multiple-caption") || ""
            //     ).replace("{count}", this.files.length);
            // } else {
            let fileName = event.target.value.split("\\").pop();
            // console.log(input.files[0].type.includes("image"));
            // }
            // && input.files[0].type.includes("image")

            if (fileName) {
                inputLabelText.innerHTML = `${fileName} was added`;
                inputLabelText.classList.add(
                    "change-box__file-label-value_active",
                );
                inputLabelAdd.classList.add(
                    "change-box__file-label-add_checked",
                );
                addFileTitle.forEach((title) => {
                    title.classList.add("change-box__text_hide");
                });
            } else {
                label.innerHTML = labelVal;
                inputLabelAdd.classList.remove(
                    "change-box__file-label-add_checked",
                );
            }
        });
    });

    label.addEventListener("click", () => {
        if (
            inputLabelAdd.classList.contains(
                "change-box__file-label-add_checked",
            )
        ) {
            inputLabelAdd.classList.remove(
                "change-box__file-label-add_checked",
            );
            inputLabelText.innerHTML = ``;
            inputFiles[0].setAttribute("disabled", "");
            addFileTitle.forEach((title) => {
                title.classList.remove("change-box__text_hide");
            });
        } else {
            inputFiles[0].removeAttribute("disabled");
        }
    });
};
