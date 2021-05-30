<template>
  <div class="app-container">
    <el-table :data="allData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
      <el-table-column prop="insertDate" label="提交日期" />
      <el-table-column prop="submitPerson" label="提交人" />
      <el-table-column prop="dept" label="部门" />
      <el-table-column prop="auditType" label="审核类型" />
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.auditStatus==='审核通过'" type="success">审核通过</el-tag>
          <el-tag v-if="scope.row.auditStatus==='审核不通过'" type="danger">审核未通过</el-tag>
          <el-tag v-if="scope.row.auditStatus==='审核未通过'" type="danger">审核未通过</el-tag>
          <el-tag v-if="scope.row.auditStatus==='待审核'">待审核</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="goView(scope.row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="[5, 10]"
        :total="allData.length"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog :visible.sync="VisibleOne" title="审核详情">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="major"
          label="所在专业">
        </el-table-column>
        <el-table-column
          prop="gradeClass"
          label="所在班级">
        </el-table-column>
        <el-table-column
          prop="startDate"
          label="开始时间">
        </el-table-column>
        <el-table-column
          prop="endDate"
          label="结束时间">
        </el-table-column>
      </el-table>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">系部意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="shuoming"
            :rows="4"
            disabled="disabled"
            type="textarea"
          />
        </el-row>
      </div>
            <div>
              <el-row style="padding-top: 10px">
                <span style="font-weight: bolder">人事处意见</span>
              </el-row>
              <el-row style="padding-top: 10px">
                <el-input
                  v-model="shuomingTwo"
                  :rows="4"
                  type="textarea"
                  disabled="disabled"
                />
              </el-row>
            </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
<!--        <el-button type="success" size="small" plain @click="studentAuditing('审核通过')">审核通过</el-button>-->
<!--        <el-button type="danger" size="small" plain @click="studentAuditing('审核未通过')">审核未通过</el-button>-->
        <el-button type="primary" size="small" plain @click="VisibleOne = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleTwo" title="审核详情">
      <el-table
        :data="tableDataTwo"
        style="width: 100%">
        <el-table-column
          prop="clubName"
          label="社团名称">
        </el-table-column>
        <el-table-column
          prop="awardName"
          label="获奖名称">
        </el-table-column>
        <el-table-column
          prop="awardLevel"
          label="获奖级别">
        </el-table-column>
        <el-table-column
          prop="awardDate"
          label="获奖时间">
        </el-table-column>
      </el-table>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">图片证明</span>
        </el-row>
        <el-row>
          <el-carousel trigger="click" height="200px">
            <el-carousel-item v-for="(src,item) in imgs" :key="item">
              <img :src="src" style="max-width: 100%;max-height: 100%;display: block; margin: 0 auto;">
            </el-carousel-item>
          </el-carousel>
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">系部意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="shuoming"
            :rows="4"
            type="textarea"
            disabled="disabled"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">人事处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="shuomingTwo"
            :rows="4"
            type="textarea"
            disabled="disabled"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
<!--        <el-button type="success" size="small" plain @click="shetuanAuditing('审核通过')">审核通过</el-button>-->
<!--        <el-button type="danger" size="small" plain @click="shetuanAuditing('审核未通过')">审核未通过</el-button>-->
        <el-button type="primary" size="small" plain @click="VisibleTwo = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleThree" title="审核详情">
      <el-table
        :data="tableDataThree"
        style="width: 100%">
        <el-table-column
          prop="stuName"
          label="帮扶学生姓名">
        </el-table-column>
        <el-table-column
          prop="stuMajor"
          label="学生所在专业">
        </el-table-column>
        <el-table-column
          prop="stuId"
          label="学生学号">
        </el-table-column>
        <el-table-column
          prop="assistDetail"
          label="帮扶工作明细">
        </el-table-column>
        <el-table-column
          prop="startDate"
          label="开始时间">
        </el-table-column>
        <el-table-column
          prop="endDate"
          label="结束时间">
        </el-table-column>
      </el-table>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">系部意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="shuoming"
            :rows="4"
            type="textarea"
            disabled="disabled"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">人事处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="shuomingTwo"
            :rows="4"
            type="textarea"
            disabled="disabled"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
<!--        <el-button type="success" size="small" plain @click="helpAuditing('审核通过')">审核通过</el-button>-->
<!--        <el-button type="danger" size="small" plain @click="helpAuditing('审核未通过')">审核未通过</el-button>-->
        <el-button type="primary" size="small" plain @click="VisibleThree = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { deptGetStudentAuditingListDetail } from '@/api/allTaskData'
  import { getStudentHistory } from '@/api/allTaskData'
    export default {
      name: "studentHistoryTable",
      data() {
        return {
          imgs: [],
          VisibleOne: false,
          VisibleTwo: false,
          VisibleThree: false,
          currentPage: 1,
          pageSize: 5,
          AuditingReason: '',
          allData: [],
          tableData: [],
          tableDataTwo: [],
          tableDataThree: [],
          shuoming: '',
          shuomingTwo:''
        }
      },
      mounted() {
        this.getAllHistoryData()
      },
      methods: {
        getAllHistoryData: function() {
          const prams = {
            // tecUsername: 'rmyzAdmin'
            tecUsername: localStorage.getItem('jwt')
          }
          getStudentHistory(prams).then(response =>{
            console.log('测试教师获取学生管理工作审核历史')
            console.log(response.data.data)
            this.allData = response.data.data
          })
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.currentPage = 1;
          this.pageSize = val;
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.currentPage = val;
        },
        goView: function (row) {
          if(row.auditType === '承担辅导员工作信息'){
            this.VisibleOne = true
            const pram = {
              id: row.id,
              // auditType: row.auditType
              auditType: '承担辅导员工作'
            }
            deptGetStudentAuditingListDetail(pram).then( response => {
              console.log('教师根据id获取详情 辅导员')
              console.log(response.data)
              this.tableData = response.data.data
              this.shuoming = this.tableData[0].auditDesc
              this.shuomingTwo = this.tableData[0].auditDescTwo
            })
          } else if (row.auditType === '指导社团获奖情况'){
            this.VisibleTwo = true
            const pram = {
              id: row.id,
              auditType: row.auditType
            }
            deptGetStudentAuditingListDetail(pram).then( response => {
              console.log('教师根据id获取详情 社团获奖')
              console.log(response.data)
              this.tableDataTwo = response.data.data
              this.imgs.push(this.tableDataTwo[0].picture)
              this.shuoming = this.tableDataTwo[0].auditDesc
              this.shuomingTwo = this.tableDataTwo[0].auditDescTwo
            })
          } else if(row.auditType === '帮扶学生情况'){
            this.VisibleThree = true
            const pram = {
              id: row.id,
              auditType: row.auditType
            }
            deptGetStudentAuditingListDetail(pram).then( response => {
              console.log('教师根据id获取详情 帮扶学生')
              console.log(response.data)
              this.tableDataThree = response.data.data
              this.shuoming = this.tableDataThree[0].auditDesc
              this.shuomingTwo = this.tableDataThree[0].auditDescTwo
            })
          }
        },
      }
    }
</script>

<style scoped>

</style>
