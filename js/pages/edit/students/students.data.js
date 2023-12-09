import { loadFromLocalStorage, saveToLocalStorage } from "../../../local_storage/local.storage.js";

export function getStudentInfo(pId) {
    const studentsArray = loadFromLocalStorage('students');
    const studentInfo = studentsArray.find(student => student.id === Number(pId));

    if (studentInfo) {
        return studentInfo;
    } else {
        console.log(`No student found with id ${pId}`);
        return null;
    }
}