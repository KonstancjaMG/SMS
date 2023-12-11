import { loadFromLocalStorage } from "../../local_storage/local.storage.js";
import { students } from "../../data.js";
import { createStudentsEventListeners } from "../../event_listeners/students/create.event.js";
import { getClassesOptions } from "../classes/classes.data.js";
import { createStudentsContent } from "./students.data.js";

export const renderStudents = () => {
    const storedStudents = loadFromLocalStorage('students') || students;
    const classesOptions = getClassesOptions();

     createStudentsContent(storedStudents, classesOptions);
     createStudentsEventListeners();
    };