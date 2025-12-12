document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                document.querySelector('.nav-links').classList.remove('active');

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Form submission logic removed as requested (replaced by WhatsApp link)
    /*
    const form = document.getElementById('leadForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button');
        const originalText = submitBtn.innerText;
        
        submitBtn.disabled = true;
        submitBtn.innerText = 'Enviando...';

        // Simulate sending (Replace with real API later)
        setTimeout(() => {
            alert('Recebemos seu pedido! Em breve entraremos em contato.');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        }, 1500);
    });
    */

    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;

            // Close others (optional, for "one open at a time" behavior)
            document.querySelectorAll('.accordion-item').forEach(i => {
                if (i !== item) i.classList.remove('active');
            });

            item.classList.toggle('active');
        });
    });
});
