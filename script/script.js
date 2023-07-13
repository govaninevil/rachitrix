$(document).on('ready', function () {


    $("#mobile").on("click", function () {
        $("body").toggleClass("mobile");
    });

    $('.ltr-slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:true,
                dots:false
            }
        }
    })
});