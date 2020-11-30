<template>
  <!--<div class="login-container">-->
    <!--<el-form-->
      <!--ref="loginForm"-->
      <!--style="width: 480px;height: 450px;background:Transparent;padding:60px 100px 0 70px;"-->
      <!--:model="loginForm"-->
      <!--:rules="loginRules"-->
      <!--class="demo-ruleForm"-->
      <!--auto-complete="on"-->
    <!--&gt;-->
      <!--<div class="title-container">-->
        <!--<h3 class="title">-->
          <!--&lt;!&ndash;{{ $t('login.title') }}&ndash;&gt;-->
          <!--OA办公系统-->
        <!--</h3>-->
        <!--&lt;!&ndash;<lang-select class="set-language" />&ndash;&gt;-->
      <!--</div>-->

      <!--<el-form-item prop="username">-->
        <!--<el-input-->
          <!--v-model="loginForm.username"-->
          <!--:placeholder="$t('login.username')"-->
          <!--name="username"-->
          <!--type="text"-->
          <!--auto-complete="on"-->
          <!--prefix-icon="el-icon-user"-->
        <!--/>-->
      <!--</el-form-item>-->

      <!--<el-form-item prop="password">-->
        <!--<el-input-->
          <!--v-model="loginForm.password"-->
          <!--:type="passwordType"-->
          <!--:placeholder="$t('login.password')"-->
          <!--name="password"-->
          <!--auto-complete="on"-->
          <!--prefix-icon="el-icon-key"-->
          <!--@keyup.enter.native="handleLogin"-->
        <!--/>-->
        <!--<span class="show-pwd" @click="showPwd">-->
          <!--<svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />-->
        <!--</span>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-checkbox v-model="checked" size="small">记住密码</el-checkbox>-->
      <!--</el-form-item>-->
      <!--<el-button :loading="loading" type="primary" style="width: 310px" @click.native.prevent="handleLogin">-->
        <!--{{ $t('login.logIn') }}-->
      <!--</el-button>-->
    <!--</el-form>-->
  <!--</div>-->
  <div>
    <div style="text-align: center;width: 500px;height: 500px;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%)">
      <img src="../../assets/loading.gif" style="width: 100%">
    </div>
  </div>

  <!--<div class="login-container bg">-->
    <!--<div class="schoollogo">-->
      <!--<div class="school_container">-->
        <!--<div class="school">-->
          <!--<img src="../../assets/bg/logo.png">-->
        <!--</div>-->
        <!--<div class="school_title">-->
          <!--<span>石家庄人民医专OA办公系统</span>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="login_container">-->
      <!--<div class="picture_container">-->
        <!--<img src="../../assets/bg/OALogo.png">-->
      <!--</div>-->
      <!--<div class="login_card login-container">-->
        <!--<el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">-->
          <!--<div class="title-container">-->
            <!--<h4 class="title">-->
              <!--{{ $t('login.title') }}-->
            <!--</h4>-->
            <!--<lang-select class="set-language" />-->
          <!--</div>-->

          <!--<el-form-item prop="username">-->
            <!--<span class="svg-container">-->
              <!--<svg-icon icon-class="user" />-->
            <!--</span>-->
            <!--<el-input-->
              <!--ref="username"-->
              <!--v-model="loginForm.username"-->
              <!--:placeholder="$t('login.username')"-->
              <!--name="username"-->
              <!--type="text"-->
              <!--auto-complete="on"-->
            <!--/>-->
          <!--</el-form-item>-->
          <!--<el-form-item prop="password">-->
            <!--<span class="svg-container">-->
              <!--<svg-icon icon-class="password" />-->
            <!--</span>-->
            <!--<el-input-->
              <!--ref="password"-->
              <!--v-model="loginForm.password"-->
              <!--:type="passwordType"-->
              <!--:placeholder="$t('login.password')"-->
              <!--name="password"-->
              <!--auto-complete="on"-->
              <!--@keyup.enter.native="handleLogin"-->
            <!--/>-->
            <!--<span class="show-pwd" @click="showPwd">-->
              <!--<svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />-->
            <!--</span>-->
          <!--</el-form-item>-->

          <!--<el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">-->
            <!--{{ $t('login.logIn') }}-->
          <!--</el-button>-->

          <!--<div style="position:relative">-->
            <!--<div class="tips">-->
              <!--<span />-->
              <!--<span />-->
            <!--</div>-->
            <!--<div class="tips">-->
              <!--<span style="margin-right:18px;" />-->
              <!--<span />-->
            <!--</div>-->

            <!--<el-button class="thirdparty-button" type="primary">-->
              <!--&lt;!&ndash;              {{ $t('login.thirdparty') }}&ndash;&gt;-->
              <!--忘记密码-->
            <!--</el-button>-->
          <!--</div>-->
        <!--</el-form>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="copyrightContainer">-->
      <!--<span style="font-size: 12px">Copyright&nbsp;&nbsp;&nbsp;中科智禾教育大数据中心   ©2020</span>-->
    <!--</div>-->
    <!--&lt;!&ndash;<div class="login-img">&ndash;&gt;-->
    <!--&lt;!&ndash;<img src="../../assets/dengluing.gif">&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="login-img-text">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>正在登录...</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="height: 156px">&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="width: 100px;line-height: 156px;float: right">&ndash;&gt;-->
    <!--&lt;!&ndash;<el-button type="primary" round @click="dialogVisible=true">登录</el-button>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<el-dialog&ndash;&gt;-->
    <!--&lt;!&ndash;title="用户登录"&ndash;&gt;-->
    <!--&lt;!&ndash;:visible.sync="dialogVisible"&ndash;&gt;-->
    <!--&lt;!&ndash;width="32%"&ndash;&gt;-->
    <!--&lt;!&ndash;center>&ndash;&gt;-->
    <!--&lt;!&ndash;<el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="bb">&ndash;&gt;-->
    <!--&lt;!&ndash;<el-input v-model="loginForm.username" size="large" placeholder="请输入用户名" name="username" type="text" class="inputs"><i slot="prefix" class="ymq-iconuser"></i></el-input>&ndash;&gt;-->
    <!--&lt;!&ndash;<el-input v-model="loginForm.password" :type="passwordType"  size="large" placeholder="请输入密码" name="password" @keyup.enter.native="handleLogin" class="inputs"><i slot="prefix" class="ymq-iconlock-fill" style="margin-top: 10px"></i></el-input>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;<div class="text2">忘记密码？</div>&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;<el-button :loading="loading" type="primary" style="width:100%;margin-bottom:10px;margin-top: 10px" @click.native.prevent="handleLogin"><span style="font-size: 20px">登 录</span></el-button>&ndash;&gt;-->

    <!--&lt;!&ndash;</el-form>&ndash;&gt;-->
    <!--&lt;!&ndash;</el-dialog>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->

    <!--&lt;!&ndash;<div style="height: 500px;width: 600px;position: relative;background-color: rgba(220, 233, 249, 0.9);float: right;top:40px;right: 100px">&ndash;&gt;-->
    <!--&lt;!&ndash;<el-scrollbar style="height: 100%">&ndash;&gt;-->
    <!--&lt;!&ndash;<div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="texthome">&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="margin-top: 20px;margin-left: 20px">&ndash;&gt;-->
    <!--&lt;!&ndash;<div>&ndash;&gt;-->
    <!--&lt;!&ndash;<a style="text-decoration: none;" href="http://old.moe.gov.cn/publicfiles/business/htmlfiles/moe/s7052/201412/xxgk_181258.html">教育部关于印发《教育部直属高等学校国有资产管理暂行办法》的通知</a>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words2">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>国家政策</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>2012-12-17</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="texthome">&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="margin-top: 20px;margin-left: 20px">&ndash;&gt;-->
    <!--&lt;!&ndash;<div>&ndash;&gt;-->
    <!--&lt;!&ndash;<a style="text-decoration: none;" href="http://www.moe.gov.cn/srcsite/A05/s7052/201306/t20130619_181256.html">教育部关于印发《教育部直属高等学校、直属单位&ndash;&gt;-->
    <!--&lt;!&ndash;国有资产管理工作规程（暂行）》的通知</a>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div  style=" float: left;margin-left: 10px;margin-top: 10px;color: #9F9999;font-size: 14px;">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>国家政策</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="float: right;margin-right: 30px;margin-top: 10px;color: #9F9999;font-size: 14px;">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>2013-06-19</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="texthome">&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="margin-top: 20px;margin-left: 20px">&ndash;&gt;-->
    <!--&lt;!&ndash;<div>&ndash;&gt;-->
    <!--&lt;!&ndash;<a style="text-decoration: none;" href="http://www.chinatax.gov.cn/n810341/n810755/c1818604/content.html">关于进一步完善固定资产加速折旧企业所得税政策的通知</a>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words2">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>国家政策</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>2015-9-17</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="texthome">&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="margin-top: 20px;margin-left: 20px">&ndash;&gt;-->
    <!--&lt;!&ndash;<div>&ndash;&gt;-->
    <!--&lt;!&ndash;<a style="text-decoration: none;" href="http://m.oh100.com/ahsrst/a/201708/315544.html">中小学校国有资产管理制度办法</a>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words2">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>国家政策</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>2017-08-31</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="texthome">&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="margin-top: 20px;margin-left: 20px">&ndash;&gt;-->
    <!--&lt;!&ndash;<div>&ndash;&gt;-->
    <!--&lt;!&ndash;<a style="text-decoration: none;" href="http://m.wenshubang.com/banfa/58775.html">最新国有资产管理办法全文</a>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words2">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>国家政策</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>2018-04-24</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="texthome">&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="margin-top: 20px;margin-left: 20px">&ndash;&gt;-->
    <!--&lt;!&ndash;<div>&ndash;&gt;-->
    <!--&lt;!&ndash;<a style="text-decoration: none;" href="http://old.moe.gov.cn/publicfiles/business/htmlfiles/moe/s7052/201412/xxgk_181258.html">教育部关于印发《教育部直属高等学校国有资产管理暂行办法》的通知</a>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words2">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>国家政策</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>2012-12-17</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="texthome">&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="margin-top: 20px;margin-left: 20px">&ndash;&gt;-->
    <!--&lt;!&ndash;<div>&ndash;&gt;-->
    <!--&lt;!&ndash;<a style="text-decoration: none;" href="https://www.toutiao.com/a6649157964168954375/?tt_from=weixin&utm_campaign=client_share&wxshare_count=1&timestamp=1567248935&app=news_article&utm_source=weixin&utm_medium=toutiao_android&req_id=201908311855350100290531304770609&group_id=6649157964168954375">固定资产折旧、扣除所得税政策汇编</a>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words2">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>相关新闻</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>2019-01-12</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="texthome">&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="margin-top: 20px;margin-left: 20px">&ndash;&gt;-->
    <!--&lt;!&ndash;<div>&ndash;&gt;-->
    <!--&lt;!&ndash;<a style="text-decoration: none;" href="http://old.moe.gov.cn/publicfiles/business/htmlfiles/moe/s7052/201412/xxgk_181258.html">关于扩大固定资产加速折旧优惠政策适用范围的公告</a>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words2">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>国家政策</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="words">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>2019-4-23</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</el-scrollbar>&ndash;&gt;-->

    <!--&lt;!&ndash;&lt;!&ndash;<div class="ss">&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;<div class="text">用户登录</div>&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;<el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;<div class="bb">&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;<el-input v-model="loginForm.username" size="large" placeholder="请输入用户名" name="username" type="text" class="inputs"><i slot="prefix" class="ymq-iconuser"></i></el-input>&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;<el-input v-model="loginForm.password" :type="passwordType"  size="large" placeholder="请输入密码" name="password" @keyup.enter.native="handleLogin" class="inputs"><i slot="prefix" class="ymq-iconlock-fill" style="margin-top: 10px"></i></el-input>&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;&lt;!&ndash;<div class="text2">忘记密码？</div>&ndash;&gt;&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;<el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;margin-top: 40px" @click.native.prevent="handleLogin"><span style="font-size: 20px">登 录</span></el-button>&ndash;&gt;&ndash;&gt;-->

    <!--&lt;!&ndash;&lt;!&ndash;</el-form>&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->

    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="position: absolute;width: 100%;top:100%">&ndash;&gt;-->
    <!--&lt;!&ndash;<Footerr></Footerr>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->

  <!--</div>-->
</template>

<script>
  import { validUsername } from '@/utils/validate'
  import LangSelect from '@/components/LangSelect'
  import SocialSign from './socialsignin'

  export default {
    name: 'Login',
    components: { LangSelect },
    mounted() {
      setTimeout(() => {
        this.handleLogin()
      }, 2000)
    },
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!validUsername(value)) {
          callback(new Error('Please enter the correct user name'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      }
      return {
        checked: false,
        loginForm: {
          username: 'admin',
          password: '111111'
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        passwordType: 'password',
        loading: false,
        showDialog: false,
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    created() {
      // window.addEventListener('hashchange', this.afterQRScan)
    },
    destroyed() {
      // window.removeEventListener('hashchange', this.afterQRScan)
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
      },
      handleLogin() {
        // this.$refs.loginForm.validate(valid => {
        //   if (valid) {
        //     this.loading = true
        //     this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
        //       this.loading = false
        //       this.$router.push({ path: this.redirect || '/' })
        //     }).catch(() => {
        //       this.loading = false
        //     })
        //   } else {
        //     console.log('error submit!!')
        //     return false
        //   }
        // })
        this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
          this.loading = false
          this.$router.push({ path: this.redirect || '/' })
        }).catch(() => {
          this.loading = false
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg: #e5e5e5;
  $light_gray: #1b3413;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray: #727272;
  $bg:#283443;
  $light_gray: #b4b4b4;
  $cursor: #141519;

  .login-container {
    min-height: 100%;
    width: 100%;
    overflow: hidden;
    .login-form {
      position: relative;
      width: 520px;
      max-width: 100%;
      padding: 50px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }
    .title-container {
      position: relative;
      .title {
        font-size: 20px;
        color: $light_gray;
        margin: 0px auto 20px auto;
        text-align: center;
        font-weight: bold;
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 3px;
        font-size:18px;
        right: 0px;
        cursor: pointer;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 0;
      bottom: 6px;
    }
  }
  .bg{
    width: 100%;
    height:100%;
    min-width: 1200px;
    background: url("../../assets/bg/background.png")no-repeat;
    background-size: 100% 100%;
    background-position: center 0;
  }
  .schoollogo {
    width: 100%;
    height: 115px;
    text-align: center;
    position: relative;
    margin-top: 60px;
    display: flex;
  }
  .school_container{
    position: absolute;
    width: 1000px;
    left: 50%;
    transform: translate(-50%,0);
  }
  .school{
    float: left;
  }
  .school_title{
    margin-left: 20px;
    float: left;
    line-height: 115px;
    font-size: 45px;
    font-weight: bolder;
    color: white;
    letter-spacing: 8px;
  }
  .picture_container img {
    width: 450px;
    height: 350px;
  }
  .login_container{
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
  .picture_container {
    margin-right: 40px;
  }
  .login_card {
    margin-left: 120px;
    width: 350px;
    height: 350px;
    background-color: white;
    flex-direction: row;
    border-radius: 10px;
  }
  .copyrightContainer{
    padding-top: 80px;
    text-align: center;
    margin-bottom: 20px;
    color: white;
  }
</style>

<!--<style rel="stylesheet/scss" lang="scss" scoped>-->

  <!--.login-container {-->
    <!--position: relative;-->
    <!--height: 100vh;-->
    <!--background-color: #fff;-->
    <!--background-image: url("../../assets/newsPic/login-bg.jpg");-->
    <!--background-size: 100% 100%;-->
    <!--display: flex;-->
    <!--align-items: center;-->
    <!--justify-content: center;-->
    <!--.title-container {-->
      <!--position: relative;-->
      <!--.title {-->
        <!--font-size: 26px;-->
        <!--color: #d8d8d8;-->
        <!--margin: 0px auto 40px auto;-->
        <!--text-align: center;-->
        <!--font-weight: bold;-->
      <!--}-->
      <!--.set-language {-->
        <!--color: #d8d8d8;-->
        <!--position: absolute;-->
        <!--top: 3px;-->
        <!--font-size:18px;-->
        <!--right: 0px;-->
        <!--cursor: pointer;-->
      <!--}-->
    <!--}-->
    <!--.show-pwd {-->
      <!--position: absolute;-->
      <!--right: 10px;-->
      <!--top: 7px;-->
      <!--font-size: 16px;-->
      <!--color: #606266;-->
      <!--cursor: pointer;-->
      <!--user-select: none;-->
    <!--}-->
    <!--/*.thirdparty-button {*/-->
    <!--/*  position: absolute;*/-->
    <!--/*  right: 0;*/-->
    <!--/*  bottom: 6px;*/-->
    <!--/*}*/-->
  <!--}-->
  <!--.login-img {-->
    <!--position: absolute;-->
    <!--top: 50%;-->
    <!--left: 50%;-->
    <!--transform: translate(-50%, -50%);-->
  <!--}-->
  <!--.login-img-text {-->
    <!--text-align: center;-->
    <!--font-size: 28px;-->
    <!--color: #5ec7e2;-->
    <!--font-family: "Microsoft YaHei";-->
  <!--}-->
<!--</style>-->
