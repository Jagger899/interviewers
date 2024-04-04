import { preloaderLoad } from "./components/preloader";
import { burgerFunction } from "./components/header";

document.addEventListener("DOMContentLoaded", async function () {
    preloaderLoad();
    burgerFunction();
});
