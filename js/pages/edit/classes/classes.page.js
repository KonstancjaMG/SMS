import { getClassesEditTemplate } from "./classes.template.js";
import {getContentContainer} from "../../../utils/dom.js"
import { getClassesLettersOptions } from "../../classes/classes.data.js";
import { getExistingClassInfo } from "./classes.data.js";

export function createClassesEditPage(classInfo) {
    const classesLetters = getClassesLettersOptions();
    const editPage = getClassesEditTemplate(classesLetters, classInfo.letter, classInfo.number, classInfo.description); // Modify getClassesEditTemplate to accept classInfo
    const wrapper = getContentContainer();
    wrapper.innerHTML = editPage;
    // Here, you will also need to pre-fill the form fields with classInfo data
}
