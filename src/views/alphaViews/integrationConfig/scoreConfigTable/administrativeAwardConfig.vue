<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="level_of_administrative"
      align="center"
      label="获奖级别"
      width="200"/>
    <el-table-column
      prop="grade_of_administrative"
      align="center"
      label="获奖等级"
      width="200"/>
    <el-table-column
      prop="form_of_administrative"
      align="center"
      label="获奖形式"
      width="200"/>
    <el-table-column
      prop="score_of_administrative"
      align="center"
      label="分值"
      width="200"/>
    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getToken } from '@/utils/auth'
import { inquireScoreConfig } from '@/api/integralConfiguration'
export default {
  name: 'AdministrativeAwardConfig',
  data() {
    return {
      tableData: [],
      token: getToken()
    }
  },
  mounted() {
    this.getAdministrativeData()
  },
  methods: {
    getAdministrativeData: function() {
      const prams = {
        project_name: '行政获奖'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log(this.tableData)
      })
    },
    updateAdministrativeData: function() {
      const prams = {
        project_name: '行政获奖'
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
