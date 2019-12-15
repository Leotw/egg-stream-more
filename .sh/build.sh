#!/bin/bash

source ./.sh/prop.sh

tar -xzvf node_modules.tgz
npm run clean
npm run build:prod
rm -rf ${staticpath}public
cp -R public/ ${staticpath}
npm stop
npm run start:prod
