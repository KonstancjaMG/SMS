import { getCardStatistics } from "./home.data.js";
import { getCardTemplate, getHomeTemplate } from "./home.template.js";

function createLinksFragment(pStats){
    const cards = pStats.map(stat => {
          return getCardTemplate(stat)
      }).join('');
      
    return `<div class="row mb-5">${cards}</div>`;
}

const renderHome = (pElement) => {
    const stats = getCardStatistics();
    const welcomeCards =  createLinksFragment(stats);
    const homePage = getHomeTemplate(welcomeCards);
    pElement.innerHTML = homePage;
};

export { renderHome };