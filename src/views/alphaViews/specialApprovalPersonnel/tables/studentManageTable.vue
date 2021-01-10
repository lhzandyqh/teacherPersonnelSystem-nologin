<template>
  <div class="app-container">
    <el-table :data="peopleData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
      <el-table-column prop="insertDate" label="提交日期" />
      <el-table-column prop="submitPerson" label="提交人" />
      <el-table-column prop="dept" label="部门" />
      <el-table-column prop="auditType" label="类型" />
      <el-table-column label="系部审核状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.auditStatus==='审核通过'" type="success">审核通过</el-tag>
          <el-tag v-if="scope.row.auditStatus==='审核未通过'" type="danger">审核未通过</el-tag>
          <el-tag v-if="scope.row.auditStatus==='待审核'">待审核</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="goView(scope.row)">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="[5, 10]"
        :total="peopleData.length"
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
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">人事处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="studentForm.auditDesc"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="studentAuditing('审核通过')">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="studentAuditing('审核未通过')">审核未通过</el-button>
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
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">人事处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="shetuanForm.auditDesc"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="shetuanAuditing('审核通过')">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="shetuanAuditing('审核未通过')">审核未通过</el-button>
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
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">人事处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="helpForm.auditDesc"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="helpAuditing('审核通过')">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="helpAuditing('审核未通过')">审核未通过</el-button>
        <el-button type="primary" size="small" plain @click="VisibleThree = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { perGetStudentAuditingList, deptGetStudentAuditingListDetail, perAuditingStudent } from '@/api/allTaskData'
    export default {
      name: "studentManageTable",
      data() {
        return {
          shuoming: '',
          imgs: [],
          radio: '1',
          currentPage: 1,
          pageSize: 10,
          VisibleOne: false,
          VisibleTwo: false,
          VisibleThree: false,
          VisibleFour: false,
          VisibleFive: false,
          peopleData: [],
          tableData: [],
          studentForm: {
            id: '',
            tecUsername: '',
            // ifTwoLevelAudit: '',
            // assignAuditPersonTwo: '',
            auditStatus: '',
            auditDesc: '',
            auditType: '承担辅导员工作'
          },
          tableDataTwo: [],
          shetuanForm: {
            id: '',
            tecUsername: '',
            // ifTwoLevelAudit: '',
            // assignAuditPersonTwo: '',
            auditStatus: '',
            auditDesc: '',
            auditType: '指导社团获奖情况'
          },
          tableDataThree:[],
          helpForm: {
            id: '',
            tecUsername: '',
            // ifTwoLevelAudit: '',
            // assignAuditPersonTwo: '',
            auditStatus: '',
            auditDesc: '',
            auditType: '帮扶学生情况'
          }
        }
      },
      mounted() {
        this.getAllList()
      },
      methods: {
        getAllList: function(){
          const prams = {
            // tecUsername: 'rmyzAdmin'
            tecUsername: localStorage.getItem('jwt')
          }
          perGetStudentAuditingList(prams).then(response =>{
            console.log('人事处获取待审核列表')
            console.log(response.data.data)
            this.peopleData = response.data.data
          })
        },
        goView: function (row) {
          if(row.auditType === '承担辅导员工作'){
            this.VisibleOne = true
            const pram = {
              id: row.id,
              auditType: row.auditType
            }
            deptGetStudentAuditingListDetail(pram).then( response => {
              console.log('人事处根据id获取详情 辅导员')
              console.log(response.data)
              this.tableData = response.data.data
              this.shuoming = this.tableData[0].auditDesc
            })
          } else if (row.auditType === '指导社团获奖情况'){
            this.VisibleTwo = true
            const pram = {
              id: row.id,
              auditType: row.auditType
            }
            deptGetStudentAuditingListDetail(pram).then( response => {
              console.log('人事处根据id获取详情 社团获奖')
              console.log(response.data)
              this.tableDataTwo = response.data.data
              this.shuoming = this.tableDataTwo[0].auditDesc
              this.imgs.push(this.tableDataTwo[0].picture)
            })
          } else if(row.auditType === '帮扶学生情况'){
            this.VisibleThree = true
            const pram = {
              id: row.id,
              auditType: row.auditType
            }
            deptGetStudentAuditingListDetail(pram).then( response => {
              console.log('人事处根据id获取详情 帮扶学生')
              console.log(response.data)
              this.tableDataThree = response.data.data
              this.shuoming = this.tableDataThree[0].auditDesc
            })
          }
        },
        handleSizeChange(val) {
          this.pageSize = val;
        },
        handleCurrentChange(val) {
          this.currentPage = val;
        },
        studentAuditing: function (status) {
          this.studentForm.auditStatus = status
          this.studentForm.id = this.tableData[0].id
          // this.studentForm.tecUsername = 'rmyzAdmin'
          this.studentForm.tecUsername = localStorage.getItem('jwt')
          perAuditingStudent(this.studentForm).then(response => {
            console.log('测试人事处开始审核学生管理工作辅导员')
            console.log(response.data)
            this.VisibleOne = false
            this.$message({
              message: '审核完成',
              type: 'success'
            });
            this.getAllList()
          })
        },
        shetuanAuditing: function (status) {
          this.shetuanForm.auditStatus = status
          this.shetuanForm.id = this.tableDataTwo[0].id
          // this.shetuanForm.tecUsername = 'rmyzAdmin'
          this.shetuanForm.tecUsername = localStorage.getItem('jwt')
          perAuditingStudent(this.shetuanForm).then(response => {
            console.log('测试系部主管开始审核学生管理工作社团')
            console.log(response.data)
            this.VisibleTwo = false
            this.$message({
              message: '审核完成',
              type: 'success'
            });
            this.getAllList()
          })
        },
        helpAuditing: function (status) {
          this.helpForm.auditStatus = status
          this.helpForm.id = this.tableDataThree[0].id
          // this.helpForm.tecUsername = 'rmyzAdmin'
          this.helpForm.tecUsername = localStorage.getItem('jwt')
          perAuditingStudent(this.helpForm).then(response => {
            console.log('测试系部主管开始审核学生管理 帮扶学生')
            console.log(response.data)
            this.VisibleThree = false
            this.$message({
              message: '审核完成',
              type: 'success'
            });
            this.getAllList()
          })
        }
      }
    }
</script>

<style scoped>

</style>
