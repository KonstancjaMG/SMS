import { loadFromLocalStorage } from "../local_storage/local_storage_upload.js";
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

function handleAdd() {

}

function createStudentsEventListeners() {
    searchStudentsByName();
    searchStudentsBySurname();
    searchStudentsByDob();
    searchStudentsByClass();
    searchStudentsByPlace();
    searchStudentsByContactNr();
}

export { createStudentsEventListeners }