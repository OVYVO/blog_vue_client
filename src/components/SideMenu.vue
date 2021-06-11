<template>
  <el-menu default-active="1" class="router-menu" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item index="1">
      <i class="el-icon-location"></i>
      <template #title>导航一</template>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <template #title>导航二</template>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <template #title>导航三</template>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.router-menu{
  border-right: none;
}
</style>