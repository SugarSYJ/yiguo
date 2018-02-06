;require(['config'],function(){
    require(['jquery'],function(){
        $('.shopping_cart').on('click',function(){
            location.href = '../html/car.html';
        });
        $('.login').on('click',function(){
            location.href = '../html/login.html';
        })
        $('.reg').on('click',function(){
            location.href = '../html/reg.html';
        })
    });
});