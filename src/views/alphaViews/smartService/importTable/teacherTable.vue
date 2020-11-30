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
name: "teacherTable",
  data(){
  return{
    personData: [{
      name: '基本信息表',
      personname:'个人信息',
      indate:'2019-6-20',
      lastdate:'2022-6-20',
    }, {
      name: '专业能力表',
      personname:'个人信息',
      indate:'2019-6-20',
      lastdate:'2022-6-20',
    },{
      name: '工作经历表',
      personname:'个人信息',
      indate:'2019-5-16',
      lastdate:'2022-5-28',
    },{
      name: '王强基本信息',
      personname:'个人信息',
      indate:'2019-5-16',
      lastdate:'2022-5-28',
    },{
      name: '新招聘教职工信息',
      personname:'个人信息',
      indate:'2019-5-16',
      lastdate:'2022-5-28',
    },{
      name: '讲师个人信息',
      personname:'个人信息',
      indate:'2019-5-16',
      lastdate:'2022-5-28',
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
