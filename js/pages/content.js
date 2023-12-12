const app = document.getElementById("app");

const renderContent = () => {
  app.innerHTML += `
      <div id="contentWrapper" class="home-scroll"></div>
    `
};

export { renderContent };
