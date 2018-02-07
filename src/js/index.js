;require(['config'],function(){
    require(['jquery','headFoot','common','carousel'],function(){
        $('.Yheader').load('../html/head.html');
        $('.Yfooter').load('../html/foot.html');
        $('.Ybanner').yjCarousel({
            imgs:['../images/index/banner1.jpg','../images/index/banner2.jpg','../images/index/banner3.jpg','../images/index/banner4.jpg','../images/index/banner5.jpg'],
            buttons:true,
            width:1423,
            height:500
        });
        $('.Ynav_title').on('click','li',function(){
            location.href = '../html/list.html';
        })
        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                num1:0,
                num2:7
            },
            success:function(data){
                // console.log(data);
                $('.con1').html(data.map(function(item){
                    return `
                        <img src="${item.imgurl}"/>
                    `
                }).join(''));
            }
        });
        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                num1:7,
                num2:7
            },
            success:function(data){
                // console.log(data);
                $('.con2').html(data.map(function(item){
                    return `
                        <img src="${item.imgurl}"/>
                    `
                }).join(''));
            }
        });
        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                num1:14,
                num2:7
            },
            success:function(data){
                // console.log(data);
                $('.con3').html(data.map(function(item){
                    return `
                        <img src="${item.imgurl}"/>
                    `
                }).join(''));
            }
        });
        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                num1:21,
                num2:8
            },
            success:function(data){
                // console.log(data);
                $('.con4').html(data.map(function(item){
                    return `
                        <img src="${item.imgurl}"/>
                    `
                }).join(''));
            }
        });
        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                num1:29,
                num2:8
            },
            success:function(data){
                // console.log(data);
                $('.con5').html(data.map(function(item){
                    return `
                        <img src="${item.imgurl}"/>
                    `
                }).join(''));
            }
        });
        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                num1:37,
                num2:8
            },
            success:function(data){
                // console.log(data);
                $('.con6').html(data.map(function(item){
                    return `
                        <img src="${item.imgurl}"/>
                    `
                }).join(''));
            }
        });
    });
});