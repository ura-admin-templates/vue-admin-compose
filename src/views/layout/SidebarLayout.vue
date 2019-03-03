<template>
  <section>
    <aside class="app-sidebar">
      <sidebar-menu></sidebar-menu>
    </aside>
    <section class="app-body" :style="appBodyStyles">
      <article class="app-main"  v-if="!isTabView" :style="appMainStyles">
        <keep-alive v-if="isKeepAlive">
           <router-view/>
        </keep-alive>
         <router-view v-else/>
      </article>
      <tabs-view class="app-main" v-else/>
    </section>
  </section>
</template>

<script>
import SidebarMenu from '@/views/layout/SidebarMenu.vue'
import TabsView from '@/components/Layout/TabsView.vue'
import {
  mapGetters
} from 'vuex'

export default {
  name: 'layout',
  components: {
    SidebarMenu,
    TabsView
  },
  created () {
    // this.getNavSubMenus()
  },
  mounted () {
    this.resetDocumentClientHeight()
    window.onresize = () => {
      this.resetDocumentClientHeight()
    }
  },
  computed: {
    ...mapGetters([
      'documentClientHeight'
    ]),
    appBodyStyles () {
      return [{ 'minHeight': `${this.documentClientHeight}px` }, { 'height': `${this.documentClientHeight}px` }]
    },
    appMainStyles () {
      const height = this.documentClientHeight
      return [{
        'minHeight': `${height}px`
      }, {
        'height': `${height}px`
      }]
    },
    isTabView () {
      return this.$route.meta && this.$route.meta.isTab
    },
    isKeepAlive () {
      return this.$route.meta && this.$route.meta.isKeepAlive
    }
  },
  methods: {
    resetDocumentClientHeight () {
      this.$store.dispatch('updateDocumentClientHeight', document.documentElement.clientHeight)
    },
    getNavSubMenus () {
      this.$store.dispatch('generateNavSubMenu')
    }
  }
}
</script>
