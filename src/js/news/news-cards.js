export const filterPage = () => {
    const filter = document.querySelectorAll(".cards");

    document
        .querySelector(".news__link-items")
        .addEventListener("click", (event) => {
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
};
