<template>
  <div class="test-container">
    <up-load></up-load >
  </div>
</template>

<script>
import UpLoad from '@/components/upload.vue'
export default {
  components: {
    UpLoad
  }
}
</script>

<style lang='less' scoped>
  .test-container{
    width: 100%;
    height: 100%;
  }
</style>