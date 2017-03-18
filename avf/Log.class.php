<?php
/**
 * Api View framework (AV视图框架).
 * Author: monkey<my455628442@gmail.com>
 * Date: 2015/7/20 0020
 * Time: 15:32
 * File Using: 日志处理类
 */

namespace avf;
class Log{
    // 日志级别 从上到下，由低到高
    const FATAL = 'FATAL';  // 致命错误
    const ALERT = 'ALERT';  // 错误警告
    const INFO = 'INFO';  // 信息输出


    // 日志文件配置
    protected $config  =   array(
        'log_file_size'     =>  2097152,
        'log_path'          =>  '',
    );

    /**
     * 日志直接写入
     * @static
     * @access public
     * @param string $message 日志信息
     * @param string $level  日志级别
     * @param string $destination  写入目标
     * @return void
     */
    public function write($message, $level = self:: INFO,$destination='') {
        $log = "{$level}: {$message}";
        $now = date($this->config['log_time_format']);
        if(empty($destination))
            $destination = $this->config['log_path'].date('y_m_d').'.log';
        // 自动创建日志目录
        $log_dir = dirname($destination);
        if (!is_dir($log_dir)) {
            mkdir($log_dir, 0755, true);
        }
        //检测日志文件大小，超过配置大小则备份日志文件重新生成
        if(is_file($destination) && floor($this->config['log_file_size']) <= filesize($destination) )
            rename($destination,dirname($destination).'/'.time().'-'.basename($destination));
        error_log("[{$now}] ".$_SERVER['REMOTE_ADDR'].' '.$_SERVER['REQUEST_URI']."\r\n{$log}\r\n", 3,$destination);
    }
}