/*
 * @Author: eamiear
 * @Date: 2019-02-06 20:47:55
 * @Last Modified by: eamiear
 * @Last Modified time: 2019-02-27 16:14:29
 */

// 商铺
const shops = [{
  name: '/operator/shops/projectList.html',
  path: '/operator/shops/projectList.html',
  desc: '项目列表',
  component: () => import('views/operator/shops/projectList.vue'),
  meta: {isTab: true}
}, {
  name: '/merchant/store/list.html',
  path: '/merchant/store/list.html',
  desc: '商铺库',
  component: () => import('views/operator/shops/publish.vue'),
  meta: {isTab: true}
}, {
  name: '/merchant/store/picture.html',
  path: '/merchant/store/picture.html',
  desc: '商铺图集',
  component: () => import('views/operator/shops/list.vue'),
  meta: {isTab: true}
}, {
  name: '/merchant/store/boss.html',
  path: '/merchant/store/boss.html',
  desc: '店家列表',
  component: () => import('views/operator/shops/detail.vue'),
  meta: {isTab: true}
}]

// 个人中心
export const usercenter = [{
  name: '/operator/usercenter/password.html',
  path: '/operator/usercenter/password.html',
  desc: '设置密码',
  component: () => import('views/operator/usercenter/password.vue'),
  meta: {isTab: true}
}]

export default [
  {
    name: 'sidebarLayout',
    path: '/sidebar',
    desc: '侧边栏布局',
    component: () => import('views/layout/SidebarLayout.vue'),
    redirect: { path: '/dashboard.html' },
    children: [{
      name: '/dashboard.html',
      path: '/dashboard.html',
      desc: '首页面板',
      component: () => import('views/dashboard/index.vue'),
      meta: {isTab: true}
    },
    ...shops
    ]
  }
]
