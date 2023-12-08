import { loadFromLocalStorage, saveToLocalStorage } from "../local_storage/local_storage_upload.js";
import { renderStudents } from "../content/students.js";

const isValidName = (name) => /^[a-zA-Z ]+$/.test(name);
const isValidSurname = (surname) => /^[A-Za-z]+([- ][A-Za-z]+)*$/.test(surname);
const isValidClass = (cls) => /^[a-zA-Z0-9]+$/.test(cls);
const isValidDob = (dob) => /^\d{4}-\d{2}-\d{2}$/.test(dob);
const isValidPlace = (place) => /^[a-zA-Z0-9,.\s]+$/.test(place);
const isValidContact = (contact) => /^\d{3}-\d{4}$/.test(contact);

const createNewStudent = (id, name, surname, cls, dob, address, contact) => ({
    id,
    name,
    surname,
    class: cls,
    dateOfBirth: dob,
    address,
    parentsContact: contact
});

const displayStatusMessage = (message, isSuccess = true) => {
    const statusDiv = document.getElementById('add-status');
    statusDiv.className = isSuccess ? 'text-success' : 'text-danger';
    statusDiv.style.display = 'block';
    statusDiv.innerHTML = message;
};

function addStudent() {
    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', function() {
        const name = document.getElementById('students-add-name').value;
        const surname = document.getElementById('students-add-surname').value;
        const cls = document.getElementById('students-add-class').value;
        const dob = document.getElementById('students-add-dob').value;
        const place = document.getElementById('students-add-place').value;
        const contact = document.getElementById('students-add-contact').value;

        if (isValidName(name) && isValidSurname(surname) && isValidClass(cls) &&
            isValidDob(dob) && isValidPlace(place) && isValidContact(contact)) {
            
            const studentsArray = loadFromLocalStorage('students') || [];
            const nextId = studentsArray.length > 0 ? Math.max(...studentsArray.map(student => student.id)) + 1 : 1;
            const newStudent = createNewStudent(nextId, name, surname, cls, dob, place, contact);

            studentsArray.push(newStudent);
            saveToLocalStorage('students', studentsArray);
            renderStudents();
            displayStatusMessage('Student added successfully!');

        } else {
            let errorMessages = [];
            if (!isValidName(name)) errorMessages.push('Provided name is invalid!');
            if (!isValidSurname(surname)) errorMessages.push('Provided surname is invalid!');
            if (!isValidClass(cls)) errorMessages.push('Provided class is invalid!');
            if (!isValidDob(dob)) errorMessages.push('Provided date of birth is invalid!');
            if (!isValidPlace(place)) errorMessages.push('Provided address is invalid!');
            if (!isValidContact(contact)) errorMessages.push('Provided contact number is invalid!');

            displayStatusMessage(errorMessages.join(' - '), false);
        }
    });  
}

export {addStudent}