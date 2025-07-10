const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.sidebar .close-btn');

hamburger.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Close sidebar when clicking any sidebar link
sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});
