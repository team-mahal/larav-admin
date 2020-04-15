import Vue from 'vue';
import store from '~/store';
import router from '~/router';
import i18n from '~/plugins/i18n';
import App from '~/components/App';
import DataTable from 'laravel-vue-datatable';
Vue.use(DataTable);
import vuescroll from 'vuescroll';
import Multiselect from 'vue-multiselect'
import Avatar from 'vue-avatar'
import VueEditableElement from 'vue-editable-element'
// register globally
Vue.component('multiselect', Multiselect)
Vue.component('Avatar', Avatar)
Vue.use(vuescroll, {
	ops: {
    	bar: {
		    background: '#48BB78'
		}
  	},
  	name: 'vuescroll' // customize component name, default -> vueScroll
});
Vue.use(VueEditableElement)
// Import component
import 'vue-loading-overlay/dist/vue-loading.css';

import '~/plugins';
import '~/components';


import base_url from '~/plugins/baseUrl';
import showMessage from '~/plugins/alert';
window.base_url = base_url;
window.showMessage = showMessage;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	i18n,
	store,
	router,
	...App
})
