import { linksArray, students, classes, teachers, grades} from "../data.js";

const app = document.getElementById("app");

function createContent() {
  return `
  <div id="contentWrapper">
        <div class="row  mt-5 ms-5">
            <div class="col-12 fs-2">Welcome Alice,</div>
        </div>
        <div id="cardsWrapper" class="container mt-5">
            ${createCards(linksArray)}
        </div>
    </div>
  `
}

function createCards(pLinks) {
  const cards = pLinks.map(link => {
    if (link.name !== 'Notes' && link.name !== 'Login') {
      return `
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-header text-start fw-bold">${link.name}</div>
            <div id="numberOf${link.name}" class="card-body text-center">${link.name}: </div>
            <div id="manage${link.name}" class="card-footer text-end text-decoration-underline">Manage ></div>
          </div>
        </div>
      `;
    }
    return '';
  }).join('');
  
  return `<div class="row mb-5">${cards}</div>`;
}

function showNumberOf() {
  const studentsCard = document.getElementById('numberOfStudents');
  const classesCard = document.getElementById('numberOfClasses');
  const teachersCard = document.getElementById('numberOfTeachers');
  const gradesCard = document.getElementById('numberOfGrades');

  const numberOfStudents = students.length;
  const numberOfClasses = classes.length;
  const numberOfTeachers = teachers.length;

  let total = 0;
  let count = 0;

  grades.forEach(grade => {
    Object.keys(grade).forEach(key => {
      if (key !== 'id') {
        total += grade[key];
        count++;
      }
    });
  });

  const gradesAverage = (total / count).toFixed(2);

  studentsCard.innerHTML += `${numberOfStudents}`;
  classesCard.innerHTML += `${numberOfClasses}`;
  teachersCard.innerHTML += `${numberOfTeachers}`;
  gradesCard.innerHTML += `${gradesAverage} (All Avg.)`;
}


const renderContent = () => {
  app.innerHTML += createContent();
  showNumberOf()
};

export { renderContent };
