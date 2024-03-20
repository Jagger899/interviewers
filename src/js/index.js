import { burgerFunction } from "./components/header";
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

burgerFunction();

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".promo__swiper", {
    spaceBetween: 0,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    navigation: {
        nextEl: ".promo__button-next",
        prevEl: ".promo__button-prev",
    },
    pagination: {
        el: ".promo__swiper-pagination",
        type: "progressbar",
    },
    scrollbar: {
        el: ".promo__swiper-scrollbar",
    },
});

let progressNumber = document.querySelector(".promo__number_left");

swiper.on("slideChange", function () {
    let activeSlide = this.activeIndex + 1;
    progressNumber.textContent = "0" + activeSlide;
});

const dropdown = document.querySelector(".dropdown");
const dropdownBox = document.querySelector(".dropdown__box");
const menu = document.querySelector(".dropdown__menu");
const options = document.querySelectorAll(".dropdown__menu-item");
const arrowSvg = document.querySelector(".dropdown__svg-arrow");
const selectedText = document.querySelector(".dropdown__text");
const header = document.querySelector('.header');

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 0) {
        header.classList.add("header_black");
    } else {
        header.classList.remove("header_black");
    }
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
    })
    option.classList.add('dropdown__menu-item_active');
    });
});
