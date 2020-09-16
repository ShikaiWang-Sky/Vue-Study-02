import Vue from "vue";
import VueRouter from "vue-router";

import Content from "../components/Content";
import main from "../components/main";
import Wang from "../components/Wang";

//安装路由
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter({
  routes: [
    {
      //路由的路径 相当于SpringMVC中的@RequestMapping
      path: '/content',
      name: 'content',
      //跳转的组件
      component: Content
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/wang',
      name: 'wang',
      component: Wang
    }
  ]
});
