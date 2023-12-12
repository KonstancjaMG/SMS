import { loadFromLocalStorage, saveToLocalStorage } from "../../../local_storage/local.storage.js";

export function getTeacherInfo(pId) {
    const teachersArray = loadFromLocalStorage('teachers');
    const teacherInfo = teachersArray.find(teacher => teacher.id === pId);

    if (teacherInfo) {
        return teacherInfo;
    } else {
        console.log(`No Teacher found with id ${pId}`);
        return null;
    }
}

export function getExistingTeacherInfo(pId) {
    const teachersArray = loadFromLocalStorage('teachers');
    const teacherInfo = teachersArray.find(teacher => teacher.id === pId);

    if (teacherInfo) {
        return {
            id: teacherInfo.id,
            name: teacherInfo.name,
            surname: teacherInfo.surname,
            dateOfBirth: teacherInfo.dateOfBirth,
            address: teacherInfo.address,
            contactInfo: teacherInfo.contactInfo,
            licenseId: teacherInfo.licenseId,
            class: teacherInfo.class
        };
    } else {
        return null;
    }
}

export function getTeachersEditFields() {
    const getValue = (id) => {
        const element = document.getElementById(id);
        return element ? element.value : null;
    };

    return {
        nameEdited: getValue('teachers-edit-name'),
        surnameEdited: getValue('teachers-edit-surname'),
        dobEdited: getValue('teachers-edit-dob'),
        addressEdited: getValue('teachers-edit-address'),
        contactEdited: getValue('teachers-edit-contact'),
        licenseEdited: getValue('teachers-edit-licence'),
        classEdited: getValue('teachers-edit-class')
    };
}

export function updateTeacherInfoInLocalStorage(updatedTeacher) {
    const teachersArray = loadFromLocalStorage('teachers');
    const updatedTeacherId = parseInt(updatedTeacher.id, 10);
    const teacherIndex = teachersArray.findIndex(teacher => teacher.id === updatedTeacherId);
    if (teacherIndex !== -1) {
        teachersArray[teacherIndex] = {...teachersArray[teacherIndex], ...updatedTeacher};
        saveToLocalStorage('teachers', teachersArray);
    } else {
    }
}


