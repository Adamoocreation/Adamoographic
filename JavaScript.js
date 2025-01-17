// Détection du défilement pour afficher les sections
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        // Si la section est visible dans la fenêtre de visualisation
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('visible');
        }
    });
});

// Ajouter la classe "visible" à la section qui doit apparaître
document.querySelectorAll('section').forEach(section => {
    section.classList.remove('visible');
});

// Animation des éléments au clic sur les titres et paragraphes
document.querySelectorAll('section h1, section p').forEach(element => {
    element.addEventListener('click', function () {
        this.style.color = '#000080'; // Changer la couleur au clic
        this.style.transform = 'scale(0.9)'; // Légère réduction de taille au clic
    });
});

// Réinitialiser l'animation au clic sur les éléments de titre et paragraphe
document.querySelectorAll('section h1, section p').forEach(element => {
    element.addEventListener('transitionend', function () {
        this.style.transform = 'scale(1)'; // Retour à la taille normale après la transition
    });
});

// Animation au survol des éléments de services et de galerie
document.querySelectorAll('#services .service-item, #gallery .gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
    });
    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});