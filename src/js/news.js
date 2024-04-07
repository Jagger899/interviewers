import { burgerFunction } from "./components/header";
import { colorFooter } from "./news/news-communication";
import { filterPage } from "./news/news-cards";
import { preloaderLoad } from "./components/preloader";
import { modalOpen } from "./components/modal";
import { dropdownWork } from "./components/dropdown";

document.addEventListener("DOMContentLoaded", async function () {
    preloaderLoad();
    modalOpen();
    dropdownWork();
    burgerFunction();
    colorFooter();
    filterPage();
});
