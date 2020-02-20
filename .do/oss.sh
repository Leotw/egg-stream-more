#!/bin/bash
source ./.do/prop.sh
rm -rf ${staticpath}public
docker cp ${container}:${workdir}/public/ ${staticpath} # 上传至oss服务
