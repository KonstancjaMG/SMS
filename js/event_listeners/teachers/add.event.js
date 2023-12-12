import { resetInputBorders } from "../students/add.event.js";
import { loadFromLocalStorage, saveToLocalStorage } from "../../local_storage/local.storage.js";
import { renderTeachers } from "../../pages/teachers/teachers.page.js";
import { showSuccessMessage } from "../students/add.event.js";

export const isValidName = (name) => /^[a-zA-Z ]+$/.test(name);
export const isValidSurname = (surname) => /^[A-Za-z]+([- ][A-Za-z]+)*$/.test(surname);
export const isValidDob = (dob) => /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(dob);
export const isValidPlace = (place) => /^[a-zA-Z0-9,.\s]+$/.test(place);
export const isValidContact = (contact) => /^\d{3}-\d{4}$/.test(contact);
export const isValidLicense = (license) => /^[A-Z]{2}-\d{4}$/.test(license);

function getTeacherInputFields() {
    return {
        nameInput: document.getElementById('teachers-add-name'),
        surnameInput: document.getElementById('teachers-add-surname'),
        classInput: document.getElementById('teachers-add-class'),
        dobInput: document.getElementById('teachers-add-dob'),
        addressInput: document.getElementById('teachers-add-place'),
        contactInput: document.getElementById('teachers-add-contact'),
        licenseInput: document.getElementById('teachers-add-licence'),
        addButton: document.getElementById('add-btn')
    };
}

const createNewTeacher = (id, name, surname, cls, dob, address, contact, license) => ({
    id, name, surname, class: cls, dateOfBirth: dob, address, contactInfo: contact, licenseId: license
});

function getTeacherData(inputs) {
    return {
        name: inputs.nameInput.value,
        surname: inputs.surnameInput.value,
        class: inputs.classInput.value,
        dob: inputs.dobInput.value,
        address: inputs.addressInput.value,
        contact: inputs.contactInput.value,
        license: inputs.licenseInput.value
    };
}

function isTeacherInputDataValid(data) {
    return isValidName(data.name) && isValidSurname(data.surname) 
           && isValidDob(data.dob) && isValidPlace(data.address) 
           && isValidContact(data.contact) && isValidLicense(data.license);
}

function addNewTeacherToLocalStorage(data, teachersArray) {
    const nextId = teachersArray.length > 0 ? Math.max(...teachersArray.map(t => t.id)) + 1 : 1;
    const newTeacher = createNewTeacher(nextId, data.name, data.surname, data.class, data.dob, data.address, data.contact, data.license);
    teachersArray.push(newTeacher);
    saveToLocalStorage('teachers', teachersArray);
}

function addBorderIfInvalidForTeacher(inputs, data) {
    if (!isValidName(data.name)) inputs.nameInput.classList.add('border-danger');
    if (!isValidSurname(data.surname)) inputs.surnameInput.classList.add('border-danger');
    if (!isValidDob(data.dob)) inputs.dobInput.classList.add('border-danger');
    if (!isValidPlace(data.address)) inputs.addressInput.classList.add('border-danger');
    if (!isValidContact(data.contact)) inputs.contactInput.classList.add('border-danger');
    if (!isValidLicense(data.license)) inputs.licenseInput.classList.add('border-danger');
}

export function addTeacher() {
    const inputs = getTeacherInputFields();

    inputs.addButton.addEventListener('click', function() {
        resetInputBorders(inputs);

        const teacherData = getTeacherData(inputs);
        if (isTeacherInputDataValid(teacherData)) {
            const teachersArray = loadFromLocalStorage('teachers') || [];
            addNewTeacherToLocalStorage(teacherData, teachersArray);
            renderTeachers(); 
            showSuccessMessage('Teacher added successfully!');
        } else {
            addBorderIfInvalidForTeacher(inputs, teacherData);
        }
    });
}

