<template>
  <div class="upload-container">
    <div class="img-list">
      <div 
        class="img-item" 
        v-for="(item,index) in fileList"
        :key="item.url"
      >
        <img :src="item.url" alt="">
        <div class="action-box">
          <i class="icon view" @click="handlePictureCardPreview(item.url)"></i>
          <i class="icon del" @click="handleRemove(index)"></i>
        </div>
      </div>
    </div>
    <el-upload
      action=''
      :limit='limit'
      :http-request="uploadFile"
      :show-file-list="false"
      :on-remove="handleRemove"
      :class="[isAddtagHide ? 'hideAddtag' : '' ]"
      list-type="picture-card"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog v-model="dialogVisible" title="图片预览">
      <img style="width: 100%;height: auto" :src="previewImgUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import { ref,reactive,onMounted,watch} from 'vue'
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
      default: 2
    },
    modelValue:{
      type: Array,
      default: ()=>[]
    }
  },
  setup(props, {emit}){
    let previewImgUrl = ref('')
    let isAddtagHide = ref(false)
    let dialogVisible = ref(false)
    let limit = ref(0)
    let fileList = ref([])
    
    onMounted(()=>{ 
      fileList.value = props.modelValue
      limit = props.limit
    })
    watch(
      ()=>fileList,
      (newVal)=>{
        if(newVal.value.length >= limit){
          isAddtagHide.value = true
        }else{
          isAddtagHide.value = false
        }
      },{
        immediate: true,
        deep: true
      }
    )
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
          const item = {url:`${proxyUrl}/${fileInfo.imgUrl}`}
          fileList.value.push(item)
          emit('upload:modelValue',fileList.value)
        }
      })
    }
    const handlePictureCardPreview=(val)=>{
      previewImgUrl.value = val
      dialogVisible.value = true
    }
    const handleRemove = (index)=>{
      fileList.value.splice(index,1)
      emit('upload:modelValue',fileList.value)
    }
    return {
      beforeAvatarUpload,
      uploadFile,
      limit,
      fileList,
      dialogVisible,
      isAddtagHide,
      handlePictureCardPreview,
      previewImgUrl,
      handleRemove
    }
  }
}
</script>

<style lang='less' scoped>
.upload-container{
  display:flex;
  &:deep(.el-upload-list__item){
    .el-icon-close-tip{
      display: none;
    }
  }
  .hideAddtag{
    &:deep(.el-upload){
      display: none;
    }
  }
  .img-list{
    display: flex;
    margin-right: 5px;
    .img-item{
      width: 148px;
      height: 148px;
      border-radius: 4px;
      border: 1px solid rgba(0,0,0,0.2);
      margin-right: 5px;
      position: relative;
      overflow: hidden;
      &:hover{
        .action-box{
          z-index: 1;
        }
      }
      &:last-child{
        margin: 0;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .action-box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.5);
        z-index: -1;
        .icon{
          display: block;
          width: 20px;
          height: 20px;
          background-size: 100% 100%;
          background-position: center center;
          background-repeat: no-repeat;
          cursor: pointer;
        }
        .del{
          background-image: url('./images/del.png');
          margin-left: 20px;
        }
        .view{
          background-image: url('./images/eye.png');
        }
      }
    }
  }
}
</style>