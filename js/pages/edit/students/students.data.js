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

export function addEditedStudentToLocalStorage(data) {
    const studentsArray = loadFromLocalStorage('students') || [];
    const studentIndex = studentsArray.findIndex(student => student.id === data.id);

    if (studentIndex !== -1) {
        const existingStudent = studentsArray[studentIndex];
        existingStudent.name = data.name;
        existingStudent.surname = data.surname;
        existingStudent.class = data.class;
        existingStudent.dateOfBirth = data.dateOfBirth;
        existingStudent.address = data.address;
        existingStudent.parentsContact = data.parentsContact;
    }

    saveToLocalStorage('students', studentsArray);
}


export function getInputEditFields() {
    return {
        nameInput: document.getElementById('students-edit-name'),
        surnameInput: document.getElementById('students-edit-surname'),
        classInput: document.getElementById('students-edit-class'),
        dobInput: document.getElementById('students-edit-dob'),
        placeInput: document.getElementById('students-edit-place'),
        contactInput: document.getElementById('students-edit-contact')
    };
}
