$(function(){
    //获取屏幕宽度
    var wid = $(window).width();
    console.log(wid);
    $(".body_carousel, .body_carousel img").width(wid);
    //复制第一个图片并放到最后
    var i = 0;
    var pic = $(".con_Carousel ul li").eq(0).clone();
    $(".con_Carousel ul").append(pic);
    //制作轮播下方的原点
    var len = $(".con_Carousel ul li").size();
    for (var j = 0;j<len -1; j++){
        var num = $(" <li ><span>"+(j+1)+"</span></li>");
        $(".circle ul").append(num);
    }

    $(".circle ul li").first().addClass("on");
    function moveL(){
        i++;
        if(i == len){
            $(".con_Carousel").css({left:0});
            i = 1;
        }
        $(".con_Carousel").animate({left:-wid*i},1200);
        if(i == 4){
            $(".circle ul li").eq(0).addClass("on").siblings().removeClass("on");
        }else{
            $(".circle ul li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }
    function moveR() {
        i--;
        if(i == -1){
            $(".con_Carousel").css({left:-wid*(len-1)});
            i = len -2;
        }
        $(".con_Carousel").animate({left:-wid*i},1200);
        $(".circle ul li").eq(i).addClass("on").siblings().removeClass("on");
    }
    //定时轮播
    var t = setInterval(moveL,3000);
    //点击左右按钮切换
    $(".arrow_l").click(function () {
        moveL();
    })

    $(".arrow_r").click(function(){
       moveR();
    })
    //鼠标移入原点切换
    $(".circle ul li").hover(function(){
        var index = $(this).index();
        i = index;
        $(".con_Carousel").animate({left:-wid*index},500);
        $(this).addClass("on").siblings().removeClass("on");
    })
    //鼠标移入时停止自动轮播并显示左右按钮
    $(".body_carousel").hover(function(){
        clearInterval(t);
        $(".arrow_l, .arrow_r").css({display:"block"});
    },function () {
        t = setInterval(moveL,3000);
        $(".arrow_l, .arrow_r").css({display:"none"});
    })



// scene of school

$(".scene_container").slide({
    titCell: "",
    mainCell: ".mr_frUl ul",
    autoPage: true,
    effect: "leftLoop",
    autoPlay: true,
    vis: 4
});
    //news and location
$(".news_list ul li").click(function(){
    $(this).addClass("news_on").siblings().removeClass("news_on");
    var dataVal = $(this).data("title");
    if(dataVal == "news"){
        $(".news_cnt").animate({top:0},500);
    }else if(dataVal == "location"){
        $(".news_cnt").animate({top:-300},500);
    }
})
    //location--baiduMap
    var map = new BMap.Map("baiduMap");  //创建Map实例
    var point = new BMap.Point(116.3643759339,39.9673725718);  //创建point位置
    map.centerAndZoom(point, 16);  //设置地图中心点及缩放级别
    map.addControl(new BMap.MapTypeControl());  //添加地图类型控件
    var marker = new BMap.Marker(point);  //创建一个Marker点
    map.addOverlay(marker);  //将Marker点覆盖到地图上
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);  //使Marker点跳动起来
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
})

