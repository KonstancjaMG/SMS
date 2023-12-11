export function getClassesEditTemplate(pClassesLetters, currentLetter, currentNumber, currentDescription) {
    return `
    <div id="cardsColumn" class="container-fluid vh-100 d-flex align-items-center justify-content-center">
    <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-4">
    <div class="card custom-student-card">
        <div class="card-header d-flex justify-content-between align-items-center fw-bold">
            <span>Class:</span>
            <div class="ms-auto">
                <div class="d-flex align-items-center">
                    <select class="form-control custom-add me-2" id="students-add-class">
                    <option value="${currentLetter}">${currentLetter}</option>
                    <option disabled>-------</option>
                        ${pClassesLetters}
                    </select>
                    <input type="number" min="1" value="${currentNumber}" class="form-control">
                </div>
            </div>
        </div>
        <div class="card-body text-start">
            <input type="text" id="placeholder-input" value="${currentDescription}"></input>
        </div>
        <div class="card-footer text-end">
            <div class="row">
                <div class="col">
                    <button type="button" class="btn btn-light w-100 confirm-btn" data-confirm-class-id="">
                        <i class="fa-solid fa-check"></i>
                    </button>
                    </div>
                    <div class="col">
                    <button type="button" class="btn btn-light w-100 cancel-btn" data-confirm-class-id="">
                        <i class="fa-solid fa-x"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    `
}