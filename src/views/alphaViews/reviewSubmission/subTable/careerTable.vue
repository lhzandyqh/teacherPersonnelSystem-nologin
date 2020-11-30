<template>
  <div class="app-container">
    <el-table :data="peopleData" style="width: 100%">
      <el-table-column prop="subdate" label="提交日期" />
      <el-table-column prop="applypeople" label="提交人" />
      <el-table-column prop="department" label="部门" />
      <el-table-column prop="sub" label="提交内容" />
      <el-table-column prop="name" label="审核类型" />
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.approval==='通过'" type="success">审核通过</el-tag>
          <el-tag v-if="scope.row.approval==='未通过'" type="danger">审核未通过</el-tag>
          <el-tag v-if="scope.row.approval==='待通过'">审核待通过</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        :current-page="currentPage"
        :page-size="pagesize"
        :page-sizes="[5, 10]"
        :total="peopleData.length"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "careerTable",
  data() {
    return {
      currentPage: 1,
      pagesize: 5,
      AuditingReason: '',
      peopleData: [
        {
          subdate: '2020-06-21',
          applypeople: '王老师',
          department: '临床医学系',
          sub: '个人分析修改',
          name: '个人分析',
          approval: '通过',
        }, {
          subdate: '2020-08-21',
          applypeople: '王老师',
          department: '临床医学系',
          sub: '2022年职业规划修改',
          name: '职业规划',
          approval: '未通过',
        }, {
          subdate: '2020-06-21',
          applypeople: '王老师',
          department: '临床医学系',
          sub: '2023年职业规划修改',
          name: '职业规划',
          approval: '待通过',
        }, {
          subdate: '2020-06-21',
          applypeople: '王老师',
          department: '临床医学系',
          sub: '修改个人分析',
          name: '个人分析',
          approval: '通过',
        },
        {
          subdate: '2020-06-21',
          applypeople: '王老师',
          department: '临床医学系',
          sub: '个人分析修改',
          name: '个人分析',
          approval: '待通过',
        },
        {
          subdate: '2020-06-21',
          applypeople: '王老师',
          department: '临床医学系',
          sub: '2024年职业规划修改',
          name: '职业规划',
          approval: '未通过',
        },
        {
          subdate: '2020-06-21',
          applypeople: '王老师',
          department: '临床医学系',
          sub: '2020年职业规划修改',
          name: '职业规划',
          approval: '待通过',
        },
      ]
    }
  },
  methods: {
    jibenview(sub) {
      if (sub === '基本信息') {
        this.jibenVisible = true
      } else if (sub === '专业能力') {
        this.zhuanyeVisible = true
      } else if (sub === '工作经历') {
        this.workVisible = true
      }
    },
    pass() {
      this.$message({
          type: 'success',
          message: '审核成功'
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
