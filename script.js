
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
            parallaxText.style.transform = 'translateY(' + scrollPosition * (-0.3) + 'px)';
        });
    }
});





// effet de réaparition de la navbar
document.addEventListener("DOMContentLoaded", function() {
    var mainHeader = document.querySelector("header");
    var nav = document.querySelector("nav");
    var lastScrollTop = 0;
    var navHeight = nav.offsetHeight;

    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Faire défiler vers le bas, masquer la barre de navigation
            nav.style.top = `-${navHeight}px`;
        } else {
            // Faire défiler vers le haut, afficher la barre de navigation
            nav.style.top = "0";
        }

        // Ajoutez cette condition pour rendre la barre de navigation fixe après le header
        if (scrollTop >= mainHeader.offsetHeight) {
            nav.style.position = "fixed";
            nav.style.top = "0";
            nav.style.background = "rgba(242, 242, 242, 0.8)";
            nav.style.width= "100%"
            document.body.style.marginTop = `${navHeight}px`;
        } else {
            nav.style.position = "relative";
            document.body.style.marginTop = "0";
        }

       
    });
}); 


function toggleMenu() {
    const carte = document.querySelector('.carte');
    carte.classList.toggle('show');
  } 


function toggleMenus() {
    const carte = document.querySelector('.carte');
    carte.classList.toggle('show');

// Si la liste est maintenant visible, ajoutez AOS au conteneur de la liste
    if (carte.classList.contains('show')) {
        carte.setAttribute('data-aos', 'fade-up');
        carte.setAttribute('data-aos-delay', '200');

    // Ajoutez l'événement click à chaque élément de la liste
        const menuItems = document.querySelectorAll('.carte li');

        menuItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                // Ajoutez AOS à l'élément de la liste lorsque l'utilisateur clique dessus
                item.setAttribute('data-aos', 'fade-up');
                item.setAttribute('data-aos-easing','ease-in-sine');
                item.setAttribute('data-aos-duration','650');
            });
        });

    // Initialisez AOS
        AOS.init({
            once: true, // Animation ne se répète qu'une fois
        });
    }
}



