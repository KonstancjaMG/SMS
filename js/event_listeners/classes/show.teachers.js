import { loadFromLocalStorage } from "../../local_storage/local.storage.js";
import { showTeachersTemplate } from "../../pages/classes/show.teachers.template.js";
import { getContentContainer } from "../../utils/dom.js";
import { renderClasses } from "../../pages/classes/classes.page.js";

export function showTeachers() {
    const showStudentsBtns = document.querySelectorAll('.show-teachers');
    showStudentsBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            const classId = event.target.getAttribute('data-show-teachers-id');
            const teachersArray = loadFromLocalStorage('teachers');
            const classesArray = loadFromLocalStorage('classes');

            const classObj = classesArray.find(cls => cls.id === classId);
            const moduleName = classObj ? classObj.name : 'Unknown Module';

            const teachersInClass = teachersArray.filter(teacher => teacher.class === classId);
            
            const container = getContentContainer();
            container.innerHTML = showTeachersTemplate(classId, teachersInClass, moduleName);
            confirmShow();
        });
    });
}

function confirmShow() {
    const confirmBtn = document.querySelector('.confirm-btn')
    confirmBtn.addEventListener('click', function() {
        renderClasses();
    })
}