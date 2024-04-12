const barItems = document.querySelectorAll('#interactive-bar li');

barItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove active class from all elements
    barItems.forEach(el => el.classList.remove('active'));
    // Add active class to clicked element
    this.classList.add('active');
  });
});
