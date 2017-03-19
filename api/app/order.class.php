<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2017/3/20 0020
 * Time: 10:16
 * File Using:order 接口订单类api user
 */


namespace api\app;

class order{
    //
    public function login(){
        $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
        $code = isset($_POST['code']) ? $_POST['code'] : '';
        $data['status'] = 200;
        $data['data'] = [];
        $data['message'] = '请求成功';
        $data['data'] = array(

        );
        if($phone and $code){


        } else {

        }

        die(json_encode($data));

    }

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