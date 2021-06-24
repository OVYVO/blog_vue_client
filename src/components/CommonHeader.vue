<template>
  <div class="commonheader-container">
    <div class="header-left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item 
          :to="{ path: item.path }"
          v-for="item in routeArray"
          :key="item.path"
        >
          {{item.meta.title}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-right">
      <el-avatar icon="el-icon-user-solid" style="margin-right: 20px;"></el-avatar>
      <el-dropdown 
        style="margin-right: 20px;"
        @command="handleCommand"
      >
        <span class="el-dropdown-link">
          {{userName}}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="set">设置</el-dropdown-item>
            <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { watch, ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore()
    const route = useRoute()
    const routeArray = ref()

    const handleCommand = (val)=>{
      switch(val){
        case 'loginout':{
          store.commit('user/CLEAR_USER_INFO')
        }
      }
    }

    watch(
      ()=> route.matched,
      ()=>{
        routeArray.value = route.matched
      },
      {immediate: true}
    )
    return{
      routeArray,
      handleCommand,
      userName: computed(() => store.state.user.user_name),
    }
  }
}
</script>

<style lang='less' scoped>
.commonheader-container{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-right{
    display: flex;
    align-items: center;
  }
}
</style>