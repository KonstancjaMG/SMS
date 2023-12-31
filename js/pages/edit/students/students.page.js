import { getEditForm } from "../students/students.template.js";
import { getStudentInfo } from "../students/students.data.js";
import { getClassesOptions } from "../../../pages/classes/classes.data.js";
import { confirmEdit, cancelEdit } from "../../../event_listeners/students/edit.event.js";


export function renderStudentEdit(pContainer, pStudentId) {
    const studentInfo = getStudentInfo(pStudentId);
    const classesOptions = getClassesOptions();

    const editFormHtml = getEditForm(studentInfo, classesOptions); 
    pContainer.innerHTML = editFormHtml;
    confirmEdit(studentInfo);
    cancelEdit();
}   
