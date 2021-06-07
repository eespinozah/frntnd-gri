import Vue from 'vue';

// m-Risk
import VueMrisk from '@/plugins/VueMrisk';

import './registerServiceWorker';

// Pages
import router from '@/router';

// Main component
import App from './App.vue';

// Components
import { register } from '@/components';
register(Vue);

// Components 102
import { register102 } from '@/pages/102/components';
register102(Vue);
// Components 200
import { register200 } from '@/pages/200/components';
register200(Vue);
// Components 300
import { register300 } from '@/pages/300/components';
register300(Vue);
// Components 300
import { register400 } from '@/pages/400/components';
register400(Vue);

Vue.config.productionTip = false;

Vue.use(VueMrisk);

new Vue({ router, render: h => h(App) }).$mount('#app');
