import { getClassSearchBarTemplate, getClassesTemplate } from "./classes.template.js";
import { loadClassess, getClassesLettersOptions } from "./classes.data.js";
import { createSeparatorGrey } from "../../utils/spacer.js";

const renderClasses = () => {
  const classesList = loadClassess();
  const contentContainer = document.getElementById('contentWrapper');
  const classesLetters = getClassesLettersOptions();
  contentContainer.innerHTML += `
  ${getClassSearchBarTemplate()}
  ${createSeparatorGrey()}
  ${getClassesTemplate(classesList, classesLetters)}`
};

export {renderClasses};