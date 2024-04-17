import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Navigation, Pagination]);

export const mainSwiper = function () {
    const mainSwiper = new Swiper(".swiper", {
        spaceBetween: 0,
        slidesPerView: "auto",
        loop: true,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });

    let progressNumber = document.querySelector(".number_change");
    const numberLength = document.querySelector(".total-number");
    numberLength.textContent = "0" + mainSwiper.slides.length;

    mainSwiper.on("slideChange", function () {
        let activeSlide = this.realIndex + 1;
        progressNumber.textContent = "0" + activeSlide;

        console.log(mainSwiper.activeIndex);
        // if (mainSwiper.activeIndex === 3) {
        //     mainSwiper.slideTo(3);
        // }
        // else if (mainSwiper.activeIndex == mainSwiper.slides.length - 2)
        //     mainSwiper.slideTo(mainSwiper.slides.length - 2);
    });
};
