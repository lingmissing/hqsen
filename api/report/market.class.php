<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2016/6/16 0020
 * Time: 10:16
 * File Using:市场部报表接口
 */

namespace api\report;
include('base.class.php');
class market extends base{
    public function register_dimension(){
//        $this-> db ->changeInstance('bi');
        $header['uv'] = 'uv';
        $header['register_time'] = '注册';
        $header['e_time'] = '小e';
        $header['identify_type'] = '留学tmk/语培/住宿/其他活动';
        $header['sale_time'] = '留学订单';
        $header['pay_time'] = '留学押金';
        $header['material_time'] = '材料';
        $header['offer_time'] = 'offer';
        $header['go_time'] = '入学';
        $header['charge'] = '每步花费';

        $db_rs = $this-> db ->getRows('
SELECT
	r.register_time,
	r.e_time,
	r.identify_type,
	r.sale_time,
	r.pay_time,
	r.material_time,
	r.offer_time,
r.go_time,
c.charge
FROM
	bi.dw_market_dept_register AS r

LEFT JOIN 51offer_cms.channel_cost AS c ON r.id = c. CODE
WHERE
	r.sale_time > 0
AND r.material_time > 0
AND c.charge > 0
AND r.offer_time > 0
                ');


        $limit = $this-> getLimit();
        if(isset($_POST['page_size'])){
            $limit = $this-> getLimit(intval($_POST['page_size']));
        }

        $page = count($db_rs)/20;
        $this-> data['data']['page'] = $this-> data['data']['page'] . ceil($page);
        if(isset($_GET['page'])){
            $this-> setPagination(ceil($page), intval($_GET['page']));
        } else {
            $this-> setPagination(ceil($page), 1);
        }

        $db_rs = $this-> db ->getRows('
SELECT
r.id,
	r.register_time,
	r.e_time,
	r.identify_type,
	r.sale_time,
	r.pay_time,
	r.material_time,
	r.offer_time,
r.go_time,
c.charge
FROM
	bi.dw_market_dept_register AS r

LEFT JOIN 51offer_cms.channel_cost AS c ON r.id = c. CODE
WHERE
	r.sale_time > 0
AND r.material_time > 0
AND c.charge > 0
AND r.offer_time > 0
                ' . $limit );

        $re_data = array();
        foreach($db_rs as $v){
//            $sql_data['id'] = $v['id'];
            $sql_data['uv'] = '54621';
            $sql_data['register_time'] = $v['register_time'];
            $sql_data['e_time'] = $v['e_time'];
            $sql_data['identify_type'] = $v['identify_type'];
            $sql_data['sale_time'] = $v['sale_time'];
            $sql_data['pay_time'] = $v['pay_time'];
            $sql_data['material_time'] = $v['material_time'];
            $sql_data['offer_time'] = $v['offer_time'];
            $sql_data['go_time'] = $v['go_time'];
            $sql_data['charge'] = $v['charge'];
            $re_data[] = $sql_data;
        }
        $this-> data['data']['header'] = $header;
        $this-> data['data']['body'] = $re_data;
        die(json_encode($this-> data));
    }
    public function happen_dimension(){
        $header['identify_type'] = '留学tmk/语培/住宿/其他活动';
        $header['sale_time'] = '留学订单';
        $header['pay_time'] = '留学押金';
        $header['material_time'] = '材料';
        $header['offer_time'] = 'offer';
        $header['go_time'] = '入学';

        $db_rs = $this-> db ->getRows('
SELECT
	r.identify_type,
	r.sale_time,
	r.pay_time,
	r.material_time,
	r.offer_time,
	r.go_time
FROM
	bi.dw_market_dept_register AS r
WHERE
	r.sale_time > 0
AND r.material_time > 0
AND r.offer_time > 0
AND r.pay_time > 0
                ');

        $limit = $this-> getLimit();
        if(isset($_POST['page_size'])){
            $limit = $this-> getLimit(intval($_POST['page_size']));
        }
        $page = count($db_rs)/20;
        $this-> data['data']['page'] = $this-> data['data']['page'] . ceil($page);
        if(isset($_GET['page'])){
            $this-> setPagination(ceil($page), intval($_GET['page']));
        } else {
            $this-> setPagination(ceil($page), 1);
        }

        $db_rs = $this-> db ->getRows('
SELECT
	r.identify_type,
	r.sale_time,
	r.pay_time,
	r.material_time,
	r.offer_time,
	r.go_time
FROM
	bi.dw_market_dept_register AS r
WHERE
	r.sale_time > 0
AND r.material_time > 0
AND r.offer_time > 0
AND r.pay_time > 0
                ' . $limit);
        $re_data = array();
        foreach($db_rs as $v){
            $sql_data['identify_type'] = $v['identify_type'];
            $sql_data['sale_time'] = $v['sale_time'];
            $sql_data['pay_time'] = $v['pay_time'];
            $sql_data['material_time'] = $v['material_time'];
            $sql_data['offer_time'] = $v['offer_time'];
            $sql_data['go_time'] = $v['go_time'];
            $re_data[] = $sql_data;
        }
        $this-> data['data']['header'] = $header;
        $this-> data['data']['body'] = $re_data;
        die(json_encode($this-> data));
    }

    public function getLimit($page_size = 20){
        $limit = ' limit ';
        if(isset($_GET['page'])){
            $this-> data['data']['page'] = intval($_GET['page']) . '/';
            $head = intval($_GET['page']) * $page_size;
            $limit = $limit . $head . ' , ' . $page_size;
        } else {
            $this-> data['data']['page'] = 1 . '/';
            $limit = $limit . $page_size;
        }
        return $limit;
    }

    public function setPagination($total_page = 1, $current = 1, $page_size = 20){
        $this->data['pagination']['totalPage'] = $total_page;
        $this->data['pagination']['current'] = $current;
        $this->data['pagination']['pageSize'] = $page_size;
    }
}