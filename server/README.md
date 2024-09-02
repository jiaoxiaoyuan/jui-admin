## 简介

> 项目采用前后端分离，三个项目：后端服务、管理后台UI、PC前台UI。后端服务给管理后台、PC前台提供接口。如果想支持更多端点可以自行扩展。

- PC端采用nuxt 3.11、nuxtUI、tailwindcss。
- 管理后台采用Vue、Element UI。
- 后端采用NestJs、typeorm、Redis & Jwt。
- 权限认证使用Jwt。
- 支持加载动态权限菜单，多方式轻松权限控制。
- swagger文档支持
- 前后端代码分离，可单独部署。