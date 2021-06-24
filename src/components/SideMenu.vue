<template>
  <div class="sidebar-container">
    <el-scrollbar height="100%">
      <el-menu 
        router 
        collapse-transition
        mode="vertical"
        :default-active="$route.path"
        :uniqueOpened="true"
        style="border: none"
        @open="submenuopen"
      >
        <sidemenu-item 
          v-for="menu in menuList" 
          :key="menu.path" 
          :item="menu"
        ></sidemenu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidemenuItem from './SidemenuItem.vue'
import router from '@/router/index.js'
import { useRouter } from 'vue-router'
export default {
  components:{
    SidemenuItem
  },
  setup(){
    const router = useRouter()
    const submenuopen = (index) => {
      router.push({path: index})
    }
    return {
      menuList: router.options.routes,
      submenuopen
    }
  }
}
</script>

<style lang='less' scoped>
.sidebar-container{
  height: 100%;
}
</style>