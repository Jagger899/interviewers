import { burgerFunction } from "./components/header";
import { dropdownWork } from "./components/dropdown";
import { preloaderLoad } from "./components/preloader";
import { modalOpen } from "./components/modal";


document.addEventListener("DOMContentLoaded", async function () {
    preloaderLoad();
    modalOpen();
    burgerFunction();
    dropdownWork();
});
