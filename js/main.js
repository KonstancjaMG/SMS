import { renderApp } from "./render.js"
import { linksArray } from "./data.js"

const mainContainer = document.getElementById("app")

renderApp(mainContainer, linksArray);