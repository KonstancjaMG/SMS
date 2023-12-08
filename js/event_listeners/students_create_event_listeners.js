import { addStudent } from "./students_add_event_listeners.js";
import { handleRemove } from "./students_remove_event_listeners.js";
import {searchStudentsByName, searchStudentsBySurname, searchStudentsByDob, searchStudentsByClass, searchStudentsByPlace, searchStudentsByContactNr} from "./students_search_event_listeners.js"

function createStudentsEventListeners() {
    searchStudentsByName();
    searchStudentsBySurname();
    searchStudentsByDob();
    searchStudentsByClass();
    searchStudentsByPlace();
    searchStudentsByContactNr();
    addStudent();
    handleRemove()
}

export {createStudentsEventListeners}