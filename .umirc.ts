import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: ' Compoents 示例',
      path: '/components',
      component: './Compoents',
    },
  ],
  npmClient: 'npm',
  proxy: {
    '*': {
      target:
        'https://jav.guru/searcho/?od=c6d64786e23783b676a686a67657d68713d2465626d656&bg=https%3A%2F%2Fjav.guru%2Fwp-content%2Fuploads%2F2023%2F03%2Fjuq219pl.jpg',
      changeOrigin: true,
      pathRewrite: { 'https://jav.guru/searcho/?or': '' },
    },
  },
});
