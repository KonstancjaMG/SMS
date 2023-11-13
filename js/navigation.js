function createNavBar() {
    const navbar = document.createElement('div');
    navbar.id = 'navWrapper';

    return navbar
}

function addLogo() {
    const logoContainer = document.createElement('div');
    logoContainer.id = 'school-logo-container';
    const logo = document.createElement('img');
    logo.setAttribute('src', './images/school_logo.png');
    logoContainer.appendChild(logo);
    return logoContainer
}

function addSchoolName() {
    const textParagraph = document.createElement('p');
    textParagraph.id = 'school-name';
    textParagraph.textContent = 'Raccoon City School District';
    return textParagraph
}

function createLogoAndSchoolLink() {
    const linkWrap = document.createElement('a');
    linkWrap.id = 'school-and-logo-link-wrap'
    linkWrap.setAttribute('href', '/home.html')
    const logo = addLogo();
    const schoolName = addSchoolName();
    const logoAndSchoolContainer = document.createElement('div');
    logoAndSchoolContainer.id = 'logo-and-school-container';
    logoAndSchoolContainer.appendChild(logo);
    logoAndSchoolContainer.appendChild(schoolName);
    linkWrap.appendChild(logoAndSchoolContainer);

    return linkWrap;
}

function generateLinkElements(pLinksObjects) {
    const listOfLinks = document.createElement('ul');
    listOfLinks.id = 'vertical-menu';
    pLinksObjects.forEach(link => {
        // Creates <li> elements for each item of the array of objects.
        const listItem = document.createElement('li');

        // Creates links for each item of the array of objects.
        const anchor = document.createElement('a');
        anchor.setAttribute('href', link.url);
        anchor.textContent = link.name;
        if(link.status === 'inactive') {
            anchor.classList.add('inactive-link');
        } else {
            anchor.classList.add('navbar-link-item');
        }
        // Appends links to each list item and each list item to the parent <ul>.
        listItem.appendChild(anchor);
        listOfLinks.appendChild(listItem);
    })
    return listOfLinks
}



function renderNav(pParentElement, pLinksObjects) {
    const navbar = createNavBar();
    navbar.appendChild(createLogoAndSchoolLink());
    navbar.appendChild(generateLinkElements(pLinksObjects));

    pParentElement.appendChild(navbar);
}

export {renderNav}