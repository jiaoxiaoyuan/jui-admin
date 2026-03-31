# 全栈项目

> 项目采用前后端分离架构，包含五个子项目：后端服务、管理后台 UI、PC 前台 UI、APP 端、原生微信小程序。

## 📦 项目结构

```
├── server/          # 后端服务 (NestJS)
├── admin/           # 管理后台 (Vue3 + Element Plus)
├── client/          # PC 前台 (Nuxt 3 + NuxtUI + TailwindCSS)
├── time-expo/       # APP 端 (React Native / Expo)
└── miniProgram/     # 微信小程序 (原生开发)
```

## 🛠️ 技术栈

### 后端 (server/)
- **框架**: NestJS
- **ORM**: TypeORM
- **缓存**: Redis
- **认证**: JWT
- **API 文档**: Swagger

### 管理后台 (admin/)
- **框架**: Vue 3
- **UI 库**: Element Plus

### PC 前台 (client/)
- **框架**: Nuxt 3.11
- **UI 库**: NuxtUI
- **样式**: TailwindCSS

### APP 端 (time-expo/)
- **框架**: React Native (Expo)
- **版本**: Expo ~51.0.28

### 微信小程序 (miniProgram/)
- **开发方式**: 原生开发

## ✨ 特性

- 🔐 权限认证使用 JWT
- 📋 支持加载动态权限菜单，多方式轻松权限控制
- 📖 Swagger API 文档支持
- 🚀 前后端代码分离，可单独部署

## 🚀 快速开始

### 后端服务

```bash
cd server
yarn install
yarn run dev
```

### 管理后台

```bash
cd admin
# 安装依赖并启动
```

### PC 前台

```bash
cd client
# 安装依赖并启动
```

### APP 端

```bash
cd time-expo
pnpm install  # 或 yarn install
pnpm start    # 或 yarn start
```

### 微信小程序

```bash
cd miniProgram
# 使用微信开发者工具打开项目
```

## 📄 许可证

MIT
