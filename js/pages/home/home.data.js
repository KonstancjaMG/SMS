import {loadFromLocalStorage} from "../../local_storage/local.storage.js"

export function getCardStatistics() {
    const students = loadFromLocalStorage('students');
    const classes = loadFromLocalStorage('classes');
    const teachers = loadFromLocalStorage('teachers');
  
    const numberOfStudents = students.length;
    const numberOfClasses = classes.length;
    const numberOfTeachers = teachers.length;
  
    return [
        {
            "title": "Students",
            "stat": numberOfStudents
        },
        {
            "title": "Classes",
            "stat": numberOfClasses
        },
        {
            "title": "Teachers",
            "stat": numberOfTeachers
        },
    ]

}