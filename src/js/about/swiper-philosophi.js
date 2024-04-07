import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Navigation, Pagination]);

export const swiperPhilosophy = function () {
    const swiperPhilosophy = new Swiper(".philosophy-about__swiper", {
        spaceBetween: 0,
        slidesPerView: 1.2,
        loop: true,
        navigation: {
            nextEl: ".philosophy-about__button-next",
            prevEl: ".philosophy-about__button-prev",
        },
        pagination: {
            el: ".philosophy-about__swiper-pagination",
            type: "progressbar",
        },
        scrollbar: {
            el: ".philosophy-about__swiper-scrollbar",
        },
    });

    // let number = document.querySelector(".philosophy-about__number_counter");
    //
    // swiperPhilosophy.on("slideChange", function () {
    //     let activeSlide = this.activeIndex + 1;
    //     number.textContent = "0" + activeSlide;
    // });
};
