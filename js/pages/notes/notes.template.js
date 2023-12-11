export function getNotesSearchBarTemplate() {
    return `
    <div class="container small-search-bar-container">
    <div class="row justify-content-center mt-3 mb-3">
        <div class="col-md-6 d-flex justify-content-center">
            <input type="text" class="form-control" id="notes-search-subject" placeholder="Subject">
        </div>
        <div class="col-md-6 d-flex justify-content-center">
            <input type="text" class="form-control" id="notes-search-date" placeholder="Date">
        </div>
    </div>
</div>
    `
  }