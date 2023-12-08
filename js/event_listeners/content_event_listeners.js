import { linksArray } from "../data.js";
import { renderStudents } from "../page/students.js";
import { renderClasses } from "../page/classes.js";
import { renderTeachers } from "../page/teachers.js";
import { renderGrades } from "../page/grades.js";
import { clearContent } from "../utils/clear_content.js";

const createContentEventListeners = () =>
  linksArray.forEach((link) => {
    let linkID = document.getElementById(`manage${link.name}`);

    if (linkID) {
      linkID.addEventListener("click", () => {
        clearContent();
        if (link.url === 'students') {renderStudents();}
        if (link.url === 'classes') {renderClasses();}
        if (link.url === 'teachers') {renderTeachers();}
        if (link.url === 'grades') {renderGrades();}
      });
    }
  });

export { createContentEventListeners };
