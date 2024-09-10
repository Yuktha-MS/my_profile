// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Image Preview Function
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Animated Sections on Scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.animated-section');
    const viewportHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < viewportHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
