const app = document.getElementById("app");

function createSeparator() {
    const separator = document.createElement('div');
    separator.classList.add('separator');
    app.appendChild(separator);
}

export {createSeparator}