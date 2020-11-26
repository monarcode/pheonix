window.onload = (event) => {
    const navbar = document.querySelector(".navbar");
    this.scrollY > 100 ? navbar.classList.add("scroll") : navbar.classList.remove("scroll");
    var device = navigator.userAgent;
    var tog = document.getElementById("tog");
    const accordion = document.getElementsByClassName('faq');

    window.onscroll = ()=> {
        this.scrollY > 100 ? navbar.classList.add("scroll") : navbar.classList.remove("scroll");
    }

    if (window.scrollY < 100){
        tog.addEventListener("click",function(){
            navbar.classList.toggle('active-show');
        })
    }

    console.log(device);

    $('body').scrollspy({
        target: '#nav'
    })

    // testimonials
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // accordion
    for (i = 0; i<accordion.length; i++){
        accordion[i].addEventListener('click', function(){
            this.classList.toggle('active');
        });
    }

    // scroll animations
    ScrollReveal().reveal('#header', {
        delay: 50,
        duration: 1000,
        easing: 'ease-in-out',
        reset: false,
        cleanup: true
    });
    ScrollReveal().reveal('.right', {
        delay: 300,
        duration: 1000,
        easing: 'ease-in-out',
        distance: '50px',
        origin: 'left',
        reset: false,
        cleanup: true
    });
    ScrollReveal().reveal('.left', {
        delay: 300,
        duration: 1000,
        easing: 'ease-in-out',
        distance: '50px',
        origin: 'right',
        reset: false,
        cleanup: true
    });
    ScrollReveal().reveal('.service, .package', {
        delay: 100,
        duration: 1000,
        easing: 'ease-in-out',
        distance: '50px',
        origin: 'bottom',
        interval: 500,
        reset: false,
        cleanup: true
    });
    ScrollReveal().reveal('#packages', {
        delay: 100,
        duration: 1000,
        easing: 'ease-in-out',
        reset: false,
        cleanup: true
    });
}