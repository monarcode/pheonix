window.onload = (event) => {
    const navbar = document.querySelector(".navbar");
    this.scrollY > 100 ? navbar.classList.add("scroll") : navbar.classList.remove("scroll");
    var device = navigator.userAgent;
    var tog = document.getElementById("#tog");

    window.onscroll = ()=> {
        this.scrollY > 100 ? navbar.classList.add("scroll") : navbar.classList.remove("scroll");
    }

    console.log(device);

    $('body').scrollspy({
        target: '#nav'
    })

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
    })
}