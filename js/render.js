import { renderNav } from "./navigation.js";
import {createSeparator} from "./spacer.js";

const renderApp = () => {
    renderNav();
    createSeparator();
    // renderContent();
    // renderFooter();
  };
  export { renderApp };