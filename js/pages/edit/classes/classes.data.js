import { getClassesEditTemplate } from "./classes.template.js";
import {getContentContainer} from "../../../utils/dom.js"

export function createClassesEditPage() {
    const editPage = getClassesEditTemplate();
    const wrapper = getContentContainer();
    wrapper.innerHTML += editPage;
}