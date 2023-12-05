import { renderApp } from "./render.js";
import { createNavEventListeners } from "./event_listeners/navbar_event_listeners.js";
import { createContentEventListeners } from "./event_listeners/content_event_listeners.js";

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  createNavEventListeners();
  createContentEventListeners();
});
