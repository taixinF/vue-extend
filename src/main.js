import Vue from "vue";
import App from "./App.vue";
import { MessageBox } from "./components/MyUI";
Vue.config.productionTip = false;

Vue.use(MessageBox);
//我在这里使用Vue。use（）使用messageBox的时候就回去messagebox组件中的export defalt中的 install方法

new Vue({
  render: (h) => h(App),
}).$mount("#app");
