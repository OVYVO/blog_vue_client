<template>
  <el-container class="main-container">
    <el-aside class="aside">
      <el-container>
        <el-header class="logo">博客管理后台</el-header>
        <el-main>路由</el-main>
      </el-container>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  setup(){
    
  }
}
</script>

<style lang='less' scoped>
.main-container{
  height: 100%;
}
.aside{
  width: 400px;
  background: #ccc;
  .logo{
    background: @primary-color;
  }
}
</style>