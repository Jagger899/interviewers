import { burgerFunction } from "./components/header";
import { mainSwiper } from "./components/swiper";
import { dropdownWork } from "./components/dropdown";
import { preloaderLoad } from "./components/preloader";
import { modalOpen } from "./components/modal";

document.addEventListener("DOMContentLoaded", async function () {
  preloaderLoad();
  modalOpen()
    burgerFunction();
    mainSwiper();
    dropdownWork();
});

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 0) {
        header.classList.add("header_black");
    } else {
        header.classList.remove("header_black");
    }
});

// function getCurrentURL() {
//     return window.location.href;
// }

// // Example
// const url = getCurrentURL();
// console.log(url);

// if (
//     url === "http://localhost:8000/index.html" ||
//     url === "http://localhost:8000"
// ) {
//     header.classList.add("header_white-colors");
// } else {
//     header.classList.remove("header_white-colors");
// }
