<template>
  <div class="app-container">
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">科研成果获奖情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addMatch">新增</el-button></div>
    </div>
    <el-table :data="matchData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%" stripe>
      <el-table-column prop="achieveName" label="科研成果名称" >
      </el-table-column>
      <el-table-column prop="achieveType" label="科研成果类型">
      </el-table-column>
      <el-table-column prop="achieveLevel" label="科研成果级别">
      </el-table-column>
      <el-table-column prop="achieveDate" label="取得日期" >
      </el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.auditStatus === '未开始'" type="danger" >审核不通过</el-tag>
          <el-tag  v-if="scope.row.auditStatus === '待审核'" >审核中</el-tag>
          <el-tag  v-if="scope.row.auditStatus === '已结束'" type="success">审核通过</el-tag>
        </template>
      </el-table-column>
      <!--      <el-table-column  label="详情">-->
      <!--        <template slot-scope="scope">-->
      <!--          <el-button type="text" size="medium" @click="viewDetail(scope.row)">查看详细信息</el-button>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="medium" @click="lookDetail(scope.row)">查看详情</el-button>
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
        <el-form ref="form" :model="form" :rules="rules" label-width="130px">
          <el-form-item label="科研成果名称" prop="achieveName">
            <el-input v-model="form.achieveName"/>
          </el-form-item>
          <el-form-item label="科研成果类别" prop="achieveType">
            <el-select v-model="form.achieveType" style="width: 250px" placeholder="请选择">
              <el-option label="科学技术奖" value="科学技术奖" />
              <el-option label="科技进步奖" value="科技进步奖" />
              <el-option label="技术发明奖" value="技术发明奖" />
            </el-select>
          </el-form-item>
          <el-form-item label="科研成果级别" prop="achieveLevel">
            <el-select v-model="form.achieveLevel" style="width: 250px" placeholder="请选择">
              <el-option label="国家级" value="国家级" />
              <el-option label="省级" value="省级" />
              <el-option label="市级" value="市级" />
            </el-select>
          </el-form-item>
          <el-form-item label="获奖时间" prop="achieveDate">
            <el-col :span="11">
              <el-date-picker v-model="form.achieveDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="附件上传">
            <el-upload
              class="upload-demo"
              action="https://zhongkeruitong.top/yz_student/upload/fileUpdate"
              accept=".jpg, .png"
              :on-success="uploadSuccess"
              :on-remove="uploadRemove"
              multiple
              :limit="3"
              :file-list="uploadImg"
            >
              <el-button size="small" type="primary">点击上传获奖证书封面页和内容页</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addMatchVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitMatchSuccess('form')">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog
        title="详情"
        :visible.sync="dialogVisibleTwo"
        width="50%"
      >
        <el-carousel indicator-position="outside" height="600px">
          <el-carousel-item v-for="(src,item) in picture" :key="item">
            <img :src="src" style="max-width: 100%;max-height: 100%;display: block; margin: 0 auto;">
          </el-carousel-item>
        </el-carousel>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisibleTwo = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisibleTwo = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {addTeaSciAchieveInfo, getTeaSciAchieveInfos} from "../../../../api/allTaskData";

export default {
      name: "tableResearchAchievements",
      data(){
        return{
          dialogVisibleTwo: false,
          addMatchVisible:false,
          detailFlag:false,
          title:'',
          form:{},
          detail:{},
          matchData: [],
          tecUsername: 'rmyzAdmin',
          currentPage: 1,
          pageSize: 10,
          rules: {
            achieveName: [
              { required: true, message: '请输入科研成果名称', trigger: 'blur' },
            ],
            achieveType: [
              { required: true, message: '请选择科研成果类别', trigger: 'change' },
            ],
            achieveLevel: [
              { required: true, message: '请选择科研成果级别', trigger: 'change' },
            ],
            achieveDate: [
              { required: true, message: '请选择获奖时间', trigger: 'change' },
            ],
          },
          uploadImg: [],
          uploadImgUri: [],
          picture: []
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
        reset() {
          this.form = {
            "achieveDate": "",
            "achieveLevel": "",
            "achieveName": "",
            "achieveType": "",
            "picture": [],
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
          this.title = '增加科研成果获奖情况'
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
              if (this.uploadImgUri.length === 0) {
                this.$message.error('请上传图片');
                return false;
              } else {
                this.form.picture = this.uploadImgUri.toString();
                addTeaSciAchieveInfo(this.form).then(response => {
                  if (response.data.msg === '成功') {
                    this.$message({
                      type: 'success',
                      message: '添加成功'
                    });
                    this.uploadImg = [];
                    this.uploadImgUri = [];
                    this.getTableData(this.tecUsername);
                    this.addMatchVisible = false;
                  }
                })
              }
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
        lookDetail: function (row) {
          this.picture = row.picture;
          this.dialogVisibleTwo = true;
        },
        getTableData(tecUsername) {
          getTeaSciAchieveInfos({
            tecUsername: tecUsername
          }).then(response => {
            this.matchData = response.data.data
          })
        },
        uploadSuccess(response, file, fileList) {
          this.uploadImgUri.push(response.data.fileUrl);
        },
        uploadRemove(file, fileList) {
          this.uploadImgUri.pop();
        }
      }
    }
</script>

<style scoped>

</style>
