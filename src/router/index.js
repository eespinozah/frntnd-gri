import Vue from 'vue';
import env from '@/environment';

import {
  Empty,
  PageNotFound,
  Ping,
  Redirect,
  RequireTenant
 } from 'mrisk-framework-vue';

// Pages
import Site from '@/pages/Site';
import MyDisclosures from '@/pages/MyDisclosures';
import Setting from '@/pages/setting/Setting';
import Organization from '@/pages/organization/Organization';

// Standard 102
import _102 from '@/pages/102';
import _102001001 from '@/pages/102/102001001';
import _102002001 from '@/pages/102/102002001';
import _102003001 from '@/pages/102/102003001';
import _102004001 from '@/pages/102/102004001';
import _102005001 from '@/pages/102/102005001';
import _102006001 from '@/pages/102/102006001';

// standard 103
import Approach from '@/pages/approach/Approach';
import ApproachFront from '@/pages/approach-front/ApproachFront';

// Standard 200
import _200 from '@/pages/200';
import _200201001 from '@/pages/200/200201001';
import _200202001 from '@/pages/200/200202001';
import _200203001 from '@/pages/200/200203001';
import _200204001 from '@/pages/200/200204001';
import _200205001 from '@/pages/200/200205001';
import _200206001 from '@/pages/200/200206001';
import _200207001 from '@/pages/200/200207001';

// Standard 300
import _300 from '@/pages/300';
import _300301001 from '@/pages/300/300301001';
import _300302001 from '@/pages/300/300302001';
import _300303001 from '@/pages/300/300303001';
import _300304001 from '@/pages/300/300304001';
import _300305001 from '@/pages/300/300305001';
import _300306001 from '@/pages/300/300306001';
import _300307001 from '@/pages/300/300307001';
import _300308001 from '@/pages/300/300308001';

// Standard 400
import _400 from '@/pages/400';
import _400401001 from '@/pages/400/400401001';
import _400402001 from '@/pages/400/400402001';
import _400403001 from '@/pages/400/400403001';
import _400404001 from '@/pages/400/400404001';
import _400405001 from '@/pages/400/400405001';
import _400406001 from '@/pages/400/400406001';
import _400407001 from '@/pages/400/400407001';
import _400408001 from '@/pages/400/400408001';
import _400409001 from '@/pages/400/400409001';
import _400410001 from '@/pages/400/400410001';
import _400411001 from '@/pages/400/400411001';
import _400412001 from '@/pages/400/400412001';
import _400413001 from '@/pages/400/400413001';
import _400414001 from '@/pages/400/400414001';
import _400415001 from '@/pages/400/400415001';
import _400416001 from '@/pages/400/400416001';
import _400417001 from '@/pages/400/400417001';
import _400418001 from '@/pages/400/400418001';
import _400419001 from '@/pages/400/400419001';
import VueRouter from 'vue-router';

// Routes
const routes = [
  {
    path: '',
    redirect: 'site'
  },
  {
    path: 'site',
    component: Site,
    children: [
      {
        path: '',
        redirect: 'my-disclosures'
      },
      {
        path: 'setting',
        component: Setting
      },
      {
        path: 'organization/:orga_id',
        component: Organization
      },
      {
        path: 'my-disclosures',
        component: MyDisclosures
      },
      {
        path: 'approach',
        component: Approach
      },
      {
        path: 'approach-front',
        component: ApproachFront,
      },
      {
        path: 'general',
        component: _102
      },
      {
        path: '102001001',
        component: _102001001
      },
      {
        path: '102002001',
        component: _102002001
      },
      {
        path: '102003001',
        component: _102003001
      },
      {
        path: '102004001',
        component: _102004001
      },
      {
        path: '102005001',
        component: _102005001
      },
      {
        path: '102006001',
        component: _102006001
      },
      {
        path: 'economics',
        component: _200,
      },
      {
        path: '200201001',
        component: _200201001
      },
      {
        path: '200202001',
        component: _200202001
      },
      {
        path: '200203001',
        component: _200203001
      },
      {
        path: '200204001',
        component: _200204001
      },
      {
        path: '200205001',
        component: _200205001
      },
      {
        path: '200206001',
        component: _200206001
      },
      {
        path: '200207001',
        component: _200207001
      },
      {
        path: 'enviromental',
        component: _300
      },
      {
        path: '300301001',
        component: _300301001
      },
      {
        path: '300302001',
        component: _300302001
      },
      {
        path: '300303001',
        component: _300303001
      },
      {
        path: '300304001',
        component: _300304001
      },
      {
        path: '300305001',
        component: _300305001
      },
      {
        path: '300306001',
        component: _300306001
      },
      {
        path: '300307001',
        component: _300307001
      },
      {
        path: '300308001',
        component: _300308001
      },
      {
        path: 'social',
        component: _400
      },
      {
        path: '400401001',
        component: _400401001
      },
      {
        path: '400402001',
        component: _400402001
      },
      {
        path: '400403001',
        component: _400403001
      },
      {
        path: '400404001',
        component: _400404001
      },
      {
        path: '400405001',
        component: _400405001
      },
      {
        path: '400406001',
        component: _400406001
      },
      {
        path: '400407001',
        component: _400407001
      },
      {
        path: '400408001',
        component: _400408001
      },
      {
        path: '400409001',
        component: _400409001
      },
      {
        path: '400410001',
        component: _400410001
      },
      {
        path: '400411001',
        component: _400411001
      },
      {
        path: '400412001',
        component: _400412001
      },
      {
        path: '400413001',
        component: _400413001
      },
      {
        path: '400414001',
        component: _400414001
      },
      {
        path: '400415001',
        component: _400415001
      },
      {
        path: '400416001',
        component: _400416001
      },
      {
        path: '400417001',
        component: _400417001
      },
      {
        path: '400418001',
        component: _400418001
      },
      {
        path: '400419001',
        component: _400419001
      }
    ]
  }
];

const router = new VueRouter(
  {
    mode: 'history',
    routes: [
      {
        path: '/',
        component: RequireTenant
      },
      {
        path: '/:tenant',
        component: Empty,
        props: true,
        children: [
          {
            path: 'redirect',
            component: Redirect,
            props: route => ({ ...route.params, ...route.query})
          },
          ...routes,
          {
            component: PageNotFound,
            path: '*',
            name: 'not-found'
          }
        ]
      }
    ]
  }
);

let isValid = false;

router.beforeEach(async function(to, from, next) {

  const config = {
    url: window.location.origin,
    handler: 'rest'
  }

  const conn = Vue.prototype.$connMrisk;
  const lang = Vue.prototype.$lang;

  if (to.path === '/') {
    return next();
  }

  if (/redirect/.test(to.path)) {
    return next();
  }

  if (isValid && conn.getAccessToken()) {
    return next();
  }

  const ping = new Ping(config, conn, lang);

  conn.setTempTenant(to.params.tenant);

  isValid = await ping.validate(env.redirect, router);

  if (isValid) {
    return next();
  }

  next(false);
});

export default router;
