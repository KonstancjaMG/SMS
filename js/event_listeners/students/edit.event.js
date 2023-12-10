import { renderStudentEdit } from "../../pages/edit/students/students.page.js";
import { renderStudents } from "../../pages/students/students.page.js";
import { getInputEditFields } from "../../pages/edit/students/students.data.js"
import { addEditedStudentToLocalStorage } from "../../pages/edit/students/students.data.js";

function loadEditPage() {
    const cardsContainer = document.getElementById('contentWrapper');

    cardsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-btn')) {
            const studentId = event.target.getAttribute('data-edit-student-id');
            renderStudentEdit(cardsContainer, studentId);
        }
    });
}

function confirmEdit(pStudentInfo) {
    const confirmBtn = document.getElementById('confirm-btn');
    confirmBtn.addEventListener('click', () => {
        const inputs = getInputEditFields();
        console.log(pStudentInfo)

        const studentInfoUpdates = {
            id: pStudentInfo.id,
            name: inputs.nameInput.value,
            surname: inputs.surnameInput.value,
            class: inputs.classInput.value,
            dateOfBirth: inputs.dobInput.value,
            address: inputs.placeInput.value,
            parentsContact: inputs.contactInput.value
        };

        Object.keys(studentInfoUpdates).forEach(key => {
            if (studentInfoUpdates[key] !== '') {
                pStudentInfo[key] = studentInfoUpdates[key];
            }
        });

        addEditedStudentToLocalStorage(studentInfoUpdates);
        renderStudents();
    });
}




function cancelEdit() {
    document.getElementById('cancel-btn').addEventListener('click', renderStudents);
}

export {loadEditPage, confirmEdit, cancelEdit}