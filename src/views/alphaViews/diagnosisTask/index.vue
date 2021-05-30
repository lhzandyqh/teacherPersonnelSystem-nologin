<template>
  <div class="app-container">
    <el-row :gutter="20">
    <div class="show_card_container">
      <div class="left_icon_container">
        <img src="../../../assets/icon/task1.png">
      </div>
      <div class="right_text_container">
        <div class="text_header">
          <span>进行中任务</span>
        </div>
        <div class="number_container">
          <span>13</span>
        </div>
      </div>
    </div>
    <div class="show_card_container">
      <div class="left_icon_container">
        <img src="../../../assets/icon/task2.png">
      </div>
      <div class="right_text_container">
        <div class="text_header">
           <span>预警任务</span>
        </div>
        <div class="number_container">
          <span>7</span>
        </div>
      </div>
    </div>
    <div class="show_card_container">
      <div class="left_icon_container">
        <img src="../../../assets/icon/task3.png">
      </div>
      <div class="right_text_container">
        <div class="text_header">
          <span>累积完成任务</span>
        </div>
        <div class="number_container">
          <span>23</span>
        </div>
      </div>
    </div>
    </el-row>
    <el-divider/>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="进行中" name="first">
          <el-table
            :data="tableDataOne.slice((currentPage1-1)*pageSize1,currentPage1*pageSize1)"
            stripe
            style="width: 100%"
            @selection-change="handleSelectionChange1">
            <el-table-column
              prop="number"
              label="序号"
              width="150px"
            />
            <el-table-column
              prop="taskName"
              label="任务名称"
            />
            <el-table-column
              prop="issuer"
              label="发布人"
            />
            <el-table-column
              prop="status"
              label="状态"
            />
            <el-table-column
              prop="startTime"
              label="开始时间"
            />
            <el-table-column
              prop="endTime"
              label="截止时间"
            />
            <el-table-column align="center" label="操作"  width="250px">
<!--            <el-table-column class="row" label="操作">-->
              <template slot-scope="scope">
                <a href="#" target="_blank">查看任务详情</a>
                <a @click="dialogVisibleOne = true">审核提交</a>
              </template>
            </el-table-column>
          </el-table>
<!--          <el-dialog-->
<!--            title="提示"-->
<!--            :visible.sync="dialogVisibleOne"-->
<!--            width="30%"-->
<!--            :before-close="handleClose">-->
<!--            <span>查看任务详情</span>-->
<!--            <span slot="footer" class="dialog-footer">-->
<!--              <el-button @click="dialogVisibleOne = false">取 消</el-button>-->
<!--              <el-button type="primary" @click="dialogVisibleOne = false">确 定</el-button>-->
<!--            </span>-->
<!--            <a href="#" target="_blank">查看任务详情</a>-->
<!--          </el-dialog>-->
          <el-dialog
            title="任务审核"
            :visible.sync="dialogVisibleOne"
            width="30%"
            :before-close="handleClose">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="审核时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="审核备注">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <div style="text-align: right">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary">上传审核书</el-button>
                  <!--                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
              <div class="foot">
                <span slot="footer" class="dialog-footer">
                  <el-button type="success" size="small" plain @click="pass">提交</el-button>
<!--                  <el-button type="danger" size="small" plain @click="nopass">审核未通过</el-button>-->
                  <el-button type="primary" @click="dialogVisibleOne = false" size="small" plain>关闭</el-button>
                </span>
              </div>
            </el-form>
<!--            <span slot="footer" class="dialog-footer">-->
<!--              <el-button @click="dialogVisible = false">取 消</el-button>-->
<!--              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
<!--            </span>-->
          </el-dialog>
          <div class="fenye">
            <el-pagination
              :current-page="currentPage1"
              :page-sizes="[5, 10, 20, 30]"
              :page-size="5"
              style="margin-top:20px;"
              :total= "tableDataOne.length"
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChange1"
              @current-change="handleCurrentChange1"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="已完成" name="second">
          <el-table
            :data="tableDataTwo.slice((currentPage2-1)*pageSize2,currentPage2*pageSize2)"
            stripe
            style="width: 100%"
            @selection-change="handleSelectionChange2">
            <el-table-column
              prop="number"
              label="序号"
              width="150px"
            />
            <el-table-column
              prop="taskName"
              label="任务名称"
            />
            <el-table-column
              prop="issuer"
              label="发布人"
            />
            <el-table-column
              prop="status"
              label="状态"
            />
            <el-table-column
              prop="startTime"
              label="开始时间"
            />
            <el-table-column
              prop="endTime"
              label="结束时间"
            />
            <el-table-column align="center" label="操作"  width="250px">
              <template slot-scope="scope">
                <a href="#" target="_blank">查看任务详情</a>
<!--                <el-button type="text" @click="dialogVisibleThree = true">查看任务书</el-button>-->
<!--                <el-button type="text" @click="dialogVisibleFour = true">审核提交</el-button>-->
              </template>
            </el-table-column>
          </el-table>
<!--          <el-dialog-->
<!--            title="提示"-->
<!--            :visible.sync="dialogVisibleThree"-->
<!--            width="30%"-->
<!--            :before-close="handleClose">-->
<!--            <span>查看任务详情</span>-->
<!--            <span slot="footer" class="dialog-footer">-->
<!--              <el-button @click="dialogVisibleThree = false">取 消</el-button>-->
<!--              <el-button type="primary" @click="dialogVisibleThree = false">确 定</el-button>-->
<!--            </span>-->
<!--          </el-dialog>-->
          <div class="fenye">
            <el-pagination
              :current-page="currentPage2"
              :page-sizes="[5, 10, 20, 30]"
              :page-size="5"
              style="margin-top:20px;"
              :total= "tableDataTwo.length"
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChange2"
              @current-change="handleCurrentChange2"
            />
          </div>
        </el-tab-pane>
      </el-tabs>


  </div>

</template>

<script>
export default {
  name: 'clinicalTask',
  data() {
    return {
      dialogVisibleOne: false,
      activeName: 'first',
      multipleSelection1: [],
      currentPage1: 1,
      pageSize1: 5,
      multipleSelection2: [],
      currentPage2: 1,
      pageSize2: 5,
      form: {
        date1: '',
        date2: '',
        desc: '',
        doc: ''
      },
      tableDataOne: [{
        number: '0201011',
        issuer: '刘老师',
        taskName: '智慧校园建设',
        status: '进行中',
        startTime: '2020-10-1',
        endTime: '2021-9-1',
        zhuangtai: 1
      }, {
        number: '0201043',
        issuer: '刘老师',
        taskName: '智能公交系统',
        status: '进行中',
        startTime: '2020-5-2',
        endTime: '2021-3-1',
        zhuangtai: 1
      }, {
          number: '0201043',
          issuer: '刘老师',
          taskName: '智能公交系统',
          status: '进行中',
          startTime: '2020-5-2',
          endTime: '2021-3-1',
          zhuangtai: 1
        },{
        number: '0201076',
        issuer: '刘老师',
        taskName: '中学智能成绩平台',
        status: '进行中',
        startTime: '2019-5-19',
        endTime: '2021-5-20',
        zhuangtai: 2
      }, {
        number: '0202001',
        issuer: '刘老师',
        taskName: '教师测评平台',
        status: '进行中',
        startTime: '2020-8-15',
        endTime: '2021-12-30',
        zhuangtai: 1
      }, {
        number: '0202023',
        issuer: '刘老师',
        taskName: '智能工地监控平台',
        status: '进行中',
        startTime: '2020-10-15',
        endTime: '2021-12-30',
        zhuangtai: 3
      }],
      tableDataTwo: [{
        number: '0201102',
        issuer: '刘老师',
        taskName: '智慧校园建设',
        status: '已提交',
        startTime: '2020-10-1',
        endTime: '2021-9-1',
        zhuangtai: 1
      }, {
        number: '0201020',
        issuer: '刘老师',
        taskName: '智能公交系统',
        status: '已提交',
        startTime: '2020-6-1',
        endTime: '2021-3-1',
        zhuangtai: 1
      }, {
        number: '0201030',
        issuer: '李老师',
        taskName: '智能公交系统',
        status: '已提交',
        startTime: '2020-4-1',
        endTime: '2021-5-6',
        zhuangtai: 1
      }, {
        number: '0201031',
        issuer: '刘老师',
        taskName: '智能支付系统',
        status: '已提交',
        startTime: '2019-5-19',
        endTime: '2021-5-20',
        zhuangtai: 2
      }, {
        number: '0202032',
        issuer: '刘老师',
        taskName: '高考成绩查询',
        status: '已提交',
        startTime: '2020-8-15',
        endTime: '2021-12-30',
        zhuangtai: 1
      }, {
        number: '0202023',
        issuer: '刘老师',
        taskName: '电动车物联网',
        status: '已提交',
        startTime: '2020-10-15',
        endTime: '2021-12-30',
        zhuangtai: 3
      }]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log('submit!');
    },
    handleSelectionChange1(val) {
      this.multipleSelection1 = val
    },
    handleSizeChange1(val) {
      this.currentPage1 = 1
      this.pageSize1 = val
    },
    handleCurrentChange1(val) {
      this.currentPage1 = val
    },
    handleSelectionChange2(val) {
      this.multipleSelection2 = val
    },
    handleSizeChange2(val) {
      this.currentPage2 = 1
      this.pageSize2 = val
    },
    handleCurrentChange2(val) {
      this.currentPage2 = val
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {
        });
    }
  }
}
</script>

<style scoped>
.show_card_container {
  float: left;
  width: 25%;
  border-radius: 1rem;
  background: white;
  box-shadow: 0.2rem 0.2rem 0.1rem #cecdcd;
  margin-top: 0.5%;
  margin-left: 5%;
}
.left_icon_container {
  float: left;
  height: 100%;
  width: 40%;
  background: deepskyblue;
  border-radius: 1rem 0 0 1rem;
  text-align: center;
}
.left_icon_container img {
  width: 60%;
  height: 60%;
  /*background-position: center;*/
  margin-top: 20%;
  margin-bottom: 20%;
}
.right_text_container {
  float: left;
  display: inline-block;
  height: 100%;
  width: 60%;
  border-radius: 0 1rem 1rem 0;
  /*background-color: pink;*/
}
.text_header {
  width: 100%;
  height: 40%;
  text-align: center;
  margin-top: 10%;
}
.text_header span {
  color: #656668;
  font-size: 22px;
  font-weight: bold;
}
.number_container {
  text-align: center;
  margin-top: 5%;
}
.number_container span {
  font-size: 3.2rem;
  font-weight: bold;
  color: #4dbae7;
}
 a {
   color: #40a9fe;
}
.fenye{
  text-align: center;
  margin-top: 20px;
}
.foot {
  margin-top: 10%;
  text-align: center
}
/*.row {*/
/*  text-align:center;*/
/*  width: 250px;*/
/*  height: 42px;*/
/*}*/
</style>
