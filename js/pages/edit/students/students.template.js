export function getEditForm(pStudentInfo, pClassesOptions) {
    return `
    <div id="cardsColumn" class="container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div class="row">
            <div class="col-12">
                <div class="card mb-3">
                    <div class="card-header d-flex justify-content-between align-items-center fw-bold">
                    <span>${pStudentInfo.name} ${pStudentInfo.surname}</span>
                    <span class="text-end">Class: ${pStudentInfo.class}</span> 
                    </div>        
                    <div class="card-body text-start">
              <p class="d-flex justify-content-between align-items-center">
                <span>Date of Birth: </span>
                <span>${pStudentInfo.dateOfBirth}</span>
              </p>
              <p class="d-flex justify-content-between align-items-center">
                <span>Address: </span>
                <span>${pStudentInfo.address}</span>
              </p>
              <p class="d-flex justify-content-between align-items-center">
                <span>Contact: </span>
                <span>${pStudentInfo.parentsContact}</span>
              </p>
            </div>
                </div>
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center fw-bold">
                        <span>
                            <input type="text" class="form-control custom-edit" id="students-edit-name" placeholder="Name">
                        </span>
                        <span class="ms-2">
                            <input type="text" class="form-control custom-edit" id="students-edit-surname" placeholder="Surname">
                        </span>
                        <span class="ms-5">
                            <select class="form-control custom-edit" id="students-edit-class">
                                ${pClassesOptions}
                            </select>
                        </span>
                    </div>        
                    <div class="card-body text-start">
                    <p class="d-flex justify-content-between align-items-center">
                      <span>Date of Birth: </span>
                      <span><input type="text" class="form-control custom-edit" id="students-edit-dob" placeholder="YYYY-MM-DD"></span>
                    </p>
                    <p class="d-flex justify-content-between align-items-center">
                      <span>editress: </span>
                      <span><input type="text" class="form-control custom-edit" id="students-edit-place" placeholder="# Street, City"></span>
                    </p>
                    <p class="d-flex justify-content-between align-items-center">
                      <span>Contact: </span>
                      <span><input type="text" class="form-control custom-edit" id="students-edit-contact" placeholder="XXX-XXXX"></span>
                    </p>
                  </div>
                    <div class="card-footer text-center">
                        <div class="d-flex justify-content-center">
                          <button type="button" id="confirm-btn" class="btn btn-light w-50"><i class="fa-solid fa-check"></i></button>
                          <button type="button" id="cancel-btn" class="btn btn-light w-50"><i class="fa-solid fa-x"></i></button>
                      </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}
