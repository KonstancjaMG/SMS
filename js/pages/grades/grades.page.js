import { getContentContainer } from "../../utils/dom.js";
import { getGradesSearchBar } from "./grades.template.js";
import { createSeparatorGrey } from "../../utils/spacer.js";

const renderGrades = () => {
    const contentContainer = getContentContainer();
    const searchBar = getGradesSearchBar();
    const separator = createSeparatorGrey();
    contentContainer.innerHTML += `
    ${searchBar}
    ${separator}
  `;
  };
  
  export {renderGrades};