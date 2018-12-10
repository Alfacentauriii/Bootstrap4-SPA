// ===== Animación de las secciones =====
window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration:3000,
  origin:'bottom'
});
sr.reveal('.header-content-left', {
  duration: 3000,
  origin: 'top',
  distance:'300px'
});
sr.reveal('.header-content-right', {
  duration: 3000,
  origin: 'right',
  distance: '300px'
});
sr.reveal('.header-btn', {
  duration: 3000,
  origin: 'bottom',
  delay: 1500
});
sr.reveal('#testimonios', {
  duration: 3000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
});
sr.reveal('#testimonios', {
  duration: 3000,
  origin: 'left'
});
sr.reveal('.info-left', {
  duration: 3000,
  origin: 'top',
  distance:'300px'
});
sr.reveal('.info-right', {
  duration: 3000,
  origin: 'right',
  distance: '300px'
});
sr.reveal('.info2-left', {
  duration: 3000,
  origin: 'top',
  distance:'300px'
});
sr.reveal('.info2-right', {
  duration: 3000,
  origin: 'right',
  distance: '300px'
});
sr.reveal('#contacto', {
  duration: 3000,
  origin: 'left'
});

// ===== Smooth Scrolling - Animación al cambiar de secciones =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});


// ===== Scroll to Top FLECHA para volver al inicio ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // Si la página es scrolled más de 50px
        $('#return-to-top').fadeIn(200);    // Fade in flecha
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out la flechca
    }
});
$('#return-to-top').click(function() {      // Cuando se haga click a la flecha
    $('body,html').animate({
        scrollTop : 0                       // Scroll al inicio
    }, 500);
});
