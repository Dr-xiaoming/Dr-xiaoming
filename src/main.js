import Vue from 'vue'
import App from './App.vue'
import { Table,TableColumn,Form,FormItem,Input,Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);

new Vue({
  render: h => h(App),
}).$mount('#app')
