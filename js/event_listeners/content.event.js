import { links } from "../data.js";
import { renderStudents } from "../pages/students/students.page.js";
import { renderClasses } from "../pages/classes/classes.page.js";
import { renderTeachers } from "../pages/teachers/teachers.page.js";
import { clearContent } from "../utils/clear.content.js";

const createContentEventListeners = () =>
  links.forEach((link) => {
    let linkID = document.getElementById(`manage${link.name}`);

    if (linkID) {
      linkID.addEventListener("click", () => {
        clearContent();
        if (link.url === 'students') {renderStudents();}
        if (link.url === 'classes') {renderClasses();}
        if (link.url === 'teachers') {renderTeachers();}
      });
    }
  });

export { createContentEventListeners };
