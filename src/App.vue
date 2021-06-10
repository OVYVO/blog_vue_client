<template>
  <router-view>

  </router-view>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
export default{
  setup(){
    const route = useRoute()
    let isLoginPage = ref(null)
    watch(
      () => route.path,
      () => {
        console.log(route.path)
        if(route.path=='/login'){
          isLoginPage = true
        }else{
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