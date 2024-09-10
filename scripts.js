// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to add a scroll effect to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to handle the sticky navbar
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    const scrollUpButton = document.querySelector('.scroll-up button');

    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        scrollUpButton.style.display = 'block';
    } else {
        navbar.classList.remove('navbar-scrolled');
        scrollUpButton.style.display = 'none';
    }
};
