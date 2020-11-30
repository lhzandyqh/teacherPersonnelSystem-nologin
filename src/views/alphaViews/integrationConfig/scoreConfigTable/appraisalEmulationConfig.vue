<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="type_of_edu_teach_competition"
        align="center"
        label="竞赛类型"
        width="250"/>
      <el-table-column
        prop="award_level_of_edu_teach_competition"
        align="center"
        label="获奖级别"
        width="250"/>
      <el-table-column
        prop="award_grade_of_edu_teach_competition"
        align="center"
        label="获奖等级"
        width="250"/>
      <el-table-column
        prop="score_of_edu_teach_competition"
        align="center"
        label="分值"
        width="250"/>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
            <!--          <el-button-->
            <!--            size="mini"-->
            <!--            type="danger"-->
            <!--            @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { inquireScoreConfig } from '@/api/integralConfiguration'
export default {
  name: 'AppraisalEmulationConfig',
  data() {
    return {
      tableData: [],
      token: getToken()
    }
  },
  mounted() {
    this.getCompetitionData()
  },
  methods: {
    getCompetitionData: function() {
      const prams = {
        project_name: '教育教学评比竞赛'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log(this.tableData)
      })
    },
    updateCompetitionData: function() {
      const prams = {
        project_name: '教育教学评比竞赛'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log('update later')
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
