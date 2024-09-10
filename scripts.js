// Smooth scroll for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show back-to-top button when scrolling
window.addEventListener('scroll', function () {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
document.getElementById('scrollToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
