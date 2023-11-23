import { linksArray } from "./data.js";
import { renderStudents } from "./content/students.js";
import { renderClasses } from "./content/classes.js";
import { renderTeachers } from "./content/teachers.js";
import { renderGrades } from "./content/grades.js";
import { renderNotes } from "./content/notes.js";

const clearContent = () => {
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '';
};

const createEventListeners = () =>
  linksArray.forEach((link) => {
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
        console.log(`Button for ${link.name} clicked.`);
      });
    }
  });

export { createEventListeners };
