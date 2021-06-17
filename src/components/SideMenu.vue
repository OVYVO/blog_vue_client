<template>
  <div class="sidebar-container">
    <el-scrollbar height="100%">
      <el-menu 
        router 
        collapse-transition
        mode="vertical"
        :default-active="$route.path"
        style="border: none"
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
export default {
  components:{
    SidemenuItem
  },
  data(){
    return{
      menuList: router.options.routes,
    }
  }
}
</script>

<style lang='less' scoped>
.sidebar-container{
  height: 100%;
}
</style>