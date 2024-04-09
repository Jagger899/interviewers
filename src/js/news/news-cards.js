export const filterPage = () => {
    const filter = document.querySelectorAll(".cards");
    const selectButton = document.querySelector(".select__button");
    const selectList = document.querySelectorAll(".news__link-items");
    const selectItems = document.querySelectorAll(".news__link-item");
    console.log(selectList);
    const selectSvg = document.querySelector(".select__button-svg");

    // document
    //     .querySelector(".news__link-items")
    //     .addEventListener("click", (event) => {
    //         if (event.target.tagName !== "LI") return false;

    //         let filterClass = event.target.dataset["filter"];

    //         if (event.target.classList.contains("news__link-item")) {
    //             Array.from(
    //                 document.querySelectorAll(".news__link-item"),
    //             ).forEach((eventTarget) => {
    //                 eventTarget.classList.remove("news__link_active");
    //             });

    //             if (!event.target.classList.contains("news__link_active")) {
    //                 event.target.classList.add("news__link_active");
    //             }
    //         }

    //         filter.forEach((elem) => {
    //             elem.classList.remove("hide");
    //             if (
    //                 !elem.classList.contains(filterClass) &&
    //                 filterClass !== "all"
    //             ) {
    //                 elem.classList.add("hide");
    //             }
    //         });
    //     });

    document.querySelectorAll(".news__link-items").forEach((item) => {
        item.addEventListener("click", (event) => {
            if (event.target.tagName !== "LI") return false;

            let filterClass = event.target.dataset["filter"];

            if (event.target.classList.contains("news__link-item")) {
                Array.from(
                    document.querySelectorAll(".news__link-item"),
                ).forEach((eventTarget) => {
                    eventTarget.classList.remove("news__link_active");
                });

                if (!event.target.classList.contains("news__link_active")) {
                    event.target.classList.add("news__link_active");
                }
            }

            filter.forEach((elem) => {
                elem.classList.remove("hide");
                if (
                    !elem.classList.contains(filterClass) &&
                    filterClass !== "all"
                ) {
                    elem.classList.add("hide");
                }
            });
        });
    });

    selectButton.addEventListener("click", () => {
        selectList[1].classList.toggle("news__link-items_active");
        selectSvg.classList.toggle("select__button-svg_rotate");
    });

    selectItems.forEach((selectItem) => {
        selectItem.addEventListener("click", () => {
            selectButton.innerText = selectItem.innerText;
            selectList[1].classList.remove("news__link-items_active");
            selectSvg.classList.remove("select__button-svg_rotate");
        });
    });
};
