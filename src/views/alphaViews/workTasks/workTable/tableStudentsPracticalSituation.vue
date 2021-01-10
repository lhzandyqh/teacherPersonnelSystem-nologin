<template>
  <div class="app-container">
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">指导学生实训情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addMatch">新增</el-button></div>
    </div>
    <el-table :data="matchData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%" stripe>
      <el-table-column prop="trainingName" label="实训项目名称" >
      </el-table-column>
      <el-table-column prop="trainingHour" label="实训项目课时">
      </el-table-column>
      <el-table-column prop="trainingMajor" label="实训专业" >
      </el-table-column>
      <el-table-column prop="startDate" label="实训开始时间" >
      </el-table-column>
      <el-table-column prop="endDate" label="实训结束时间" >
      </el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope" >
          <el-tag  v-if="scope.row.checkStatus==='审核不通过'" type="danger" >审核不通过</el-tag>
          <el-tag  v-if="scope.row.checkStatus==='审核中'" >审核中</el-tag>
          <el-tag  v-if="scope.row.checkStatus==='审核通过'" type="success">审核通过</el-tag>
        </template>
      </el-table-column>
      <!--      <el-table-column  label="详情">-->
      <!--        <template slot-scope="scope">-->
      <!--          <el-button type="text" size="medium" @click="viewDetail(scope.row)">查看详细信息</el-button>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
<!--          <el-button type="text" size="medium" @click="changematch(scope.row)">修改</el-button>-->
          <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" @click="deletework" disabled="true">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="[5, 10]"
        :total="matchData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <div>
      <el-dialog :visible.sync="addMatchVisible" :title="title">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="实训项目名称">
            <el-input v-model="form.trainingName"/>
          </el-form-item>
          <el-form-item label="实训项目课时">
            <el-input v-model="form.trainingHour"/>
          </el-form-item>
          <el-form-item label="实训专业">
            <el-input v-model="form.trainingMajor"/>
          </el-form-item>
          <el-form-item label="实训开始时间">
            <el-col :span="11">
              <el-date-picker v-model="form.startDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="实训结束时间">
            <el-col :span="11">
              <el-date-picker v-model="form.endDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addMatchVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitMatchSuccess">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import {guideStudentAdd, guideStudentSelect} from '@/api/taskSubmiss'
    export default {
      name: "tableStudentsPracticalSituation",
      data(){
        return{
          addMatchVisible:false,
          detailFlag:false,
          title:'',
          form:{},
          detail:{},
          matchData: [],
          currentPage: 1, // 当前页码
          pageSize: 10 // 每页的数据条数
        }
      },
      mounted () {
        this.getGuideStudentInfo()
      },
      methods: {
        getGuideStudentInfo () {
          // const username = 'rmyzAdmin';
          const username = localStorage.getItem('jwt')
          // usrname
          guideStudentSelect({
            usrname: username
          }).then(res => {
            if (res.data.code === 0) {
              this.matchData = res.data.data
            }
            console.log('知道情况：', res.data)
          })
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          // this.currentPage = 1;
          this.pageSize = val;
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.currentPage = val;
        },
        reset(){
          this.form = {
            matchname:undefined,
            matchtime:undefined,
            matchsub:undefined,
            matchprogress:undefined,
            matchwork:undefined,
            matchresult:undefined,
            beizhu:undefined,
          }
        },
        viewDetail(row){
          this.detailFlag = true
          this.title = '详细信息'
          this.detail = row
          console.log(row)
        },
        addMatch(){
          this.reset()
          this.title = '增加指导学生实训情况'
          this.addMatchVisible = true;
        },
        changematch(row){
          this.title = '修改比赛信息'
          this.form = row
          this.addMatchVisible = true;
        },
        submitMatchSuccess(){
          // const username = 'rmyzAdmin';
          const username = localStorage.getItem('jwt')
          this.form.usrName = username
          guideStudentAdd(this.form).then(res => {
            console.log('add：', res.data)
            if (res.data.code === 0) {
              // this.matchData.push(res.data.data)
              this.getGuideStudentInfo()
              this.$message({
                type:'success',
                message:'提交成功'
              })
              this.addMatchVisible = false
            }
          })
        },
        deletework() {
          this.$confirm('确认删除此条信息?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      },
    }
</script>

<style scoped>

</style>
