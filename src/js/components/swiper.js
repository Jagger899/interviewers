import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Navigation, Pagination]);

export const mainSwiper = function () {
  const mainSwiper = new Swiper(".promo__swiper", {
      spaceBetween: 0,
      slidesPerView: "auto",
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

  mainSwiper.on("slideChange", function () {
      let activeSlide = this.activeIndex + 1;
      progressNumber.textContent = "0" + activeSlide;
  });
}
