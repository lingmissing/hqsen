<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2015/7/20 0020
 * Time: 19:16
 * File Using:测试首页方法调用
 */

namespace api\home;
class index{
    public function main(){
        $data['status'] = 200;
        $data['data'] = 'hello AV视图框架';
        $data['message'] = '请求成功';
        die(json_encode($data));
    }
}