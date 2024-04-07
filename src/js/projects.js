import { burgerFunction } from "./components/header";
import { mainSwiper } from "./components/swiper";
import { dropdownWork } from "./components/dropdown";
import { preloaderLoad } from "./components/preloader";
import { modalOpen } from "./components/modal";
import { projectsTabsWork } from "./components/projectsTabs";

// console.log('projects')
document.addEventListener("DOMContentLoaded", async function () {
    preloaderLoad();
    modalOpen();
    burgerFunction();
    mainSwiper();
  dropdownWork();
  projectsTabsWork();
});
