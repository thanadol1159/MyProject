import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'
import QueryView from '../views/QueryView.vue'
import NewProductView from '../views/NewProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/products'
    },
    {
      path: '/products/:category?',
      name: 'product',
      component: ProductView
    },
    {
      path: '/query/:qryId',
      name: 'query',
      component: QueryView
    },
    {
      path: '/products/add',
      name: 'addproduct',
      component: NewProductView
    },
  ]
})

export default router
