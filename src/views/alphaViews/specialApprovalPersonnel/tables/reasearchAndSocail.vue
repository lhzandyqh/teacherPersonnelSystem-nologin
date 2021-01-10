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
          prop="prjName"
          label="课题名称">
        </el-table-column>
        <el-table-column
          prop="prjType"
          label="课题类型">
        </el-table-column>
        <el-table-column
          prop="particiForm"
          label="参与形式">
        </el-table-column>
        <el-table-column
          prop="prjLevel"
          label="课题级别">
        </el-table-column>
        <el-table-column
          prop="prjFund"
          label="课题到款额">
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
            v-model="ketiForm.auditDesc"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="ketiAuditing('审核通过')">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="ketiAuditing('审核未通过')">审核未通过</el-button>
        <el-button type="primary" size="small" plain @click="VisibleOne = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleTwo" title="审核详情">
      <el-table
        :data="tableDataTwo"
        style="width: 100%">
        <el-table-column
          prop="paperName"
          label="学术成果名称">
        </el-table-column>
        <el-table-column
          prop="paperType"
          label="学术成果类型">
        </el-table-column>
        <el-table-column
          prop="pubDate"
          label="发表日期">
        </el-table-column>
        <el-table-column
          prop="ifFirstAuthor"
          label="是否第一作者">
        </el-table-column>
        <el-table-column
          prop="pubJournal"
          label="刊物名称">
        </el-table-column>
        <el-table-column
          prop="issn"
          label="刊号">
        </el-table-column>
        <el-table-column
          prop="journalLevel"
          label="刊物等级">
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
            v-model="xueshuForm.auditDesc"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="xueshuAuditing('审核通过')">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="xueshuAuditing('审核未通过')">审核未通过</el-button>
        <el-button type="primary" size="small" plain @click="VisibleTwo = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleThree" title="审核详情">
      <el-table
        :data="tableDataThree"
        style="width: 100%">
        <el-table-column
          prop="achieveName"
          label="科研成果名称">
        </el-table-column>
        <el-table-column
          prop="achieveType"
          label="科研成果类型">
        </el-table-column>
        <el-table-column
          prop="achieveLevel"
          label="科研成果级别">
        </el-table-column>
        <el-table-column
          prop="achieveDate"
          label="取得日期">
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
            v-model="keyanForm.auditDesc"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="keyanAuditing('审核通过')">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="keyanAuditing('审核未通过')">审核未通过</el-button>
        <el-button type="primary" size="small" plain @click="VisibleThree = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleFour" title="审核详情">
      <el-table
        :data="tableDataFour"
        style="width: 100%">
        <el-table-column
          prop="trainContent"
          label="培训项目名称">
        </el-table-column>
        <el-table-column
          prop="trainUnit"
          label="培训单位">
        </el-table-column>
        <el-table-column
          prop="personNum"
          label="参加人数">
        </el-table-column>
        <el-table-column
          prop="trainDay"
          label="培训天数">
        </el-table-column>
        <el-table-column
          prop="trainMoney"
          label="到款额">
        </el-table-column>
        <el-table-column
          prop="startDate"
          label="培训开始时间">
        </el-table-column>
        <el-table-column
          prop="endDate"
          label="培训结束时间">
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
            v-model="shehuiForm.auditDesc"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="shehuiAuditing('审核通过')">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="shehuiAuditing('审核未通过')">审核未通过</el-button>
        <el-button type="primary" size="small" plain @click="VisibleFour = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleFive" title="审核详情">
      <el-table
        :data="tableDataFive"
        style="width: 100%">
        <el-table-column
          prop="unitName"
          label="单位名称">
        </el-table-column>
        <el-table-column
          prop="practiceContent"
          label="实践内容">
        </el-table-column>
        <el-table-column
          prop="practiceMoney"
          label="到款额">
        </el-table-column>
        <el-table-column
          prop="startDate"
          label="实践开始时间">
        </el-table-column>
        <el-table-column
          prop="endDate"
          label="实践结束时间">
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
            v-model="shijianForm.auditDesc"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="shijianAuditing('审核通过')">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="shijianAuditing('审核未通过')">审核未通过</el-button>
        <el-button type="primary" size="small" plain @click="VisibleFive = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { personnelGetAuditingResearchList, deptGetAuditingResearchDetail,personnelBeginAuditingResearch } from '@/api/allTaskData'
  export default {
    name: "reasearchAndSocail",
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
        tableData:[],
        ketiForm:{
          id: '',
          tecUsername: '',
          ifTwoLevelAudit: '',
          auditType: '参与课题情况',
          auditStatus: '',
          auditDesc: ''
        },
        tableDataTwo:[],
        xueshuForm:{
          id: '',
          tecUsername: '',
          ifTwoLevelAudit: '',
          auditType: '学术成果情况',
          auditStatus: '',
          auditDesc: ''
        },
        tableDataThree:[],
        keyanForm:{
          id: '',
          tecUsername: '',
          ifTwoLevelAudit: '',
          auditType: '科研成果获奖情况',
          auditStatus: '',
          auditDesc: ''
        },
        tableDataFour:[],
        shehuiForm:{
          id: '',
          tecUsername: '',
          ifTwoLevelAudit: '',
          auditType: '社会培训情况',
          auditStatus: '',
          auditDesc: ''
        },
        tableDataFive:[],
        shijianForm:{
          id: '',
          tecUsername: '',
          ifTwoLevelAudit: '',
          auditType: '社会实践（兼职）情况',
          auditStatus: '',
          auditDesc: ''
        }
      }
    },
    mounted(){
      this.getAllAuditingList()
    },
    methods: {
      getAllAuditingList: function() {
        const prams = {
          // tecUsername: 'rmyzAdmin'
          tecUsername: localStorage.getItem('jwt')
        }
        personnelGetAuditingResearchList(prams).then(response=>{
          console.log('人事处测试获取所有的科研待审核')
          console.log(response.data.data)
          this.peopleData = response.data.data
        })
      },
      goView: function (row) {
        if(row.auditType === '参与课题情况'){
          this.VisibleOne = true
          const prams = {
            id: row.id,
            workType: row.auditType
          }
          deptGetAuditingResearchDetail(prams).then( response => {
            console.log('人事处根据id获取详情 参与课题')
            console.log(response.data)
            this.tableData = response.data.data
            this.shuoming = this.tableData[0].auditDesc
          })
        } else if (row.auditType === '学术成果情况'){
          this.VisibleTwo = true
          const prams = {
            id: row.id,
            workType: row.auditType
          }
          deptGetAuditingResearchDetail(prams).then( response => {
            console.log('人事处根据id获取详情 学术成果')
            console.log(response.data)
            this.tableDataTwo = response.data.data
            this.shuoming = this.tableDataTwo[0].auditDesc
          })
        } else if(row.auditType === '科研成果获奖情况'){
          this.VisibleThree = true
          const prams = {
            id: row.id,
            workType: row.auditType
          }
          deptGetAuditingResearchDetail(prams).then( response => {
            console.log('人事处根据id获取详情 科研成果获奖')
            console.log(response.data)
            this.tableDataThree = response.data.data
            this.shuoming = this.tableDataThree[0].auditDesc
            this.imgs.push(this.tableDataThree[0].picture)
          })
        } else if(row.auditType === '社会培训情况'){
          this.VisibleFour = true
          const prams = {
            id: row.id,
            workType: row.auditType
          }
          deptGetAuditingResearchDetail(prams).then( response => {
            console.log('人事处根据id获取详情 社会培训情况')
            console.log(response.data)
            this.tableDataFour = response.data.data
            this.shuoming = this.tableDataFour[0].auditDesc
          })
        } else if(row.auditType === '社会实践（兼职）情况'){
          this.VisibleFive = true
          const prams = {
            id: row.id,
            workType: row.auditType
          }
          deptGetAuditingResearchDetail(prams).then( response => {
            console.log('人事处根据id获取详情 社会实践兼职情况')
            console.log(response.data)
            this.tableDataFive = response.data.data
            this.shuoming = this.tableDataFive[0].auditDesc
          })
        }
      },
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        this.currentPage = val;
      },
      ketiAuditing: function (status) {
        this.ketiForm.auditStatus = status
        this.ketiForm.id = this.tableData[0].id
        // this.ketiForm.tecUsername = 'rmyzAdmin'
        this.ketiForm.tecUsername = localStorage.getItem('jwt')
        personnelBeginAuditingResearch(this.ketiForm).then(response => {
          console.log('测试人事处开始审核科研与社会服务 参与课题项目')
          console.log(response.data)
          this.VisibleOne = false
          this.$message({
            message: '审核完成',
            type: 'success'
          });
          this.getAllAuditingList()
        })
      },
      xueshuAuditing: function (status) {
        this.xueshuForm.auditStatus = status
        this.xueshuForm.id = this.tableDataTwo[0].id
        // this.xueshuForm.tecUsername = 'rmyzAdmin'
        this.xueshuForm.tecUsername = localStorage.getItem('jwt')
        personnelBeginAuditingResearch(this.xueshuForm).then(response => {
          console.log('测试人事处开始审核科研与社会服务 学术成果情况')
          console.log(response.data)
          this.VisibleTwo = false
          this.$message({
            message: '审核完成',
            type: 'success'
          });
          this.getAllAuditingList()
        })
      },
      keyanAuditing: function (status) {
        this.keyanForm.auditStatus = status
        this.keyanForm.id = this.tableDataThree[0].id
        // this.keyanForm.tecUsername = 'rmyzAdmin'
        this.keyanForm.tecUsername = localStorage.getItem('jwt')
        personnelBeginAuditingResearch(this.keyanForm).then(response => {
          console.log('测试人事处开始审核科研与社会服务 科研成果获奖情况')
          console.log(response.data)
          this.VisibleThree = false
          this.$message({
            message: '审核完成',
            type: 'success'
          });
          this.getAllAuditingList()
        })
      },
      shehuiAuditing: function (status) {
        this.shehuiForm.auditStatus = status
        this.shehuiForm.id = this.tableDataFour[0].id
        // this.shehuiForm.tecUsername = 'rmyzAdmin'
        this.shehuiForm.tecUsername = localStorage.getItem('jwt')
        personnelBeginAuditingResearch(this.shehuiForm).then(response => {
          console.log('测试人事处开始审核科研与社会服务 社会培训情况')
          console.log(response.data)
          this.VisibleFour = false
          this.$message({
            message: '审核完成',
            type: 'success'
          });
          this.getAllAuditingList()
        })
      },
      shijianAuditing: function (status) {
        this.shijianForm.auditStatus = status
        this.shijianForm.id = this.tableDataFive[0].id
        // this.shijianForm.tecUsername = 'rmyzAdmin'
        this.shijianForm.tecUsername = localStorage.getItem('jwt')
        personnelBeginAuditingResearch(this.shijianForm).then(response => {
          console.log('测试人事处开始审核科研与社会服务 社会实践兼职情况')
          console.log(response.data)
          this.VisibleFive = false
          this.$message({
            message: '审核完成',
            type: 'success'
          });
          this.getAllAuditingList()
        })
      }
    }
  }
</script>

<style scoped>

</style>
