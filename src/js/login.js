;require(['config'],function(){
    require(['jquery','foot','common'],function(){
        $('.Yfooter').load('../html/foot.html',function(){
            $('.Yfoot_service').hide();
        });
        // 验证
        $('.code_v').html(getCode());
        $('.btn_login').on('click',function(){
            if($('.VerifyCode').val()!=$('.code_v').text()){
                alert('验证码不正确');
                return false;
            }
        })
    });
});