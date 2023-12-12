import { links } from "../data.js";
import { renderStudents } from "../pages/students/students.page.js"
import { renderClasses } from "../pages/classes/classes.page.js";
import { renderTeachers } from "../pages/teachers/teachers.page.js";
import { clearContent } from "../utils/clear.content.js";

const createNavEventListeners = () =>
  links.forEach((link) => {
    let linkID = document.getElementById(link.url);

    if (linkID) {
      linkID.addEventListener("click", () => {
        clearContent();
        if (link.url === 'students') {renderStudents();}
        if (link.url === 'classes') {renderClasses();}
        if (link.url === 'teachers') {renderTeachers();}

        const navbarMenu = document.getElementById('navbarNavAltMarkup');
        if (navbarMenu.classList.contains('show')) {
          const navbarToggler = document.querySelector('.navbar-toggler');
          navbarToggler.click();
        }
      });
    }
  });

export { createNavEventListeners };