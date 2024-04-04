import { burgerFunction } from "./components/header";
import { colorFooter } from "./news/news-communication";
import { filterPage } from "./news/news-cards";
import { preloaderLoad } from "./components/preloader";

document.addEventListener("DOMContentLoaded", async function () {
    preloaderLoad();
    burgerFunction();
    colorFooter();
    filterPage();
});
