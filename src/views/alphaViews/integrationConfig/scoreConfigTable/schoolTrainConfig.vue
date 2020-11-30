<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="type_of_school_based_training"
        align="center"
        label="培训类型"
        width="400"/>
      <el-table-column
        prop="score_of_school_based_training"
        align="center"
        label="分数"
        width="400"/>
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
  name: 'SchoolTrainTable',
  data() {
    return {
      tableData: [],
      token: getToken()
    }
  },
  mounted() {
    this.getTrainData()
  },
  methods: {
    getTrainData: function() {
      const prams = {
        project_name: '校本培训'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log(this.tableData)
      })
    },
    updateTrainData: function() {
      const prams = {
        project_name: '校本培训'
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
