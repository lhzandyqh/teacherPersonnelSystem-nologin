<template>
  <div>
    <div style="margin-bottom:15px;">{{ $t('permission.roles') }}： {{ roles }}</div>
    {{ $t('permission.switchRoles') }}：
    <el-radio-group v-model="switchRoles">
      <!--      <el-radio-button label="editor" />-->
      <!--      <el-radio-button label="admin" />-->
      <el-radio-button v-show="perArray.indexOf(jiaoshi)!==-1" label="教师" />
      <el-radio-button v-show="perArray.indexOf(xibu)!==-1" label="系部主管" />
      <el-radio-button v-show="perArray.indexOf(renshi)!==-1" label="人事处主管" />
<!--      <el-radio-button label="教师" />-->
<!--      <el-radio-button label="系部主管" />-->
<!--      <el-radio-button label="人事处主管" />-->
    </el-radio-group>
  </div>
</template>

<script>
  import { getAllPermissions } from '@/api/login'
export default {
  mounted() {
    this.getJwt()
    setTimeout(()=>{
      this.getAll()
    },100)
  },
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        console.log('已点击切换权限')
        var newval
        if (val === '教师') {
          newval = 'editor'
        } else if (val === '人事处主管') {
          newval = 'admin'
        } else if (val === '系部主管') {
          newval = 'editortwo'
        }
        this.$store.dispatch('ChangeRoles', newval).then(() => {
          this.$emit('change')
        })
        // this.$store.dispatch('ChangeRoles', val).then(() => {
        //   this.$emit('change')
        // })
      }
    }
  },
  data() {
    return{
      perArray: [],
      jiaoshi: '教师',
      xibu: '系部主管',
      renshi: '人事处主管'
    }
  },
  methods: {
    getJwt: function() {
      var afterUrl = window.location.search.substring(1)
      var afterEqual = afterUrl.substring(afterUrl.indexOf('=') + 1)
      console.log('测试获取jwt')
      console.log(afterEqual)
      localStorage.setItem('jwt', afterEqual)
    },
    getAll: function () {
      const prams = {
        // username: '10003'
        username:localStorage.getItem('jwt')
      }
      getAllPermissions(prams).then(response => {
        console.log('测试所有的权限')
        console.log(response.data)
        this.perArray = response.data.roles
      })
    }
  }
}
</script>
