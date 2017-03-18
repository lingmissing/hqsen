<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2016/6/16 0020
 * Time: 10:16
 * File Using:市场部报表接口
 */

namespace api\report;
use avf\lib\mysql;

class base{
    public $data;
    public $condition;
    public $db;
    public function __construct(){
        $this-> db = mysql::getInstance();
        $condition['country'] = array(
            '0' => '请选择',
            '100001' => '美国',
            '44' => '英国',
            '61' => '澳大利亚',
            '81' => '日本',
            '65' => '新加坡',
            '64' => '新西兰',
        );
        $condition['education'] = array(
            '1' => '中学',
            '2' => '本预',
            '3' => '本科',
            '4' => '硕预',
            '5' => '硕士',
        );
        $condition['year'] = array(
            '2008',
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        );
        $this-> condition = $condition;
        $this-> data['status'] = 200;
        $this-> data['data'] = array();
        $this-> data['message'] = '请求成功';
        header('Content-type: application/json');
//        header('Access-Control-Allow-Origin:*');
    }
}