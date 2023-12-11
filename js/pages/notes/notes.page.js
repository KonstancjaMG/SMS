import { getContentContainer } from "../../utils/dom.js";
import { getNotesSearchBarTemplate } from "./notes.template.js";
import { createSeparatorGrey } from "../../utils/spacer.js";

const renderNotes = () => {
    const contentContainer = getContentContainer();
    const searchBar = getNotesSearchBarTemplate();
    const separator = createSeparatorGrey();
    contentContainer.innerHTML += `
    ${searchBar}
    ${separator}
  `;
  };
  
  export {renderNotes};