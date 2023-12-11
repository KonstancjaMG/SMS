export function getTeachersPageTemplate(pTeachersArray, pClassesOptions) {
    return `<div class="ps-5 pe-5 border cardsColumn">
    ${getTeachersCards(pTeachersArray, pClassesOptions)}
    </div>`
}

export function getTeachersSearchBar() {
    return `
    <div class="container search-bar-container">
    <div class="container mb-3 mt-4 mb-2">
    <div id="first-row" class="row g-3 d-flex justify-content-center">
        <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" id="teacher-search-name" placeholder="Name">
        </div>
        <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" id="teacher-search-surname" placeholder="Surname">
        </div>
        <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" id="teacher-search-dob" placeholder="Date of Birth">
        </div>
        <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" id="teacher-search-licence" placeholder="Licence Number">
        </div>
    </div>
    <div class="row g-3 mt-1 d-flex justify-content-center">
        <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" id="teacher-search-class" placeholder="Class">
        </div>
        <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" id="teacher-search-place" placeholder="Street & City">
        </div>
        <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" id="teacher-search-contact" placeholder="Contact Nr.">
        </div>
        <div class="col-md-3 col-sm-3">
            <input type="text" class="form-control" id="teacher-search-subject" placeholder="Subject">
        </div>
    </div>
  </div>
  </div>
    `
  }
  
 function getTeachersCards(pTeachersArray, pClassesOptions) {
    const cards = pTeachersArray.map(teacher => {
        return `
          <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-4">
            <div class="custom-teacher-card card">
              <div class="card-header d-flex justify-content-between align-items-center fw-bold">
                <span>${teacher.name} ${teacher.surname}</span>
                <span class="text-end">Class: ${teacher.class}</span>
              </div>        
              <div class="card-body text-start">
                <p class="d-flex justify-content-between align-items-center">
                  <span>Date of Birth: </span>
                  <span>${teacher.dateOfBirth}</span>
                </p>
                <p class="d-flex justify-content-between align-items-center">
                  <span>Address: </span>
                  <span>${teacher.address}</span>
                </p>
                <p class="d-flex justify-content-between align-items-center">
                  <span>Contact: </span>
                  <span>${teacher.contactInfo}</span>
                </p>
                <p class="d-flex justify-content-between align-items-center">
                  <span>License: </span>
                  <span>${teacher.licenseId}</span>
                </p>
                <p class="d-flex justify-content-between align-items-center">
                  <span>Subject: </span>
                  <span>${teacher.subject}</span>
                </p>
              </div>
              <div class="card-footer text-end">
              <div class="row">
              <div class="col">
              <button type="button" class="btn btn-light w-100 edit-btn" data-edit-teacher-id="${teacher.id}"><i class="fa-solid fa-pen"></i></button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-light w-100 remove-btn" data-teacher-id="${teacher.id}"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    
    return `<div class="row mb-5 mt-4">${getTeachersAddCard(pClassesOptions)} ${cards}</div>`;
  }
  
  function getTeachersAddCard(pClassesOptions) {
    return `
          <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-4" id="add-container">
            <div class="card">
              <div class="card-header d-flex justify-content-between align-items-center fw-bold">
                <span><input type="text" class="form-control" id="teachers-add-name" placeholder="Name"></span>
                <span class="ms-2"><input type="text" class="form-control" id="teachers-add-surname" placeholder="Surname"></span>
                <span class="ms-5">
                    <select class="form-control custom-add" id="teachers-add-class">
                        ${pClassesOptions}
                    </select>
                </span>
              </div>        
              <div class="card-body text-start">
                <p class="d-flex justify-content-between align-items-center">
                  <span>Date of Birth: </span>
                  <span><input type="text" class="form-control" id="teachers-add-dob" placeholder="YYYY-MM-DD"></span>
                </p>
                <p class="d-flex justify-content-between align-items-center">
                  <span>Address: </span>
                  <span><input type="text" class="form-control" id="teachers-add-place" placeholder="# Street, City"></span>
                </p>
                <p class="d-flex justify-content-between align-items-center">
                  <span>Contact: </span>
                  <span><input type="text" class="form-control" id="teachers-add-contact" placeholder="XXX-XXXX"></span>
                </p>
                <p class="d-flex justify-content-between align-items-center">
                  <span>Contact: </span>
                  <span><input type="text" class="form-control" id="teachers-add-licence" placeholder="XX-XXXX"></span>
                </p>
                <p class="d-flex justify-content-between align-items-center">
                  <span>Contact: </span>
                  <span><input type="text" class="form-control" id="teachers-add-subject" placeholder="Subject"></span>
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
  