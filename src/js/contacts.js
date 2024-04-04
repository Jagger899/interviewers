import { burgerFunction } from "./components/header";
import { contactsFunction } from "./components/contacts";
import { preloaderLoad } from "./components/preloader";
import { modalOpen } from "./components/modal";

document.addEventListener("DOMContentLoaded", async function () {
  modalOpen();
  preloaderLoad();
    contactsFunction();
    burgerFunction();
});
