#!/bin/bash

source ./.sh/prop.sh

# 解压node_modules并打包静态代码
tar -xzvf node_modules.tgz
npm run clean
npm run build:prod

# 上传到CDN目录
rm -rf ${staticpath}public
cp -R public/ ${staticpath}

# 开启新进程
npm stop
npm run start:prod
