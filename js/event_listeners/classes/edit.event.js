import { createClassesEditPage } from "../../pages/edit/classes/classes.page.js";
import { renderClasses } from "../../pages/classes/classes.page.js";
import { getExistingClassInfo } from "../../pages/edit/classes/classes.data.js";

export function renderEditPage() {
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(btn => {
        btn.addEventListener('click', function(event) {
            const classId = event.target.getAttribute('data-edit-class-id');
            const classInfo = getExistingClassInfo(classId);
            createClassesEditPage(classInfo);
            cancelClassEdit();
        });
    });
}


function confirmClassEdit(pId) {
    const classInfo = getExistingClassInfo(pId)
}

function cancelClassEdit() {
    const cancelBtn = document.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', function(){
        renderClasses();
    })
}