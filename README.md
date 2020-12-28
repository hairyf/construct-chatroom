# RT-IM 聊天室

使用最新技术（vue3全家桶）制作的聊天室移动端 H5 页面。

项目前端技术栈：TypeScript/ Vite/ vue3/ ScSS/ vue-router@next/ composition-api/ socket.io/ vant/ secure-ls

项目后端技术栈：TypeScript/ Koa2/ koa-log4/ koa-router/ koa-jwt/ socket.io/ mongoose

## 前端目录设计(src)

~~~test
├── api
│   ├── error.strategy.ts
│   ├── http.config.ts
│   └── index.ts
├── App.vue
├── assets
│   ├── logo.png
│   └── reset.css
├── components
│   └── scroll-view.vue
├── hooks
│   └── useUploader.ts
├── main.ts
├── plugins
│   └── better-scroll.ts
├── routes
│   └── index.ts
├── socket.io
│   └── index.ts
├── store
│   ├── index.ts
│   └── store.ts
├── style
│   ├── class.scss
│   ├── index.scss
│   ├── mixin.scss
│   └── variables.scss
├── types
│   ├── declares
│   └── request.d.ts
├── utils
│   └── index.ts
└── view
    ├── contacts.vue
    ├── contactsInc.vue
    ├── login.vue
    ├── message.vue
    ├── personal.vue
    └── robot.vue
~~~

## 后端目录设计(server)

~~~test
├── app.ts
├── config
│   └── index.ts
├── db
│   ├── connect.ts
│   ├── index.ts
│   └── model.ts
├── exception
│   ├── index.ts
│   └── logger.ts
├── graphql
│   ├── index.ts
│   ├── schema.gql
│   └── student.ts
├── logs
│   ├── access-2020-12-29.log
│   ├── application-2020-12-07.log
│   ├── ....
├── public
│   ├── 3XeZoGleE1.jpeg
│   ├── .....
├── routes
│   ├── chat.ts
│   ├── common.ts
│   ├── group.ts
│   ├── index.ts
│   └── user.ts
├── socket.io
│   └── index.ts
├── types
│   └── customs.ts
└── utils
    └── index.ts
~~~

