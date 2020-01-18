#!/bin/bash

source ./.sh/prop.sh
REMOTE_ADDRESS=${username}@${ip}

# 登录远端
ssh ${REMOTE_ADDRESS} rm -rf ${remotepath}/${appname}

# 依据exclude.list配置筛选需要上传的文件
rsync -av --exclude-from=.sh/exclude.list ${localpath} ${REMOTE_ADDRESS}:${remotepath}/

# 压缩node_modules并上传
tar -zcvf ./node_modules.tgz ./node_modules
scp ./node_modules.tgz ${REMOTE_ADDRESS}:${remotepath}${appname}
rm -rf ./node_modules.tgz
