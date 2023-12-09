import { getSearchBar, getStudentCards } from "./students.template.js";
import {createSeparatorGrey} from "../../utils/spacer.js"

export function createStudentsContent(pArray, pClassesOptions) {
    const contentContainer = document.getElementById('contentWrapper');
    contentContainer.innerHTML = `
        
        ${getSearchBar()}
        ${createSeparatorGrey()}
        <div class="ps-5 pe-5" id="cardsColumn">
        <div id="add-status" class="text-center mt-2" style="display:none"></div>
          ${getStudentCards(pArray, pClassesOptions)}
        </div>
    `;
  }