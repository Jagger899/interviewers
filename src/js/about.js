import { burgerFunction } from "./components/header";
import { preloaderLoad } from "./components/preloader";
import { modalOpen } from "./components/modal";
import { mainSwiper } from "./components/swiper";
import { dropdownWork } from "./components/dropdown";
// import { castomScrollbar } from "./components/scrollbar";

document.addEventListener("DOMContentLoaded", async function () {
    modalOpen();
    dropdownWork();
    preloaderLoad();
    burgerFunction();
    mainSwiper();
    // castomScrollbar();
});
