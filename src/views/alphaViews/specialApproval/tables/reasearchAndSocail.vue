<template>
  <div class="app-container">
    <el-table :data="peopleData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
      <el-table-column prop="subdate" label="提交日期" />
      <el-table-column prop="applypeople" label="提交人" />
      <el-table-column prop="department" label="部门" />
      <el-table-column prop="sub" label="类型" />
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.approval==='通过'" type="success">审核通过</el-tag>
          <el-tag v-if="scope.row.approval==='未通过'" type="danger">审核未通过</el-tag>
          <el-tag v-if="scope.row.approval==='待通过'">审核待通过</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="goView(scope.row)">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="[5, 10]"
        :total="peopleData.length"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog :visible.sync="VisibleOne" title="审核详情">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="课题名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="课题类型">
        </el-table-column>
        <el-table-column
          prop="address"
          label="参与形式">
        </el-table-column>
        <el-table-column
          prop="name"
          label="课题级别">
        </el-table-column>
        <el-table-column
          prop="address"
          label="课题到款额">
        </el-table-column>
        <el-table-column
          prop="address"
          label="开始时间">
        </el-table-column>
        <el-table-column
          prop="address"
          label="结束时间">
        </el-table-column>
      </el-table>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">系部意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="AuditingReason"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">是否提交人事处审核</span>
          <el-radio style="margin-left: 20px" v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="pass">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="pass">审核未通过</el-button>
        <el-button type="primary" size="small" plain @click="VisibleOne = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleTwo" title="审核详情">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="学术成果名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="学术成果类型">
        </el-table-column>
        <el-table-column
          prop="address"
          label="发表日期">
        </el-table-column>
        <el-table-column
          prop="name"
          label="是否第一作者">
        </el-table-column>
        <el-table-column
          prop="address"
          label="刊物名称">
        </el-table-column>
        <el-table-column
          prop="address"
          label="刊号">
        </el-table-column>
        <el-table-column
          prop="address"
          label="刊物等级">
        </el-table-column>
      </el-table>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">系部意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="AuditingReason"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">是否提交人事处审核</span>
          <el-radio style="margin-left: 20px" v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="pass">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="pass">审核未通过</el-button>
        <el-button type="primary" size="small" plain @click="VisibleTwo = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleThree" title="审核详情">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="科研成果名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="科研成果类型">
        </el-table-column>
        <el-table-column
          prop="name"
          label="科研成果级别">
        </el-table-column>
        <el-table-column
          prop="name"
          label="取得日期">
        </el-table-column>
      </el-table>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">图片证明</span>
        </el-row>
        <el-row>
          <el-carousel trigger="click" height="200px">
            <el-carousel-item v-for="(src,item) in imgs" :key="item">
              <img :src="src" style="max-width: 100%;max-height: 100%;display: block; margin: 0 auto;">
            </el-carousel-item>
          </el-carousel>
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">系部意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="AuditingReason"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">是否提交人事处审核</span>
          <el-radio style="margin-left: 20px" v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="pass">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="pass">审核未通过</el-button>
        <el-button type="primary" size="small" plain @click="VisibleThree = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleFour" title="审核详情">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="培训项目名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="培训单位">
        </el-table-column>
        <el-table-column
          prop="name"
          label="参加人数">
        </el-table-column>
        <el-table-column
          prop="name"
          label="培训天数">
        </el-table-column>
        <el-table-column
          prop="name"
          label="到款额">
        </el-table-column>
        <el-table-column
          prop="name"
          label="培训开始时间">
        </el-table-column>
        <el-table-column
          prop="name"
          label="培训结束时间">
        </el-table-column>
      </el-table>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">是否提交人事处审核</span>
          <el-radio style="margin-left: 20px" v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="pass">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="pass">审核未通过</el-button>
        <el-button type="primary" size="small" plain @click="VisibleFour = false">关闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="VisibleFive" title="审核详情">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="单位名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="实践内容">
        </el-table-column>
        <el-table-column
          prop="name"
          label="到款额">
        </el-table-column>
        <el-table-column
          prop="name"
          label="实践开始时间">
        </el-table-column>
        <el-table-column
          prop="name"
          label="实践结束时间">
        </el-table-column>
      </el-table>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">是否提交人事处审核</span>
          <el-radio style="margin-left: 20px" v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </el-row>
      </div>
      <div class="foot"style="text-align: center;margin-top: 30px">
        <el-button type="success" size="small" plain @click="pass">审核通过</el-button>
        <el-button type="danger" size="small" plain @click="pass">审核未通过</el-button>
        <el-button type="primary" size="small" plain @click="VisibleFive = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "reasearchAndSocail",
      data() {
          return {
            imgs: [],
            radio: '1',
            currentPage: 1,
            pageSize: 10,
            VisibleOne: false,
            VisibleTwo: false,
            VisibleThree: false,
            VisibleFour: false,
            VisibleFive: false,
            peopleData: [
              {
                subdate: '2020-12-08',
                applypeople: '杨老师',
                department: '计算机',
                sub: '参与课题情况',
                approval: '待通过'
              },
              {
                subdate: '2020-12-08',
                applypeople: '杨老师',
                department: '计算机',
                sub: '学术成果情况',
                approval: '待通过'
              },
              {
                subdate: '2020-12-08',
                applypeople: '杨老师',
                department: '计算机',
                sub: '科研成果获奖情况',
                approval: '待通过'
              },
              {
                subdate: '2020-12-08',
                applypeople: '杨老师',
                department: '计算机',
                sub: '社会培训情况',
                approval: '待通过'
              },
              {
                subdate: '2020-12-08',
                applypeople: '杨老师',
                department: '计算机',
                sub: '社会实践（兼职）情况',
                approval: '待通过'
              }
            ]
          }
      },
      methods: {
        goView: function (row) {
          if(row.sub === '参与课题情况'){
            this.VisibleOne = true
          } else if (row.sub === '学术成果情况'){
            this.VisibleTwo = true
          } else if(row.sub === '科研成果获奖情况'){
            this.VisibleThree = true
          } else if(row.sub === '社会培训情况'){
            this.VisibleFour = true
          } else if(row.sub === '社会实践（兼职）情况'){
            this.VisibleFive = true
          }
        },
        handleSizeChange(val) {
          this.pageSize = val;
        },
        handleCurrentChange(val) {
          this.currentPage = val;
        }
      }
    }
</script>

<style scoped>

</style>
