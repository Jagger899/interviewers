// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
export const newsSwiper = function () {
    const newsSwiper = new Swiper(".news-page__swiper", {
        slidesPerView: "4.1",
        loop: true,
    });
};
