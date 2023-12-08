import { links } from "../data.js";
import { renderStudents } from "../pages/students.js";
import { renderClasses } from "../pages/classes.js";
import { renderTeachers } from "../pages/teachers.js";
import { renderGrades } from "../pages/grades.js";
import { renderNotes } from "../pages/notes.js";
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

{/* <li class="nav-item">
<button id="${link.url}" class="btn btn-link custom-button ${link.status}" onclick="renderHome()">${link.name}</button>
</li>
<li class="nav-item">
<button id="${link.url}" class="btn btn-link custom-button ${link.status}" onclick="renderStudents()">${link.name}</button>
</li> */}