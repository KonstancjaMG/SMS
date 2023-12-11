export function loadTeachers() {
    return JSON.parse(localStorage.getItem('teachers')) || [];
  }