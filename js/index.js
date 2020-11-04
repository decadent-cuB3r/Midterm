$(document).ready(function () {
    $('.text').hide().fadeIn(2000);

    //init scrollMagic
    var controller = new ScrollMagic.Controller();

    //create a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement = '#intro'
    })
    .setClassToggle('#intro', 'fadeIn').addTo(controller);

});