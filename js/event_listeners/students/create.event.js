import { addStudent } from "./add.event.js";
import { handleRemove } from "./remove.event.js";
import { loadEditPage } from "./edit.event.js";
import {initializeSearch} from "./search.event.js"

function createStudentsEventListeners() {
    initializeSearch();
    addStudent();
    handleRemove();
    loadEditPage();
}

export {createStudentsEventListeners}