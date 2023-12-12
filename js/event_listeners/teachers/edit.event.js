import { renderTeachers } from "../../pages/teachers/teachers.page.js";
import { getExistingTeacherInfo, getTeachersEditFields, updateTeacherInfoInLocalStorage } from "../../pages/edit/teachers/teachers.data.js";
import {getTeachersCardEdit} from '../../pages/edit/teachers/teachers.template.js'
import { getContentContainer } from "../../utils/dom.js";

export function renderEditTeacherPage() {
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(btn => {
        btn.addEventListener('click', function(event) {
            const teacherId = event.target.getAttribute('data-edit-teacher-id');
            const teacherInfo = getExistingTeacherInfo(parseInt(teacherId, 10));
            const getContainer = getContentContainer();
            getContainer.innerHTML = getTeachersCardEdit(teacherInfo);
            cancelTeacherEdit();
            confirmTeacherEdit(teacherId)
        });
    });
}

function confirmTeacherEdit(pId) {
    const confirmBtn = document.querySelector('.confirm-btn');
    confirmBtn.addEventListener('click', function() {
        const inputs = getTeachersEditFields(pId);
        const updatedTeacher = {
            id: parseInt(pId, 10),
            name: inputs.nameEdited,
            surname: inputs.surnameEdited,
            dateOfBirth: inputs.dobEdited,
            address: inputs.addressEdited,
            contactInfo: inputs.contactEdited,
            licenseId: inputs.licenseEdited,
            class: inputs.classEdited
        };
        updateTeacherInfoInLocalStorage(updatedTeacher);
        renderTeachers();
    });
}


function cancelTeacherEdit() {
    const cancelBtn = document.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', function(){
        renderTeachers();
    })
}

