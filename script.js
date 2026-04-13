document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Booking Form Submission
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Thank you! Your booking request has been sent to Fusion Salon Hisar.\n\nWe will contact you shortly on the given number.');
            form.reset();
        });
    }
});
