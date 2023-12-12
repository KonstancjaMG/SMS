export function showStudentsTemplate(pClassId, pStudents, pModule) {
    return `
    <div id="cardsColumn" class="container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-4">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center fw-bold">
                    <span class="text-start">${pClassId}</span>
                    <span class="text-end">${pModule}</span>
                </div>
                <div class="card-body text-start">
                    ${listStudents(pStudents)}
                </div>
                <div class="card-footer text-end">
                    <button type="button" class="btn btn-light w-100 confirm-btn">
                        <i class="fa-solid fa-check"></i></button>
                </div>
            </div>
        </div>
    </div>`;
}

function listStudents(pStudents) {
    return pStudents.map(student => `
        <div class="d-flex justify-content-between">
            <span>${student.name} ${student.surname}</span>
            <span>${student.grade}</span>
        </div>
    `).join('');
}
