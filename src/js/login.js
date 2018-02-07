;require(['config'],function(){
    require(['jquery','headFoot','common'],function(){
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
            $.ajax({
                url:'../api/login.php',
                data:{
                    phone:$('#username').val(),
                    password:$('#password').val(),
                },
                success:function(data){
                    if(data === 'ok'){
                        alert('登录成功');
                        var caibin = $('#username').val();
                        localStorage.setItem("phone",caibin);
                        // console.log(localStorage.getItem("phone"));
                        location.href = '../index.html';
                    }else{
                        alert('账号密码不正确');
                        return false;
                    }
                    // console.log(data);
                }
            })
        })
    });
});