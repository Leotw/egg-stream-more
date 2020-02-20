#!/usr/bin/env bash
username=root
ip=39.100.135.194
localpath=$(pwd)
remotepath=/app/
appname=egg-stream-more
staticpath=/usr/share/nginx/html/static/

### docker path
container=egg-stream-more-builder
service=node-app
workdir=/app/${appname}
# staticpath=cdn/
