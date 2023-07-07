import Vue from 'vue'
import {
  Input,
  Row,
  Col,
  Form,
  FormItem,
  Button, 
  Select,
  Option, 
  Message,
} from 'element-ui';
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Option);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);
Vue.use(VueClipboard);
Vue.prototype.$message = Message;

new Vue({
  render: h => h(App),
}).$mount('#app')
