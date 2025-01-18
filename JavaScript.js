// Détection du défilement pour afficher les sections
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        // Si la section est visible dans la fenêtre de visualisation
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('visible'); // Ajouter la classe "visible" pour les sections visibles
        }
    });
});

// Supprimer la classe "visible" de toutes les sections au début
document.querySelectorAll('section').forEach(section => {
    section.classList.remove('visible');
});

// Animation des éléments au clic sur les titres et paragraphes
document.querySelectorAll('section h2, section p').forEach(element => {
    element.addEventListener('click', function () {
        this.style.color = '#000080'; // Changer la couleur au clic
        this.style.transform = 'scale(0.9)'; // Légère réduction de taille au clic
    });

    // Réinitialiser l'animation après la fin de la transition
    element.addEventListener('transitionend', function () {
        this.style.transform = 'scale(1)'; // Retour à la taille normale après la transition
    });
});

// Animation au survol des éléments de services et de galerie
document.querySelectorAll('#services .service-item, #gallery .gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)'; // Déplacer l'élément vers le haut au survol
        this.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)'; // Ajouter une ombre au survol
    });
    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)'; // Retourner à la position initiale
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Réduire l'ombre après le survol
    });
});

// Fonction pour ajouter une animation de défilement au lien de navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Récupérer l'ID de la section à afficher
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Déplacer la page en douceur vers la section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fonction pour valider le formulaire avant soumission
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="nom"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');

    // Vérifier si tous les champs sont remplis
    if (name.value === '' || email.value === '' || message.value === '') {
        e.preventDefault(); // Annuler l'envoi si des champs sont vides
        alert("Tous les champs doivent être remplis !");
    }
});

// Fonction pour afficher un message de confirmation après envoi du formulaire
form.addEventListener('submit', function () {
    alert("Votre message a été envoyé avec succès.");
});