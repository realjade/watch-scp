/*
 * @Author: jade
 * @Date:   2016-08-10 10:16:29
 * @Last Modified by:   jade
 * @Last Modified time: 2016-08-10 14:47:15
 */

'use strict';
module.exports = {
    host: '127.0.0.1', //服务器地址
    username: 'admin',         //服务器用户名
    password: '111111',      //服务器密码
    srcPath: '/Users/zyy/workspace/',              //本地监控路径
    destPath: '/home/admin/', //服务器端路径
    ignoreDirectoryPattern: /node_modules|test/  //过滤掉不需要监控的文件夹，正则表达式
}
