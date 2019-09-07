$(document).ready(function(){    
   
    $(".owl-carousel").owlCarousel({
        items: 1,
        center: true,
        nav: true,
        navText: ["<img src='images/leftnavbutton.svg'>","<img src='images/rightnavbutton.svg'>"],
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        
    });
   
    $(".form-control" ).focus(function() {
        $(".overlay").fadeIn(500);
    });
    $( ".overlay" ).click(function() {
        $(".overlay").fadeOut(500);
    });

});