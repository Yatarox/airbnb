// Récupérer les éléments
const hamburgerMenu = document.getElementById('hamburgerMenu');
const dropdownMenu = document.getElementById('dropdownMenu');
const profileIcon = document.getElementById('profileIcon');
const profileMenu = document.getElementById('profileMenu');

// Événement pour le menu hamburger
hamburgerMenu.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show'); // Toggle du menu déroulant
});

// Événement pour le menu de profil
profileIcon.addEventListener('click', function() {
    toggleProfileMenu();
});

// Fonction pour basculer le menu de profil
function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.style.display = "block";
}




function toggleOptionBorder(selectedOption) {
    // Récupère toutes les options
    const options = document.querySelectorAll('.calendar-options span');

    // Réinitialise la bordure de toutes les options
    options.forEach(option => {
        option.style.borderColor = "gray";
    });

    // Change la couleur de l'option sélectionnée
    selectedOption.style.borderColor = "black";
}
    
     
function showCalendar() {
    document.querySelector('main').style.display = 'none'; // Rend le contenu principal invisible
    document.querySelector('.search-button.phone').style.visibility = 'hidden'; // Rend le bouton de recherche invisible
    document.querySelector('.calendar').style.display = 'flex'; // Affiche le calendrier
}

function restorePage() {
    // Masquer le calendrier
    document.querySelector('.calendar').style.display = 'none';

    // Afficher le contenu principal
    document.querySelector('main').style.display = 'block';
    
    // Réafficher le bouton de recherche
    document.querySelector('.search-button.phone').style.visibility = 'visible'; 
}








