// Setting up navigation:
// 1. navbar - wrapper for the navigation.
// 2. div class = "link" for the links.
// 3. div id = "schoolLogo" for easy styling of the school's logo.
// 4. div id = "schoolName" for easy styling of the school's name.
// 5. Vertical design for more of a slick, professional look.
// 6. Array of objects for links.
// 7. Links:
//      - home
//      - students
//      - classes
//      - teachers
//      - grades
//      - announcements/notes
//      - login (non-functional)

// CODE ANALYSIS:
// 1. Functions addLogo() and addSchoolName() have values inserted directly since they won't be changing a lot of times and don't need a dynamic approach.

function createNavBar() {
    const navbar = document.createElement('div');
    navbar.classList.add('navWrapper');

    return navbar
}

function addLogo() {
    const logoContainer = document.createElement('div');
    logoContainer.id = 'school-logo-container';
    const logo = document.createElement('img');
    logo.setAttribute('src', 'https://placehold.co/120x50');
    logoContainer.appendChild(logo);
    return logoContainer
}

function addSchoolName() {
    const textParagraph = document.createElement('p');
    textParagraph.id = 'school-name';
    textParagraph.textContent = 'Racoon City School District';
    return textParagraph
}

function generateLinkElements() {

}

function renderNav(pParentElement) {
    const navbar = createNavBar();
    navbar.appendChild(addLogo());
    navbar.appendChild(addSchoolName());

    pParentElement.appendChild(navbar);
}

export {renderNav}