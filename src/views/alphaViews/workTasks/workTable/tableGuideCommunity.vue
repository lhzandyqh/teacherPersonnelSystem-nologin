<template>
  <div class="app-container">
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">指导社团获奖情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addMatch">新增</el-button></div>
    </div>
    <el-table :data="matchData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%" stripe>
      <el-table-column prop="clubName" label="社团名称" >
      </el-table-column>
      <el-table-column prop="awardName" label="获奖名称">
      </el-table-column>
      <el-table-column prop="awardLevel" label="获奖级别">
      </el-table-column>
      <el-table-column prop="awardDate" label="获奖时间">
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
          <el-button type="text" size="medium" @click="lookDetail(scope.row)">查看详情</el-button>
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
          <el-form-item label="社团名称">
            <el-input v-model="form.clubName"/>
          </el-form-item>
          <el-form-item label="获奖名称">
            <el-input v-model="form.awardName"/>
          </el-form-item>
          <el-form-item label="获奖级别">
            <el-select v-model="form.awardLevel" style="width: 250px" placeholder="请选择">
              <el-option label="国家级" value="国家级" />
              <el-option label="省级" value="省级" />
              <el-option label="市级" value="市级" />
              <el-option label="院级" value="院级" />
            </el-select>
          </el-form-item>
          <el-form-item label="获奖时间">
          <el-col :span="11">
            <el-date-picker v-model="form.awardDate" value-format="yyyy-MM-dd" format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
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
import { teaInstructClubAwardInfosGetByUsername, teaInstructClubInfoAwardInfoSet, uploadPicture } from '@/api/tecWorkTask'
    export default {
      name: "tableSocialTraining",
      data(){
        return{
          dialogVisibleTwo: false,
          addMatchVisible:false,
          detailFlag:false,
          title:'',
          form:{},
          detail:{},
          matchData: [{}],
          picUrl: [],
          fileList: [],
          imgs: [],
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
          this.title = '增加指导社团获奖情况'
          this.addMatchVisible = true;
        },
        changematch(row){
          this.title = '修改比赛信息'
          this.form = row
          this.addMatchVisible = true;
        },
        submitMatchSuccess(){

          // this.form.tecUsername = 'rmyzAdmin'
          this.form.tecUsername = localStorage.getItem('jwt')
          this.form.picture = this.picUrl.join()

           console.log("Form", this.form)
          teaInstructClubInfoAwardInfoSet(this.form).then(res => {
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
        lookDetail: function (row) {
          console.log("row", row)
          this.dialogVisibleTwo = true
          //var str = "http://58.119.112.15:11004/pic/38c72f7d-ae00-4a81-9e5e-e0bdf91a8c3e.jpg,http://58.119.112.15:11004/pic/39f8f099-0e72-451c-a749-a8985bfd3c46.jpg"
          this.imgs = row.picture.split(",")
          //this.imgs = str.split(",")
        },
        getList() {
          // var username = 'rmyzAdmin'
          var username = localStorage.getItem('jwt')
          teaInstructClubAwardInfosGetByUsername(username).then(res => {
            this.matchData = res.data.data
          })
        },
        uploadPic(params) {
          const formData = new FormData()
          formData.append('file', params.file)
          uploadPicture(formData).then(response => {
            console.log('测试图片上传')
            console.log(response)
            this.picUrl.push(response.data.data.fileUrl)
            console.log(this.picUrl)
          })
        },
        handlePreview() {},
        handleRemove() {},
        beforeRemove() {},
        handleExceed() {},
        // handleClose() {}

      }
    }
</script>

<style scoped>

</style>
