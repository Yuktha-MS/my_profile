document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    // Show/hide scroll-to-top button
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
