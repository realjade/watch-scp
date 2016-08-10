/*
 * @Author: jade
 * @Date:   2016-08-09 22:59:16
 * @Last Modified by:   jade
 * @Last Modified time: 2016-08-10 15:08:09
 */

'use strict';
var watch = require('watch');
var client = require('scp2');
const config = require('./config.js');
require('set-iterm2-badge')(`WATCH:${config.srcPath}`);
/**
 * [description]
 * @param  {[type]} monitor) {                   monitor.on("created", function(f, stat) {                console.log(`created:${stat}`)    })    monitor.on("changed", function(f, curr, prev) {                console.log(f);        const destPath [description]
 * @return {[type]}          [description]
 * 该功能主要是监控已经存在的文件，然后上传到自己的服务器上
 */
watch.createMonitor(config.srcPath, {
    // interval: 0.05,
    ignoreDotFiles: true,
    ignoreDirectoryPattern: config.ignoreDirectoryPattern
}, function(monitor) {
    // monitor.files['/home/mikeal/.zshrc'] // Stat object for my zshrc.
    monitor.on("created", function(f, stat) {
        // Handle new files
        console.log(`created:${stat}`)
    })
    monitor.on("changed", function(f, curr, prev) {
        // Handle file changes
        const destPath = f.replace(config.srcPath, '');
        config.path = config.destPath + destPath;
        client.scp(f, config, function(err) {
            if(err){
                console.error(`上传失败：${f}`);
                console.error(err);
            }else{
                console.info(`成功上传：${f}->${config.path}`);
            }
            
        })
    })
    monitor.on("removed", function(f, stat) {
            // Handle removed files
            console.log(`removed:${stat}`)
        })
        // monitor.stop(); // Stop watching
})
