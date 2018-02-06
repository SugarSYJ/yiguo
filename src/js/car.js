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
        // console.log(data);
        var total1 = 0;
        var total2 = 0;
        var $cart_list = $('.cart_list');
        show();
        function show(){
            return $cart_list.html(data.map(function(goods){
                total1 = (goods.price * goods.qty).toFixed(2);
                total2 += total1*1;
                total2 = Math.floor(total2*100)/100;
                tt();
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
                            <i class="i1"></i>
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
            
        }
        function tt(){
            $('.tot').text(total2);
        }
        // 删除
        $cart_list.on('click','.del',function(){
            var id = $(this).closest('li').attr('data-id');
            for(var i=0;i<data.length;i++){
                if(data[i].id===id){
                    data.splice(i,1);
                    break;
                }
            }
            $(this).closest('li').remove();
            total2 = 0;
            cook();
            show();
            none();
        })
        // 数量加减
        .on('click','.i1',function(){
            var $i1 = $(this).next();
            $i1.text($i1.text()*1-1);
            if($i1.text()*1<=1){
                $i1.text(1);
            }
            var id = $(this).closest('li').attr('data-id');
            for(var i=0;i<data.length;i++){
                if(data[i].id===id){
                    data[i].qty--;
                    if(data[i].qty<=1){
                        data[i].qty = 1;
                    }
                    break;
                }
            }
            total2 = 0;
            cook();
            show();
        })
        .on('click','.i2',function(){
            var $i2 = $(this).prev();
            $i2.text($i2.text()*1+1);
            var id = $(this).closest('li').attr('data-id');
            for(var i=0;i<data.length;i++){
                if(data[i].id===id){
                    data[i].qty++;
                    break;
                }
            }
            total2 = 0;
            cook();
            show();
        })
        // 单选
        .on('click','li',function(){
            $(this).find('.c').prop('checked',this.checked);
            checkAll()
        });
        // 存入cookie
        function cook(){
            var now = new Date();
            now.setDate(now.getDate()+3);
            document.cookie = 'data=' + JSON.stringify(data) + ';expries=' + now.toUTCString();
        };
        // 全选
        var $c = $('.c');
        $('.all').click(function(){
            $c.prop('checked',this.checked);
            $('.all2').prop('checked',this.checked);
        });
        $('.all2').click(function(){
            $c.prop('checked',this.checked);
            $('.all').prop('checked',this.checked);
        });
        // 数量对比
        function checkAll(){
            var $checked = $c.filter(':checked');
            $('.all').prop('checked',$checked.length === $c.length);
            $('.all2').prop('checked',$checked.length === $c.length);
        }
        // 删除选中的商品
        $('.cart_footer').on('click','.clear',function(){
            var $checked = $c.filter(':checked');
            var id = $checked.closest('li').attr('data-id');
            for(var i=0;i<data.length;i++){
                if(data[i].id===id){
                    data.splice(i,1);
                    break;
                }
            }
            $checked.closest('li').remove();
            total2 = 0;
            cook();
            // show();
            none();
        })
        // 清空购物车
        .on('click','.clearAll',function(){
            $('.cart_list').find('li').remove();
            none();
        })
        none();
        function none(){
            var lis = $('.cart_list').find('li');
            if(lis.length===0){
                $('.main')[0].style.display = 'none';
                $('.cart_none')[0].style.display = 'block';
            }
        }
    });
});