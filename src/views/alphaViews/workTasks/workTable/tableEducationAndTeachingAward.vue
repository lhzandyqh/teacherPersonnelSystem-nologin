<template>
  <div class="app-container">
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">教育教学获奖情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addMatch">新增</el-button></div>
    </div>
    <el-table :data="matchData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%" stripe>
      <el-table-column prop="contestName" label="赛事名称" >
      </el-table-column>
      <el-table-column prop="contestType" label="赛事类别">
      </el-table-column>
      <el-table-column prop="contestLevel" label="赛事级别" >
      </el-table-column>
      <el-table-column prop="awardLevel" label="获奖级别" >
      </el-table-column>
      <el-table-column prop="awardDate" label="获奖时间" >
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
          <el-button type="text" size="medium" @click="lookDetail(scope.row)">查看详情</el-button>
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
          <el-form-item label="赛事名称">
            <el-input v-model="form.contestName"/>
          </el-form-item>
          <el-form-item label="赛事类别">
            <el-select v-model="form.contestType" style="width: 250px" placeholder="请选择">
              <el-option label="教学能力比赛" value="教学能力比赛" />
              <el-option label="专业技能竞赛" value="专业技能竞赛" />
              <el-option label="教学质量工程" value="教学质量工程" />
            </el-select>
          </el-form-item>
          <el-form-item label="赛事级别">
            <el-select v-model="form.contestLevel" style="width: 250px" placeholder="请选择">
              <el-option label="国家级" value="国家级" />
              <el-option label="省级" value="省级" />
              <el-option label="院级" value="院级" />
            </el-select>
          </el-form-item>
          <el-form-item label="获奖级别">
            <el-select v-model="form.awardLevel" style="width: 250px" placeholder="请选择">
              <el-option label="一等奖" value="一等奖" />
              <el-option label="二等奖" value="二等奖" />
              <el-option label="三等奖" value="三等奖" />
              <el-option label="优秀奖" value="优秀奖" />
            </el-select>
          </el-form-item>
          <el-form-item label="获奖时间">
            <el-col :span="11">
              <el-date-picker v-model="form.awardDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="附件上传">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :http-request="uploadPic"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传获奖证书封面页和内容页</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addMatchVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitMatchSuccess">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog
        title="详情"
        :visible.sync="dialogVisibleTwo"
        width="50%"
        :before-close="handleClose"
      >
        <el-carousel indicator-position="outside" height="600px">
          <el-carousel-item v-for="(src,item) in imgs" :key="item">
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
  import {eduAndTeachAdd, eduAndTeachSelect} from '@/api/taskSubmiss'
  import { uploadPicture } from '@/api/personalInformation'
    export default {
      name: "tableEducationAndTeachingAward",
      data(){
        return{
          dialogVisibleTwo: false,
          addMatchVisible:false,
          detailFlag:false,
          title:'',
          form:{},
          detail:{},
          matchData: [],
          picUrl: [],
          fileList: [],
          imgs: [],
          currentPage: 1, // 当前页码
          pageSize: 10 // 每页的数据条数
        }
      },
      mounted() {
        this.getEduList()
      },
      methods: {
        getEduList () {
          // const username = 'rmyzAdmin';
          const username = localStorage.getItem('jwt')
          eduAndTeachSelect({
            usrname: username
          }).then(res => {
            if (res.data.code === 0) {
              console.log('huojiang:', res.data)
              this.matchData = res.data.data
            }
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
          this.title = '增加教育教学获奖情况'
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
          this.form.picture = this.picUrl.join(',')
          console.log('文件列表：', this.form)
          eduAndTeachAdd(this.form).then(res => {
            if (res.data.code === 0) {
              // this.matchData.push(res.data.data)
              this.getEduList()
              this.$message({
                type:'success',
                message:'提交成功'
              })
              this.addMatchVisible = false
            }
            console.log(res.data)
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
          console.log('details:', row)
          this.imgs = row.picture
          this.dialogVisibleTwo = true
        },
        handleRemove(file, fileList) {
          console.log(file, fileList)
        },
        beforeRemove(file, fileList) {
          console.log(file, fileList)
        },
        handlePreview(file) {
          console.log(file)
        },
        uploadPic: function(params) {
          const formData = new FormData()
          formData.append('file', params.file)
          uploadPicture(formData).then(response => {
            console.log('测试图片上传')
            console.log(response)
            this.picUrl.push(response.data.data.fileUrl)
            console.log('picture:', this.picUrl)
          })
        },
      }
    }
</script>

<style scoped>

</style>
