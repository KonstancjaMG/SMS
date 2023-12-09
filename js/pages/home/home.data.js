import {loadFromLocalStorage} from "../../local_storage/local.storage.js"

export function getCardStatistics() {
    const students = loadFromLocalStorage('students');
    const classes = loadFromLocalStorage('classes');
    const teachers = loadFromLocalStorage('teachers');
    const grades = loadFromLocalStorage('grades');
  
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
  
    return [
        {
            "title": "Students",
            "stat": numberOfStudents
        },
        {
            "title": "classes",
            "stat": numberOfClasses
        },
        {
            "title": "Teachers",
            "stat": numberOfTeachers
        },
        {
            "title": "Average",
            "stat": gradesAverage
        },
    ]

}