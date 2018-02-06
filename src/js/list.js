;require(['config'],function(){
    require(['jquery','head','foot','common'],function(){
        $('.Yheader').load('../html/head.html');
        $('.Yfooter').load('../html/foot.html');
        // 中间部分
        var $goods_list = $('.goods_list');
        var $page = $('.page');
        var pageNo = 1;
        var qty = 12;
        $.get('../api/list.php',{pageNo:pageNo,qty:qty},function(data){
            function arr(data){
                var _data = data;
                // console.log(_data);
                var $ul = $('<ul/>').html(function(){
                    return _data.data.map(function(item){
                        return `
                            <li data-id="${item.id}">
                                <img src="${item.imgurl}">
                                <div class="p_info">
                                    <div class="p_name">${item.title}</div>
                                    <div class="p_price">
                                        <span class="price">￥${item.price}</span>
                                        <span class="saletip">
                                            <b>${item.desc}</b>
                                            ${item.dds}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        `
                    }).join('');
                });
                $goods_list.text('');
                $goods_list.append($ul);
                // 分页
                $page.text('');
                var pageQty = Math.ceil(_data.total/_data.qty);
                for($i=1;$i<=pageQty;$i++){
                    var $span = $('<span/>');
                    $span.html($i);
                    if($i===pageNo){
                        $span.addClass('active');
                    }
                    $page.append($span);
                }
                // 传参
                $goods_list.on('click','li',function(item){
                    var id = $(this).attr('data-id');
                    // console.log(id);
                    var params = '?';
                    // console.log(data.data);
                    data.data.map(function(item){
                        if(item.id == id){
                            for(var attr in item){
                                params += attr + '=' + item[attr] + '&';
                            }
                            // 删除多余的&
                            params = params.slice(0,-1);
                            // console.log(params);
                            location.href = '../html/goods.html' + encodeURI(params);
                        }
                    });
            
                });
            };
            arr(data);
            // 点击分页切换
            $page.on('click','span',function(){
                span = pageNo = this.innerText*1;
                // console.log(span);
                $.get('../api/list.php',{pageNo:span,qty:qty},function(data){
                    arr(data);
                },"json");
            });
            // 价格排序
            $('.price_x').on('click',function(){
                sort();
                arr(data);
            });
            $('.price_b').on('click',function(){
                sort().reverse();
                arr(data);
            });
            function sort(){
                for(var i=0;i<data.data.length;i++){
                    for(var j=0;j<data.data.length-i-1;j++){
                        if(data.data[j].price > data.data[j+1].price){
                            var res =data.data[j];
                            data.data[j] = data.data[j+1];
                            data.data[j+1] = res;
                        }
                    }
                }
                return data.data;
            };
        },"json");
    });
});