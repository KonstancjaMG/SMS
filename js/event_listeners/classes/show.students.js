import { loadFromLocalStorage } from "../../local_storage/local.storage.js";
import { showStudentsTemplate } from "../../pages/classes/show.students.template.js";
import { getContentContainer } from "../../utils/dom.js";
import { renderClasses } from "../../pages/classes/classes.page.js";

export function showStudents() {
    const showStudentsBtns = document.querySelectorAll('.show-students');
    showStudentsBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            const classId = event.target.getAttribute('data-show-students-id');
            const studentsArray = loadFromLocalStorage('students');
            const classesArray = loadFromLocalStorage('classes');

            const classObj = classesArray.find(cls => cls.id === classId);
            const moduleName = classObj ? classObj.name : 'Unknown Module';

            const studentsInClass = studentsArray.filter(student => student.class === classId);
            
            const container = getContentContainer();
            container.innerHTML = showStudentsTemplate(classId, studentsInClass, moduleName);
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