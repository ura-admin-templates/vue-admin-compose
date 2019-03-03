import {
  SET_MENU_NAV_LIST,
  SET_SYS_MENU_LIST,
  UPDATE_MENU_NAV_ACTIVE_NAME,
  SET_SIDEBAR_MENU_LIST,
  UPDATE_SIDEBAR_MENU_ACTIVE_NAME
} from '../mutation-types'

import Storage from '@/common/cache'
import SysMenuAPI from '@/api/system'

const menu = {
  state: {
    menuNavActiveName: '',
    navbarMenus: [],
    sysMenuList: [],
    sidebarMenuActiveName: '',
    sidebarMenuList: []
  },
  mutations: {
    [SET_MENU_NAV_LIST] (state, navbarMenus) {
      state.navbarMenus = navbarMenus
    },
    [SET_SYS_MENU_LIST] (state, sysMenuList) {
      state.sysMenuList = sysMenuList
    },
    [UPDATE_MENU_NAV_ACTIVE_NAME] (state, menuNavActiveName) {
      state.menuNavActiveName = menuNavActiveName
    },
    [SET_SIDEBAR_MENU_LIST] (state, sidebarMenuList) {
      state.sidebarMenuList = sidebarMenuList
    },
    [UPDATE_SIDEBAR_MENU_ACTIVE_NAME] (state, sidebarMenuActiveName) {
      state.sidebarMenuActiveName = sidebarMenuActiveName
    }
  },
  actions: {
    generateSidebarMenu ({ commit }) {
      return new Promise(resolve => {
        SysMenuAPI.getSidebarMenus(Storage.get('uid')).then(res => {
          if (res.code === 0) {
            commit('SET_SIDEBAR_MENU_LIST', res.data.menus)
            resolve(res.data.menus)
          } else {
            commit('SET_SIDEBAR_MENU_LIST', [])
          }
        })
      })
    },
    generateNavSubMenu ({ commit }) {
      return new Promise(resolve => {
        SysMenuAPI.getNavSubMenus(Storage.get('uid')).then(res => {
          if (res.code === 0) {
            commit('SET_SIDEBAR_MENU_LIST', res.data.menus)
            resolve(res.data.menus)
          } else {
            commit('SET_SIDEBAR_MENU_LIST', [])
          }
        })
      })
    },
    generateNavibarMenu ({ commit }) {
      return new Promise(resolve => {
        SysMenuAPI.getNavMenus(Storage.get('uid')).then(res => {
          if (res.code === 0) {
            commit('SET_MENU_NAV_LIST', res.data.menus)
            resolve(res.data.menus)
          } else {
            commit('SET_MENU_NAV_LIST', [])
          }
        })
      })
    },
    generateSystemMenu ({ commit }) {
      return new Promise(resolve => {
        SysMenuAPI.getSysMenus(Storage.get('uid')).then(res => {
          if (res.code === 0) {
            commit('SET_SYS_MENU_LIST', res.data.menus)
            resolve(res.data.menus)
          } else {
            commit('SET_SYS_MENU_LIST', [])
          }
        })
      })
    },
    updateMenuNavActiveName ({ commit }, activeName) {
      commit('UPDATE_MENU_NAV_ACTIVE_NAME', activeName)
    },
    updateSidebarMenuActiveName ({ commit }, activeName) {
      commit('UPDATE_SIDEBAR_MENU_ACTIVE_NAME', activeName)
    }
  }
}

export default menu
