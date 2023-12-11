import { createClassesEditPage } from "../../pages/edit/classes/classes.page.js";
import { renderClasses } from "../../pages/classes/classes.page.js";
import { getExistingClassInfo, getClassesEditFields, updateClassInfoInLocalStorage } from "../../pages/edit/classes/classes.data.js";

export function renderEditPage() {
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(btn => {
        btn.addEventListener('click', function(event) {
            const classId = event.target.getAttribute('data-edit-class-id');
            const classInfo = getExistingClassInfo(classId);
            createClassesEditPage(classInfo);
            cancelClassEdit();
            confirmClassEdit(classId)
        });
    });
}

function confirmClassEdit(pId) {
    const confirmBtn = document.querySelector('.confirm-btn')
    confirmBtn.addEventListener('click', function() {
        const inputs = getClassesEditFields()
        const updatedClass = {
            id: inputs.letterEdited + inputs.numberEdited,
            name: inputs.nameEdited,
            description: inputs.descriptionEdited
        };
        updateClassInfoInLocalStorage(updatedClass);
        renderClasses();
    })
}

function cancelClassEdit() {
    const cancelBtn = document.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', function(){
        renderClasses();
    })
}