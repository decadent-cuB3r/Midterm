$(document).ready(function () {
    $('.text').hide().fadeIn(2000);

    $('.top_butt').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
          scrollTop: 0,
        }, 700)
      });


    $('.head_butt').hover(function(){
        $(this).children('.sublist__nav').slideDown('fast');
    }, function(){
        $(this).children('sublist__nav').slideUp('slow');
    });

    //init scrollMagic
    var controller = new ScrollMagic.Controller();

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