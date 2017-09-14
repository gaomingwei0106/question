import Vue from 'vue';
import wenke from '../wenke/index.vue';
import result from '../result/index.vue';
import VueRouter from 'vue-router';
import home from '../home/home.vue';
Vue.use(VueRouter);

let routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    name:'home',
    path:'/home',
    component:home
  },
  {
    name:'q1',
    path:'/wenke/:num',
    component:wenke
  },
  {
    name:'result',
    path:'/result',
    component:result
  }
]

let router = new VueRouter({
  routes
})

export default router;
