import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//引入mint-ui(移动端风格)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入element-ui(PC端风格)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'

Vue.use(MintUI);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes:[
      { path: '/index', component:require('./components/home.vue')},
      { path: '/list', component:require('./components/myList.vue')},
      //重定向任意未匹配路径到/index,必须写在后面
      { path: '*', redirect:'/index'}
    ]
})

const app = new Vue({
        router,
        render: h => h(App)
}).$mount('#app')
