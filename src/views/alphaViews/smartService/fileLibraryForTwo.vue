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
    </div>
  </div>
</template>

<script>
import { getAllFileInfo } from '@/api/smartService'
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
      optionstwo: [
        {
          value: '人事工作',
          label: '人事工作'
        }, {
          value: '教师编制',
          label: '教师编制'
        }, {
          value: '职工培训',
          label: '职工培训'
        }, {
          value: '职工考勤',
          label: '职工考勤'
        }, {
          value: '职工保险及医疗',
          label: '职工保险及医疗'
        }, {
          value: '职工工资及福利',
          label: '职工工资及福利'
        }],
      value: '',
      valuea: '',
      list: [{
        userid: '1',
        id: '32081',
        filename: '2019年度绩效审核表',
        type: '人事工作',
        people: '432',
        who: '刘老师',
        date: '2019-12-21'
      }, {
        userid: '2',
        id: '32082',
        filename: '教师职称评定表',
        type: '教师编制',
        people: '308',
        who: '刘老师',
        date: '2019-11-15'
      }, {
        userid: '3',
        id: '32083',
        filename: '新入职工工作须知',
        type: '职工培训',
        people: '3298',
        who: '刘老师',
        date: '2019-06-12'
      }, {
        userid: '2',
        id: '32084',
        filename: '2019年度医保审核表',
        type: '职工保险及医疗',
        people: '244',
        who: '刘老师',
        date: '2019-05-21'
      }, {
        userid: '5',
        id: '32085',
        filename: '教师工资提档申报表',
        type: '职工工资及福利',
        people: '322',
        who: '刘老师',
        date: '2019-04-22'
      }],
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      dialogPvVisible: false,
      thisId: ''
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
    downloadFile: function (row){
      var url = row.fileUrl
      window.open(url)
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

