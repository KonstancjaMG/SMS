import { loadFromLocalStorage } from "../../local_storage/local.storage.js";
import { getClassesCardTemplate } from "../../pages/classes/classes.template.js";
import { createClassesEventListeners } from "./create.event.js";

function searchClasses(searchType) {
    const searchInput = document.getElementById(`class-search-${searchType}`);
    const cardsContainer = document.querySelector('.cardsColumn');

    const searchFieldMap = {
        letter: 'id',
        number: 'id'
    };

    searchInput.addEventListener('input', () => {
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
                }
            });
        }

        cardsContainer.innerHTML = getClassesCardTemplate(filteredClasses);
        createClassesEventListeners();
    });
}

function initializeClassSearch() {
    searchClasses('letter');
    searchClasses('number');
}

export { initializeClassSearch };



