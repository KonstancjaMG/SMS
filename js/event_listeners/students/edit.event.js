import { renderStudentEdit } from "../../pages/edit/students/students.page.js";
import { renderStudents } from "../../pages/students/students.page.js";
import { getInputEditFields } from "../../pages/edit/students/students.data.js"
import { addEditedStudentToLocalStorage } from "../../pages/edit/students/students.data.js";
import { isValidName, isValidSurname, isValidDob, isValidPlace, isValidContact } from '../../event_listeners/students/add.event.js';


function loadEditPage() {
    const cardsContainer = document.getElementById('contentWrapper');

    cardsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-btn')) {
            const studentId = event.target.getAttribute('data-edit-student-id');
            renderStudentEdit(cardsContainer, studentId);
        }
    });
}

function addBorderIfInvalidEdit(inputs, data) {
    if (!isValidName(data.name)) inputs.nameInput.classList.add('border-danger');
    if (!isValidSurname(data.surname)) inputs.surnameInput.classList.add('border-danger');
    if (!isValidDob(data.dateOfBirth)) inputs.dobInput.classList.add('border-danger');
    if (!isValidPlace(data.address)) inputs.placeInput.classList.add('border-danger');
    if (!isValidContact(data.parentsContact)) inputs.contactInput.classList.add('border-danger');
}

function isInputDataValidEdit(data) {
    return isValidName(data.name) && isValidSurname(data.surname) &&
           isValidDob(data.dateOfBirth) && isValidPlace(data.address) &&
           isValidContact(data.parentsContact);
}

function confirmEdit(pStudentInfo) {
    const confirmBtn = document.getElementById('confirm-btn');
    confirmBtn.addEventListener('click', () => {
        const inputs = getInputEditFields();

        const studentInfoUpdates = {
            id: pStudentInfo.id,
            name: inputs.nameInput.value.trim(),
            surname: inputs.surnameInput.value.trim(),
            class: inputs.classInput.value.trim(),
            dateOfBirth: inputs.dobInput.value.trim(),
            address: inputs.placeInput.value.trim(),
            parentsContact: inputs.contactInput.value.trim()
        };

        if (isInputDataValidEdit(studentInfoUpdates)) {
            Object.keys(studentInfoUpdates).forEach(key => {
                pStudentInfo[key] = studentInfoUpdates[key];
            });
            addEditedStudentToLocalStorage(studentInfoUpdates);
            renderStudents();
        } else {
            addBorderIfInvalidEdit(inputs, studentInfoUpdates);
        }
    });
}

function cancelEdit() {
    document.getElementById('cancel-btn').addEventListener('click', renderStudents);
}

export {loadEditPage, confirmEdit, cancelEdit}