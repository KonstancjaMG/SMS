import { linksArray } from "../data.js";
import { renderStudents } from "../page/students.js";
import { renderClasses } from "../page/classes.js";
import { renderTeachers } from "../page/teachers.js";
import { renderGrades } from "../page/grades.js";
import { renderNotes } from "../page/notes.js";
import { clearContent } from "../utils/clear_content.js";
import { renderHome } from "../page/home/home.page.js";

const createNavEventListeners = () =>
  linksArray.forEach((link) => {
    let linkID = document.getElementById(link.url);

    if (linkID) {
      linkID.addEventListener("click", () => {
        clearContent();
        if (link.url === 'home') {renderHome();}
        if (link.url === 'students') {renderStudents();}
        if (link.url === 'classes') {renderClasses();}
        if (link.url === 'teachers') {renderTeachers();}
        if (link.url === 'grades') {renderGrades();}
        if (link.url === 'notes') {renderNotes();}

        const navbarMenu = document.getElementById('navbarNavAltMarkup');
        if (navbarMenu.classList.contains('show')) {
          const navbarToggler = document.querySelector('.navbar-toggler');
          navbarToggler.click();
        }
      });
    }
  });

export { createNavEventListeners };
