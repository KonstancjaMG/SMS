import { loadFromLocalStorage, saveToLocalStorage } from "../../local_storage/local.storage.js";

function handleEdit() {
    const cardsContainer = document.getElementById('cardsColumn');

    cardsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-btn')) {
            const studentId = event.target.getAttribute('data-edit-student-id');
            console.log(studentId)
        }
    });
}

export {handleEdit}