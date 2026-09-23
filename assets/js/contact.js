/**
 * contact.js - Contact Page JavaScript
 * Handles form submission and interactive features
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact page loaded');
    
    // ========== FORM SUBMISSION HANDLER ==========
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[placeholder="Your Name"]')?.value;
            const email = this.querySelector('input[placeholder="Your Email"]')?.value;
            const subject = this.querySelector('input[placeholder="Subject"]')?.value;
            const message = this.querySelector('textarea[placeholder="Your Message"]')?.value;
            
            if (name && email && message) {
                // Show success message (you can replace with actual form submission)
                alert('Thank you for contacting us! We will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href !== '#!' && href !== '#0') {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    console.log('Contact page initialized');
});