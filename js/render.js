import { renderNav } from "./navigation.js";
import {createSeparator} from "./utils/spacer.js";
import { renderContent } from "./content/content.js";

const renderApp = () => {
    renderNav();
    createSeparator();
    renderContent();
    // renderFooter();
  };
  export { renderApp };