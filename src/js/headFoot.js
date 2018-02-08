;require(['config'],function(){
    require(['jquery'],function(){
        $('.shopping_cart').on('click',function(){
            location.href = '../html/car.html';
        });
        $('.login').on('click',function(){
            location.href = '../html/login.html';
        });
        $('.reg').on('click',function(){
            location.href = '../html/reg.html';
        });
        // 吸顶、返回顶部
        var $right = $('.right_b');
        window.onscroll = function(){
            var scrollTop = window.scrollY;
            // console.log(scrollTop);
            if(scrollTop>=30){
                $('.Yhead_b').addClass('xiding');
                $right[0].style.display = 'block';
            }
            else{
               $('.Yhead_b').removeClass('xiding');
               $right[0].style.display = 'none';
            }    
        }
        $right.on('click',function(){
            var timer = setInterval(()=>{
                var scrollTop = window.scrollY;
                var speed = scrollTop/10;
                scrollTop -= speed;
                if(speed<=0 || scrollTop===0){
                    clearInterval(timer);
                }
                scroll(0,scrollTop);
            },30);
        });
        // 退出登录
        $('.back').on('click',function(){
            if(localStorage.hasOwnProperty('phone')){
                localStorage.clear();
                alert('退出成功');
            }else{
                alert('您还没有登录，请登录');
                location.href = '../html/login.html';
            }
        });
        // 搜索
        var script;
        var search_input = $('.search-input')[0];
        var suggest = $('#suggest')[0];
        window.getData = function(data){
            // console.log(data);
            suggest.innerHTML = data.s.map(item=>{
                return `<li>${item}</li>`
            }).join('');
            document.body.removeChild(script);
            suggest.style.display = 'block';
        }
        search_input.oninput = function(){
            var _keyword = search_input.value;
            script = document.createElement('script');
            script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&cb=getData&wd=" + _keyword;
            document.body.appendChild(script);
        }
        suggest.onclick = function(e){
            if(e.target.tagName.toLowerCase()==='li'){
                search_input.value = e.target.innerText;
                suggest.style.display = 'none';
            }
        }
        suggest.onmouseover = function(e){
            if(e.target.tagName.toLowerCase()==='li'){
                e.target.className = 'liang';
            }
        }
        suggest.onmouseout = function(e){
            if(e.target.tagName.toLowerCase()==='li'){
                e.target.className = '';
            }
        }
    });
});