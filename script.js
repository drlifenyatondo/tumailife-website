document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Responsive Mobile Navigation Menu & Animated Hamburger Toggle
       ========================================================================== */
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('open');
            }
        });

        // Close menu on scroll
        window.addEventListener('scroll', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('open');
            }
        }, { passive: true });
    }

    /* ==========================================================================
       2. Dynamic Blog Filter Category Selection
       ========================================================================== */
    const filterBadges = document.querySelectorAll('.stack-badge');
    const blogCards = document.querySelectorAll('.blog-card');

    if (filterBadges.length > 0 && blogCards.length > 0) {
        filterBadges.forEach((badge) => {
            badge.addEventListener('click', (e) => {
                e.preventDefault();

                // Extract text clean without badge brackets or icons
                const selectedCategory = badge.textContent.replace(/\[.*?\]/g, '').trim().toUpperCase();

                // Update active class on all matching badges (handles loop clones)
                filterBadges.forEach(b => {
                    const badgeText = b.textContent.replace(/\[.*?\]/g, '').trim().toUpperCase();
                    if (badgeText === selectedCategory) {
                        b.classList.add('active-filter');
                    } else {
                        b.classList.remove('active-filter');
                    }
                });

                // Filter article cards based on .sub-title text
                blogCards.forEach((card) => {
                    const cardCategory = card.querySelector('.sub-title');
                    if (!cardCategory) return;

                    const categoryText = cardCategory.textContent.replace('//', '').trim().toUpperCase();

                    if (selectedCategory === 'ALL POSTS' || categoryText.includes(selectedCategory) || selectedCategory.includes(categoryText)) {
                        card.style.display = 'flex';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    } else {
                        card.style.display = 'none';
                        card.style.opacity = '0';
                    }
                });
            });
        });
    }

});