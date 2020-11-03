$(document).ready(function(){

    $('.Q_btn').click(function(){
        var Q_btn_id = $(this).attr('data-Aid');
        $('#'+Q_btn_id).slideToggle(300);
        // $('.Q_btn').css({
        //         "margin-right": "30px",
        //         /* 三角形產生器 */
        //         width: "0px",
        //         height: "0px",
        //         "border-left": "20px solid #FF8C4B",
        //         "border-right": "20px solid #FF8C4B",
        //         "border-bottom": "30px solid #FFEFC7"
        // });
    })

});