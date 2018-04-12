import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Brain from '@/components/Brain'
import Contraster from '@/components/Contraster/Contraster'
import Synaptics from '@/components/Synaptics'
import mnist from '@/components/Mnist/mnist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/brain',
      name: 'Brain',
      component: Brain
    },
    {
      path: '/Brain/contraster',
      name: 'contraster',
      component: Contraster
    },
    {
      path: '/Synaptics',
      name: 'synaptics',
      component: Synaptics
    },
    {
      path: '/Synaptics/MNIST',
      name: 'mnist',
      component: mnist
    }


  ]
})
