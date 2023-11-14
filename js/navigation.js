import { linksArray } from "./data.js";

const app = document.getElementById("app"); //gets the html element with the of "app"

const renderNav = () => {
  app.innerHTML += `<div id="navWrapper">
    <a id="school-and-logo-link-wrap" href="/home.html">
    <div id="logo-and-school-container">
        <div id="school-logo-container">
          <img src="./images/school_logo.png" />
        </div>
        <p id="school-name">Raccoon City School District</p>
      </div>
    </a>
    <ul id="vertical-menu">
    ${linksArray
      .map((link) => `
    <li><a href="${link.url}" class="navbar-link-item">${link.name}</a></li>`).join(" ")}
    </ul>
    </div>
  <div class="separator">
  </div>`;
};

export {renderNav}

