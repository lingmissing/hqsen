<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2015/7/20 0020
 * Time: 17:27
 * File Using: 系统核心加载文件
 */

return array(
    // 配置文件
    'config'    =>  array(
        AVF_PATH.'conf/config' . CONF_EXT,      // 应用公共配置
    ),
    // 函数和类文件
    'core'      =>  array(
        AVF_PATH . 'common/functions' . CONF_EXT,
        AVF_PATH . 'lib/db'.EXT,
        AVF_PATH . 'Dispatcher'.EXT,
        AVF_PATH . 'Route'.EXT,
        AVF_PATH . 'Controller'.EXT
    )
);