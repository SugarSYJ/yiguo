;require(['config'],function(){
    require(['jquery','head','foot','common','carousel'],function(){
        $('.Yheader').load('../html/head.html');
        $('.Yfooter').load('../html/foot.html');
        $('.Ybanner').yjCarousel({
            imgs:['../images/index/banner1.jpg','../images/index/banner2.jpg','../images/index/banner3.jpg','../images/index/banner4.jpg','../images/index/banner5.jpg'],
            buttons:true,
            width:1423,
            height:500
        });
        // $.post('../api/index.php',function(data){
        //     console.log(11);
        //     console.log(data);
        // },"json");
        $.ajax({
            type:'GET',
            url:'../api/list.php',
            success:function(data){
                console.log(data);
            }
        });
    });
});