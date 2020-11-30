<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="type_of_research_courses"
        align="center"
        label="研究课类型"
        width="300"/>
      <el-table-column
        prop="display_level_of_research"
        align="center"
        label="展示级别"
        width="300"/>
      <el-table-column
        prop="score_of_research_courese"
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
  name: 'ResearchLessonConfig',
  data() {
    return {
      tableData: [],
      token: getToken()
    }
  },
  mounted() {
    this.getResearchData()
  },
  methods: {
    getResearchData: function() {
      const prams = {
        project_name: '研究课'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log(this.tableData)
      })
    },
    updateResearchData: function() {
      const prams = {
        project_name: '研究课'
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
