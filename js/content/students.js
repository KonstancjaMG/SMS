import { students } from "../data.js";

function createStudentsContent() {
  const contentContainer = document.getElementById('contentWrapper');
  contentContainer.innerHTML = `
    <div class="row">
      <div class="col-md-3" id="filterColumn">
        <div id="filters" class="border">
          <h4>Filters</h4>

        </div>
      </div>
      <div class="col-md-9 container" id="cardsColumn">
        ${createStudentCards(students)}
      </div>
    </div>
  `;
}

function createStudentCards(pStudentsArray) {
  const cards = pStudentsArray.map(student => {
      return `
        <div class="col-md-5 mb-4">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center fw-bold">
              <span>${student.name} ${student.surname}</span>
              <span class="text-end">${student.class}</span>
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
            <div class="card-footer text-end text-decoration-underline">Edit ></div>
          </div>
        </div>
      `;
    }).join('');
  
  return `<div class="row mb-5 mt-5 d-flex justify-content-center">${cards}</div>`;
}

const renderStudents = () => {
   createStudentsContent()
  };

  export {renderStudents};