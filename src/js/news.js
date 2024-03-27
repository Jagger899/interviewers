import { burgerFunction } from "./components/header";
import { colorFooter } from "./news/news-communication";
import { filterPage } from "./news/news-cards";

document.addEventListener("DOMContentLoaded", async function () {
    burgerFunction();
    colorFooter();
    filterPage();
});
