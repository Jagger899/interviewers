import { burgerFunction } from "./components/header";
import { newsSwiper } from "./one-news/news-swiper";
import { preloaderLoad } from "./components/preloader";
import { modalOpen } from "./components/modal";
import { dropdownWork } from "./components/dropdown";

document.addEventListener("DOMContentLoaded", async function () {
  preloaderLoad();
  modalOpen();
  dropdownWork();
    burgerFunction();
    newsSwiper();
});
