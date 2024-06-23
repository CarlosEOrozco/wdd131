document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('last-modified');
    const hamburgerButton = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    // Set current year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModifiedDate.toLocaleDateString();

    // Toggle hamburger menu
    hamburgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        if (navMenu.classList.contains('show')) {
            hamburgerButton.textContent = '✖';
        } else {
            hamburgerButton.textContent = '☰';
        }
    });
});
