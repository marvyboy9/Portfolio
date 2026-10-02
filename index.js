document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const header = document.getElementById('header');
    const toggleHeaderShadow = () => {
        if (!header) return;
        header.classList.toggle('scrolled', window.scrollY > 20);
    };

    toggleHeaderShadow();
    window.addEventListener('scroll', toggleHeaderShadow);
});
