#!/bin/bash

source ./.sh/prop.sh
REMOTE_ADDRESS=${username}@${ip}

# rsync -av --exclude=config/plugin.js ${localpath} ${REMOTE_ADDRESS}:${remotepath}/test
ssh ${REMOTE_ADDRESS} rm -rf ${remotepath}/${appname}
rsync -av --exclude-from=.sh/exclude.list ${localpath} ${REMOTE_ADDRESS}:${remotepath}/
tar -zcvf ./node_modules.tgz ./node_modules
scp ./node_modules.tgz ${REMOTE_ADDRESS}:${remotepath}${appname}
rm -rf ./node_modules.tgz
