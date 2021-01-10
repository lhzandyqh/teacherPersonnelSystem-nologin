<template>
  <div class="app-container">
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">参与课题情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addMatch">新增</el-button></div>
    </div>
    <el-table :data="matchData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%" stripe>
      <el-table-column prop="prjName" label="课题名称" >
      </el-table-column>
      <el-table-column prop="prjType" label="课题类型">
      </el-table-column>
      <el-table-column prop="particiForm" label="参与形式">
      </el-table-column>
      <el-table-column prop="prjLevel" label="课题级别" >
      </el-table-column>
      <el-table-column prop="prjFund" label="课题到款额" >
      </el-table-column>
      <el-table-column prop="startDate" label="开始时间" >
      </el-table-column>
      <el-table-column prop="endDate" label="结束时间" >
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
          <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" disabled="true" @click="deletework">删除</el-button>
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
        <el-form :model="form" ref="addForm" :rules="rules" label-width="100px">
          <el-form-item label="课题名称" prop="prjName">
            <el-input v-model="form.prjName"/>
          </el-form-item>
          <el-form-item label="课题类型" prop="prjType">
            <el-select v-model="form.prjType" style="width: 250px" placeholder="请选择">
              <el-option label="横向" value="横向" />
              <el-option label="纵向" value="纵向" />
            </el-select>
          </el-form-item>
          <el-form-item label="参与形式" prop="particiForm">
            <el-select v-model="form.particiForm" style="width: 250px" placeholder="请选择">
              <el-option label="主持" value="主持" />
              <el-option label="参与" value="参与" />
            </el-select>
          </el-form-item>
          <el-form-item label="课题级别" prop="prjLevel">
            <el-select v-model="form.prjLevel" style="width: 250px" placeholder="请选择">
              <el-option label="国家级" value="国家级" />
              <el-option label="省级" value="省级" />
              <el-option label="院级" value="院级" />
            </el-select>
          </el-form-item>
          <el-form-item label="课题到款额" prop="prjFund">
            <el-input v-model="form.prjFund" type="number" :min="0" />
          </el-form-item>
          <el-form-item label="开始时间" prop="startDate">
            <el-col :span="11">
              <el-date-picker v-model="form.startDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="结束时间" prop="endDate">
            <el-col :span="11">
              <el-date-picker v-model="form.endDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addMatchVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitMatchSuccess('addForm')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {addTeaParticiResearch, getTeaParticiResearch} from "../../../../api/allTaskData";

    export default {
      name: "tableParticipateProject",
      data(){
        return{
          addMatchVisible:false,
          detailFlag:false,
          title:'',
          form: {},
          detail:{},
          matchData: [],
          // tecUsername: 'rmyzAdmin',
          tecUsername: localStorage.getItem('jwt'),
          currentPage: 1,
          pageSize: 10,
          rules: {
            prjName: [
              { required: true, message: '请输入课题名称', trigger: 'blur' },
            ],
            prjType: [
              { required: true, message: '请选择课题类型', trigger: 'change' },
            ],
            particiForm: [
              { required: true, message: '请选择参与形式', trigger: 'change' },
            ],
            prjLevel: [
              { required: true, message: '请选择课题级别', trigger: 'change' },
            ],
            prjFund: [
              { required: true, message: '请输入课题到款额', trigger: 'blur' },
            ],
            startDate: [
              { required: true, message: '请选择开始时间', trigger: 'change' },
            ],
            endDate: [
              { required: true, message: '请选择结束时间', trigger: 'change' },
            ],
          }
        }
      },
      mounted() {
        this.getTableData(this.tecUsername);
      },
      methods: {
        handleSizeChange(val) {
          this.pageSize = val;
        },
        handleCurrentChange(val) {
          this.currentPage = val;
        },
        reset(){
          this.form = {
            "endDate": "",
            "particiForm": "",
            "prjFund": "",
            "prjLevel": "",
            "prjName": "",
            "prjType": "",
            "startDate": "",
            "tecUsername": ""
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
          this.title = '增加参与课题情况'
          this.addMatchVisible = true;
        },
        changematch(row){
          this.title = '修改比赛信息'
          this.form = row
          this.addMatchVisible = true;
        },
        submitMatchSuccess(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.form.tecUsername = this.tecUsername
              addTeaParticiResearch(this.form).then(response => {
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
        getTableData(tecUsername) {
          getTeaParticiResearch({
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
