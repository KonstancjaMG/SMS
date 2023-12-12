import { renderNav } from "./navigation.js";
import { renderContent } from "./pages/content.js";
import { renderHome } from "./pages/home/home.page.js";
import { getContentContainer } from "./utils/dom.js";
import { renderFooter } from "./footer.js";

const renderApp = () => {
    renderNav();
    renderContent();
    renderHome(getContentContainer());
    renderFooter();
  };
  export { renderApp };