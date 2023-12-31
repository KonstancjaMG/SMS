import { addTeacher } from "./add.event.js";
import { searchTeachers } from "./search.event.js";
import { removeTeacher } from "./remove.event.js";
import { renderEditTeacherPage } from "./edit.event.js";

export function createTeachersEventListeners() {
    addTeacher();
    searchTeachers();
    removeTeacher();
    renderEditTeacherPage();
}
