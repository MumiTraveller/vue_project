import Vue from 'vue'
import App from './App.vue'
// import MintUi from "mint-ui"
// import 'mint-ui/lib/style.css'
// Vue.use(MintUi);
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// 导入mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
const vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(App)
    }
})