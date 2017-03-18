<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2015/7/16 0016
 * Time: 15:13
 * File Using:公共入口文件
 */

// 记录开始运行时间
$GLOBALS['_beginTime'] = microtime(TRUE);

// 记录内存初始使用
define('MEMORY_LIMIT_ON',function_exists('memory_get_usage'));
if(MEMORY_LIMIT_ON) $GLOBALS['_startUseMems'] = memory_get_usage();

// 系统常量定义

//系统程序目录
define('AVF_PATH', __DIR__.'/');

// 类文件后缀
const EXT = '.class.php';
const CONF_EXT = '.php';

// 引入初始化类
require AVF_PATH.'Avf'.EXT;



// 初始化系统
avf\Avf::load();


echo $GLOBALS['_beginTime'].'<br/>';
echo AVF_PATH.'<br/>';
echo MEMORY_LIMIT_ON.'<br/>';
echo $GLOBALS['_startUseMems'].'<br/>';
