import { addClass } from "./add.event.js";
import { removeClass } from "./remove.event.js";
import { renderEditPage } from "./edit.event.js";
import { initializeClassSearch } from "./search.event.js";
import { showStudents } from "./show.students.js";
import { showTeachers } from "./show.teachers.js";

export function createClassesEventListeners() {
    initializeClassSearch()
    addClass();
    removeClass();
    renderEditPage();
    showStudents();
    showTeachers();
}