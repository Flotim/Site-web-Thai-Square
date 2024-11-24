

//effet glissement texte
document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var parallaxTexts = document.querySelectorAll('.parallax-text');

    // Ajuster la position verticale de tous les textes en fonction du défilement
    if (parallaxTexts) {
        parallaxTexts.forEach(function(parallaxText) {
            parallaxText.style.transform = 'translateY(' + scrollPosition * (-1) + 'px)';
        });
    }
});

document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var parallaxTexts = document.querySelectorAll('.parallax-text1');

    // Ajuster la position verticale de tous les textes en fonction du défilement
    if (parallaxTexts) {
        parallaxTexts.forEach(function(parallaxText) {
            parallaxText.style.transform = 'translateY(' + scrollPosition * (-0.1) + 'px)';
        });
    }
});





// effet de réaparition de la navbar
//


