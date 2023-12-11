export function getGradesSearchBar() {
    return `
    <div class="container small-search-bar-container">
    <div class="container mb-3 mt-4 mb-2">
    <div id="first-row" class="row g-3 d-flex justify-content-center">
        <div class="col-md-3 col-sm-4">
            <input type="text" class="form-control" id="grades-search-subject" placeholder="Subject">
        </div>
        <div class="col-md-3 col-sm-4">
            <input type="number" min=1 max=6 class="form-control" id="grades-search-grade" placeholder="6">
        </div>
        <div class="col-md-3 col-sm-4">
            <input type="text" class="form-control" id="grades-search-surname" placeholder="Surname">
        </div>
        <div class="col-md-3 col-sm-4">
            <input type="text" class="form-control" id="grades-search-class" placeholder="Class">
        </div>
    </div>
  </div>
  </div>
    `
  }