import { addClass } from "./add.event.js";
import { removeClass } from "./remove.event.js";
import { renderEditPage } from "./edit.event.js";

export function createClassesEventListeners() {
    addClass();
    removeClass();
    renderEditPage();
}