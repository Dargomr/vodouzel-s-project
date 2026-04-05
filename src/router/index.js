import { createRouter, createWebHistory } from 'vue-router'

const Main = () => import('@/views/Main.vue')
const Error404 = () => import('@/views/Error404.vue')
const AboutCompany = () => import('@/views/About-company.vue')
const Articles = () => import('@/views/Articles.vue')
const Contacts = () => import('@/views/Contacts.vue')
const Ct17y = () => import('@/views/Ct-17y.vue')
const HeatMeters = () => import('@/views/HeatMeters.vue')
const ItemInnerPage = () => import('@/views/Item-inner-page.vue')
const ItemInnerPage2 = () => import('@/views/Item-inner-page2.vue')
const ItemInnerPage3 = () => import('@/views/Item-inner-page3.vue')
const ItemPage = () => import('@/views/Item-page.vue')
const MainCatalog = () => import('@/views/Main-catalog.vue')
const Nodes = () => import('@/views/Nodes.vue')
const OpenCatalog = () => import('@/views/Open-catalog.vue')

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/Error404',
    name: 'Error404',
    component: Error404,
  },
  {
    path: '/About-company',
    name: 'About-company',
    component: AboutCompany,
  },
  {
    path: '/Articles',
    name: 'Articles',
    component: Articles,
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/Ct-17y',
    name: 'Ct-17y',
    component: Ct17y,
  },
  {
    path: '/HeatMeters',
    name: 'HeatMeters',
    component: HeatMeters,
  },
  {
    path: '/Item-inner-page',
    name: 'Item-inner-page',
    component: ItemInnerPage,
  },
  {
    path: '/Item-inner-page2',
    name: 'Item-inner-page2',
    component: ItemInnerPage2,
  },
  {
    path: '/Item-inner-page3',
    name: 'Item-inner-page3',
    component: ItemInnerPage3,
  },
  {
    path: '/Item-page',
    name: 'Item-page',
    component: ItemPage,
  },
  {
    path: '/Main-catalog',
    name: 'Main-catalog',
    component: MainCatalog,
  },
  {
    path: '/Nodes',
    name: 'Nodes',
    component: Nodes,
  },
  {
    path: '/Open-catalog',
    name: 'Open-catalog',
    component: OpenCatalog,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
