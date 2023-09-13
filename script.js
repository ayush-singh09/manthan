const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Remove 'selected' class from all links
    links.forEach(lnk => {
      lnk.classList.remove('selected');
    });

    // Add 'selected' class to the clicked link
    link.classList.add('selected');
  });
});