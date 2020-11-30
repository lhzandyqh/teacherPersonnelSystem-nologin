<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="carrier_type_of_academic"
        align="center"
        label="学术成果载体类型"
        width="250"/>
      <el-table-column
        prop="is_first_author"
        align="center"
        label="是否第一作者"
        width="250"/>
      <el-table-column
        prop="publisher_level"
        align="center"
        label="刊物等级（出版社等级）"
        width="250"/>
      <el-table-column
        prop="score_academic"
        align="center"
        label="分值"
        width="250"/>
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
  name: 'AcademicAchievementsConfig',
  // eslint-disable-next-line vue/require-prop-types
  props: ['academicData'],
  data() {
    return {
      tableData: [],
      token: getToken()
    }
  },
  mounted() {
    this.getAcademicData()
  },
  methods: {
    getAcademicData: function() {
      const prams = {
        project_name: '学术成果'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log(this.tableData)
      })
    },
    updateAcademicData: function() {
      const prams = {
        project_name: '学术成果'
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
