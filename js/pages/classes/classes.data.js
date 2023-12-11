export function loadClassess() {
  return JSON.parse(localStorage.getItem('classes')) || [];
}

export function loadClassesLetters() {
  return JSON.parse(localStorage.getItem('classLetters')) || [];
}

export function getClassesLettersOptions() {
  const classesLettersArray = loadClassesLetters();
  const classLettersOptions = classesLettersArray.map(letter => `<option value="${letter}">${letter}</option>`).join('');
  return classLettersOptions
}

export function getClassesOptions() {
    const classesArray = JSON.parse(localStorage.getItem('classes')) || [];
    const classOptions = classesArray.map(cls => `<option value="${cls.id}">${cls.id}</option>`).join('');
    return classOptions
  }

export  function getClassNameById(classId, classesArray) {
    const classObj = classesArray.find(cls => cls.id === classId);
    return classObj ? classObj.name : 'Unknown Class';
}
