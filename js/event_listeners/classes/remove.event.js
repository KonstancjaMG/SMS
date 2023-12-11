import { renderClasses } from "../../pages/classes/classes.page.js";

export function removeClass() {
    const cardsContainer = document.querySelector('.cardsColumn');

    cardsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-btn')) {
            const classId = event.target.getAttribute('data-class-id');
            const classCard = document.querySelector(`[data-class-id="${classId}"]`);
            classCard.remove();
            removeStudentFromLocalStorage(classId);
            renderClasses()
        }
    });
}

function removeStudentFromLocalStorage(classId) {
    let classesArray = JSON.parse(localStorage.getItem('classes')) || [];
    classesArray = classesArray.filter(cls => cls.id.toString() !== classId);
    localStorage.setItem('classes', JSON.stringify(classesArray));
}