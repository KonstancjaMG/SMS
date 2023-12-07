import { loadFromLocalStorage } from "../local_storage/local_storage_upload.js";
import { createStudentCards } from "../content/students.js";

function searchStudentsByName() {
    const searchInput = document.getElementById('students-search-name');
    const cardsContainer = document.getElementById('cardsColumn');
    searchInput.addEventListener('input', function () {
        const studentsArray = loadFromLocalStorage('students');
        const searchText = searchInput.value.toLowerCase();

        const filteredStudents = studentsArray.filter(student => {
            return student.name.toLowerCase().includes(searchText)
        });

        if (!searchInput.length === 0) {
            cardsContainer.innerHTML = createStudentCards(filteredStudents);
        } else {
            cardsContainer.innerHTML = `<div class="text-center">No students found...</div>`
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
}

export { createStudentsEventListeners }