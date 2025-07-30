
// Interactive features for the cursive alphabets website
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to benefit cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Add hover effect to table rows
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click tracking for the CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            console.log('Cursive Generator button clicked');
            // Add any additional tracking or analytics here
        });
    }

    // Add typing animation to the header
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
        const originalText = headerTitle.textContent;
        headerTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                headerTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        document.body.style.backgroundPosition = `center ${rate}px`;
    });

    // Add fade-in animation for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        observer.observe(section);
    });
});

// Function to highlight table rows based on difficulty level
function highlightByDifficulty(level) {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const difficultyCell = row.cells[2];
        if (difficultyCell && difficultyCell.textContent.toLowerCase().includes(level.toLowerCase())) {
            row.style.backgroundColor = '#e3f2fd';
            row.style.border = '2px solid #2196f3';
        } else {
            row.style.backgroundColor = '';
            row.style.border = '';
        }
    });
}

// Function to reset table highlighting
function resetHighlight() {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.style.backgroundColor = '';
        row.style.border = '';
    });
}
