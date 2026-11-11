# 极客园移动端（react-jike-mobile）

基于 React 的移动端 Web 应用，对标 CSDN、博客园等竞品，致力于成为贴近年轻 IT 从业者的科技资讯类应用。功能包括：首页文章列表、文章详情、收藏等。

## 在线演示

- 演示地址：<https://mark-1994.github.io/react-jike-mobile/>

## 接口文档

- 接口文档地址：<https://s.apifox.cn/fa9274ac-362e-4905-806b-6135df6aa90e/api-23673257>
- 接口基地址：`https://geek.itheima.net/v1_0`（已在 `src/utils/http.ts` 中配置）

> 说明：需要携带 token 的接口，请先调用登录接口获取 token，并添加到请求头 `Authorization` 中。

## 技术栈

| 技术 | 说明 |
| --- | --- |
| React 19 | 前端核心框架 |
| TypeScript | 类型安全的 JS 超集 |
| Vite | 开发构建工具 |
| antd-mobile 5 | 移动端 UI 组件库 |
| react-router-dom 7 | 路由管理 |
| Axios | HTTP 请求库 |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建产物
npm run preview
```

## 项目结构

```text
react-jike-mobile
├── public/              # 静态资源
├── src/
│   ├── apis/            # 接口请求（list、detail、stared）
│   ├── pages/           # 页面组件（Home、Detail）
│   ├── router/          # 路由配置
│   ├── utils/           # 工具函数（axios 封装）
│   ├── App.tsx          # 根组件
│   └── main.tsx         # 入口文件
├── index.html
├── vite.config.ts
└── package.json
```
