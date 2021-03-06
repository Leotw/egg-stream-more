# egg-stream-more



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Config

| Environment | Production | Stage | Locality | Node | Web |
|-------------|------------|-------|----------|------|-----|
| NODE_ENV | production |  | development |||
| EGG_SERVER_ENV | prod | stage | local |||
| EASY_ENV_IS_DEV | false | false | true |||
| EASY_ENV_IS_NODE | | | | true | false |

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

**Core command**

| command | EGG_SERVER_ENV | NODE_ENV |
|-------------|------------|-------|
| `npm run dev` | local | development |
| `npm run build` | local | production |
| `npm run build:stage` | stage | production |
| `npm run build:prod` | prod | production |
| `npm run start` | prod | production |
| `npm run start:stage` | stage | production |
| `npm run start:prod` | prod | production |

step 1. build static resource(NODE_ENV=production)

```bash
npm run build # local build
npm run build:prod # production build
npm run build:stage # stage build
```

step 2. start services

```bash
npm run start:prod # or npm start
npm run start:stage # start stage environment
```

**Docker deploy**

> Install `Docker` and `docker-compose` firstly.

基本配置存放在 `Dockerfile`和`docker-compose.yml`中。部署基于自建镜像`node-base`，首次部署需要先进行镜像`node-base`的build。

部署流程
```
root@localhost:上传项目至远端
root@remote:根据docker-image构建项目以及容器
root@remote:启动容器
root@remote:上传容器内的静态资源至oss服务
```

1.config your deploy option
```bash
$ [root@localhost] open .do/prop.sh
```
```bash
username=root
ip=39.100.135.194
localpath=$(pwd)
remotepath=/app/
appname=egg-stream-more
staticpath=/usr/share/nginx/html/static/

# docker path
container=egg-stream-more-builder # 容器
service=node-app # 服务
workdir=/app/${appname} # Dockerfile WORKDIR
```

2.authentication login

```bash
$ [root@localhost] ssh-keygen -t rsa # 生成密钥
$ [root@localhost] ssh-copy-id [-i indetify_file ][user@host_ip] # 复制密钥到远端主机
$ [root@localhost] scp ~/.ssh/id_rsa.pub root@remote:~/.ssh/authorized_keys # 复制公钥到authorized_keys
$ [root@remote] chmod 700 ~/.ssh & chmod 600 ~/.ssh/authorized_keys # 权限
$ [root@localhost] ssh-add -K ~/.ssh/id_rsa # Mac用户可能需要这一步
$ [root@remote] netstat -lnt # 查看可用端口
```

3.build images

```bash
$ [root@remote] cd app/egg-stream-more
$ [root@remote] docker build -t node-base:1.0.1 .
```

4.build

```bash
$ [root@localhost] npm run deploy:do # trigger .do
$ [root@remote] bash .do/build.sh
```

手动处理

进入`docker-compose.yml`所在目录

```bash
docker-compose ps # 查看当前服务状态
docker-compose stop # 停止当前服务
docker-compose rm # 删除当前服务
docker-compose start # 服务没有移除的情况下启动服务
docker-compose build # 依据Dockerfile构建服务，会重新编译项目
docker-compose up -d # build之后启动服务
```

docker处理

```bash
dokcer ps # list running containers. 
docker rm id # remove container by containerID.
docker build -t ${image-name}:${tag} . # build image
docker run -d --name ${container-name} -p ${host-port}:${container-port} ${image}:${tag} # create container
```


**Custom deploy**

1.config your deploy option

```bash
$ [root@localhost] open .sh/prop.sh
```
```bash
username=root # your remote user
ip=0.0.0.0 # your service ip
localpath=$(pwd)
remotepath=/app/ # remote app location
appname=my-app # remote app name
staticpath=/staic/ # remote static remote, can be cdn path
```

2.authentication login

like `Docker deploy`

3.build

```bash
$ [root@localhost] npm run deploy # trigger .sh
$ [root@remote] bash .sh/build.sh
```

### Preview

```
my-app
├── app # Node
│   ├── controller
│   ├── middleware
│   ├── router.js
│   ├── service
│   └── view # Development webpack chunk
│       ├── 0.js
│       ├── 0.js.map
│       ├── app.js
│       ├── app.js.map
│       └── img
│           └── logo.5d5d9eef.svg
├── app.js # Node start root 
├── appveyor.yml
├── babel.config.js
├── client # Web
│   ├── app.js
│   ├── asset # Common js and css
│   │   ├── js
│   │   └── style
│   ├── component
│   │   └── Layout.jsx # Node render output component(required)
│   ├── config
│   │   ├── webpack.dev.js
│   │   └── webpack.prod.js
│   ├── container
│   │   └── Root.jsx # Isomorphic core
│   ├── store # Redux
│   │   ├── index.js
│   │   └── reducer.js
│   └── view
│       └── layout.tpl # Client render html template
├── config # Egg config
│   ├── config.default.js
│   ├── config.prod.js
│   ├── config.stage.js
│   ├── manifest.json
│   └── plugin.js
├── coverage # Test coverage report
├── jsconfig.json
├── package.json
├── public # Client webpack build chunck
│   ├── css
│   │   └── common.468783d0.css
│   └── js
│       ├── chunk
│       ├── runtime.6128777b.js
│       └── runtime.6128777b.js.map
├── test # Test
├── typings # d.ts export
└── webpack.config.js
```

### Communication

**Cluster**

| Type        | count      | stability | egg file |
|-------------|------------|-----------|----|
| Master      | 1          |  best     ||
| Worker      | cpu count  |  good     | app.js |
| Agent       | 1          |  bad      | agent.js |


**ICP**

example code

```js
const cluster = require('cluster');
if(cluster.isMaster) {
  const worker = cluster.fork();
  worker.send('Hello, world.');
  worker.on('message', (msg) => {
    console.log(`msg: ${msg} from worker#${worker.id}`); // msg: Hello, world. from worker#1 
  });
} else {
  process.on('message', (msg) => {
    process.send(msg);
  });
}
```

api

```js
app.messenger.broadcast(event, data); // 发送给所有的app/agent进程
app.messenger.setToApp(event, data); // 发送给所有的app进程
app.messenger.sendToAgent(event, data); // 发送给所有的agent进程
agent.messenger.sendRandom(action, data); // 随机发送给一个app进程，由于master指定
app.messenger.sendTo(pid, event, data); // 向指定的pid发送数据
```

cpu
```js
require('os').cpus(); // CPU info
```


[egg]: https://eggjs.org

### Note
- `config.reactssr` 默认layout路径为`[app-root]/app/view/layout.js`

- `window.__INITIAL_STATE__` 获取server端变量，可在前端进行访问

- `/usr/share/nginx/html/static`为静态资源总路径

- `/etc/nginx/nginx.conf`为配置文件路径

- `/usr/local/bin/docker-compose`docker-compose路径

- `/app/log`生产日志路径
