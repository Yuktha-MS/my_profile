document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scrolling to Sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to Top Button
    const scrollToTopButton = document.querySelector('.scroll-up button');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.opacity = 1;
        } else {
            scrollToTopButton.style.opacity = 0;
        }
    });

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Toggle Navbar Menu for Mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarMenu) {
        navbarToggler.addEventListener('click', function () {
            navbarMenu.classList.toggle('show');
        });
    }

    // Jumbotron Pop-Up Effect
    const jumbotronItems = document.querySelectorAll('.jumbotron .education-item, .jumbotron .certification-item, .jumbotron .project-item, .jumbotron .info-item');
    jumbotronItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});
