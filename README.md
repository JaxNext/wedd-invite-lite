# wedd-invite-lite

这是一套适用于移动端的婚礼请柬 H5 模板，也是我结婚时自用的请柬。

UI 界面风格参考了[这封请柬](https://marttinfisher.com/themes/bodas/)，在此向原作者致谢！

如果你对完整的开发过程感兴趣，可以读读我在掘金社区发布的文章[《全程直击：婚礼请柬 DIY 实录》](https://juejin.cn/post/6844903967147687949)。


## 功能简介
作为一套请柬模板，你可以替换其中的文案和图片素材，包括新人的姓名、照片，以及婚礼时间与地点等信息。

此外，此请柬还支持嘉宾称呼定制化、婚期倒计时、一键唤起地图导航、生成短 URL 等实用性功能

## 如何使用
### 本地运行
在根目录下运行如下命令：
```shell
$ cd server
$ npm i
$ node index.js
```

然后在浏览器中访问 `http://127.0.0.1/inv/index.html` 即可预览内容。

### 线上部署

你需要准备一台服务器、一个备案域名、https 证书、一些部署工具，具体细节可以参考[博客文章](https://juejin.cn/post/6844903967147687949#heading-3)中对应的部分。

准备完毕之后，将 server 目录及其下所有内容（除了 node_modules、.gitignore 等）上传到服务器中、启动服务即可。

### 调试与部署短链生成器

在 `render` 目录下，是基于 Vue 的短链生成器代码。

如果你想调试生成器，可以在 `render` 目录下运行如下命令：
```shell
$ npm i
$ npm run serve
```

如果你更改了生成器代码，则需要运行 `npm run build`，再把 `/render/dist` 目录下的所有内容覆盖到 `server/html/render` 中。

## 联系我

如果你对代码有建议、疑问、勘误，欢迎通过下列渠道联系我。

- 掘金社区：[Badd](https://juejin.cn/user/1134351730353207)
- 微信二维码：

<a href="./wxqr.png"><img style="width: 320px;" src="./wxqr.png" /></a>
