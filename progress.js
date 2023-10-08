// Get the progress bar element
const progressBar = document.querySelector('.progress');

// Calculate the percentage of the page that has loaded
const progressPercentage = (window.scrollY / document.body.offsetHeight) * 100;

// Update the progress bar width
progressBar.style.width = progressPercentage + '%';

window.onload = function() {
  document.querySelector('.loading-bar').style.display = 'none';
};
