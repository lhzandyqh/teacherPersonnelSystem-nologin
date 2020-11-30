<template>
  <div class="app-container">
    <el-table
      :data="personData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="表名"
      />
      <el-table-column
        prop="personname"
        label="表单类型"
      />
      <el-table-column
        prop="indate"
        label="导入日期"
      />
      <el-table-column
        prop="lastdate"
        label="有效期"
      />
      <el-table-column
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <el-button type="text" size="medium" style="margin-right: 15px">预览</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="2">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "kaoqinTable",
  data(){
    return{
      personData: [{
        name: '九月考勤表',
        personname:'考勤',
        indate:'2020-9-01',
        lastdate:'2020-9-30',
      }, {
        name: '八月考勤表',
        personname:'考勤',
        indate:'2020-8-01',
        lastdate:'2020-8-30',
      },{
        name: '计算机学院考勤表',
        personname:'考勤',
        indate:'2019-5-16',
        lastdate:'2019-5-28',
      },{
        name: '2019年度考勤表',
        personname:'考勤',
        indate:'2020-1-1',
        lastdate:'2020-3-28',
      },{
        name: '七月考勤表',
        personname:'考勤',
        indate:'2020-7-01',
        lastdate:'2020-7-30',
      }],
    }
  }
}
</script>

<style scoped>
.fenye{
  margin-top: 20px;
  text-align: center;
}
</style>
