import {students, classes, teachers, grades, notes, classLetters} from '../data.js'

function initializeLocalStorage() {
    if (!localStorage.getItem('students')) {
      localStorage.setItem('students', JSON.stringify(students));
    }
    if (!localStorage.getItem('classes')) {
      localStorage.setItem('classes', JSON.stringify(classes));
    }
    if (!localStorage.getItem('teachers')) {
      localStorage.setItem('teachers', JSON.stringify(teachers));
    }
    if (!localStorage.getItem('grades')) {
      localStorage.setItem('grades', JSON.stringify(grades));
    }
    if (!localStorage.getItem('notes')) {
        localStorage.setItem('notes', JSON.stringify(notes));
      }
    if (!localStorage.getItem('classLetters')) {
      localStorage.setItem('classLetters', JSON.stringify(classLetters));
    }
  }
  
function loadFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  
 function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  export {initializeLocalStorage, loadFromLocalStorage, saveToLocalStorage}