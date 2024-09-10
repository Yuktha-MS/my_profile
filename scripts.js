// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = value;
        bar.textContent = value;
    });
}

// Function to initialize animations and dynamic features
function init() {
    animateProgressBars();

    // Adding scroll event listener for section highlighting
    const sections = document.querySelectorAll('.animated-section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize features on page load
window.addEventListener('load', init);

// Adding event listeners for hover effects on jumbotrons
const jumbotrons = document.querySelectorAll('.jumbotron');

jumbotrons.forEach(jumbotron => {
    jumbotron.addEventListener('mouseover', () => {
        jumbotron.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });
    
    jumbotron.addEventListener('mouseout', () => {
        jumbotron.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});
