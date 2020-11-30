<template>
  <div class="app-container">
    <div style="background-color: white;padding: 20px">
    <el-row>
      <el-tabs>
        <el-tab-pane label="个人信息">
          <el-table
            :data="personData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="表名"
            />
            <el-table-column
              prop="personname"
              label="审核人"
            />
            <el-table-column
              prop="indate"
              label="填写日期"
            />
            <el-table-column
              prop="lastdate"
              label="有效期"
            />
            <el-table-column
              label="操作"
              align="center"
            >
              <template slot-scope="scope">
                <el-button @click="openpdf" type="text" size="medium" style="margin-right: 15px">预览</el-button>
                <a href="../../static/test1.pdf" class="download" download="test.pdf" title="下载" style="color: #00a4ff">点击下载</a>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="职业发展">
          <el-table
            :data="attendanceData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="表名"
            />
            <el-table-column
              prop="personname"
              label="审核人"
            />
            <el-table-column
              prop="indate"
              label="填写日期"
            />
            <el-table-column
              prop="lastdate"
              label="有效期"
            />
            <el-table-column
              label="操作"
              align="center"
            >
              <template slot-scope="scope">
                <el-button @click="openpdf" type="text" size="medium" style="margin-right: 15px">预览</el-button>
                <a href="../../static/test1.pdf" class="download" download="test1.pdf" title="下载" style="color: #00a4ff">点击下载</a>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="工作任务">
          <el-table
            :data="studyData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="表名"
            />
            <el-table-column
              prop="personname"
              label="审核人"
            />
            <el-table-column
              prop="indate"
              label="填写日期"
            />
            <el-table-column
              prop="lastdate"
              label="有效期"
            />
            <el-table-column
              label="操作"
              align="center"
            >
              <template slot-scope="scope">
                <el-button @click="openpdf" type="text" size="medium" style="margin-right: 15px">预览</el-button>
                <a href="../../static/test1.pdf" class="download" download="test.pdf" title="下载" style="color: #00a4ff">点击下载</a>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="工资信息">
          <el-table
            :data="moneyData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="表名"
            />
            <el-table-column
              prop="personname"
              label="审核人"
            />
            <el-table-column
              prop="indate"
              label="填写日期"
            />
            <el-table-column
              prop="lastdate"
              label="有效期"
            />
            <el-table-column
              label="操作"
              align="center"
            >
              <template slot-scope="scope">
                <el-button @click="openpdf" type="text" size="medium" style="margin-right: 15px">预览</el-button>
                <a href="../../static/test1.pdf" class="download" download="test.pdf" title="下载" style="color: #00a4ff">点击下载</a>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <div class="fenye">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="2">
      </el-pagination>
    </div>
    <div>
      <el-dialog :visible.sync="showpdf" title="显示pdf" width="80%" fullscreen="true" >
        <el-card class="pdfcard">
          <iframe :src="pathUr" width="100%" height="100%" style="position:static;left: 0px;top: 40px;" frameborder="0"></iframe>
        </el-card>
      </el-dialog>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentDownload',
  data() {
    return {
      showpdf:false,
      pathUr: '',
      moneyData:[{
        name: '2020-09工资表',
        personname:'王老师',
        indate:'2019-6-20',
        lastdate:'2022-6-20',
      },
        {
          name: '2020-05工资表',
          personname:'王老师',
          indate:'2019-6-20',
          lastdate:'2022-6-20',
        },
        {
          name: '2019年度工资表',
          personname:'王老师',
          indate:'2019-6-20',
          lastdate:'2022-6-20',
        },{
          name: '2019年代扣代缴部分',
          personname:'王老师',
          indate:'2019-6-20',
          lastdate:'2022-6-20',
        }],
      attendanceData:[{
        name: '个人分析',
        personname:'王老师',
        indate:'2019-6-20',
        lastdate:'2022-6-20',
      },
        {
          name: '2021年职业规划',
          personname:'王老师',
          indate:'2019-6-20',
          lastdate:'2022-6-20',
        },
        {
          name: '2023年职业规划',
          personname:'王老师',
          indate:'2019-6-20',
          lastdate:'2022-6-20',
        },{
          name: '2024年职业规划',
          personname:'王老师',
          indate:'2019-6-20',
          lastdate:'2022-6-20',
        },
        {
          name: '2025年职业规划',
          personname:'王老师',
          indate:'2019-6-20',
          lastdate:'2022-6-20',
        }],
      personData: [{
        name: '基本信息表',
        personname:'王老师',
        indate:'2019-6-20',
        lastdate:'2022-6-20',
      }, {
        name: '专业能力表',
        personname:'刘老师',
        indate:'2019-6-20',
        lastdate:'2022-6-20',
      },{
        name: '工作经历表',
        personname:'赵老师',
        indate:'2019-5-16',
        lastdate:'2022-5-28',
      },],
      studyData: [{
        name: '2019-2020学期教学工作情况表',
        personname:'王老师',
        indate:'2019-6-20',
        lastdate:'2022-6-20',
      }, {
        name: '2019年教学情况表',
        personname:'刘老师',
        indate:'2019-6-20',
        lastdate:'2022-6-20',
      },{
        name: '论文发表情况表',
        personname:'赵老师',
        indate:'2019-5-16',
        lastdate:'2022-5-28',
      },{
        name: '参加比赛情况表',
        personname:'赵老师',
        indate:'2019-5-16',
        lastdate:'2022-5-28',
      },{
        name: '组织指导课外活动情况表',
        personname:'赵老师',
        indate:'2019-5-16',
        lastdate:'2022-5-28',
      },{
        name: '参与进修教育情况表',
        personname:'赵老师',
        indate:'2019-5-16',
        lastdate:'2022-5-28',
      },],
    };
  },
  methods: {
    openpdf() {
      document.title = 'test1.pdf'
      let filePath = 'test1.pdf'
      this.pathUr = '../../static/pdfjs/web/viewer.html?file=' + filePath   //  根据自己的文件地址将viewe.html引进来
      this.showpdf = true;
    },
  }
}
</script>

<style scoped>
.fenye{
  margin-top: 20px;
  text-align: center;
}
/deep/ .el-dialog__header{
  padding-top: 10px;
}
/deep/ .el-card__body{
  height: 100%;
}
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
.pdfcard{
  width: 100%;
  height: 100vh;
}
</style>
