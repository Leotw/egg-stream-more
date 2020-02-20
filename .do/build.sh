#!/bin/bash

source ./.do/prop.sh

docker-compose stop ${service}
docker-compose rm --force ${service}
docker-compose build
docker-compose up -d
bash ./.do/oss.sh
