<template>
  <div class="app-container">
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">承担辅导员工作</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addMatch">新增</el-button></div>
    </div>
    <el-table :data="matchData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%" stripe>
      <el-table-column prop="major" label="所在专业" >
      </el-table-column>
      <el-table-column prop="gradeClass" label="所在班级">
      </el-table-column>
      <el-table-column prop="startDate" label="开始时间" >
      </el-table-column>
      <el-table-column prop="endDate" label="结束时间" >
      </el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.auditStatus==='未开始'" type="danger" >审核不通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='待审核'" >审核中</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='已结束'" type="success">审核通过</el-tag>
        </template>
      </el-table-column>
      <!--      <el-table-column  label="详情">-->
      <!--        <template slot-scope="scope">-->
      <!--          <el-button type="text" size="medium" @click="viewDetail(scope.row)">查看详细信息</el-button>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <!-- <el-button type="text" size="medium" @click="changematch(scope.row)">修改</el-button> -->
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
          <el-form-item label="所在专业">
            <el-input v-model="form.major"/>
          </el-form-item>
          <el-form-item label="所在班级">
            <el-input v-model="form.gradeClass"/>
          </el-form-item>
          <el-form-item label="开始时间">
          <el-col :span="11">
            <el-date-picker v-model="form.startDate" value-format="yyyy-MM-dd" format="yyyy-MM-dd"  placeholder="选择日期" style="width: 60%;"/>
          </el-col>
        </el-form-item>
          <el-form-item label="结束时间">
            <el-col :span="11">
              <el-date-picker v-model="form.endDate" value-format="yyyy-MM-dd" format="yyyy-MM-dd"    placeholder="选择日期" style="width: 60%;"/>
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
import { teaBeCounselorInfosGetByTecUsername, teaBeCounselorInfoSet } from '@/api/tecWorkTask'
    export default {
      name: "tableSocialPractice",
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
            major:undefined,
            gradeClass:undefined,
            startDate:undefined,
            endDate:undefined
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
          this.title = '增加承担辅导员工作情况'
          this.addMatchVisible = true;
        },
        changematch(row){
          this.title = '修改比赛信息'
          this.form = row
          this.addMatchVisible = true;
        },
        submitMatchSuccess(){
          console.log("Form", this.form)
          this.form.tecUsername = 'rmyzAdmin'
           console.log("Form", this.form)
          teaBeCounselorInfoSet(this.form).then(res => {
            if(res.data.code === 0) {
              this.$message({
                type:'success',
                message:res.data.msg
              })
              this.addMatchVisible = false
              this.getList()
            }
          })
          // this.$message({
          //   type:'success',
          //   message:'提交成功'
          // })
          // this.addMatchVisible = false
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
          var username = 'rmyzAdmin'
          teaBeCounselorInfosGetByTecUsername(username).then(res => {
            this.matchData = res.data.data
          })
        }
      }
    }
</script>

<style scoped>

</style>
