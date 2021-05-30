<template>
  <div class="app-container">
    <el-table :data="allData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
      <el-table-column prop="createTime" label="提交日期" />
      <el-table-column prop="teaUsrname" label="提交人" />
      <el-table-column prop="dept" label="部门" />
      <el-table-column prop="categoryTip" label="审核类型" />
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.checkStatus==='审核通过'" type="success">审核通过</el-tag>
          <el-tag v-if="scope.row.checkStatus==='审核未通过'" type="danger">审核未通过</el-tag>
          <el-tag v-if="scope.row.checkStatus==='审核不通过'" type="danger">审核未通过</el-tag>
          <el-tag v-if="scope.row.checkStatus==='审核中'">待审核</el-tag>
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
          prop="trainingName"
          label="实训项目名称">
        </el-table-column>
        <el-table-column
          prop="trainingHour"
          label="实训项目课时">
        </el-table-column>
        <el-table-column
          prop="trainingMajor"
          label="实训专业">
        </el-table-column>
        <el-table-column
          prop="startDate"
          label="实训开始时间">
        </el-table-column>
        <el-table-column
          prop="endDate"
          label="实训结束时间">
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
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">人事处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="shuomingtwo"
            :rows="4"
            type="textarea"
            disabled="disabled"
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="primary" size="small" plain @click="VisibleOne = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleTwo" title="审核详情">
      <el-table
        :data="tableDataTwo"
        style="width: 100%">
        <el-table-column
          prop="graduPrjName"
          label="学生毕业设计题目">
        </el-table-column>
        <el-table-column
          prop="stuName"
          label="学生姓名">
        </el-table-column>
        <el-table-column
          prop="stuId"
          label="学生学号">
        </el-table-column>
        <el-table-column
          prop="stuMajor"
          label="学生专业">
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
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">人事处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="shuomingtwo"
            :rows="4"
            type="textarea"
            disabled="disabled"
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="primary" size="small" plain @click="VisibleTwo = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleThree" title="审核详情">
      <el-table
        :data="tableDataThree"
        style="width: 100%">
        <el-table-column
          prop="contestName"
          label="赛事名称">
        </el-table-column>
        <el-table-column
          prop="contestType"
          label="赛事类别">
        </el-table-column>
        <el-table-column
          prop="contestLevel"
          label="赛事级别">
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
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">人事处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="shuomingtwo"
            :rows="4"
            type="textarea"
            disabled="disabled"
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="primary" size="small" plain @click="VisibleThree = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleFour" title="审核详情">
      <el-table
        :data="tableDataFour"
        style="width: 100%">
        <el-table-column
          prop="constructContent"
          label="建设内容">
        </el-table-column>
        <el-table-column
          prop="constructType"
          label="建设类别">
        </el-table-column>
        <el-table-column
          prop="startDate"
          label="建设开始时间">
        </el-table-column>
        <el-table-column
          prop="endDate"
          label="建设结束时间">
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
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">人事处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="shuomingtwo"
            :rows="4"
            type="textarea"
            disabled="disabled"
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="primary" size="small" plain @click="VisibleFour = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleFive" title="审核详情">
      <el-table
        :data="tableDataFive"
        style="width: 100%">
        <el-table-column
          prop="prjName"
          label="项目名称">
        </el-table-column>
        <el-table-column
          prop="particiForm"
          label="参与形式">
        </el-table-column>
        <el-table-column
          prop="prjLevel"
          label="项目级别">
        </el-table-column>
        <el-table-column
          prop="startDate"
          label="项目开始时间">
        </el-table-column>
        <el-table-column
          prop="endDate"
          label="项目结束时间">
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
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">人事处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="shuomingtwo"
            :rows="4"
            type="textarea"
            disabled="disabled"
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="primary" size="small" plain @click="VisibleFive = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleSix" title="审核详情">
      <el-table
        :data="tableDataSix"
        style="width: 100%">
        <el-table-column
          prop="textbookName"
          label="教材名称">
        </el-table-column>
        <el-table-column
          prop="particiForm"
          label="参与形式">
        </el-table-column>
        <el-table-column
          prop="textbookType"
          label="教材类别">
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
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">人事处意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="shuomingtwo"
            :rows="4"
            type="textarea"
            disabled="disabled"
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="primary" size="small" plain @click="VisibleSix = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { teacherGetTeachHistory, getTeachAuditingItemDetail, perGetTeachAuditingItemDetail } from '@/api/allTaskData'
    export default {
      name: "teachHistoryTable",
      data() {
        return {
          imgs: [],
          shuoming: '',
          shuomingtwo: '',
          currentPage: 1,
          pageSize: 5,
          AuditingReason: '',
          allData: [],
          VisibleOne: false,
          VisibleTwo: false,
          VisibleThree: false,
          VisibleFour: false,
          VisibleFive: false,
          VisibleSix: false,
          tableData: [],
          tableDataTwo: [],
          tableDataThree: [],
          tableDataFour: [],
          tableDataFive: [],
          tableDataSix: [],
        }
      },
      mounted(){
        this.getAllHistoryData()
      },
      methods: {
        getAllHistoryData: function() {
          const prams = {
            // tecUsername: 'rmyzAdmin',
            // usrName: 'rmyzAdmin',
            usrName: localStorage.getItem('jwt'),
            category: '工作任务'
            // tecUsername: localStorage.getItem('jwt')
          }
          teacherGetTeachHistory(prams).then(response =>{
            console.log('测试教师获取教学与专业发展审核历史')
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
          if(row.categoryTip === '指导学生实训情况'){
            this.VisibleOne = true
            this.checkId = row.checkId
            const prams = {
              id: row.id,
              categoryTip: row.categoryTip,
              checkId: row.checkId
            }
            perGetTeachAuditingItemDetail(prams).then( response => {
              console.log('教师根据id获取详情 指导学生实训情况')
              console.log(response.data.data)
              // this.tableData = response.data.data
              this.tableData = []
              this.tableData.push(response.data.data.checkInfoDetail)
              this.shuoming = response.data.data.deptCheckInfo.deptCheckComment
              this.shuomingtwo = response.data.data.deptCheckInfo.personnelCheckComment
              console.log(this.tableData)
            })
          } else if (row.categoryTip === '指导学生毕设情况'){
            this.VisibleTwo = true
            this.checkId = row.checkId
            const prams = {
              id: row.id,
              categoryTip: row.categoryTip,
              checkId: row.checkId
            }
            perGetTeachAuditingItemDetail(prams).then( response => {
              console.log('教师根据id获取详情 指导学生毕设情况')
              console.log(response.data.data)
              // this.tableData = response.data.data
              this.tableDataTwo = []
              this.tableDataTwo.push(response.data.data.checkInfoDetail)
              this.shuoming = response.data.data.deptCheckInfo.deptCheckComment
              this.shuomingtwo = response.data.data.deptCheckInfo.personnelCheckComment
              console.log(this.tableDataTwo)
            })
          } else if(row.categoryTip === '教育教学获奖情况'){
            this.VisibleThree = true
            this.checkId = row.checkId
            const prams = {
              id: row.id,
              categoryTip: row.categoryTip,
              checkId: row.checkId
            }
            perGetTeachAuditingItemDetail(prams).then( response => {
              console.log('教师根据id获取详情 教育教学获奖情况')
              console.log(response.data.data)
              // this.tableData = response.data.data
              this.tableDataThree = []
              this.tableDataThree.push(response.data.data.checkInfoDetail)
              this.shuoming = response.data.data.deptCheckInfo.deptCheckComment
              this.shuomingtwo = response.data.data.deptCheckInfo.personnelCheckComment
              this.imgs.push(this.tableDataThree[0].picture)
              console.log(this.tableDataThree)
            })
          } else if(row.categoryTip === '参与建设情况'){
            this.VisibleFour = true
            this.checkId = row.checkId
            const prams = {
              id: row.id,
              categoryTip: row.categoryTip,
              checkId: row.checkId
            }
            perGetTeachAuditingItemDetail(prams).then( response => {
              console.log('教师根据id获取详情 参与建设情况')
              console.log(response.data.data)
              // this.tableData = response.data.data
              this.tableDataFour = []
              this.tableDataFour.push(response.data.data.checkInfoDetail)
              this.shuoming = response.data.data.deptCheckInfo.deptCheckComment
              this.shuomingtwo = response.data.data.deptCheckInfo.personnelCheckComment
              console.log(this.tableDataFour)
            })
          } else if(row.categoryTip === '参与教研项目情况'){
            this.VisibleFive = true
            this.checkId = row.checkId
            const prams = {
              id: row.id,
              categoryTip: row.categoryTip,
              checkId: row.checkId
            }
            perGetTeachAuditingItemDetail(prams).then( response => {
              console.log('教师根据id获取详情 参与教研项目情况')
              console.log(response.data.data)
              // this.tableData = response.data.data
              this.tableDataFive = []
              this.tableDataFive.push(response.data.data.checkInfoDetail)
              this.shuoming = response.data.data.deptCheckInfo.deptCheckComment
              this.shuomingtwo = response.data.data.deptCheckInfo.personnelCheckComment
              console.log(this.tableDataFive)
            })
          } else if(row.categoryTip === '参与编写教材情况'){
            this.VisibleSix = true
            this.checkId = row.checkId
            const prams = {
              id: row.id,
              categoryTip: row.categoryTip,
              checkId: row.checkId
            }
            perGetTeachAuditingItemDetail(prams).then( response => {
              console.log('教师根据id获取详情 参与编写教材情况')
              console.log(response.data.data)
              // this.tableData = response.data.data
              this.tableDataSix = []
              this.tableDataSix.push(response.data.data.checkInfoDetail)
              this.shuoming = response.data.data.deptCheckInfo.deptCheckComment
              this.shuomingtwo = response.data.data.deptCheckInfo.personnelCheckComment
              console.log(this.tableDataSix)
            })
          }
        },
      }
    }
</script>

<style scoped>

</style>
