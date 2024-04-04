import { burgerFunction } from "./components/header";
import { contactsFunction } from "./components/contacts";
import { preloaderLoad } from "./components/preloader";

document.addEventListener("DOMContentLoaded", async function () {
  preloaderLoad();
    contactsFunction();
    burgerFunction();
});
