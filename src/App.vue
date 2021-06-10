<template>
  <div id="app">
    <router-view v-if="isLoginPage"></router-view>
    <page-layout v-else>
      <router-view></router-view>
    </page-layout>
  </div>
</template>

<script>
import PageLayout from '@/components/PageLayout.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
export default{
  components:{
    PageLayout
  },
  setup(){
    const route = useRoute()
    let isLoginPage = ref(null)
    watch(
      () => route.path,
      () => {
        if(route.path=='/login'){
          console.log('登录页面')
          isLoginPage = true
        }else{
          console.log('非登录页面')
          isLoginPage = false
        }
      }
    )
    return{
      isLoginPage
    }
  }
}
</script>

<style lang='less'>
#app{
  height: 100vh;
  width: 100vw;
}
.slide-fade-enter-active {
  transition: all 0.5s;
}
.slide-fade-leave-active {
  transition: all 0.5s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>