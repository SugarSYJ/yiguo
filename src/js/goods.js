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
        var id = date.id;
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
        // 用于保护购物车的信息
        var data = [];
        var cookies = document.cookie;
        if(cookies.length){
            cookies = cookies.split('; ');
            cookies.forEach(function(item){
                var arr = item.split('=');
                if(arr[0]==='data'){
                    data = JSON.parse(arr[1]);
                }
            });
        }
        // 数量加减
        $('.increase').on('click',function(){
            $('#p_number').val($('#p_number').val()*1 + 1);
        });
        $('.decrease').on('click',function(){
            $('#p_number').val($('#p_number').val()*1 - 1);
            if($('#p_number').val()*1<=1){
                $('#p_number').val(1);
            }
        });
        var $addcart = $('.addcart');
        $addcart.on('click',function(){
            for(var i=0;i<data.length;i++){
                if(data[i].id === id){
                    break;
                }
            }
            if(i===data.length){
                var goods = {
                    id:id,
                    imgurl:date.imgurl,
                    title:date.title,
                    price:date.price,
                    dai:date.dai,
                    qty:$('#p_number').val()*1
                }
                data.push(goods);
            }else{
                data[i].qty = data[i].qty + $('#p_number').val()*1;
            }
            var now = new Date();
            now.setDate(now.getDate()+3);
            document.cookie = 'data=' + JSON.stringify(data) + ';expires=' + now.toUTCString();
            // console.log(document.cookie); 
            // 飞入购物车
            var $shopping_cart = $('.shopping-cart');
            var $tu1 = $('.tu1');
            var $copy = $tu1.clone();
            $copy.css({
                position:'absolute',
                left:$tu1.offset().left,
                top:$tu1.offset().top,
                width:$tu1.width()
            });
            $copy.appendTo('body');
            $copy.animate({
                width:20,
                height:20,
                left:$shopping_cart.offset().left,
                top:$shopping_cart.offset().top+$shopping_cart.height()
            },function(){
                $copy.remove();
            });
        })
    });
});