import { createRouter, createWebHistory } from 'vue-router'

const Main = () => import('@/views/Main.vue')
const Error404 = () => import('@/views/Error404.vue')
const AboutCompany = () => import('@/views/About-company.vue')
const Articles = () => import('@/views/Articles.vue')
const Contacts = () => import('@/views/Contacts.vue')
const HeatMeters = () => import('@/views/HeatMeters.vue')
const castIronGates = () => import('@/views/cast-iron-gates.vue')
const ItemInnerPage = () => import('@/views/Item-inner-page.vue')
const ItemInnerPage2 = () => import('@/views/Item-inner-page2.vue')
const ItemInnerPage3 = () => import('@/views/Item-inner-page3.vue')
const ItemInnerPage4 = () => import('@/views/Item-inner-page4.vue')
const MainCatalog = () => import('@/views/Main-catalog.vue')
const Nodes = () => import('@/views/Nodes.vue')
const OpenCatalog = () => import('@/components/common/Open-catalog.vue')

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/404',
    name: 'Error404',
    component: Error404,
  },
  {
    path: '/about-company',
    name: 'AboutCompany',
    component: AboutCompany,
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/catalog/gates/cast-iron-gates/item-inner-page4',
    name: 'ItemInnerPage4',
    component: ItemInnerPage4,
  },
  {
    path: '/catalog/heat-meters',
    name: 'HeatMeters',
    component: HeatMeters,
  },
  {
    path: '/catalog/gates/cast-iron-gates/item-inner-page',
    name: 'ItemInnerPage',
    component: ItemInnerPage,
  },
  {
    path: '/catalog/gates/cast-iron-gates/item-inner-page2',
    name: 'ItemInnerPage2',
    component: ItemInnerPage2,
  },
  {
    path: '/catalog/gates/cast-iron-gates/item-inner-page3',
    name: 'ItemInnerPage3',
    component: ItemInnerPage3,
  },
  {
    path: '/catalog/gates/cast-iron-gates',
    name: 'cast-iron-gates',
    component: castIronGates,
  },
  {
    path: '/catalog',
    name: 'MainCatalog',
    component: MainCatalog,
  },
  {
    path: '/catalog/nodes',
    name: 'Nodes',
    component: Nodes,
  },
  {
    path: '/open-catalog',
    name: 'OpenCatalog',
    component: OpenCatalog,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
