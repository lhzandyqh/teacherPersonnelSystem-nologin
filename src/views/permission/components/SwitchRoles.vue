<template>
  <div>
    <div style="margin-bottom:15px;">{{ $t('permission.roles') }}： {{ roles }}</div>
    {{ $t('permission.switchRoles') }}：
    <el-radio-group v-model="switchRoles">
      <!--      <el-radio-button label="editor" />-->
      <!--      <el-radio-button label="admin" />-->
      <el-radio-button label="教师" />
      <el-radio-button label="系部主管" />
      <el-radio-button label="人事处主管" />
    </el-radio-group>
  </div>
</template>

<script>
export default {
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
  }
}
</script>
