<template>
    <div class="loginSpace">
    <el-form ref="AccountFrom" :model="account" status-icon :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container">
          <h3 class="title">管理员登录</h3>
          <el-form-item prop="username">
                <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
                <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
          <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="loading">登录</el-button>
          </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        account: {
          username: 'admin',
          pwd: '000000'
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            //{ validator: validaePass }
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleLogin() {
        this.$refs.AccountFrom.validate((valid) => {
            if(this.account.username == 'admin' && this.account.pwd == '000000' ){
                    //  this.$message({
                    //       message: '登录成功！',
                    //       type: 'success',
                    //       duration: 2000
                    // });
                    this.$router.replace('/commodityList')
            }else{
                this.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
            }
            
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 0 auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
  div.loginSpace {
    width: 100%;
    height: 100vh;
    background: #DFE9FB;
    padding-top:160px;
    flex: 1;
  }
</style>
