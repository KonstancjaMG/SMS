import { renderNav } from "./navigation.js";
import { renderContent } from "./pages/content.js";
import { renderHome } from "./pages/home/home.page.js";

const renderApp = () => {
    renderNav();
    renderContent();
    // Not sure where to initialize the wrapper because in the home.page.js it doesn't yet exist
    const contentWrapper = document.getElementById('contentWrapper')
    renderHome(contentWrapper);
    // renderFooter();
  };
  export { renderApp };