import { getClassSearchBarTemplate, getClassesTemplate } from "./classes.template.js";
import { loadClassess, getClassesLettersOptions } from "./classes.data.js";
import { createSeparatorGrey } from "../../utils/spacer.js";
import { createClassesEventListeners } from "../../event_listeners/classes/create.event.js";

const renderClasses = () => {
  const classesList = loadClassess();
  const contentContainer = document.getElementById('contentWrapper');
  const classesLetters = getClassesLettersOptions();
  contentContainer.innerHTML = `
  ${getClassSearchBarTemplate()}
  ${createSeparatorGrey()}
  ${getClassesTemplate(classesList, classesLetters)}`
  createClassesEventListeners();
};

export {renderClasses};