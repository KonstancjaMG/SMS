import { loadFromLocalStorage } from "../../local_storage/local.storage.js";
import { getTeachersCards } from "../../pages/teachers/teachers.template.js";
import { createTeachersEventListeners } from "./create.event.js"; // Adjust if you have a similar function for teachers
import { getClassesOptions, loadClassess } from "../../pages/classes/classes.data.js";

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

function searchTeachers() {
    const searchInputs = {
        name: document.getElementById('teacher-search-name'),
        surname: document.getElementById('teacher-search-surname'),
        dob: document.getElementById('teacher-search-dob'),
        licence: document.getElementById('teacher-search-licence'),
        class: document.getElementById('teacher-search-class'),
        place: document.getElementById('teacher-search-place'),
        contact: document.getElementById('teacher-search-contact'),
        module: document.getElementById('teacher-search-subject')
    };

    const searchFieldMap = {
        name: 'name',
        surname: 'surname',
        dob: 'dateOfBirth',
        licence: 'licenseId',
        class: 'class',
        place: 'address',
        contact: 'contactInfo',
        module: 'subject'
    };

    Object.entries(searchInputs).forEach(([searchType, input]) => {
        input.addEventListener('input', debounce(() => {
            performTeacherSearch(searchType);
        }, 300));
    });

    function performTeacherSearch() {
        const teachersArray = loadFromLocalStorage('teachers');
        const classesArray = loadFromLocalStorage('classes');
        const classMap = classesArray.reduce((map, cls) => {
            map[cls.id] = cls.name; // Map class ID to class name
            return map;
        }, {});
    
        const searchTexts = {
            name: searchInputs.name.value.toLowerCase(),
            surname: searchInputs.surname.value.toLowerCase(),
            dob: searchInputs.dob.value.toLowerCase(),
            licence: searchInputs.licence.value.toLowerCase(),
            place: searchInputs.place.value.toLowerCase(),
            contact: searchInputs.contact.value.toLowerCase(),
            module: searchInputs.module.value.toLowerCase()
        };
    
        let filteredTeachers = teachersArray.filter(teacher => {
            return Object.entries(searchTexts).every(([key, searchText]) => {
                if (searchText === '') return true;
                let field = teacher[searchFieldMap[key]];
                if (key === 'module' && teacher.class) {
                    field = classMap[teacher.class]; // Use class name for 'module' field
                }
                return field && field.toString().toLowerCase().includes(searchText);
            });
        });
    
        const classesOptions = getClassesOptions();
        const teachersContainer = document.querySelector('.cardsColumn'); 
        teachersContainer.innerHTML = getTeachersCards(filteredTeachers, classesOptions, classesArray);
        createTeachersEventListeners(); 
    }
}

export { searchTeachers };
