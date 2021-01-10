<template>
  <div class="app-container">
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">学术成果情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addMatch">新增</el-button></div>
    </div>
    <el-table :data="matchData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%" stripe>
      <el-table-column prop="paperName" label="学术成果名称" >
      </el-table-column>
      <el-table-column prop="paperType" label="学术成果类型">
      </el-table-column>
      <el-table-column prop="pubDate" label="发表时间">
      </el-table-column>
      <el-table-column prop="ifFirstAuthor" label="是否第一作者" >
      </el-table-column>
      <el-table-column prop="pubJournal" label="刊物名称" >
      </el-table-column>
      <el-table-column prop="issn" label="刊号" >
      </el-table-column>
      <el-table-column prop="journalLevel" label="刊物等级" >
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
        <el-form ref="form" :model="form" :rules="rules" label-width="120px">
          <el-form-item label="学术成果名称" prop="paperName">
            <el-input v-model="form.paperName"/>
          </el-form-item>
          <el-form-item label="学术成果类型" prop="paperType">
            <el-input v-model="form.paperType"/>
          </el-form-item>
          <el-form-item label="发表时间" prop="pubDate">
            <el-col :span="11">
              <el-date-picker v-model="form.pubDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="是否第一作者" prop="ifFirstAuthor">
            <el-select v-model="form.ifFirstAuthor" style="width: 250px" placeholder="请选择">
              <el-option label="是" value="是" />
              <el-option label="否" value="否" />
            </el-select>
          </el-form-item>
          <el-form-item label="刊物名称" prop="pubJournal">
            <el-input v-model="form.pubJournal"/>
          </el-form-item>
          <el-form-item label="刊号" prop="issn">
            <el-input v-model="form.issn"/>
          </el-form-item>
          <el-form-item label="刊物等级" prop="paperName">
            <el-select v-model="form.journalLevel" style="width: 250px" placeholder="请选择">
              <el-option label="EI" value="EI" />
              <el-option label="SCI" value="SCI" />
              <el-option label="中文核心" value="中文核心" />
              <el-option label="普通期刊" value="普通期刊" />
            </el-select>
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
import {addTeaPaperInfo, getTeaPaperInfos} from "../../../../api/allTaskData";

    export default {
      name: "tableParticipateProject",
      data(){
        return{
          addMatchVisible: false,
          detailFlag: false,
          title: '',
          form: {},
          detail: {},
          matchData: [],
          // tecUsername: 'rmyzAdmin',
          tecUsername: localStorage.getItem('jwt'),
          currentPage: 1,
          pageSize: 10,
          rules: {
            paperName: [
              { required: true, message: '请输入学术成果名称', trigger: 'blur' },
            ],
            paperType: [
              { required: true, message: '请输入学术成果类型', trigger: 'blur' },
            ],
            pubDate: [
              { required: true, message: '请选择发表时间', trigger: 'change' },
            ],
            ifFirstAuthor: [
              { required: true, message: '请选择是否第一作者', trigger: 'change' },
            ],
            pubJournal: [
              { required: true, message: '请输入刊物名称', trigger: 'blur' },
            ],
            issn: [
              { required: true, message: '请输入刊号', trigger: 'blur' },
            ],
            journalLevel: [
              { required: true, message: '请选择刊物等级', trigger: 'change' },
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
            "ifFirstAuthor": "",
            "issn": "",
            "journalLevel": "",
            "paperName": "",
            "paperType": "",
            "pubDate": "",
            "pubJournal": "",
            "tecUsername": ""
          };
        },
        viewDetail(row){
          this.detailFlag = true
          this.title = '详细信息'
          this.detail = row
          console.log(row)
        },
        addMatch(){
          this.reset()
          this.title = '增加学术成果'
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
              addTeaPaperInfo(this.form).then(response => {
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
          getTeaPaperInfos({
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
