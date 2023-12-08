import { links } from "../../data.js";
import { getCardStatistics } from "./home.data.js";

import { getCardTemplate, getHomeTemplate } from "./home.template";

const contentContainer = document.getElementById("contentWrapper");


function createLinksFragment(pStats){
    const cards = pStats.map(stat => {
          return getCardTemplate(stat)
      }).join('');
      
    return `<div class="row mb-5">${cards}</div>`;
}

const renderHome = () => {
    const stats = getCardStatistics();
    const welcomeCards =  createLinksFragment(stats);
    const homePage = getHomeTemplate(welcomeCards);

    contentContainer.innerHTML = homePage;
};

export { renderHome };