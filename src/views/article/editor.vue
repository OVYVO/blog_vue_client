<template>
  <div class="editor-container">
    <el-form class="tool-form" inline>
      <el-form-item label="风格主题：" style="margin-right: 40px;">
        <el-switch 
          v-model="themeKey"
          active-text="Dark"
          inactive-text="Light"
          inactive-value="light"
          active-value="dark"
        ></el-switch >
      </el-form-item>
      <el-form-item label="预览主题：">
        <el-radio-group v-model="prethemeKey">
          <el-radio label="default">默认</el-radio>
          <el-radio label="github">github</el-radio>
          <el-radio label="vuepress">vuepress</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <md-editor 
      v-model="text" 
      :theme="themeKey"
      :previewTheme="prethemeKey"
      :toolbars="toolBars" 
      :showCodeRowNumber="true"
      editorClass="md-editor"
    />
    <div class="action-bar">
      <el-button type="primary" @click="saveArticle">保存</el-button>
      <el-button type="danger" @click="resetArticle">清空</el-button>
    </div>
    <el-dialog
      title="确认提交"
      v-model="dialogVisible"
      width="30%"
      :lock-scroll="true"
      :close-on-click-modal="false"
    >
      <el-form 
        ref="submitForm"
        :model="formData" 
        :rules="formRules"
        label-width="100px"
        class="login-form"
      >
        <!--提交表单-->
        <el-form-item label="文章标题：" prop="title">
          <el-input 
            v-model="formData.title" 
            autocomplete="off"
            placeholder="请输入文章标题"
          ></el-input>
        </el-form-item >
        <el-form-item label="文章类型：" prop="type">
          <el-radio-group v-model="formData.type">
            <el-radio :label="1">原创</el-radio>
            <el-radio :label="2">转载</el-radio>
            <el-radio :label="3">翻译</el-radio>
          </el-radio-group>
        </el-form-item >
        <el-form-item label="文章标签：" prop="tag">
          <el-select
            v-model="formData.tag"
            multiple
            default-first-option
            :multiple-limit='3'
            placeholder="请选择文章标签"
            :style="{width: '100%'}"
          >
            <el-option
              v-for="item in tagOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item >
        <el-form-item label="上传封面：" prop="">
          <img-uploader v-model="formData.poster" :limit="1"></img-uploader >
        </el-form-item >
      </el-form>
      <!--弹框页脚-->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import 'md-editor-v3/lib/style.css'
import {mdEditorTool,tagList} from '@/config'
import MdEditor from 'md-editor-v3'
import ImgUploader from '@/components/upload.vue'

export default {
  components:{
    MdEditor,ImgUploader
  },
  setup() {
    let dialogVisible = ref(false)
    let submitForm = ref(null)
    let toolBars = reactive(mdEditorTool)
    let tagOptions = reactive(tagList)
    let formData = reactive({
      title: '',
      type: 1,
      tag: [],
      poster:[]
    })
    let formRules = reactive({
      title:[
        {required: true,message: '请输入文章标题',trigger: 'blur'},
        {min: 1,max: 20,message: '标题内容限制20字符内',trigger: 'change'}
      ],
      type:{required: true,message: '请选择文章类型',trigger: 'blur'},
      tag:{required: true,message: '请选择文章标签',trigger: 'blur'}
    })

    const onSubmit = async() => {
      
    }
    const onReset = ()=>{
      submitForm.value.resetFields();
    }
    // 保存
    const saveArticle = () =>{
      dialogVisible.value = true
    }
    // 清空
    const resetArticle = () =>{

    }
  
    return {
      submitForm,
      formData,
      formRules,
      onSubmit,
      onReset,
      toolBars,
      tagOptions,
      dialogVisible,
      saveArticle,
      resetArticle,
      text: ref(''),
      themeKey: ref('Light'),
      prethemeKey: ref('default')
    }
  }
}
</script>

<style lang='less' scoped>
.editor-container{
  height: 100%;
  &:deep(.md-editor){
    height: calc(100% - 100px) !important;
    h1{
      font-size: 2rem
    }
    .md-content{
      width: 100%;
    }
    .md-input-wrapper{
      width: 50%;
      flex: none;
    }
    .md-preview{
      width: 50%;
      box-sizing: border-box;
      flex: none;
    }
  }
  .tool-form{
    &:deep(.el-form-item){
      margin-bottom: 0;
    }
    &:deep(.el-form-item:last-child){
      .el-form-item__content{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .action-bar{
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>