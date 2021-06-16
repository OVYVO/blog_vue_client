<template>
  <div class="container">
    <div class="content">
      <div class="info">
        <div class="header">
          <span class="title">登录</span>
        </div>
        <div class="desc">神箭管理后台</div>
      </div>
      <div class="login">
        <el-form 
          ref="loginForm"
          :model="formData" 
          class="login-form"
        >
          <!--用户名-->
          <el-form-item prop="user_name">
            <el-input 
              prefix-icon="el-icon-user"
              v-model="formData.user_name" 
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <!--密码-->
          <el-form-item prop="user_psd">
            <el-input 
              type="password"
              prefix-icon="el-icon-key" 
              v-model="formData.user_psd" 
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item style="margin: 0">
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="onReset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { encrypt, decrypt } from '@/utils/crypto.js'
import { ElMessage } from 'element-plus'
import * as Api from '@/api/common.js'
export default({
  setup(){
    const store = useStore()
    const router = useRouter()
    const loginForm = ref(null)
    const formData = reactive({
      user_name: 'admin',
      user_psd: 'admin2021',
    })
    const onSubmit = async() => {
      const  { user_name, user_psd } = toRefs(formData)
      const payload = {
        user_name: user_name.value,
        user_psd: encrypt(user_psd.value)
      }
      const {user_info} = await Api.login(payload)
      store.commit('user/SET_USER_INFO', user_info)
      router.push({path: '/home'})
      ElMessage.success('登陆成功')
    }
    const onReset = ()=>{
      loginForm.value.resetFields();
    }
    return{
      loginForm,
      formData,
      onSubmit,
      onReset
    }
  }
});
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5 url('./bg.svg') no-repeat center 110px;
  background-size: 100%;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px 0;
    @media (min-width: 768px) {
      padding: 200px 0 24px;
    }
    .info {
      text-align: center;
      .header {
        height: 44px;
        line-height: 44px;
        a {
          text-decoration: none;
        }
        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
        }
        .title {
          font-size: 26px;
          color: rgba(0, 0, 0, 0.85);
          font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        max-width: 300px;
        text-align: center;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin: 0 auto;
        margin-top: 12px;
        margin-bottom: 50px;
      }
    }
    .login {
      width: 420px;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      background: rgba(0,0,0,0.2);
      .captcha{
        display: flex;
        .img-box{
          flex-shrink: 0;
          width: 100px;
          height: 40px;
          margin-left: 10px;
          border-radius: 4px;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }
        
      }
      .login-form{
        &:deep(.el-form-item){
          .el-input__icon{
            font-size: 18px;
            font-weight: 700;
            position: relative;
            top: 4px;
          }
        }
        &:deep(.el-form-item:last-child){
          .el-form-item__content{
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      @media screen and (max-width: 576px) {
        width: 95%;
      }
    }
  }
}
.company{
  text-align: center;
  padding-top: 12px;
  color: #999;
}
.chrome-text {
  text-align: center;
  padding-top: 2em;
  color: #999;
}
</style>
