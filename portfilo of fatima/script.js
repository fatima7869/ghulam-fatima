
document.querySelector('.crosse').style.display = 'none';

document.querySelector('.hamburger').addEventListener("click", () => {
  const sidebar = document.querySelector('.sidebar'); 
  const hamIcon = document.querySelector('.ham');
  const crossIcon = document.querySelector('.crosse');

  sidebar.classList.toggle('sidebarGo');

  if (sidebar.classList.contains('sidebarGo')) {
    hamIcon.style.display = 'inline';
    crossIcon.style.display = 'none';
  } else {
    hamIcon.style.display = 'none';
    crossIcon.style.display = 'inline 300s';
  }
});

