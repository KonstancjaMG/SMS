export function getEditForm(pStudentInfo, pClassesOptions) {
    return `
    <div id="cardsColumn" class="container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div class="row">
            <div class="col-12">
                <div class="card mb-3">
                    <div class="card-header d-flex justify-content-between align-items-center fw-bold">
                        <span>
                            <input type="text" class="form-control custom-edit" id="students-edit-name" value="${pStudentInfo.name}">
                        </span>
                        <span class="ms-2">
                            <input type="text" class="form-control custom-edit" id="students-edit-surname" value="${pStudentInfo.surname}">
                        </span>
                        <span class="ms-5">
                            <select class="form-control custom-edit" id="students-edit-class">
                            <option value="${pStudentInfo.class}">${pStudentInfo.class}</option>
                            <option disabled>-------</option>
                                ${pClassesOptions}
                            </select>
                        </span>
                    </div>        
                    <div class="card-body text-start">
                    <p class="d-flex justify-content-between align-items-center">
                      <span>Date of Birth: </span>
                      <span><input type="text" class="form-control custom-edit" id="students-edit-dob" value="${pStudentInfo.dateOfBirth}"></span>
                    </p>
                    <p class="d-flex justify-content-between align-items-center">
                      <span>Address: </span>
                      <span><input type="text" class="form-control custom-edit" id="students-edit-place" value="${pStudentInfo.address}"></span>
                    </p>
                    <p class="d-flex justify-content-between align-items-center">
                      <span>Contact: </span>
                      <span><input type="text" class="form-control custom-edit" id="students-edit-contact" value="${pStudentInfo.parentsContact}"></span>
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
