import {renderTeachers} from '../../pages/teachers/teachers.page.js'


export function removeTeacher() {
    const cardsContainer = document.querySelector('.cardsColumn');

    cardsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-btn')) {
            const teacherId = event.target.getAttribute('data-teacher-id');
            removeStudentFromLocalStorage(teacherId);
            renderTeachers()
        }
    });
}

function removeStudentFromLocalStorage(pTeacherId) {
    let teachersArray = JSON.parse(localStorage.getItem('teachers')) || [];
    teachersArray = teachersArray.filter(teacher => teacher.id.toString() !== pTeacherId);
    localStorage.setItem('teachers', JSON.stringify(teachersArray));
}