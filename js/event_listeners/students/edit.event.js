import { renderStudentEdit } from "../../pages/edit/students/students.page.js";
import { renderStudents } from "../../pages/students/students.page.js";

function loadEditPage() {
    const cardsContainer = document.getElementById('contentWrapper');

    cardsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-btn')) {
            const studentId = event.target.getAttribute('data-edit-student-id');
            renderStudentEdit(cardsContainer, studentId);
        }
    });
}

function confirmEdit() {
    const confirmBtn = document.getElementById('confirm-btn');
    confirmBtn.addEventListener('click', () => {

        // SAVE DATA FUNCTION
        // - validation
        // - save to LS if not empty

        renderStudents()
    })
}

function cancelEdit() {
    document.getElementById('cancel-btn').addEventListener('click', renderStudents);
}

export {loadEditPage, confirmEdit, cancelEdit}