import { burgerFunction } from "./components/header";
import { newsSwiper } from "./one-news/news-swiper";
import { preloaderLoad } from "./components/preloader";

document.addEventListener("DOMContentLoaded", async function () {
  preloaderLoad();
    burgerFunction();
    newsSwiper();
});
