export function getClassesEditTemplate(pClassesLetters, currentLetter, currentNumber, currentName, currentDescription) {
    return `
    <div id="cardsColumn" class="container-fluid calc d-flex align-items-center justify-content-center">
    <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-4">
    <div class="card custom-student-card">
        <div class="card-header d-flex justify-content-between align-items-center fw-bold">
            <div>
                <div class="d-flex align-items-center">
                    <select class="form-control custom-add" id="class-edit-letter">
                    <option value="${currentLetter}">${currentLetter}</option>
                    <option disabled>-------</option>
                        ${pClassesLetters}
                    </select>
                    <input type="number" min="1" value="${currentNumber}" class="form-control custom-add  me-5" id="class-edit-number">
                    <input type="text" value="${currentName}" class="form-control custom-add-name" id="class-edit-name">
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
                        <i class="fa-solid fa-check" data-confirm-class-id=""></i>
                    </button>
                    </div>
                    <div class="col">
                    <button type="button" class="btn btn-light w-100 cancel-btn" data-confirm-class-id="">
                        <i class="fa-solid fa-x" data-confirm-class-id=""></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    `
}