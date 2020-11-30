<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="level_of_project_topic"
        align="center"
        label="课题级别"
        width="300"/>
      <el-table-column
        prop="person_role_project_topic"
        align="center"
        label="个人角色"
        width="300"/>
      <el-table-column
        prop="score_of_project_topic"
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
  name: 'ProjectIssueConfig',
  data() {
    return {
      tableData: [],
      token: getToken()
    }
  },
  mounted() {
    this.getProjectData()
  },
  methods: {
    getProjectData: function() {
      const prams = {
        project_name: '项目课题'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log(this.tableData)
      })
    },
    updateProjectData: function() {
      const prams = {
        project_name: '项目课题'
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
