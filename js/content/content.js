const app = document.getElementById("app");

const renderContent = () => {
  const contentContainer = document.createElement("div");
  contentContainer.id = "content-container";
  contentContainer.innerHTML += `<div>CONTENT</div>`;
  app.appendChild(contentContainer);
};

export { renderContent };
