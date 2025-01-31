handleCloseButtonclick = () => {
  const button = document.querySelector(".navSideBar");
  button.style.display = "none";
  const sidebarButton = document.querySelector(".ri-menu-line");
  sidebarButton.style.display = "initial";
};

handlesidebarButton = () => {
  const button = document.querySelector(".navSideBar");
  button.style.display = "initial";
  const sidebarButton = document.querySelector(".ri-menu-line");
  sidebarButton.style.display = "none";
};
