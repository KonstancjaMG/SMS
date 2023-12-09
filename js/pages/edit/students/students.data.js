import { loadFromLocalStorage, saveToLocalStorage } from "../../../local_storage/local.storage.js";

export function getStudentInfo(pId) {
    const studentsArray = loadFromLocalStorage('students');
    const studentInfo = studentsArray.find(student => student.id === Number(pId));

    if (studentInfo) {
        console.log(studentInfo)
        return studentInfo;
    } else {
        console.log(`No student found with id ${pId}`);
        return null;
    }
}

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



export function saveEditStudent() {


    addBtn.addEventListener('click', function() {
        const nameInput = document.getElementById('students-edit-name');
        const surnameInput = document.getElementById('students-edit-surname');
        const classInput = document.getElementById('students-edit-class');
        const dobInput = document.getElementById('students-edit-dob');
        const placeInput = document.getElementById('students-edit-place');
        const contactInput = document.getElementById('students-edit-contact');


        [nameInput, surnameInput, classInput, dobInput, placeInput, contactInput].forEach(input => {
            input.classList.remove('border-danger');
        });

        const name = document.getElementById('students-edit-name').value;
        const surname = document.getElementById('students-edit-surname').value;
        const cls = document.getElementById('students-edit-class').value;
        const dob = document.getElementById('students-edit-dob').value;
        const place = document.getElementById('students-edit-place').value;
        const contact = document.getElementById('students-edit-contact').value;

        if (isValidName(name) && isValidSurname(surname) && isValidClass(cls) &&
            isValidDob(dob) && isValidPlace(place) && isValidContact(contact)) {

            const studentsArray = loadFromLocalStorage('students') || [];
            const nextId = studentsArray.length > 0 ? Math.max(...studentsArray.map(student => student.id)) + 1 : 1;
            const newStudent = createNewStudent(nextId, name, surname, cls, dob, place, contact);

            studentsArray.push(newStudent);
            saveToLocalStorage('students', studentsArray);
            renderStudents();

        } else {
            addButton.classList.add('border-danger');

            if (!isValidName(name)) nameInput.classList.add('border-danger')
            if (!isValidSurname(surname)) surnameInput.classList.add('border-danger');
            if (!isValidClass(cls)) classInput.classList.add('border-danger');
            if (!isValidDob(dob)) dobInput.classList.add('border-danger');
            if (!isValidPlace(place)) placeInput.classList.add('border-danger');
            if (!isValidContact(contact)) contactInput.classList.add('border-danger');
        }
    });  
}