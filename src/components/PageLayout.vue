<template>
  <el-container class="main-container">
    <el-aside class="aside">
      <el-container>
        <el-header class="logo">
          <i></i>
          <span>火箭管理后台</span>
        </el-header>
        <el-main style="padding: 20px 0;">
          <side-menu></side-menu>
        </el-main>
      </el-container>
    </el-aside>
    <el-container>
      <el-header class="header"></el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from './SideMenu.vue'
export default {
  components:{SideMenu}
}
</script>

<style lang='less' scoped>
.main-container{
  height: 100%;
  overflow: hidden;
}
.aside{
  width: 400px;
  box-shadow: @box-shadow-base;
  .logo{
    background: @primary-color;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      i{
        transform: translateY(-50px);
        opacity: 0;
      }
      span{
        transform: translateX(-22px);
      }
    }
    i{
      display: block;
      width: 40px;
      height: 40px;
      margin-right: 10px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-image: url('../assets/logo.png');
      transition: all 0.5s ease-in-out;
    }
    span{
      color: #fff;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      user-select: none;
      transition: all 0.3s ease-in-out 0.1s;
    }
  }
}
.header{
  box-shadow: @box-shadow-base;
}
</style>