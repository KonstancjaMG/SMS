function createSeparator(pParentElement) {
    const separator = document.createElement('div');
    separator.classList.add('separator');
    pParentElement.appendChild(separator);
}

export {createSeparator}