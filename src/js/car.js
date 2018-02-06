;require(['config'],function(){
    require(['jquery','head','foot','common'],function(){
        $('.Yheader').load('../html/head.html',function(){
            $('.fl p').first().siblings().hide();
            $('.Yhead_b').hide();
        });
        $('.Yfooter').load('../html/foot.html',function(){
            $('.Yfoot_service').hide();
        });
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
        console.log(data);
        var total1 = 0;
        var total2 = 0;
        var $cart_list = $('.cart_list');
        $cart_list.html(data.map(function(goods){
            total1 = goods.price * goods.qty;
            total2 += total1;
            return `
                <li data-id="${goods.id}">
                    <div class="cart_che">
                        <input type="checkbox" checked class="c"/>
                    </div>
                    <img src="${goods.imgurl}" class="cart_img" />
                    <div class="cart_inf">${goods.title}</div>
                    <div class="cart_ub"></div>
                    <div class="cart_pri">￥
                        <span class="price">${goods.price}</span>
                    </div>
                    <div class="cart_qty">
                        <i></i>
                        <div class="qty">${goods.qty}</div>
                        <i class="i2"></i>
                    </div>
                    <div class="cart_tot">￥
                        <span class="total">${total1}</span>
                    </div>
                    <div class="cart_gui">${goods.dai}</div>
                    <div class="cart_op">
                        <a href="#">移入收藏</a>
                        <p class="del">删除</p>
                    </div>
                </li>
            `
        }).join(''));
        $('.tot').html(total2);
        // 删除
        $cart_list.on('click','.del',function(){
            $(this).closest('li').remove();
        })
    });
});