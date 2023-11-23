import { renderApp } from "./render.js";
import { createEventListeners } from "./navbar_event_listeners.js";

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  createEventListeners();
});
