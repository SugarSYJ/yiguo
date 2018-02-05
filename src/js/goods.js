;require(['config'],function(){
    require(['jquery','head','foot','common','jqzoom'],function(){
        $('.Yheader').load('../html/head.html');
        $('.Yfooter').load('../html/foot.html');
        // 中间部分
        // 接收参数
        var params = decodeURI(location.search);
        params = params.slice('1');
        // console.log(params);
        params = params.split('&');
        var date = {};
        params.forEach(function(item){
            var arr = item.split('=');
            date[arr[0]] = arr[1];
        });
        console.log(date);
        $('.rou').html(date.title);
        // 放大镜
        $('.tu1').attr("src",date.imgurl);
        $('.tu4').attr("src",date.imgurl);
        $('.tu2').attr("src",date.imgurl_1);
        $('.tu5').attr("src",date.imgurl_1);
        $('.tu3').attr("src",date.imgurl_2);
        $('.tu6').attr("src",date.imgurl_2);
        $("#etalage").zoom({
            autoplay_interval :3000,
            small_thumbs : 3,
            autoplay : true
        });
        $('.title').html(date.title);
        $('.price').html(date.price);
        $('.desc').html(date.desc);
        $('.dds').html(date.dds);
        $('.price1').html(date.price);
        $('.dai').html(date.dai);
        $('.recentImg').attr("src",date.imgurl);
        $('.tet').html(date.title);
    });
});