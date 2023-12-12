import { getClassesOptions } from "../../classes/classes.data.js";

export function getTeachersCardEdit(pTeacher) {
    const classesOptions = getClassesOptions();

    return `
    <div id="cardsColumn" class="container-fluid calc d-flex align-items-center justify-content-center">
    <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-4">
        <div class="custom-teacher-card card">
            <div class="card-header d-flex justify-content-between align-items-center fw-bold">
                <input type="text" class="form-control" id="teachers-edit-name" value="${pTeacher.name}">
                <input type="text" class="form-control ms-2" id="teachers-edit-surname" value="${pTeacher.surname}">
                    <select class="form-control ms-5 custom-add" id="teachers-edit-class">
                    <option value="${pTeacher.class}">${pTeacher.class}</option>
                            <option disabled>-------</option>
                        ${classesOptions}
                    </select>
                </div>
                <div class="card-body text-start">
    <div class="row mb-3">
        <div class="col-md-4 text-start">
            <label for="teachers-edit-dob" class="form-label">Date of Birth:</label>
        </div>
        <div class="col-md-8">
            <input type="text" class="form-control text-end" id="teachers-edit-dob" value="${pTeacher.dateOfBirth}">
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-md-4 text-start">
            <label for="teachers-edit-address" class="form-label">Address:</label>
        </div>
        <div class="col-md-8">
            <input type="text" class="form-control text-end" id="teachers-edit-address" value="${pTeacher.address}">
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-md-4 text-start">
            <label for="teachers-edit-contact" class="form-label">Contact:</label>
        </div>
        <div class="col-md-8">
            <input type="text" class="form-control text-end" id="teachers-edit-contact" value="${pTeacher.contactInfo}">
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-md-4 text-start">
            <label for="teachers-edit-licence" class="form-label">Licence:</label>
        </div>
        <div class="col-md-8">
            <input type="text" class="form-control text-end" id="teachers-edit-licence" value="${pTeacher.licenseId}">
        </div>
    </div>
</div>

                <div class="card-footer text-end">
                <div class="row">
                <div class="col">
                    <button type="button" class="btn btn-light w-100 confirm-btn" data-edit-teacher-id="${pTeacher.id}"><i class="fa-solid fa-check"></i></button>
                    </div>
                    <div class="col">
                    <button type="button" class="btn btn-light w-100 cancel-btn"><i class="fa-solid fa-x"></i></button>
                </div>
                </div>
            </div>
        </div>
    </div>`;
}
