import { renderNav } from "./navigation.js"
import { LINKS } from "./data.js"

const MAIN_HTML = document.getElementById("app")

renderNav(MAIN_HTML, LINKS)