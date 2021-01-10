<template>
    <div class="app-container">
      <el-table :data="peopleData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
        <el-table-column prop="createTime" label="提交日期" />
        <el-table-column prop="teaUsrname" label="提交人" />
        <el-table-column prop="dept" label="部门" />
        <el-table-column prop="categoryTip" label="类型" />
        <el-table-column label="系部审核状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.deptCheckStatus==='通过'" type="success">审核通过</el-tag>
            <el-tag v-if="scope.row.deptCheckStatus==='不通过'" type="danger">审核未通过</el-tag>
            <el-tag v-if="scope.row.deptCheckStatus==='待审核'">待审核</el-tag>
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
              v-model="shixunAuditingResult.deptCheckComment"
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
              v-model="shixunForm.deptCheckComment"
              :rows="4"
              type="textarea"
              placeholder="请输入内容"
            />
          </el-row>
        </div>
        <div class="foot"style="text-align: center;margin-top: 30px">
          <el-button type="success" size="small" plain @click="shixunAuditing('通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="shixunAuditing('不通过')">审核未通过</el-button>
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
              v-model="shejiAuditingResult.deptCheckComment"
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
              v-model="shejiForm.deptCheckComment"
              :rows="4"
              type="textarea"
              placeholder="请输入内容"
            />
          </el-row>
        </div>
        <div class="foot"style="text-align: center;margin-top: 30px">
          <el-button type="success" size="small" plain @click="shejiAuditing('通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="shejiAuditing('不通过')">审核未通过</el-button>
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
              v-model="huojiangAuditingResult.deptCheckComment"
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
              v-model="huojiangForm.deptCheckComment"
              :rows="4"
              type="textarea"
              placeholder="请输入内容"
            />
          </el-row>
        </div>
        <div class="foot"style="text-align: center;margin-top: 30px">
          <el-button type="success" size="small" plain @click="huojiangAuditing('通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="huojiangAuditing('不通过')">审核未通过</el-button>
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
              v-model="jiansheAuditingResult.deptCheckComment"
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
              v-model="jiansheForm.deptCheckComment"
              :rows="4"
              type="textarea"
              placeholder="请输入内容"
            />
          </el-row>
        </div>
        <div class="foot"style="text-align: center;margin-top: 30px">
          <el-button type="success" size="small" plain @click="jiansheAuditing('通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="jiansheAuditing('不通过')">审核未通过</el-button>
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
              v-model="jiaoyanAuditingResult.deptCheckComment"
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
              v-model="jiaoyanForm.deptCheckComment"
              :rows="4"
              type="textarea"
              placeholder="请输入内容"
            />
          </el-row>
        </div>
        <div class="foot"style="text-align: center;margin-top: 30px">
          <el-button type="success" size="small" plain @click="jiaoyanAuditing('通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="jiaoyanAuditing('不通过')">审核未通过</el-button>
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
              v-model="jiaocaiAuditingResult.deptCheckComment"
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
              v-model="jiaocaiForm.deptCheckComment"
              :rows="4"
              type="textarea"
              placeholder="请输入内容"
            />
          </el-row>
        </div>
        <div class="foot"style="text-align: center;margin-top: 30px">
          <el-button type="success" size="small" plain @click="jiaocaiAuditing('通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="jiaocaiAuditing('不通过')">审核未通过</el-button>
          <el-button type="primary" size="small" plain @click="VisibleSix = false">关闭</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import { perGetTeachAuditingList, perGetTeachAuditingItemDetail, perBeginAuditing} from '@/api/allTaskData'
    export default {
        name: "teachAndProTable",
      data() {
          return {
            checkId: '',
            imgs: [],
            radio: '1',
            currentPage: 1,
            pageSize: 10,
            VisibleOne: false,
            VisibleTwo: false,
            VisibleThree: false,
            VisibleFour: false,
            VisibleFive: false,
            VisibleSix: false,
            peopleData:[],
            tableData: [],
            shixunForm: {
              checkId: '',
              usrName: '',
              deptCheckComment: '',
              deptCheckStatus: ''
            },
            shixunAuditingResult: {},
            tableDataTwo: [],
            shejiForm: {
              checkId: '',
              usrName: '',
              deptCheckComment: '',
              deptCheckStatus: ''
            },
            shejiAuditingResult: {},
            tableDataThree: [],
            huojiangForm: {
              checkId: '',
              usrName: '',
              deptCheckComment: '',
              deptCheckStatus: ''
            },
            huojiangAuditingResult: {},
            tableDataFour: [],
            jiansheForm: {
              checkId: '',
              usrName: '',
              deptCheckComment: '',
              deptCheckStatus: ''
            },
            jiansheAuditingResult: {},
            tableDataFive: [],
            jiaoyanForm: {
              checkId: '',
              usrName: '',
              deptCheckComment: '',
              deptCheckStatus: ''
            },
            jiaoyanAuditingResult: {},
            tableDataSix: [],
            jiaocaiForm: {
              checkId: '',
              usrName: '',
              deptCheckComment: '',
              deptCheckStatus: ''
            },
            jiaocaiAuditingResult: {},
          }
      },
      mounted() {
        this.getAllList()
      },
      methods: {
        getAllList: function() {
          const prams = {
            // usrName: 'rmyzAdmin',
            usrName: localStorage.getItem('jwt'),
            category: '工作任务'
          }
          perGetTeachAuditingList(prams).then(response => {
            console.log('人事处获取教学与专业发展待审核列表')
            console.log(response.data)
            this.peopleData = response.data.data
            console.log(this.peopleData)
          })
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
              console.log('人事处根据id获取详情 指导学生实训情况')
              console.log(response.data.data)
              // this.tableData = response.data.data
              this.tableData = []
              this.tableData.push(response.data.data.checkInfoDetail)
              this.shixunAuditingResult = response.data.data.deptCheckInfo
              console.log('测试shixunAuditingResult')
              console.log(this.shixunAuditingResult)
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
              console.log('人事处根据id获取详情 指导学生毕设情况')
              console.log(response.data.data)
              // this.tableData = response.data.data
              this.tableDataTwo = []
              this.tableDataTwo.push(response.data.data.checkInfoDetail)
              this.shejiAuditingResult = response.data.data.deptCheckInfo
              console.log('shejiAuditingResult')
              console.log(this.shejiAuditingResult)
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
              console.log('人事处根据id获取详情 教育教学获奖情况')
              console.log(response.data.data)
              // this.tableData = response.data.data
              this.tableDataThree = []
              this.tableDataThree.push(response.data.data.checkInfoDetail)
              this.huojiangAuditingResult = response.data.data.deptCheckInfo
              console.log('huojiangAuditingResult')
              console.log(this.huojiangAuditingResult)
              console.log(this.tableDataThree)
              this.imgs.push(this.tableDataThree[0].picture)
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
              console.log('人事处根据id获取详情 参与建设情况')
              console.log(response.data.data)
              // this.tableData = response.data.data
              this.tableDataFour = []
              this.tableDataFour.push(response.data.data.checkInfoDetail)
              this.jiansheAuditingResult = response.data.data.deptCheckInfo
              console.log('huojiangAuditingResult')
              console.log(this.jiansheAuditingResult)
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
              console.log('人事处根据id获取详情 参与教研项目情况')
              console.log(response.data.data)
              // this.tableData = response.data.data
              this.tableDataFive = []
              this.tableDataFive.push(response.data.data.checkInfoDetail)
              this.jiaoyanAuditingResult = response.data.data.deptCheckInfo
              console.log('jiaoyanAuditingResult')
              console.log(this.jiaoyanAuditingResult)
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
              console.log('人事处根据id获取详情 参与编写教材情况')
              console.log(response.data.data)
              // this.tableData = response.data.data
              this.tableDataSix = []
              this.tableDataSix.push(response.data.data.checkInfoDetail)
              this.jiaocaiAuditingResult = response.data.data.deptCheckInfo
              console.log('jiaocaiAuditingResult')
              console.log(this.jiaocaiAuditingResult)
              console.log(this.tableDataSix)
            })
          }
        },
        handleSizeChange(val) {
          this.pageSize = val;
        },
        handleCurrentChange(val) {
          this.currentPage = val;
        },
        shixunAuditing: function (status) {
          this.shixunForm.deptCheckStatus = status
          // this.shixunForm.checkId = this.tableData[0].checkId
          this.shixunForm.checkId = this.checkId
          // this.shixunForm.usrName = 'rmyzAdmin'
          this.shixunForm.usrName = localStorage.getItem('jwt')
          console.log(this.shixunForm)
          perBeginAuditing(this.shixunForm).then(response => {
            console.log('测试人事处开始审核教学与专业发展 指导学生实训情况')
            console.log(response.data)
            this.VisibleOne = false
            this.$message({
              message: '审核完成',
              type: 'success'
            });
            this.getAllList()
          })
        },
        shejiAuditing: function (status) {
          this.shejiForm.deptCheckStatus = status
          // this.shixunForm.checkId = this.tableData[0].checkId
          this.shejiForm.checkId = this.checkId
          // this.shejiForm.usrName = 'rmyzAdmin'
          this.shejiForm.usrName = localStorage.getItem('jwt')
          console.log(this.shejiForm)
          perBeginAuditing(this.shejiForm).then(response => {
            console.log('测试人事处开始审核教学与专业发展 指导学生毕设情况')
            console.log(response.data)
            this.VisibleTwo = false
            this.$message({
              message: '审核完成',
              type: 'success'
            });
            this.getAllList()
          })
        },
        huojiangAuditing: function (status) {
          this.huojiangForm.deptCheckStatus = status
          // this.shixunForm.checkId = this.tableData[0].checkId
          this.huojiangForm.checkId = this.checkId
          // this.huojiangForm.usrName = 'rmyzAdmin'
          this.huojiangForm.usrName = localStorage.getItem('jwt')
          console.log(this.huojiangForm)
          perBeginAuditing(this.huojiangForm).then(response => {
            console.log('测试人事处开始审核教学与专业发展 教育教学获奖情况')
            console.log(response.data)
            this.VisibleThree = false
            this.$message({
              message: '审核完成',
              type: 'success'
            });
            this.getAllList()
          })
        },
        jiansheAuditing: function (status) {
          this.jiansheForm.deptCheckStatus = status
          // this.shixunForm.checkId = this.tableData[0].checkId
          this.jiansheForm.checkId = this.checkId
          // this.jiansheForm.usrName = 'rmyzAdmin'
          this.jiansheForm.usrName = localStorage.getItem('jwt')
          console.log(this.jiansheForm)
          perBeginAuditing(this.jiansheForm).then(response => {
            console.log('测试人事处开始审核教学与专业发展 参与建设情况')
            console.log(response.data)
            this.VisibleFour = false
            this.$message({
              message: '审核完成',
              type: 'success'
            });
            this.getAllList()
          })
        },
        jiaoyanAuditing: function (status) {
          this.jiaoyanForm.deptCheckStatus = status
          // this.shixunForm.checkId = this.tableData[0].checkId
          this.jiaoyanForm.checkId = this.checkId
          // this.jiaoyanForm.usrName = 'rmyzAdmin'
          this.jiaoyanForm.usrName = localStorage.getItem('jwt')
          console.log(this.jiaoyanForm)
          perBeginAuditing(this.jiaoyanForm).then(response => {
            console.log('测试人事处开始审核教学与专业发展 参与教研项目情况')
            console.log(response.data)
            this.VisibleFive = false
            this.$message({
              message: '审核完成',
              type: 'success'
            });
            this.getAllList()
          })
        },
        jiaocaiAuditing: function (status) {
          this.jiaocaiForm.deptCheckStatus = status
          // this.shixunForm.checkId = this.tableData[0].checkId
          this.jiaocaiForm.checkId = this.checkId
          // this.jiaocaiForm.usrName = 'rmyzAdmin'
          this.jiaocaiForm.usrName = localStorage.getItem('jwt')
          console.log(this.jiaocaiForm)
          perBeginAuditing(this.jiaocaiForm).then(response => {
            console.log('测试人事处开始审核教学与专业发展 参与编写教材情况')
            console.log(response.data)
            this.VisibleSix = false
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
  .dialog-footer{
    text-align: center;
  }
</style>
