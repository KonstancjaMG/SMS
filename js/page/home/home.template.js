
export function getHomeTemplate(pCardListContent) {
  return `
    <div>
        <div class="row  mt-5 ms-5">
            <div class="col-12 fs-2">Welcome Alice,</div>
        </div>
        <div id="cardsWrapper" class="container mt-5">
            ${pCardListContent}
        </div>
    </div>
  `
}

export function getCardTemplate({title, stat}){
  return `
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-header text-start fw-bold">${title}</div>
            <div class="card-body text-center">${title}: ${stat} </div>
            <div id="manage${title}" class="card-footer text-end text-decoration-underline">Manage ></div>
          </div>
        </div>
      `;
}
