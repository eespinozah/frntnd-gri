import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/es';
import VueRouter from 'vue-router';
import { VueHammer } from 'vue2-hammer';
import env from '@/environment';

// Component
import Init from './Init';

import {
  Connection,
  EscManager,
  Lang,
  registerComponents,
  Resize,
  Rest,
  translate,
  filterMoment,
  filterNumeral,
  VueConfirm,
  VueSnack,
  VueTooltip
} from 'mrisk-framework-vue';

import 'mrisk-framework-vue/dist/mrisk-framework-vue.css';

const initPlugins = Vue => {
  Vue.use(VueHammer);
  Vue.use(VueRouter);
  Vue.use(VueSnack);
  Vue.use(VueConfirm);
  Vue.use(VueTooltip);
};

const install = async (Vue) => {

  initPlugins(Vue);

  registerComponents(Vue);

  // Register provider
  Vue.component(Resize.name, Resize);

  Vue.filter('t',       translate);
  Vue.filter('moment',  filterMoment);
  Vue.filter('numeral', filterNumeral);

  // Alias Esc Manager
  Vue.prototype.$escManager = new EscManager();

  const conn = Vue.prototype.$connMrisk = new Connection(env);
  const lang = Vue.prototype.$lang      = new Lang(env.lang, env.basePath);

  // Alias getRest function
  Vue.prototype.$getRest = function(collection, idField = this.$root.idField) { return new Rest(env, conn, collection, idField); };

  // Setting lang in moment library
  lang.getLang().subscribe(lang => {

    moment.locale(lang);
    numeral.locale(lang.split('-')[0]);

  });

  Vue.component(Init.name, async function(resolve) {
    await lang.waitingLang(navigator.language);
    resolve(Init);
  });
}

export default {
  install
}
