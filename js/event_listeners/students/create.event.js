import { addStudent } from "./add.event.js";
import { handleRemove } from "./remove.event.js";
import { loadEditPage } from "./edit.event.js";
import {searchStudentsByName, searchStudentsBySurname, searchStudentsByDob, searchStudentsByClass, searchStudentsByPlace, searchStudentsByContactNr} from "./search.event.js"

function createStudentsEventListeners() {
    searchStudentsByName();
    searchStudentsBySurname();
    searchStudentsByDob();
    searchStudentsByClass();
    searchStudentsByPlace();
    searchStudentsByContactNr();
    addStudent();
    handleRemove();
    loadEditPage();
}

export {createStudentsEventListeners}