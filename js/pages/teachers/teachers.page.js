import { getContentContainer } from "../../utils/dom.js";
import { getTeachersPageTemplate, getTeachersSearchBar } from "./teachers.template.js";
import { createSeparatorGrey } from "../../utils/spacer.js";
import {getClassesOptions, loadClassess} from "../classes/classes.data.js"
import { loadTeachers } from "./teachers.data.js";

const renderTeachers = () => {
  const classOptions = getClassesOptions();
  const teachers = loadTeachers();
    const contentContainer = getContentContainer();
    const classes = loadClassess();
    const teachersPage = getTeachersPageTemplate(teachers ,classOptions, classes);
    const searchBar = getTeachersSearchBar();
    const separator = createSeparatorGrey();
    contentContainer.innerHTML += `
      ${searchBar}
      ${separator}
      ${teachersPage}
    `;
  };
  
  export {renderTeachers};