function getSearchBar() {
  return `
  <div class="container search-bar-container">
  <div class="container mb-3 mt-4 mb-2">
  <div id="first-row" class="row g-3 d-flex justify-content-center">
      <div class="col-md-4 col-sm-4">
          <input type="text" class="form-control" id="students-search-name" placeholder="Name">
      </div>
      <div class="col-md-4 col-sm-4">
          <input type="text" class="form-control" id="students-search-surname" placeholder="Surname">
      </div>
      <div class="col-md-4 col-sm-4">
          <input type="text" class="form-control" id="students-search-dob" placeholder="Date of Birth">
      </div>
  </div>
  <div class="row g-3 mt-1 d-flex justify-content-center">
      <div class="col-md-4 col-sm-4">
          <input type="text" class="form-control" id="students-search-class" placeholder="Class">
      </div>
      <div class="col-md-4 col-sm-4">
          <input type="text" class="form-control" id="students-search-place" placeholder="Street & City">
      </div>
      <div class="col-md-4 col-sm-4">
          <input type="text" class="form-control" id="students-search-contact" placeholder="Contact Nr.">
      </div>
  </div>
</div>
</div>
  `
}

function getStudentCards(pStudentsArray, pClassesOptions) {
  const cards = pStudentsArray.map(student => {
      return `
        <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-4">
          <div class="card custom-student-card">
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
                <span>Contact: </span>
                <span>${student.parentsContact}</span>
              </p>
            </div>
            <div class="card-footer text-end">
            <div class="row">
            <div class="col">
            <button type="button" class="btn btn-light w-100 edit-btn" data-edit-student-id="${student.id}"><i class="fa-solid fa-pen"></i></button>
            </div>
            <div class="col">
              <button type="button" class="btn btn-light w-100 remove-btn" data-student-id="${student.id}"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  
  return `<div class="row mb-5 mt-4">${createAddCard(pClassesOptions)} ${cards}</div>`;
}

function createAddCard(pClassesOptions) {
      
  return `
        <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-4" id="add-container">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center fw-bold">
              <span><input type="text" class="form-control custom-add" id="students-add-name" placeholder="Name"></span>
              <span class="ms-2"><input type="text" class="form-control custom-add" id="students-add-surname" placeholder="Surname"></span>
              <span class="ms-5">
                  <select class="form-control custom-add" id="students-add-class">
                      ${pClassesOptions}
                  </select>
              </span>
            </div>        
            <div class="card-body text-start">
              <p class="d-flex justify-content-between align-items-center">
                <span>Date of Birth: </span>
                <span><input type="text" class="form-control custom-add" id="students-add-dob" placeholder="YYYY-MM-DD"></span>
              </p>
              <p class="d-flex justify-content-between align-items-center">
                <span>Address: </span>
                <span><input type="text" class="form-control custom-add" id="students-add-place" placeholder="# Street, City"></span>
              </p>
              <p class="d-flex justify-content-between align-items-center">
                <span>Contact: </span>
                <span><input type="text" class="form-control custom-add" id="students-add-contact" placeholder="XXX-XXXX"></span>
              </p>
            </div>
            <div class="card-footer text-end">
            <div class="row">
            <div class="col">
              <button type="button" id="add-btn" class="btn btn-light w-100"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
            </div>
          </div>
        </div>
      `;  
    }



  export {getStudentCards, getSearchBar};