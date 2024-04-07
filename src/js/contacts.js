import { burgerFunction } from "./components/header";
import { contactsFunction } from "./components/contacts";
import { preloaderLoad } from "./components/preloader";
import { modalOpen } from "./components/modal";
import { dropdownWork } from "./components/dropdown";

document.addEventListener("DOMContentLoaded", async function () {
  modalOpen();
  preloaderLoad();
  dropdownWork();
    contactsFunction();
    burgerFunction();
});
