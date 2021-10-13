<template>
  <div class="test-container">
    <up-load v-model:modelValue='imgUrlList'></up-load>
  </div>
</template>

<script>
import { reactive } from 'vue'
import UpLoad from '@/components/upload.vue'
export default {
  components: {
    UpLoad
  },
  setup(){
    let imgUrlList = reactive([])
    return {
      imgUrlList
    }
  }
}
</script>

<style lang='less' scoped>
  .test-container{
    width: 100%;
    height: 100%;
  }
</style>