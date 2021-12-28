**目录**

- [简介](#简介)
- [主要功能](#主要功能)
  - [登录/授权](#登录授权)
  - [将本地markdown文件发布到博客园](#将本地markdown文件发布到博客园)
  - [博客园博文列表](#博客园博文列表)
  - [将本地文件关联到博客园博文](#将本地文件关联到博客园博文)
  - [图片上传](#图片上传)
  - [博文分类管理](#博文分类管理)
- [vscode版本要求](#vscode版本要求)
- [插件设置](#插件设置)

## 简介

博客园vscode插件, 主要功能是将本地markdown文件对应到博文园中博文, 从而让vscode用户可以一键发布markdown博文到博客园.

## 主要功能

### 登录/授权

要使用本插件发布/修改博文, 需要先进行登录或授权操作.

![](https://img2020.cnblogs.com/blog/1596066/202112/1596066-20211228125556260-986735114.png)

### 将本地markdown文件发布到博客园

![](https://img2020.cnblogs.com/blog/1596066/202112/1596066-20211228130156308-187058889.png)

![](https://img2020.cnblogs.com/blog/1596066/202112/1596066-20211228130228248-172977703.png)

若本地文件已经关联到一篇博客园博文, 那么会直接更新这篇博文.

### 博客园博文列表

当点击列表中的博文时, 会自动将博文内容下载到工作空间一个本地文件中(此时这个本地文件就关联到了这篇博文), 完成编辑后可以再将本地的内容保存到博客园博文

![img](https://img2020.cnblogs.com/blog/3/202112/3-20211227184342642-1938639868.png)

### 将本地文件关联到博客园博文

一个本地文件可以关联到一篇博客园博文, 本地文件必须在`vscode-cnb.workspace`配置的工作目录中

![](https://img2020.cnblogs.com/blog/1596066/202112/1596066-20211228130049842-409512486.png)

### 图片上传

当vscode处于配置好的`vscode-cnb`工作空间时, 可以通过快捷键, 上下文菜单, 编辑器工具栏等方式上传本地或剪贴板中的图片到博客园

![demo-upload-clipboard-image](https://img2020.cnblogs.com/blog/3/202112/3-20211223133219376-311354679.gif)

### 博文分类管理

支持新建, 删除(可批量操作), 修改博客园博文分类

![](https://img2020.cnblogs.com/blog/1596066/202112/1596066-20211228130552877-1788018336.png)

## vscode版本要求

\>=1.62.0

## 插件设置

* `vscode-cnb.workspace`: `vscode-cnb`需要用到的一个工作空间, `vscode-cnb`只有检测到vscode处于此目录下才会生效, 默认会使用`~/Documents/Cnblogs`最为工作空间

![img](https://img2020.cnblogs.com/blog/3/202112/3-20211227183958436-462553661.png)
