import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// css-layout
const Flexible = () => import('@/view/css-layout/flexible')
const ScssAndRem = () => import('@/view/css-layout/scss+rem')
const VwAndVh = () => import('@/view/css-layout/vw+vh')

// animation
const RotateAnimation = () => import('@/view/animation/rotate-animation')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/css-layout/flexible',
      name: 'flexible-layout',
      component: Flexible
    },
    {
      path: '/css-layout/scss+rem',
      name: 'scss+rem-layout',
      component: ScssAndRem
    },
    {
      path: '/css-layout/vw+vh',
      name: 'vw+vh-layout',
      component: VwAndVh
    },
    {
      path: '/animation/rotate-animation',
      name: 'rotate-animation',
      component: RotateAnimation
    }
  ]
})
