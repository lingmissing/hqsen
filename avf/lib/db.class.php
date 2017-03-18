<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2016/6/16 0020
 * Time: 10:16
 * File Using:db
 */
namespace avf\lib;
class mysql{
    private $host = '10.162.194.130'; //数据库主机
    private $user = 'u_51offer_r'; //数据库用户名
    private $pwd = 'ReadOnly9CB11ED2'; //数据库用户名密码
    private $database = '51offer_cms'; //数据库名
    private $charset = 'utf8'; //数据库编码，GBK,UTF8,gb2312
    private $link; //数据库连接标识;
    private $rows; //查询获取的多行数组
    static $_instance; //存储对象
//    private $msg;
    /**
     * 构造函数
     * 私有
     */
    private function __construct($pconnect = false) {
        $this -> getConnection($this-> host, $this-> user, $this-> pwd, $this-> database);
    }
    /**
     * 防止被克隆
     *
     */
    private function __clone(){}

    public function changeInstance($db_name){
//        mysqli_close($this->link);
        return @mysqli_select_db($this->link, $db_name);
    }

    public static function getInstance($pconnect = false){
        if(false == (self::$_instance instanceof self)){
            self::$_instance = new self($pconnect);
        }
        return self::$_instance;
    }

    private function getConnection($server, $user, $pwd, $db_name)
    {
        $msg = C('db');
        $this->link = @mysqli_connect($server, $user, $pwd);
        if($this->link == false)
        {
            E($msg['CONNECT_ERROR']);
        }

        @mysqli_select_db($this->link, $db_name);
        if($this->link == false)
        {
            E($msg['SELECT_ERROR']);
            exit;
        }
        $this->query("SET NAMES '{$this->charset}'", $this->link);
        return $this->link;
    }
    /**
     * 查询
     */
    public function query($sql, $link = '') {
        return  @mysqli_query($this->link, $sql);
    }
    /**
     * 单行记录
     */
    public function getRow($sql, $type = MYSQL_ASSOC) {
        $result = $this->query($sql);
        return @ mysqli_fetch_array ($result, $type);
    }
    /**
     * 多行记录
     */
    public function getRows($sql, $type = MYSQL_ASSOC) {
        $result = $this->query($sql);
        $rows = array();
        while ($row = @ mysqli_fetch_array ($result, $type)) {
            $rows[] = $row;
        }
        return $rows;
    }
}

?>
