<template>
  <div class="app-container">
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">参与教研项目情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addMatch">新增</el-button></div>
    </div>
    <el-table :data="matchData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%" stripe>
      <el-table-column prop="prjName" label="项目名称" >
      </el-table-column>
      <el-table-column prop="particiForm" label="参与形式">
      </el-table-column>
      <el-table-column prop="prjLevel" label="项目级别" >
      </el-table-column>
      <el-table-column prop="startDate" label="项目开始时间" >
      </el-table-column>
      <el-table-column prop="endDate" label="项目结束时间" >
      </el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope">
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
          <el-button type="text" size="medium" @click="changematch(scope.row)">修改</el-button>
          <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" disabled="true" @click="deletework">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-size="10"
        :page-sizes="[5, 10]"
        :total="matchData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <div>
      <el-dialog :visible.sync="addMatchVisible" :title="title">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="项目名称">
            <el-input v-model="form.prjName"/>
          </el-form-item>
          <el-form-item label="参与形式">
            <el-select v-model="form.particiForm" style="width: 250px" placeholder="请选择">
              <el-option label="主持" value="主持" />
              <el-option label="参与" value="参与" />
            </el-select>
          </el-form-item>
          <el-form-item label="项目级别">
            <el-select v-model="form.prjLevel" style="width: 250px" placeholder="请选择">
              <el-option label="国家级" value="国家级" />
              <el-option label="省级" value="省级" />
              <el-option label="院级" value="院级" />
            </el-select>
          </el-form-item>
          <el-form-item label="项目开始时间">
            <el-col :span="11">
              <el-date-picker v-model="form.startDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="项目结束时间">
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
import {addResearch,getResearch} from '@/api/join'
    export default {
      name: "tableParticipateConstruction",
      data(){
        return{
          addMatchVisible:false,
          detailFlag:false,
          title:'',
          form:{},
          detail:{},
          matchData: [],
          currentPage: 1, // 当前页码
          pageSize: 5 // 每页的数据条数
        }
      },
      mounted() {
        this.getList()
      },
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.currentPage = 1;
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
          this.title = '增加参与教研项目情况'
          this.addMatchVisible = true;
        },
        changematch(row){
          this.title = '修改比赛信息'
          this.form = row
          this.addMatchVisible = true;
        },
        submitMatchSuccess(){
           // this.form.usrName = 'rmyzAdmin'
          this.form.usrName = localStorage.getItem('jwt')
          // this.form.usrName = '10011'
          console.log("Form", this.form)
          addResearch(this.form).then(res => {
            if(res.data.code === 0) {
              this.$message({
                type:'success',
                message:res.data.msg
              })
              this.addMatchVisible = false
              this.getList()
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
        },
        getList() {
           // var username = 'rmyzAdmin'
          var username = localStorage.getItem('jwt')
          //var username = '10011'
          getResearch({
            usrname:username
          }).then(res => {
            this.matchData = res.data.data
            console.log("全部数据zm",this.matchData)
          })
        },
      }
    }
</script>

<style scoped>

</style>
