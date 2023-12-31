import { loadFromLocalStorage, saveToLocalStorage } from "../../local_storage/local.storage.js";
import { renderStudents } from "../../pages/students/students.page.js";

export const isValidName = (name) => /^[a-zA-Z ]+$/.test(name);
export const isValidSurname = (surname) => /^[A-Za-z]+([- ][A-Za-z]+)*$/.test(surname);
// export const isValidClass = (cls) => /^[a-zA-Z0-9]+$/.test(cls);
export const isValidDob = (dob) => /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(dob);
export const isValidPlace = (place) => /^[a-zA-Z0-9,.\s]+$/.test(place);
export const isValidContact = (contact) => /^\d{3}-\d{4}$/.test(contact);

function getInputFields() {
    return {
        nameInput: document.getElementById('students-add-name'),
        surnameInput: document.getElementById('students-add-surname'),
        classInput: document.getElementById('students-add-class'),
        dobInput: document.getElementById('students-add-dob'),
        placeInput: document.getElementById('students-add-place'),
        contactInput: document.getElementById('students-add-contact'),
        addButton: document.getElementById('add-btn')
    };
}

export const createNewStudent = (id, name, surname, cls, dob, address, contact) => ({
    id, name, surname, class: cls, dateOfBirth: dob, address, parentsContact: contact
});

function addStudent() {
    const inputs = getInputFields();

    inputs.addButton.addEventListener('click', function() {
        resetInputBorders(inputs);

        const studentData = getStudentData(inputs);
        if (isInputDataValid(studentData)) {
            addNewStudentToLocalStorage(studentData);
            renderStudents();
            showSuccessMessage('Student added successfully!');
        } else {
            addBorderIfInvalid(inputs, studentData);
        }
    });
}

export function resetInputBorders(inputs) {
    Object.values(inputs).forEach(input => {
        if (input.classList) input.classList.remove('border-danger');
    });
}

function getStudentData(inputs) {
    return {
        name: inputs.nameInput.value,
        surname: inputs.surnameInput.value,
        class: inputs.classInput.value,
        dob: inputs.dobInput.value,
        place: inputs.placeInput.value,
        contact: inputs.contactInput.value
    };
}

export function isInputDataValid(data) {
    return isValidName(data.name) && isValidSurname(data.surname) 
         //  && isValidClass(data.class) 
           && isValidDob(data.dob) &&
           isValidPlace(data.place) && isValidContact(data.contact);
}

function addNewStudentToLocalStorage(data) {
    const studentsArray = loadFromLocalStorage('students') || [];
    const nextId = studentsArray.length > 0 ? Math.max(...studentsArray.map(s => s.id)) + 1 : 1;
    const newStudent = createNewStudent(nextId, data.name, data.surname, data.class, data.dob, data.place, data.contact);
    studentsArray.push(newStudent);
    saveToLocalStorage('students', studentsArray);
}

export function showSuccessMessage(message) {
    const addSuccess = document.getElementById('add-status');
    addSuccess.innerHTML = message;
    addSuccess.classList.add('text-success');
    addSuccess.style.display = 'block';
}

export function addBorderIfInvalid(inputs, data) {
    if (!isValidName(data.name)) inputs.nameInput.classList.add('border-danger')
    if (!isValidSurname(data.surname)) inputs.surnameInput.classList.add('border-danger');
    if (!isValidDob(data.dob)) inputs.dobInput.classList.add('border-danger');
    if (!isValidPlace(data.place)) inputs.placeInput.classList.add('border-danger');
    if (!isValidContact(data.contact)) inputs.contactInput.classList.add('border-danger');
}

export {addStudent, getStudentData}