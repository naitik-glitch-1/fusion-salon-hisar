// Form Submission Alert
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("✅ Thank you! Your booking request has been sent to Fusion Salon Hisar.\n\nWe will contact you soon!");
    this.reset(); // Clear the form after submission
});

// Fade-in Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
