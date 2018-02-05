;require(['config'],function(){
    require(['jquery','head','foot','common'],function(){
        $('.Yheader').load('../html/head.html',function(){
            $('.fl p').first().siblings().hide();
            $('.Yhead_b').hide();
        });
        $('.Yfooter').load('../html/foot.html',function(){
            $('.Yfoot_service').hide();
        });
        
    });
});