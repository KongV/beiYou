$(function(){
    $(window).scroll(function(){
        var scrollHei = $(window).scrollTop();
        if(scrollHei>372){
            $(".cnt_left").css({position:"fixed",top:0});
        }else{
            $(".cnt_left").css({position:"static"});
        }
    })

    $(".cnt_list ul li").click(function(){
        $(this).addClass("news_on").siblings().removeClass("news_on");
    })
})