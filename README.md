# egg-stream-more



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

Revoke
```bash
$ [root@localhost] ssh-keygen -t rsa # 生成密钥
$ [root@localhost] ssh-copy-id [-i indetify_file ][user@host_ip] # 复制密钥到远端主机
$ [root@localhost] scp ~/.ssh/id_rsa.pub root@remote:~/.ssh/authorized_keys # 复制公钥到authorized_keys
$ [root@remote] chmod 700 ~/.ssh & chmod 600 ~/.ssh/authorized_keys # 权限
$ [root@localhost] ssh-add -K ~/.ssh/id_rsa # Mac用户可能需要这一步
$ [root@remote] netstat -lnt # 查看可用端口

```

Build
```bash
$ [root@localhost] npm run deploy
$ [root@remote] bash .sh/build.sh
```

### Config

| Environment | Production | Stage | Locality | Node | Web |
|-------------|------------|-------|----------|------|-----|
| NODE_ENV | production |  | development |||
| EGG_SERVER_ENV | prod | stage | local |||
| EASY_ENV_IS_DEV | false | false | true |||
| EASY_ENV_IS_NODE | | | | true | false |


cluster

| Type        | count      | stability | egg file |
|-------------|------------|-----------|----|
| Master      | 1          |  best     ||
| Worker      | cpu count  |  good     | app.js |
| Agent       | 1          |  bad      | agent.js |


ICP

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
