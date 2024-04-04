import { preloaderLoad } from "./components/preloader";
import { burgerFunction } from "./components/header";
import { newsSwiper } from "./one-news/news-swiper";

document.addEventListener("DOMContentLoaded", async function () {
    preloaderLoad();
    burgerFunction();
    newsSwiper();
});
