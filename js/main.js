import { renderApp } from "./render.js"
import { LINKS } from "./data.js"

const MAIN_HTML = document.getElementById("app")

renderApp(MAIN_HTML, LINKS);