FROM node:alpine
WORKDIR /app/egg-stream-more
ADD ./package.json /app/egg-stream-more
#RUN yum install git && git clone https://github.com/Leotw/egg-stream-more.git -b egg-webpack-ssr#
RUN npm install --registry https://registry.npm.taobao.org
ADD ./ /app/egg-stream-more
RUN npm run clean && npm run build:prod
CMD npm run start:prod
