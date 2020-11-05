$(document).ready(function () {
    // function click_tri() {
    //     $('Q_btn').css({
    //         "margin-right": "30px",
    //         /* 三角形產生器 */
    //         width: "0px",
    //         height: "0px",
    //         "border-left": "20px solid #FF8C4B",
    //         "border-right": "20px solid #FF8C4B",
    //         "border-top": "30px solid #FFEFC7"
    //     }).click(function () {
    //         $('Q_btn').animate({
    //             "margin-right": "30px",
    //             /* 三角形產生器 */
    //             width: "0px",
    //             height: "0px",
    //             "border-left": "20px solid #FF8C4B",
    //             "border-right": "20px solid #FF8C4B",
    //             "border-bottom": "30px solid #FFEFC7"
    //         }, 1000, click_tri())
    //     })
    // }
    
    

    $('.Q_btn').addClass('unclicked').click(function () {
        var btn_id = $(this).attr('data-Aid');
        $('#A' + btn_id).slideToggle(500);
    });

    $('.rules_info').hide().slideDown(2000);
    
    $('#rules_basic_wrapper').hide().fadeIn(2000);
    
    $('.comb').flip({
        trigger: 'hover',
        reverse: 'true'
    });
    
    //init scrollMagic
    var controller = new ScrollMagic.Controller();

    //create first scene
    var firstScene = new ScrollMagic.Scene({
        triggerElement: '#rules_comb'
    })
        .setClassToggle('#rules_comb', 'rollOut').addto(controller);
});