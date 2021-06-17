<template>
  <div id="app">
    <router-view v-if="showLayout"></router-view>
    <page-layout v-else>
      <router-view></router-view>
    </page-layout>
  </div>
</template>

<script>
import PageLayout from '@/components/PageLayout.vue'
import { ref, watch, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default{
  components:{
    PageLayout
  },
  setup(){
    const route = useRoute()
    const store = useStore()
    let showLayout = ref(null)
    onUnmounted(()=>{
      store.commit('user/CLEAR_USER_INFO')
    })
    watch(
      () => route.path,
      () => {
        if(route.path == '/'){
          showLayout.value = true
        }else{
          showLayout.value = false
        }
      },{
        immediate: true
      }
    )
    return{
      showLayout
    }
  }
}
</script>

<style lang='less'>
#app{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.slide-fade-enter-active {
  transition: all 0.5s 1s;
}
.slide-fade-leave-active {
  transition: all 0.5s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.el-submenu.is-active > .el-submenu__title{
  i{
    color: #409EFF !important;
  }
  color: #409EFF !important;
}
</style>