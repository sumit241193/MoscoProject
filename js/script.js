$(function() {

    new WOW().init();

})


$(function()
{

$("#work").magnificPopup({

    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{
        enabled:true
    }


});

    
});

$(function(){

    $("#team-members").owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true


    });


})


$(function(){

    $("#customers-testimonials").owlCarousel({

        items:1,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true

    });


})

$(function()
{
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    
});

$(function(){

    $("#client-list").owlCarousel({
        items:6,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true


    });


})





