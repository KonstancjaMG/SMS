import { addTeacher } from "./add.event.js";
import { searchTeachers } from "./search.event.js";

export function createTeachersEventListeners() {
    addTeacher();
    searchTeachers()
}
