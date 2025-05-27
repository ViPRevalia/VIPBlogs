// Categories Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Filter categories
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryCards = document.querySelectorAll('.category-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter cards
            categoryCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Animate cards
            if (filterValue !== 'all') {
                const visibleCards = document.querySelectorAll(`.category-card[data-category="${filterValue}"]`);
                visibleCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate__animated', 'animate__fadeIn');
                        card.style.animationDelay = `${index * 0.1}s`;
                    }, 10);
                });
            }
        });
    });
    
    // Hover effect for category cards
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.category-image img').style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.category-image img').style.transform = 'scale(1)';
        });
    });
    
    // Animate cards on scroll
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.category-card');
        
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.classList.add('animate__animated', 'animate__fadeInUp');
                    card.style.animationDelay = `${index * 0.1}s`;
                }, 10);
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});