import { loadFromLocalStorage } from "../../local_storage/local.storage.js";
import { getStudentCards } from "../../pages/students/students.template.js";

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function searchStudents(searchType) {
    const searchInput = document.getElementById(`students-search-${searchType}`);
    const cardsContainer = document.querySelector('.cardsColumn');

    const searchFieldMap = {
        name: 'name',
        surname: 'surname',
        dob: 'dateOfBirth',
        class: 'class',
        place: 'address',
        contact: 'parentsContact'
    };

    const debounceSearch = debounce(() => {
        const studentsArray = loadFromLocalStorage('students');
        const searchText = searchInput.value.toLowerCase();

        const filteredStudents = studentsArray.filter(student => {
            const field = student[searchFieldMap[searchType]];
            return field && field.toString().toLowerCase().includes(searchText);
        });

        cardsContainer.innerHTML = filteredStudents.length === 0 
            ? `<div class="text-center">No students found...</div>` 
            : getStudentCards(filteredStudents);
    }, 300);

    searchInput.addEventListener('input', debounceSearch);
}

function initializeSearch() {
    searchStudents('name');
    searchStudents('surname');
    searchStudents('dob');
    searchStudents('class');
    searchStudents('place');
    searchStudents('contact');
}


export {initializeSearch}