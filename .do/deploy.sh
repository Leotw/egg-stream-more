#!/bin/bash

source ./.do/prop.sh
REMOTE_ADDRESS=${username}@${ip}

# 登录远端
ssh ${REMOTE_ADDRESS} rm -rf ${remotepath}/${appname}

# 依据exclude.list配置筛选需要上传的文件
rsync -av --exclude-from=.sh/exclude.list ${localpath} ${REMOTE_ADDRESS}:${remotepath}/
