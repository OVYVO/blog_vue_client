<template>
  <div class="upload-container">
    <el-upload
      action=''
      :http-request="uploadFile"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog v-model="dialogVisible" title="图片预览">
      <img style="width: 100%;height: auto" :src="imgUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import Axios from 'axios'
import { ElMessage } from 'element-plus'
import { proxyUrl } from '@/config'
export default {
  props:{
    size: {
      type: Number,
      default: 2
    },
    limit:{
      type: Number,
      default: 1
    }
  },
  setup(props){
    let imgUrl = ref('')
    let dialogVisible = ref(false)
    
    //上传校验
    const beforeAvatarUpload = (file)=>{
      const acceptType = ['image/jpeg','image/jpg','image/png']
      const isJPG = acceptType.includes(file.type)
      const isOverLimit = file.size / 1024 / 1024 < props.size
      if (!isJPG) {
        ElMessage.error('仅支持.jpeg,.jpg,.png格式图片')
      }
      if (!isOverLimit) {
        ElMessage.error(`图片大小不超过${props.size}M`)
      }
      return isJPG && isOverLimit
    }
    
    //图片上传
    const uploadFile = (val)=>{
      beforeAvatarUpload(val.file)
      const fd = new FormData();
      fd.append('file', val.file);
      Axios.post(
        "/api/uploadfile", 
        fd, 
        { 
          headers: { 'Content-Type': 'multipart/form-data' } 
        }
      ).then((res)=>{
        const {errCode,fileInfo} = res.data
        if(errCode==200){
          imgUrl.value =`${proxyUrl}/${fileInfo.imgUrl}`  
        }
      })
    }

    //图片预览
    const handlePictureCardPreview=(file)=>{
      dialogVisible.value = true
    }

    //图片删除
    const handleRemove = ()=>{
      imgUrl.value = ''
      //emit('upload',imgUrl)
    }

    return {
      beforeAvatarUpload,
      uploadFile,
      imgUrl,
      dialogVisible,
      handlePictureCardPreview,
      handleRemove
    }
  }
}
</script>

<style lang='less' scoped>

</style>