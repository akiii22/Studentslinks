$(document).ready(function () {
  $('.toggle').click(function () {
    $('.ul-list').toggleClass('show');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const toggleDarkModeButton = document.getElementById('toggleDarkMode');
  const darkModeIcon = document.getElementById('darkModeIcon');

  toggleDarkModeButton.addEventListener('click', function () {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
          darkModeIcon.src = 'img/sun.png';
      } else {
          darkModeIcon.src = 'img/cloud-moon.svg'; 
      }
  });
});

