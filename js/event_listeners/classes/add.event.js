import { loadFromLocalStorage, saveToLocalStorage } from "../../local_storage/local.storage.js";
import { loadClassess } from "../../pages/classes/classes.data.js";
import { renderClasses } from "../../pages/classes/classes.page.js";

function getClassInputs() {
    return {
    letter: document.getElementById('class-add-class'),
    number: document.getElementById('class-add-number'),
    placeholder: document.getElementById('placeholder-input'),
    }
}

function getClassData(inputs) {
    return {
        letter: inputs.letter.value,
        number: inputs.number.value,
        placeholder: inputs.placeholder.value
    };
}

const createNewClass = (letter, number, placeholder) => ({
    id: letter + number, description: placeholder
})

function addNewClasstToLocalStorage(data) {
    const classesArray = loadFromLocalStorage('classes') || [];
    classesArray.push(data);
    saveToLocalStorage('classes', classesArray);
}

export function addClass() {
    const confirmBtn = document.querySelector('.confirm-btn');
    confirmBtn.addEventListener('click', function() {
        const inputs = getClassInputs();
        const inputValues = getClassData(inputs)
        const newClass = createNewClass(inputValues.letter, inputValues.number, inputValues.placeholder)
        if(!checkIfExists(newClass)) {
            addNewClasstToLocalStorage(newClass)
            renderClasses();
            addStatusSuccess()
        } else {
            console.log('Already Exists!')
        }
    })
}

function checkIfExists(pClass) {
    const classes = loadClassess();
    return classes.some(cls => cls.id === pClass.id);
}

function addStatusSuccess() {
    const addSuccess = document.getElementById('add-status');
    addSuccess.innerHTML = 'Class added successfully!';
    addSuccess.classList.add('text-success');
    addSuccess.style.display = 'block';
}