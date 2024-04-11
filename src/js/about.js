import { burgerFunction } from "./components/header";
import { preloaderLoad } from "./components/preloader";
import { modalOpen } from "./components/modal";
import { swiperPhilosophy } from "./about/swiper-philosophi";
import { castomScrollbar } from "./components/scrollbar";

document.addEventListener("DOMContentLoaded", async function () {
    modalOpen();
    preloaderLoad();
    burgerFunction();
    swiperPhilosophy();
    castomScrollbar();
});
