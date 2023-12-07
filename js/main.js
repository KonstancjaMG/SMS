import { renderApp } from "./render.js";
import { createNavEventListeners } from "./event_listeners/navbar_event_listeners.js";
import { createContentEventListeners } from "./event_listeners/content_event_listeners.js";
import { initializeLocalStorage } from "./local_storage/local_storage_upload.js";


document.addEventListener('DOMContentLoaded', () => {
  initializeLocalStorage();
  renderApp();
  createNavEventListeners();
  createContentEventListeners();
});
