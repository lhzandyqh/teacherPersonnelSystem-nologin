<template>
  <div class="app-container">
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">社会实践（兼职）情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addMatch">新增</el-button></div>
    </div>
    <el-table :data="matchData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%" stripe>
      <el-table-column prop="unitName" label="单位名称" >
      </el-table-column>
      <el-table-column prop="practiceContent" label="实践内容">
      </el-table-column>
      <el-table-column prop="practiceMoney" label="到款额">
      </el-table-column>
      <el-table-column prop="startDate" label="实践开始时间" >
      </el-table-column>
      <el-table-column prop="endDate" label="实践结束时间" >
      </el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.auditStatus==='审核不通过'" type="danger" >审核不通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='审核中'" >审核中</el-tag>
          <el-tag  v-if="scope.row.auditStatus==='审核通过'" type="success">审核通过</el-tag>
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
          <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" @click="deletework" disabled="true">删除</el-button>
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
          <el-form-item label="单位名称">
            <el-input v-model="form.unitName"/>
          </el-form-item>
          <el-form-item label="实践内容">
            <el-input v-model="form.practiceContent"/>
          </el-form-item>
          <el-form-item label="到款额">
            <el-input v-model="form.practiceMoney"/>
          </el-form-item>
          <el-form-item label="实践开始时间">
          <el-col :span="11">
            <el-date-picker v-model="form.startDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
          </el-col>
        </el-form-item>
          <el-form-item label="实践结束时间">
            <el-col :span="11">
              <el-date-picker v-model="form.endDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addMatchVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitMatchSuccess('form')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {getSocialdo, updateSocialdo} from "../../../../api/allTaskData";

    export default {
      name: "tableSocialPractice",
      data(){
        return{
          addMatchVisible:false,
          detailFlag:false,
          title:'',
          form:{},
          detail:{},
          // tecUsername: 'rmyzAdmin',
          tecUsername: localStorage.getItem('jwt'),
          matchData: [],
          currentPage: 1, // 当前页码
          pageSize: 10 // 每页的数据条数
        }
      },
      mounted(){
    this.getTableData(this.tecUsername);
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
            tecUsername:'',
            unitName:undefined,
            practiceContent:undefined,
            practiceMoney:undefined,
            startDate:undefined,
            endDate:undefined,

          }
        },
        //  getlist(){
        //    getSocialdo({
        //     tecUsername:'rmyzAdmin',
        //    }).then( res => {
        //      console.log('res',res)
        //      this.matchData = res.data.data
        //    })
        // },
        viewDetail(row){
          this.detailFlag = true
          this.title = '详细信息'
          this.detail = row
          console.log(row)
        },
        addMatch(){
          this.reset()
          this.title = '增加社会实践情况'
          this.addMatchVisible = true;
        },
        changematch(row){
          this.title = '修改比赛信息'
          this.form = row
          this.addMatchVisible = true;
        },
        submitMatchSuccess(formName){
           this.$refs[formName].validate((valid) => {
           if (valid) {
              this.form.tecUsername = this.tecUsername
              updateSocialdo(this.form).then(response => {
                if (response.data.msg === '成功') {
                  this.$message({
                    type: 'success',
                    message: '添加成功'
                  });
                  this.getTableData(this.tecUsername);
                  this.addMatchVisible = false;
                }
              })
            } else {
              console.log('添加失败');
              return false;
            }
      });
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
         getTableData(tecUsername) {
         getSocialdo({
            tecUsername: tecUsername
          }).then(response => {
            this.matchData = response.data.data
          })
        },
      }
    }
</script>

<style scoped>

</style>
