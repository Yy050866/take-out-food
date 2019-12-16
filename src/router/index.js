/*路由入口*/

import Vue from 'vue';
import vueRoutre from 'vue-router';
import Msite from '../pages/Msite/Msite';
import Order from '../pages/Order/Order';
import Profile from '../pages/Profile/Profile';
import Search from '../pages/Search/Search';
import Login from '../pages/Login/Login';

Vue.use(vueRoutre)

export default new vueRoutre({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        ShowFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        ShowFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        ShowFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        ShowFooter:true
      }
    },
    {
      path:'/',
      component:Msite,
      meta:{
        ShowFooter:true
      }

    },
    {
      path:'/login',
      component:Login
    }
  ]
})
