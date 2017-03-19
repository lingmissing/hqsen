<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2015/7/16 0016
 * Time: 14:54
 * File Using:应用入口文件
 */
// 定义API目录
define('API_PATH', __DIR__ . '/api/');
// 错误debug信息
define('API_DEBUG',true);

require "./avf/avf.php";
// 127.0.0.1/?m=home&c=index&f=main