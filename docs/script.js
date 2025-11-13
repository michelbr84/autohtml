window.addEventListener('DOMContentLoaded', () => {
    const article = document.querySelector('.article');

    // Optional: Add fade-in animation when page loads
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(article);

    // Optional: Add hover effect to description
    const description = document.querySelector('.header__description');
    if (description) {
        description.addEventListener('mouseenter', () => {
            description.style.color = '#1a1a1a';
            description.style.fontWeight = '700';
        });
        description.addEventListener('mouseleave', () => {
            description.style.color = '#555';
            description.style.fontWeight = '600';
        });
    }
});