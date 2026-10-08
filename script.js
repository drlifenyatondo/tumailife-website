document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle Logic
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Functional Blog Tag Filtering
    const filterBadges = document.querySelectorAll('.blog-filter-section .stack-badge');
    const blogCards = document.querySelectorAll('.blog-card');

    if (filterBadges.length > 0 && blogCards.length > 0) {
        filterBadges.forEach(badge => {
            badge.addEventListener('click', () => {
                // Remove active styling from all badges
                filterBadges.forEach(b => b.classList.remove('active-filter'));
                
                // Add active state to clicked badge
                badge.classList.add('active-filter');

                const selectedCategory = badge.textContent.trim().toLowerCase();

                blogCards.forEach(card => {
                    const cardSubTitle = card.querySelector('.sub-title');
                    const categoryText = cardSubTitle ? cardSubTitle.textContent.trim().toLowerCase() : '';

                    if (selectedCategory.includes('all posts')) {
                        card.style.display = 'flex';
                    } else if (selectedCategory.includes('web development') && categoryText.includes('web development')) {
                        card.style.display = 'flex';
                    } else if (selectedCategory.includes('ui/ux design') && categoryText.includes('ui/ux design')) {
                        card.style.display = 'flex';
                    } else if (selectedCategory.includes('security') && categoryText.includes('security')) {
                        card.style.display = 'flex';
                    } else if (selectedCategory.includes('performance') && categoryText.includes('performance')) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});