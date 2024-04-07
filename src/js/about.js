import { burgerFunction } from "./components/header";
import { preloaderLoad } from "./components/preloader";
import { modalOpen } from "./components/modal";
import { swiperPhilosophy } from "./about/swiper-philosophi";

document.addEventListener("DOMContentLoaded", async function () {
  modalOpen();
  preloaderLoad();
    burgerFunction();
    swiperPhilosophy();
});
