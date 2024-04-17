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

    mainSwiper.on("slideChange", function () {
        let activeSlide = this.activeIndex + 1;
        progressNumber.textContent = "0" + activeSlide;

        // if (mainSwiper.activeIndex == 0) mainSwiper.slideTo(1);
        // else if (mainSwiper.activeIndex == mainSwiper.slides.length - 2)
        //     mainSwiper.slideTo(mainSwiper.slides.length - 2);
    });
};
