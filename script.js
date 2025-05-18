// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const interest = document.getElementById('interest').value;
            
            // In a real implementation, this would send data to a server
            // For now, we'll just show a success message
            
            // Clear the form
            orderForm.reset();
            
            // Show success message
            const formNote = document.querySelector('.form-note');
            formNote.textContent = 'Thank you! A representative will reach out within one business day.';
            formNote.style.color = 'green';
            formNote.style.fontWeight = 'bold';
            
            // Email would be sent to hello@ecuadane.com in production
            console.log('Form submitted:', { name, email, interest });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });
});
