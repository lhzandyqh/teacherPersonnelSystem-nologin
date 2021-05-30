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
          <el-tag v-if="scope.row.auditStatus==='审核未通过'" type="danger">审核未通过</el-tag>
          <el-tag v-if="scope.row.auditStatus==='审核不通过'" type="danger">审核未通过</el-tag>
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
            disabled="disabled"
            type="textarea"
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
            v-model="shuomingTwo"
            :rows="4"
            disabled="disabled"
            type="textarea"
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
            disabled="disabled"
            type="textarea"
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
            v-model="shuomingTwo"
            :rows="4"
            disabled="disabled"
            type="textarea"
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
            disabled="disabled"
            type="textarea"
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
            v-model="shuomingTwo"
            :rows="4"
            disabled="disabled"
            type="textarea"
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
            disabled="disabled"
            type="textarea"
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
            v-model="shuomingTwo"
            :rows="4"
            disabled="disabled"
            type="textarea"
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
            disabled="disabled"
            type="textarea"
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
            v-model="shuomingTwo"
            :rows="4"
            disabled="disabled"
            type="textarea"
            placeholder="暂无内容"
          />
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="primary" size="small" plain @click="VisibleFive = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { teacherGetResearchHistory, deptGetAuditingResearchDetail } from '@/api/allTaskData'
    export default {
      name: "reasearchHistoryTable",
      data() {
        return {
          imgs: [],
          VisibleOne: false,
          VisibleTwo: false,
          VisibleThree: false,
          VisibleFour: false,
          VisibleFive: false,
          currentPage: 1,
          pageSize: 5,
          AuditingReason: '',
          allData: [],
          tableData: [],
          tableDataTwo: [],
          tableDataThree: [],
          tableDataFour: [],
          tableDataFive: [],
          shuoming: '',
          shuomingTwo:''
        }
      },
      mounted(){
        this.getAllHistory()
      },
      methods: {
        goView: function (row) {
          if(row.auditType === '参与课题情况'){
            this.VisibleOne = true
            const prams = {
              id: row.id,
              workType: row.auditType
            }
            deptGetAuditingResearchDetail(prams).then( response => {
              console.log('教师根据id获取详情 参与课题')
              console.log(response.data)
              this.tableData = response.data.data
              this.shuoming = this.tableData[0].auditDesc
              this.shuomingTwo = this.tableData[0].auditDescTwo
            })
          } else if (row.auditType === '学术成果情况'){
            this.VisibleTwo = true
            const prams = {
              id: row.id,
              workType: row.auditType
            }
            deptGetAuditingResearchDetail(prams).then( response => {
              console.log('教师根据id获取详情 学术成果')
              console.log(response.data)
              this.tableDataTwo = response.data.data
              this.shuoming = this.tableDataTwo[0].auditDesc
              this.shuomingTwo = this.tableDataTwo[0].auditDescTwo
            })
          } else if(row.auditType === '科研成果获奖情况'){
            this.VisibleThree = true
            const prams = {
              id: row.id,
              workType: row.auditType
            }
            deptGetAuditingResearchDetail(prams).then( response => {
              console.log('教师根据id获取详情 科研成果获奖')
              console.log(response.data)
              this.tableDataThree = response.data.data
              this.shuoming = this.tableDataThree[0].auditDesc
              this.shuomingTwo = this.tableDataThree[0].auditDescTwo
              this.imgs.push(this.tableDataThree[0].picture)
            })
          } else if(row.auditType === '社会培训情况'){
            this.VisibleFour = true
            const prams = {
              id: row.id,
              workType: row.auditType
            }
            deptGetAuditingResearchDetail(prams).then( response => {
              console.log('教师根据id获取详情 社会培训情况')
              console.log(response.data)
              this.tableDataFour = response.data.data
              this.shuoming = this.tableDataFour[0].auditDesc
              this.shuomingTwo = this.tableDataFour[0].auditDescTwo
              this.tableDataFour = response.data.data
            })
          } else if(row.auditType === '社会实践（兼职）情况'){
            this.VisibleFive = true
            const prams = {
              id: row.id,
              workType: row.auditType
            }
            deptGetAuditingResearchDetail(prams).then( response => {
              console.log('教师根据id获取详情 社会实践兼职情况')
              console.log(response.data)
              this.tableDataFive = response.data.data
              this.shuoming = this.tableDataFive[0].auditDesc
              this.shuomingTwo = this.tableDataFive[0].auditDescTwo
            })
          }
        },
        getAllHistory: function(){
          const prams = {
            // tecUsername: 'rmyzAdmin'
            tecUsername: localStorage.getItem('jwt')
          }
          teacherGetResearchHistory(prams).then(response =>{
            console.log('教师测试获取科研审核历史')
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
        }
      }
    }
</script>

<style scoped>

</style>
