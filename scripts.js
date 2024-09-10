// Smooth scrolling to sections
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animation for sections as they come into view
const sections = document.querySelectorAll('.animated-section');

function animateOnScroll() {
    const triggerHeight = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerHeight) {
            section.classList.add('visible');
        }
    });
}

// Event listeners
window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Add a transition effect to the scroll-up button
document.querySelector('.scroll-up button').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.scroll-up button').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
