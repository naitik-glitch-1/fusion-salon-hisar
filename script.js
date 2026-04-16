document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("✅ Thank you! Your booking request has been sent to Fusion Salon Hisar.\n\nWe will contact you soon!");
    this.reset();
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
