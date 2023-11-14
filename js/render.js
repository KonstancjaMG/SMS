import { renderNav } from "./navigation.js";
import {renderContentTemplate} from "./content_template.js";

const renderApp = () => {
    renderNav();
    renderContentTemplate();
    // renderContent();
    // renderFooter();
  };
  export { renderApp };