import { loadFromLocalStorage, saveToLocalStorage } from "../local_storage/local_storage_upload.js";
import { createStudentCards, renderStudents } from "../page/students.js";
import { addStudent } from "./students_add_event_listeners.js";
import {searchStudentsByName, searchStudentsBySurname, searchStudentsByDob, searchStudentsByClass, searchStudentsByPlace, searchStudentsByContactNr} from "./students_search_event_listeners.js"


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