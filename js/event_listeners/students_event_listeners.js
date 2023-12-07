import { loadFromLocalStorage, saveToLocalStorage } from "../local_storage/local_storage_upload.js";
import { createStudentCards, renderStudents } from "../content/students.js";

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
    const cardsContainer = document.getElementById('cardsColumn');

    cardsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-btn')) {
            const studentId = event.target.getAttribute('data-student-id');
            const studentCard = document.querySelector(`[data-student-id="${studentId}"]`);
            studentCard.remove();

            removeStudentFromLocalStorage(studentId);
            renderStudents()
        }
    });
}

function removeStudentFromLocalStorage(studentId) {
    let studentsArray = JSON.parse(localStorage.getItem('students')) || [];
    studentsArray = studentsArray.filter(student => student.id.toString() !== studentId);
    localStorage.setItem('students', JSON.stringify(studentsArray));
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
            let studentsArray = JSON.parse(localStorage.getItem('students')) || [];
            const nextId = studentsArray.length > 0 ? Math.max(...studentsArray.map(student => student.id)) + 1 : 1;
            const newStudent = {
                id: nextId,
                name: addName.value,
                surname: addSurname.value,
                class: addClass.value,
                dateOfBirth: addDob.value,
                address: addPlace.value,
                parentsContact: addContact.value
            };

            studentsArray.push(newStudent);
            saveToLocalStorage('students', studentsArray);
            renderStudents()
            const addSuccess = document.getElementById('add-status');
            addSuccess.classList.add('text-success')
            addSuccess.style.display = 'block';
            addSuccess.innerHTML = 'Student added successfully!'

        } else {
            const addError = document.getElementById('add-status');
            addError.classList.add('text-danger')
            addError.style.display = 'block';
            if (!isNameValid) {
                addError.innerHTML = 'Provided name is invalid!'
            }
            if (!isSurnameValid){
                addError.innerHTML = 'Provided surname is invalid!'
            }
            if (!isClassValid) {
                addError.innerHTML = 'Provided class is invalid!'
            }
            if (!isDobValid) {
                addError.innerHTML = 'Provided date of birth is invalid!'
            }
            if (!isPlaceValid) {
                addError.innerHTML = 'Provided address is invalid!'
            }
            if (!isContactValid) {
                addError.innerHTML = 'Provided number is invalid!'
            }
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
    handleRemove()
}

export { createStudentsEventListeners }