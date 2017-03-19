<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2017/3/20 0020
 * Time: 10:16
 * File Using:app 接口用户类api user
 */


namespace api\app;

class user{
    // 用户登陆
    public function login(){
        $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
        $code = isset($_POST['code']) ? $_POST['code'] : '';
        $data['status'] = 200;
        $data['data'] = [];
        $data['message'] = '请求成功';
        $data['data'] = array(
            'access_token' => 2,
            'nike_name' => 'monkey',
            'user_type' => 2
        );
        if($phone and $code){

        } else {

        }

        die(json_encode($data));

    }

    //支付宝绑定
    public function alipayBind(){
        $alipay = $_POST['alipay'];
        if($alipay){
            $data['status'] = 200;
            $data['data'] = [];
            $data['message'] = '请求成功';
            $data['data'] = array(

            );
            die(json_encode($data));
        }

    }


}