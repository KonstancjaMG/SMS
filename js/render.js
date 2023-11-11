import { renderNav } from "./navigation.js"
import { createSeparator } from "./spacer.js"

function renderApp(pParentElement, pLinks) {
    renderNav(pParentElement, pLinks)
    createSeparator(pParentElement)
}

export {renderApp}