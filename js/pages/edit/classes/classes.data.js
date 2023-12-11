import { loadFromLocalStorage, saveToLocalStorage } from "../../../local_storage/local.storage.js";

export function getClassInfo(pId) {
    const classesArray = loadFromLocalStorage('classes');
    const classInfo = classesArray.find(cls => cls.id === pId);

    if (classInfo) {
        return classInfo;
    } else {
        console.log(`No student found with id ${pId}`);
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
            description: classInfo.description
        };
    } else {
        return null;
    }
}
