document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling + Close Mobile Menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            navLinks.classList.remove('active');
        });
    });

    // Form Submission
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Thank you! Your booking request has been sent to Fusion Salon Hisar.\nWe will contact you shortly!');
            form.reset();
        });
    }
});
