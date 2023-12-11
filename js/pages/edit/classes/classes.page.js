import { getClassesEditTemplate } from "./classes.template.js";
import {getContentContainer} from "../../../utils/dom.js"
import { getClassesLettersOptions } from "../../classes/classes.data.js";

export function createClassesEditPage(classInfo) {
    const classesLetters = getClassesLettersOptions();
    const editPage = getClassesEditTemplate(classesLetters, classInfo.letter, classInfo.number, classInfo.name, classInfo.description);
    const wrapper = getContentContainer();
    wrapper.innerHTML = editPage;
}
