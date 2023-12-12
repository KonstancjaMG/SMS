import { createSeparator } from "./utils/spacer.js";

export function renderFooter() {
    const contentWrapper = document.getElementById('app');
    contentWrapper.innerHTML += `${hiCodersTemplate()}${footerTemplate()}`;
}

function hiCodersTemplate() {
    return `
    ${createSeparator()}
    <div id="hiCoders" class="pt-4">
        <h1>HiCoders 23/24 LMS</h1>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    </div>
    `
}

function footerTemplate() {
    return `
        <footer class="footer border">
            <div class="container text-center">
                <span class="text-muted">Raccoon City School District © 2023</span>
            </div>
        </footer>
    `;
}



