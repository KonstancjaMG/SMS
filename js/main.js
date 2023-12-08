import { renderApp } from "./render.js";
import { createNavEventListeners } from "./event_listeners/navbar.event.js";
import { createContentEventListeners } from "./event_listeners/content.event.js";
import { initializeLocalStorage } from "./local_storage/local.storage.js";


document.addEventListener('DOMContentLoaded', () => {
  initializeLocalStorage();
  renderApp();
  createNavEventListeners();
  createContentEventListeners();
});
