import { addClass } from "./add.event.js";
import { removeClass } from "./remove.event.js";
import { renderEditPage } from "./edit.event.js";
import { initializeClassSearch } from "./search.event.js";

export function createClassesEventListeners() {
    initializeClassSearch()
    addClass();
    removeClass();
    renderEditPage();
}