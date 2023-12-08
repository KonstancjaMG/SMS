import { renderNav } from "./navigation.js";
import {createSeparator} from "./utils/spacer.js";
import { renderContent } from "./content.js";

const renderApp = () => {
    renderNav();
    renderContent();
    // renderFooter();
  };
  export { renderApp };