import Vue from 'vue'
import App from './App.vue'
// import MintUi from "mint-ui"
// import 'mint-ui/lib/style.css'
// Vue.use(MintUi);
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// 导入mui样式
import './lib/mui/css/mui.css'
const vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(App)
    }
})