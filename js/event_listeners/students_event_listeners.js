import { loadFromLocalStorage } from "../local_storage/local_storage_upload.js";
import { createStudentCards } from "../content/students.js";

function searchStudents() {
    const searchInput = document.getElementById('students-search');
    searchInput.addEventListener('input', function() {
        const studentsArray = loadFromLocalStorage('students');
        const searchText = searchInput.value.toLowerCase();

        const filteredStudents = studentsArray.filter(student => {
            return student.name.toLowerCase().includes(searchText) || 
                   student.surname.toLowerCase().includes(searchText);
        });

        const cardsContainer = document.getElementById('cardsColumn');
        cardsContainer.innerHTML = createStudentCards(filteredStudents);
    });
}


function handleEdit() {
    const editBtn = document.getElementById('edit-btn')
    editBtn.addEventListener('click', function() {

    })
}

function handleRemove() {
    const removeBtn = document.getElementById('remove-btn');
    removeBtn.addEventListener('click', function() {

    })
}

function handleAdd() {

}

function createStudentsEventListeners() {
    searchStudents();
}

export {createStudentsEventListeners}