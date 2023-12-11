import { loadFromLocalStorage } from "../../local_storage/local.storage.js";
import { getClassesCardTemplate } from "../../pages/classes/classes.template.js";
import { createClassesEventListeners } from "./create.event.js";

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

function searchClasses(searchType) {
    const searchInput = document.getElementById(`class-search-${searchType}`);
    const cardsContainer = document.querySelector('.cardsColumn');

    const searchFieldMap = {
        letter: 'id',
        number: 'id',
        title: 'name'
    };

    const debounceSearch = debounce(() => {
        const classesArray = loadFromLocalStorage('classes');
        const searchText = searchInput.value.toLowerCase();

        let filteredClasses;
        if (searchText.trim() === '') {
            filteredClasses = classesArray;
        } else {
            filteredClasses = classesArray.filter(cls => {
                const field = cls[searchFieldMap[searchType]];
                if (searchType === 'number') {
                    return field && field.slice(1).startsWith(searchText);
                } else if (searchType === 'letter') {
                    return field && field.charAt(0).toLowerCase() === searchText;
                } else if (searchType === 'title') {
                    return field && field.toLowerCase().includes(searchText);
                }
            });
        }

        cardsContainer.innerHTML = getClassesCardTemplate(filteredClasses);
        createClassesEventListeners();
    }, 300);

    searchInput.addEventListener('input', debounceSearch);
}

function initializeClassSearch() {
    searchClasses('letter');
    searchClasses('number');
    searchClasses('title');
}

export { initializeClassSearch };