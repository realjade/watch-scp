# watch-scp
监控文件改变，然后scp到服务器

#如何启动

根据自己的服务器来进行配置
cp config_template.js config.js

安装依赖包
npm install

启动
npm run start

#说明
只是监控文件改变才会上传

文件新建和删除不进行监控，需要自己手动操作

但是文件新建完，然后做修改会自动上传到自定目录上