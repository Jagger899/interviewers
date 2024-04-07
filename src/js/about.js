import { preloaderLoad } from "./components/preloader";
import { burgerFunction } from "./components/header";
import { swiperPhilosophy } from "./about/swiper-philosophi";

document.addEventListener("DOMContentLoaded", async function () {
    preloaderLoad();
    burgerFunction();
    swiperPhilosophy();
});
