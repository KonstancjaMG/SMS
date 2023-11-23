import { linksArray } from "./data.js";

const createEventListeners = () =>
  linksArray.forEach((link) => {
    let linkID = document.getElementById(link.url);
    console.log(linkID);

    if (linkID) {
      linkID.addEventListener("click", () => {
        
        console.log(`Button for ${link.name} clicked.`);
      });
    }
  });

export { createEventListeners };
