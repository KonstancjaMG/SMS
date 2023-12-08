import { renderStudents } from "../../pages/students.js";


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



export { handleRemove, removeStudentFromLocalStorage }