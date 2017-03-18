<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2015/7/16 0016
 * Time: 17:39
 * File Using:url路由处理
 */
namespace avf;
class Route{
    static public function dispose_url() {
        //获取默认API地址
        $default_api = C('default_api');
        $call_module = $default_api['module'];
        $api = $default_api['class'];
        $func = $default_api['function'];
        //设置配置API地址
        if(isset($_GET['m'])){
            $call_module = $_GET['m'];
        }
        if(isset($_GET['c'])){
            $api = $_GET['c'];
        }
        if(isset($_GET['f'])){
            $func = $_GET['f'];
        }

        // 引入相关API文件
        $msg = C('msg');
        if(file_exists($filename =  API_PATH. $call_module. '/'. $api. EXT)) {
            require_once $filename;
        } else {
            E($msg['FILE_ERR']);
        }

        # 实例化对象
        $new = '\\Api\\'. $call_module. '\\' .$api;
        $obj = new $new();

        # 判断方法是否存在
        if(!method_exists($obj, $func)) {
            E($msg['FUNC_ERR']);
        }

        // 调用API
        call_user_func(array($obj, $func));

    }
}