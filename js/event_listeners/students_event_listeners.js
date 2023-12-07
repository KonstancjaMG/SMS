import { loadFromLocalStorage, saveToLocalStorage } from "../local_storage/local_storage_upload.js";
import { createStudentCards } from "../content/students.js";

function searchStudentsByName() {
    const searchInput = document.getElementById('students-search-name');
    const cardsContainer = document.getElementById('cardsColumn');
    searchInput.addEventListener('input', function () {
        const studentsArray = loadFromLocalStorage('students');
        const searchText = searchInput.value.toLowerCase();

        const filteredStudents = studentsArray.filter(student => {
            return student.name.toLowerCase().includes(searchText);
        });

        if (filteredStudents.length === 0) {
            cardsContainer.innerHTML = `<div class="text-center">No students found...</div>`;
        } else {
            cardsContainer.innerHTML = createStudentCards(filteredStudents);
        }
    });
}

function searchStudentsBySurname() {
    const searchInput = document.getElementById('students-search-surname');
    const cardsContainer = document.getElementById('cardsColumn');
    searchInput.addEventListener('input', function () {
        const studentsArray = loadFromLocalStorage('students');
        const searchText = searchInput.value.toLowerCase();

        const filteredStudents = studentsArray.filter(student => {
            return student.surname.toLowerCase().includes(searchText);
        });

        if (filteredStudents.length === 0) {
            cardsContainer.innerHTML = `<div class="text-center">No students found...</div>`;
        } else {
            cardsContainer.innerHTML = createStudentCards(filteredStudents);
        }
    });
}

function searchStudentsByDob() {
    const searchInput = document.getElementById('students-search-dob');
    const cardsContainer = document.getElementById('cardsColumn');
    searchInput.addEventListener('input', function () {
        const studentsArray = loadFromLocalStorage('students');
        const searchText = searchInput.value.toLowerCase();

        const filteredStudents = studentsArray.filter(student => {
            return student.dateOfBirth.toLowerCase().includes(searchText);
        });

        if (filteredStudents.length === 0) {
            cardsContainer.innerHTML = `<div class="text-center">No students found...</div>`;
        } else {
            cardsContainer.innerHTML = createStudentCards(filteredStudents);
        }
    });
}

function searchStudentsByClass() {
    const searchInput = document.getElementById('students-search-class');
    const cardsContainer = document.getElementById('cardsColumn');
    searchInput.addEventListener('input', function () {
        const studentsArray = loadFromLocalStorage('students');
        const searchText = searchInput.value.toLowerCase();

        const filteredStudents = studentsArray.filter(student => {
            return student.class.toLowerCase().includes(searchText);
        });

        if (filteredStudents.length === 0) {
            cardsContainer.innerHTML = `<div class="text-center">No students found...</div>`;
        } else {
            cardsContainer.innerHTML = createStudentCards(filteredStudents);
        }
    });
}

function searchStudentsByPlace() {
    const searchInput = document.getElementById('students-search-place');
    const cardsContainer = document.getElementById('cardsColumn');
    searchInput.addEventListener('input', function () {
        const studentsArray = loadFromLocalStorage('students');
        const searchText = searchInput.value.toLowerCase();

        const filteredStudents = studentsArray.filter(student => {
            return student.address.toLowerCase().includes(searchText);
        });

        if (filteredStudents.length === 0) {
            cardsContainer.innerHTML = `<div class="text-center">No students found...</div>`;
        } else {
            cardsContainer.innerHTML = createStudentCards(filteredStudents);
        }
    });
}

function searchStudentsByContactNr() {
    const searchInput = document.getElementById('students-search-contact');
    const cardsContainer = document.getElementById('cardsColumn');
    searchInput.addEventListener('input', function () {
        const studentsArray = loadFromLocalStorage('students');
        const searchText = searchInput.value.toLowerCase();

        const filteredStudents = studentsArray.filter(student => {
            return student.parentsContact.toLowerCase().includes(searchText);
        });

        if (filteredStudents.length === 0) {
            cardsContainer.innerHTML = `<div class="text-center">No students found...</div>`;
        } else {
            cardsContainer.innerHTML = createStudentCards(filteredStudents);
        }
    });
}

function handleEdit() {
    const editBtn = document.getElementById('edit-btn')
    editBtn.addEventListener('click', function () {

    })
}

function handleRemove() {
    const removeBtn = document.getElementById('remove-btn');
    removeBtn.addEventListener('click', function () {

    })
}

function addStudent() {
    const addBtn = document.getElementById('add-btn');
    const addName = document.getElementById('students-add-name');
    const addSurname = document.getElementById('students-add-surname');
    const addClass = document.getElementById('students-add-class');
    const addDob = document.getElementById('students-add-dob');
    const addPlace = document.getElementById('students-add-place');
    const addContact = document.getElementById('students-add-contact');

    addBtn.addEventListener('click', function() {
        const nameRegex = /^[a-zA-Z ]+$/;
        const surnameRegex = /^[A-Za-z]+([- ][A-Za-z]+)*$/
        const classRegex = /^[a-zA-Z0-9]+$/;
        const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
        const placeRegex = /^[a-zA-Z0-9,.\s]+$/;
        const contactRegex = /^\d{3}-\d{4}$/;
    
        const isNameValid = nameRegex.test(addName.value);
        const isSurnameValid = surnameRegex.test(addSurname.value);
        const isClassValid = classRegex.test(addClass.value);
        const isDobValid = dobRegex.test(addDob.value);
        const isPlaceValid = placeRegex.test(addPlace.value);
        const isContactValid = contactRegex.test(addContact.value);
    
        if (isNameValid && isSurnameValid && isClassValid && isDobValid && isPlaceValid && isContactValid) {
            console.log('All fields are filled and valid');
        } else {
            if (!isNameValid) console.log('Name is not valid');
            if (!isSurnameValid) console.log('Surname is not valid');
            if (!isClassValid) console.log('Class is not valid');
            if (!isDobValid) console.log('DoB is not valid');
            if (!isPlaceValid) console.log('Place is not valid');
            if (!isContactValid) console.log('Contact is not valid');
        }
    });
    
}

function createStudentsEventListeners() {
    searchStudentsByName();
    searchStudentsBySurname();
    searchStudentsByDob();
    searchStudentsByClass();
    searchStudentsByPlace();
    searchStudentsByContactNr();
    addStudent();
}

export { createStudentsEventListeners }