import { renderNav } from "./navigation.js"
import { LINKS } from "./data.js"
import { createSeparator } from "./spacer.js"

const MAIN_HTML = document.getElementById("app")

renderNav(MAIN_HTML, LINKS)
createSeparator(MAIN_HTML)