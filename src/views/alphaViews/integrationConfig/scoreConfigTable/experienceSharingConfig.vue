<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="type_of_activity_experience_share"
        align="center"
        label="活动类型"
        width="300"/>
      <el-table-column
        prop="level_of_activity_experience_share"
        align="center"
        label="课题级别"
        width="300"/>
      <el-table-column
        prop="score_of_activity_experience_share"
        align="center"
        label="分值"
        width="300"/>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { inquireScoreConfig } from '@/api/integralConfiguration'
export default {
  name: 'ExperienceSharingConfig',
  data() {
    return {
      tableData: [],
      token: getToken()
    }
  },
  mounted() {
    this.getShareingData()
  },
  methods: {
    getShareingData: function() {
      const prams = {
        project_name: '学术讲座与经验分享'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log(this.tableData)
      })
    },
    updateShareingData: function() {
      const prams = {
        project_name: '学术讲座与经验分享'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
