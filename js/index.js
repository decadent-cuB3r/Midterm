$(document).ready(function () {
    $('.text').hide().fadeIn(2000);

    $('.top_butt').click(function(){
        
    })

    //init scrollMagic
    var controller = new ScrollMagic.Controller();

    //create first scene
    var firstScene = new ScrollMagic.Scene({
        triggerElement: '#aside'
    })
        .setClassToggle('#aside', 'grow').addTo(controller);

    //create first scene
    var firstScene = new ScrollMagic.Scene({
        triggerElement: '#aside'
    })
        .setClassToggle('#aside', 'grow').addTo(controller);

    //create second scene
    var secondScene = new ScrollMagic.Scene({
        triggerElement: '#intro'
    })
        .setClassToggle('#intro', 'fade-in').addTo(controller);
});