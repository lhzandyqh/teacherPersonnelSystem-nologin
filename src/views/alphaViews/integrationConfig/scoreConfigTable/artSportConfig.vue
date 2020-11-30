<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name_of_art_sport_association"
        align="center"
        label="比赛类别"
        width="300"/>
      <el-table-column
        prop="award_level_of_association"
        align="center"
        label="获奖级别"
        width="300"/>
      <el-table-column
        prop="score_of_association"
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
  name: 'ArtSportConfig',
  data() {
    return {
      tableData: [],
      token: getToken()
    }
  },
  mounted() {
    this.getArtData()
  },
  methods: {
    getArtData: function() {
      const prams = {
        project_name: '艺科体社团'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log(this.tableData)
      })
    },
    updateArtData: function() {
      const prams = {
        project_name: '艺科体社团'
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
