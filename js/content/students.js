import { students } from "../data.js";

function createStudentsContent() {
  const contentContainer = document.getElementById('contentWrapper');
  contentContainer.innerHTML = `
      <div class="container" id="search-bar-container">
      ${createSearchBar()}
      </div>
      <div class="container" id="cardsColumn">
        ${createStudentCards(students)}
      </div>
  `;
}

function createSearchBar() {
  return `
  <div class="input-group mb-3 mt-5" id="search-bar">
  <input type="text" class="form-control" id="students-search" placeholder="Search...">
  <span class="input-group-text" id="basic-addon1"></span>
</div>
  `
}

function createStudentCards(pStudentsArray) {
  const cards = pStudentsArray.map(student => {
      return `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center fw-bold">
              <span>${student.name} ${student.surname}</span>
              <span class="text-end">Class: ${student.class}</span>
            </div>        
            <div class="card-body text-start">
              <p class="d-flex justify-content-between align-items-center">
                <span>Date of Birth: </span>
                <span>${student.dateOfBirth}</span>
              </p>
              <p class="d-flex justify-content-between align-items-center">
                <span>Address: </span>
                <span>${student.address}</span>
              </p>
              <p class="d-flex justify-content-between align-items-center">
                <span>Parents: </span>
                <span>${student.parentsNames}</span>
              </p>
              <p class="d-flex justify-content-between align-items-center">
                <span>Contact: </span>
                <span>${student.parentsContact}</span>
              </p>
            </div>
            <div class="card-footer text-end">
              <button type="button" id="edit-btn" class="btn btn-light"><i class="fa-solid fa-pen"></i></button>
              <button type="button" id="remove-btn" class="btn btn-light"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  
  return `<div class="row mb-5 mt-5">${cards}</div>`;
}

const renderStudents = () => {
   createStudentsContent()
  };

  export {renderStudents};