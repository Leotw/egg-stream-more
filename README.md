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


[egg]: https://eggjs.org

### note
- `config.reactssr` 默认layout路径为`[app-root]/app/view/layout.js`

- `window.__INITIAL_STATE__` 获取server端变量，可在前端进行访问

- `/usr/share/nginx/html/static`为静态资源总路径

- `/etc/nginx/nginx.conf`为配置文件路径

- `/usr/local/bin/docker-compose`docker-compose路径

- `/app/log`生产日志路径
