import { burgerFunction } from "./components/header";
import { preloaderLoad } from "./components/preloader";
import { modalOpen } from "./components/modal";
document.addEventListener("DOMContentLoaded", async function () {
  modalOpen();
  preloaderLoad();
    burgerFunction();
});
