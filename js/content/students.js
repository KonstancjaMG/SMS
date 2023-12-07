import { students } from "../data.js";
import { createStudentsEventListeners } from "../event_listeners/students_event_listeners.js";

function createStudentsContent() {
  const contentContainer = document.getElementById('contentWrapper');
  contentContainer.innerHTML = `
      <div class="" id="search-bar-container">
      ${createSearchBar()}
      </div>
      <div id="cardsColumn">
        ${createStudentCards(students)}
      </div>
  `;
}

function createSearchBar() {
  return `
  <div class="container mb-3 mt-5">
  <div class="row g-3">
      <div class="col-md-4">
          <input type="text" class="form-control" id="students-search-name" placeholder="Name">
      </div>
      <div class="col-md-4">
          <input type="text" class="form-control" id="students-search-surname" placeholder="Surname">
      </div>
      <div class="col-md-4">
          <input type="text" class="form-control" id="students-search-dob" placeholder="Date of Birth">
      </div>
  </div>
  <div class="row g-3 mt-1">
      <div class="col-md-4">
          <input type="text" class="form-control" id="students-search-class" placeholder="Class">
      </div>
      <div class="col-md-4">
          <input type="text" class="form-control" id="students-search-place" placeholder="Street & City">
      </div>
      <div class="col-md-4">
          <input type="text" class="form-control" id="students-search-contact" placeholder="Contact Nr.">
      </div>
  </div>
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
   createStudentsEventListeners();
  };

  export {renderStudents, createStudentCards};