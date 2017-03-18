<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2016/6/16 0020
 * Time: 10:16
 * File Using:搜索条件接口
 */

namespace api\report;
include('base.class.php');
class condition extends base{
    public function country(){
        $data['status'] = 200;
        $data['data'] = $this-> condition['country'];
        $data['message'] = '请求成功';
        die(json_encode($data));
    }

    public function education(){
        $data['status'] = 200;
        $data['data'] = $this-> condition['education'];
        $data['message'] = '请求成功';
        die(json_encode($data));
    }

    public function year(){
        $data['status'] = 200;
        $data['data'] = $this-> condition['year'];
        $data['message'] = '请求成功';
        die(json_encode($data));
    }

    public function channel_big(){
        $data['status'] = 200;
        $data['message'] = '请求成功';
        $data['data'] = $this-> db ->getRows('select channel_category from channel_info group by channel_category');
        die(json_encode($data));
    }
    public function channel_small(){
        $data['status'] = 200;
        $data['message'] = '请求成功';
        $data['data'] = $this-> db ->getRows('select group_name from channel_info group by group_name');
        die(json_encode($data));
    }
    public function channel_src(){
        $data['status'] = 200;
        $data['message'] = '请求成功';
        $data['data'] = $this-> db ->getRows('select channel_name,channel_id from channel_info group by channel_name');
        die(json_encode($data));
    }


}