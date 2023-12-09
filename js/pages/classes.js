const renderClasses = () => {
  const contentContainer = document.getElementById('contentWrapper');
  contentContainer.innerHTML += `<div>CLASSES</div>
`;
};

function getClassesOptions() {
  const classesArray = JSON.parse(localStorage.getItem('classes')) || [];
  const classOptions = classesArray.map(cls => `<option value="${cls.id}">${cls.id}</option>`).join('');
  return classOptions
}

export {renderClasses, getClassesOptions};