<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2016/6/15 0020
 * Time: 15:27
 * File Using: 系统配置参数
 */

return array(
    //返回消息
    'msg'    =>  array(
        'REQUEST_METHOD_ERR' => '请求方式错误',
        'FILE_ERR' => '请求文件错误',
        'FUNC_ERR' => '请求函数错误',
    ),
    // 函数和类文件
    'default_api'      =>  array(
        'module' => 'home',
        'class' => 'index',
        'function' => 'main',
    ),
    //数据库配置
    'db' => array(
        'CONNECT_ERROR' => '数据库连接错误',
        'SELECT_ERROR' => '数据库实例选择错误',
        'db_host' => 'localhost',
        'db_user' => 'root',
        'db_pwd' => '',
        'db_database' => '51offer',
        'db_charset' => 'utf8',
    )


);