export function getClassesTemplate(pClasses, pClassesLetters) {
    return `<div class="ps-5 pe-5 border cardsColumn">
    <div id="add-status" class="text-center mt-2" style="display:none"></div>
        ${getClassesCardTemplate(pClasses, pClassesLetters)}
    </div>`
}

function getClassesCardTemplate(pClasses, pClassesLetters) {
    const cards = pClasses.map(cls => {
    return `
    <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-4">
          <div class="card custom-student-card">
            <div class="card-header d-flex justify-content-between align-items-center fw-bold">
              <span class="text-end">Class: ${cls.id}</span>
            </div>        
            <div class="card-body text-start">
                ${cls.description}
            </div>
            <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-light w-50">Teachers</button>
              <button type="button" class="btn btn-light w-50">Students</button>
                </div>
            <div class="card-footer text-end">
            <div class="row">
            <div class="col">
            <button type="button" class="btn btn-light w-100 edit-btn" data-edit-class-id="${cls.id}"><i class="fa-solid fa-pen"></i></button>
            </div>
            <div class="col">
              <button type="button" class="btn btn-light w-100 remove-btn" data-class-id="${cls.id}"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
            </div>
          </div>
        </div>`
    }).join('');
    return `<div class="row mb-5 mt-4">${getAddClassesTemplate(pClassesLetters)}${cards}</div>`
}

function getAddClassesTemplate(pClassesLetters) {
    return`
    <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-4">
    <div class="card custom-student-card">
        <div class="card-header d-flex justify-content-between align-items-center fw-bold">
            <span>Class:</span>
            <div class="ms-auto">
                <div class="d-flex align-items-center">
                    <select class="form-control custom-add me-2" id="class-add-class">
                        ${pClassesLetters}
                    </select>
                    <input type="number" min="1" value="1" class="form-control" id="class-add-number">
                </div>
            </div>
        </div>
        <div class="card-body text-start">
            <input type="text" id="placeholder-input"></input>
        </div>
        <div class="card-footer text-end">
            <div class="row">
                <div class="col">
                    <button type="button" class="btn btn-light w-100 confirm-btn">
                        <i class="fa-solid fa-check"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`
}

export function getClassSearchBarTemplate() {
    return `
    <div class="container small-search-bar-container">
    <div class="row justify-content-center mt-3 mb-3">
        <div class="col-md-4 d-flex justify-content-center">
            <input type="text" class="form-control" id="class-search-letter" placeholder="Letter">
        </div>
        <div class="col-md-4 d-flex justify-content-center">
            <input type="text" class="form-control" id="class-search-number" placeholder="Number">
        </div>
    </div>
</div>
    `
  }