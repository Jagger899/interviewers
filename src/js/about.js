import { burgerFunction } from "./components/header";
import { preloaderLoad } from "./components/preloader";
document.addEventListener("DOMContentLoaded", async function () {
  preloaderLoad();
    burgerFunction();
});
