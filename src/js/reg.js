;require(['config'],function(){
    require(['jquery','headFoot','common'],function(){
        // 尾部
        $('.Yfooter').load('../html/foot.html',function(){
            $('.Yfoot_service').hide();
        });
        // 验证
        $('.code_v').html(getCode());
        $('.btn-reg').on('click',function(){
            if($('#code').val()!=$('.code_v').text()){
                alert('验证码不正确');
                return false;
            }
            if(!/^1[34578]\d{9}$/.test($('#phone').val())){
                alert('手机号不正确');
                return false;
            }
            if($('#phone_code')==''){
                alert('手机验证码不能为空');
                return false;
            }
            if(!/^\S{6,20}$/.test($('#password').val())){
                alert('密码格式不正确');
                return false;
            }
            if($('#password_v').val()!=$('#password').val()){
                alert('两次密码不一致');
                return false;
            }
            if($('#yaoqing')==''){
                alert('手机验证码不能为空');
                return false;
            }
            if(!$('#checked').is(':checked')){
                alert('请勾选我已阅读并同意');
                return false;
            }
            $.ajax({
                url:'../api/reg.php',
                data:{
                    phone:$('#phone').val(),
                    password:$('#password').val()
                },
                success:function(data){
                    if(data === 'fail'){
                        alert('此号码已被注册，请换一个注册');
                        return false;
                    }else{
                        alert('注册成功');
                        location.href = '../html/login.html';
                    }
                    // console.log(data);
                }
            });
        });
    });
});