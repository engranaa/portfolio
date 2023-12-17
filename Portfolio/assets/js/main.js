// ------------------menu media navbar ------------
var menuIcone = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcone.onclick = () => {
    menuIcone.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

}

// ------------------scroll links avrive------------

var sections = document.querySelectorAll('section');
var navBarLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    var scrollPosition = window.scrollY;

    sections.forEach(sec => {
        var sectionTop = sec.offsetTop - 150;
        var sectionHeight = sec.offsetHeight;
        var secId = sec.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navBarLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Select the specific link based on href attribute matching the section ID
            var correspondingLink = document.querySelector('header nav a[href="#' + secId + '"]');
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });

    // ------------------stcky navbar------------

    var header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // ------------------remove toggle icone and navbar  ------------

    menuIcone.classList.remove ('fa-xmark');
    navbar.classList.remove('active');

};

  // ------------------ scroll reveal  ------------

  ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-content, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });

 // ------------------ typed js  ------------

 var typed = new Typed('.muli-text', {
    strings: ['Front-End Developer.', 'Computer Engineer.', 'Hacker.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });
