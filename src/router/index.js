import Vue from 'vue'
import Router from 'vue-router'

const IndexPage = r => require.ensure([], () => r(require('@/components/indexPage')), 'index');
const AboutUs = r => require.ensure([], () => r(require('@/components/aboutUs')), 'index');
const ContactUs = r => require.ensure([], () => r(require('@/components/contactUs')), 'index');
const News = r => require.ensure([], () => r(require('@/components/news')), 'index');
const NewsInfo  = r => require.ensure([], () => r(require('@/components/newsInfo')), 'index');

Vue.use(Router)
const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: IndexPage
     },{
      path:"/aboutUs",
      name:"aboutUs",
      component:AboutUs
    },{
      path:"/contactUs",
      name:"contactUs",
      component:ContactUs
    },{
      path:"/news",
      name:"news",
      component:News
    },{
      path:"/newsInfo",
      name:"newsInfo",
      component:NewsInfo
    }
  ]
})

export default router