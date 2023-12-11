import { loadFromLocalStorage, saveToLocalStorage } from "../../../local_storage/local.storage.js";


export function getClassInfo(pId) {
    const classesArray = loadFromLocalStorage('classes');
    const classInfo = classesArray.find(cls => cls.id === pId);

    if (classInfo) {
        return classInfo;
    } else {
        console.log(`No Class found with id ${pId}`);
        return null;
    }
}

export function getExistingClassInfo(pId) {
    const classesArray = loadFromLocalStorage('classes');
    const classInfo = classesArray.find(cls => cls.id === pId);

    if (classInfo) {
        return {
            letter: classInfo.id.charAt(0),
            number: classInfo.id.slice(1),
            name: classInfo.name,
            description: classInfo.description
        };
    } else {
        return null;
    }
}

export function getClassesEditFields() {
    return {
        letterEdited: document.getElementById('class-edit-letter').value,
        numberEdited: document.getElementById('class-edit-number').value,
        nameEdited: document.getElementById('class-edit-name').value,
        descriptionEdited: document.getElementById('placeholder-input').value
    };
}

export function updateClassInfoInLocalStorage(updatedClass) {
    const classesArray = loadFromLocalStorage('classes');
    const classIndex = classesArray.findIndex(cls => cls.id === updatedClass.id);
    if (classIndex !== -1) {
        classesArray[classIndex] = updatedClass;
        saveToLocalStorage('classes', classesArray);
    }
}