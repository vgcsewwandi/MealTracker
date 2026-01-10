/**
 * Navigation Handler
 * Handles active navigation state across all pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    // Update active navigation link and add tooltips
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
            
            // Add tooltips to non-active links
            const linkText = link.textContent.trim();
            if (linkText.includes('Dashboard')) {
                link.setAttribute('data-bs-toggle', 'tooltip');
                link.setAttribute('data-bs-placement', 'bottom');
                link.setAttribute('title', 'View your daily meal summary and calorie intake');
            } else if (linkText.includes('Add Meal')) {
                link.setAttribute('data-bs-toggle', 'tooltip');
                link.setAttribute('data-bs-placement', 'bottom');
                link.setAttribute('title', 'Add a new meal to your daily log');
            } else if (linkText.includes('Analysis')) {
                link.setAttribute('data-bs-toggle', 'tooltip');
                link.setAttribute('data-bs-placement', 'bottom');
                link.setAttribute('title', 'View weekly and monthly calorie consumption charts');
            } else if (linkText.includes('Settings')) {
                link.setAttribute('data-bs-toggle', 'tooltip');
                link.setAttribute('data-bs-placement', 'bottom');
                link.setAttribute('title', 'Manage settings, food library, and export data');
            }
            
            // Initialize tooltip
            new bootstrap.Tooltip(link);
        }
    });
});

