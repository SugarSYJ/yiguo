;require(['config'],function(){
    require(['jquery'],function($){
        var $right = $('.right_b');
        window.onscroll = function(){
            var scrollTop = window.scrollY;
            if(scrollTop>100){
                $right[0].style.display = 'block';
            }else{
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
        })
    })
});