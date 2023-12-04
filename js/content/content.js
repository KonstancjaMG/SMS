import { linksArray } from "../data.js";

const app = document.getElementById("app");

function createContent() {
  return `
  <div id="contentWrapper">
        <div class="row  mt-5 ms-5">
            <div class="col-12 fs-2">Welcome Alice,</div>
        </div>
        <div id="cardsWrapper" class="container mt-5 text-center">
            ${createCards(linksArray)}
        </div>
    </div>
  `
}

function createCards(pLinks) {
  const cards = pLinks.map(link => {
    if (link.name !== 'Notes' && link.name !== 'Login') {
      return `
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-header fw-bold">${link.name}</div>
            <div class="card-body">${link.name}: </div>
            <div id="manage${link.name}" class="card-footer">Manage</div>
          </div>
        </div>
      `;
    }
    return '';
  }).join('');
  
  return `<div class="row mb-5">${cards}</div>`;
}



const renderContent = () => {
  app.innerHTML += createContent();
};

export { renderContent };
