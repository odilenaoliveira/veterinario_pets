
// menu scroll fixed
window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

// menu scroll responsivo
const1 menuToggle = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
};


// divs Scroll Reveal
ScrollReveal({
    reset:true,
    distance:'50px',
    duration:2500
});
ScrollReveal().reveal('.banner .content',{'delay':300,'origin':'left'});
ScrollReveal().reveal('.about .imgBox',{'delay':300,'origin':'left'});
ScrollReveal().reveal('.about .content',{'delay':300,'origin':'right'});
ScrollReveal().reveal('.info .textEvents',{'delay':300,'origin':'right'});