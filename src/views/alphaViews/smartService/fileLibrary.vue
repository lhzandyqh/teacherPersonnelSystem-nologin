<template>
  <div class="app-container">
    <div style="background-color: white;padding: 20px">
      <el-row :gutter="20">
        <div style="display: flex;align-items: center;margin: 15px 0;">
          <div style="font-size: 14px;margin: 0 15px;font-weight: bolder;width: 120px">请输入关键词查询:</div>
          <div>
            <el-input v-model="valuea" placeholder="请输入内容"></el-input>
          </div>
          <div>
            <el-button type="primary" style="margin-left:15px">查询</el-button>
          </div>
          <div style="margin-left: 50%">
            <el-button type="primary" @click="openUploadDialog">上传文件<i class="el-icon-upload el-icon--right" /></el-button>
          </div>
        </div>
      </el-row>
      <el-divider />
      <el-row>
        <el-table :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">

          <el-table-column align="center" label="序号">
            <template slot-scope="scope">
<!--              <span>{{ scope.row.userid }}</span>-->
              {{scope.$index+1}}
            </template>
          </el-table-column>

          <el-table-column align="center" label="文件编号">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="文件名">
            <template slot-scope="scope">
              <span>{{ scope.row.fileName }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="文件类型">
            <template slot-scope="scope">
              <span>{{ scope.row.fileType }}</span>
            </template>
          </el-table-column>

          <!--        <el-table-column align="center" label="年龄">-->
          <!--          <template slot-scope="scope">-->
          <!--            <span>{{ scope.row.certLevel }}</span>-->
          <!--          </template>-->
          <!--        </el-table-column>-->


          <el-table-column align="center" label="上传人">
            <template slot-scope="scope">
              <span>{{ scope.row.uploader }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="上传日期">
            <template slot-scope="scope">
              <span>{{ scope.row.uploadDate }}</span>
            </template>
          </el-table-column>

          <el-table-column
            prop="address"
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <el-button type="text" @click="downloadFile(scope.row)">下载</el-button>
              <el-button type="text" @click="deleteFile(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="fenye">
          <el-pagination
            :current-page="currentPage"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            :total="list.length"
            style="margin-top:20px;"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-row>
      <el-dialog
        title="文件上传"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="文件编号">
            <el-input v-model="fileForm.fileNum"></el-input>
          </el-form-item>
          <el-form-item label="文件名称">
            <el-input v-model="fileForm.fileName"></el-input>
          </el-form-item>
          <el-form-item label="文件类型">
            <el-input v-model="fileForm.fileType"></el-input>
          </el-form-item>
          <el-form-item label="上传人">
            <el-input v-model="fileForm.uploader"></el-input>
          </el-form-item>
          <el-form-item label="上传日期">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd" v-model="fileForm.uploadDate" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="文件">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :http-request="uploadFiles"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传文件</el-button>
              <div slot="tip" class="el-upload__tip">文件大小不超过1MB</div>
            </el-upload>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="confirmUpload">确 定</el-button>
  </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { uploadPicture } from '@/api/personalInformation'
import { getAllFileInfo, addFileInfo, deleteFileInfo } from '@/api/smartService'
export default {
  name: 'Index',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      fileList: [],
      form: {
        number: '',
        name: '',
        type: '',
        uploadPeople: '',
        date: '',
        fileUrl: ''
      },
      dialogVisible: false,
      pagesize: 10,
      currentPage: 1,
      value1: [],
      input: '',
      optionsone: [{
        value: '一',
        label: '高一'
      }, {
        value: '二',
        label: '高二'
      }, {
        value: '三',
        label: '高三'
      }],
      value: '',
      valuea: '',
      list: [],
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      dialogPvVisible: false,
      thisId: '',
      fileForm:{
        fileNum: '',
        fileType: '',
        downloadCount: '',
        fileName: '',
        fileUrl: '',
        uploader: '',
        uploadDate: '',
        id: '',
        url: ''
      }
    }
  },
  created() {
  },
  mounted() {
    this.getAllFile()
  },
  methods: {
    openUploadDialog: function (){
      this.dialogVisible = true
    },
    confirmUpload: function (){
      // this.fileForm.fileUrl =
      this.fileForm.fileUrl = this.fileList[0]
      console.log('增加文件上传信息测试参数')
      console.log(this.fileForm)
      addFileInfo(this.fileForm).then(response => {
        console.log('测试文件信息增加接口')
        console.log(response.data)
        this.$message({
          message: '上传成功',
          type: 'success'
        });
        this.dialogVisible = false
        this.fileForm.fileNum = ''
        this.fileForm.fileName = ''
        this.fileForm.fileType = ''
        this.fileForm.uploader = ''
        this.fileForm.uploadDate = ''
        this.getAllFile()
        this.fileList = []
      })
    },
    deleteFile: function (row){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const prams = {
          id: row.id,
          url: row.url
        }
        console.log(prams)
        deleteFileInfo(prams).then(response=>{
          console.log('测试删除')
          console.log(response.data)
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.getAllFile()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    },
    downloadFile: function (row){
      var url = row.fileUrl
      window.open(url)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
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
    uploadFiles: function(params) {
      const formData = new FormData()
      formData.append('file', params.file)
      uploadPicture(formData).then(response => {
        console.log('测试文件上传')
        console.log(response)
        this.fileList.push(response.data.data.fileUrl)
        console.log(this.fileList)
        this.fileForm.url = response.data.data.url
      })
    },
    getAllFile: function (){
      getAllFileInfo().then(response=>{
        console.log('测试获取所有的文件接口')
        console.log(response.data)
        this.list = response.data.data
      })
    }
  }
}
</script>

<style scoped>
  .edit-input {
    padding-right: 100px;
  }
  .cancel-btn {
    position: absolute;
    right: 15px;
    top: 10px;
  }
  .fenye {
    text-align: center;
  }
</style>

