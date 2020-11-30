<template>
  <div class="app-container">
    <el-table :data="peopleData" style="width: 100%">
      <el-table-column prop="subdate" label="提交日期" />
      <el-table-column prop="applypeople" label="提交人" />
      <el-table-column prop="department" label="部门" />
      <el-table-column prop="sub" label="审核内容" />
      <el-table-column prop="name" label="审核名称" />
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.approval==='通过'" type="success">审核通过</el-tag>
          <el-tag v-if="scope.row.approval==='未通过'" type="danger">审核未通过</el-tag>
          <el-tag v-if="scope.row.approval==='待通过'">审核待通过</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="jibenview(scope.row.sub)">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        :current-page="currentPage"
        :page-size="pagesize"
        :page-sizes="[5, 10]"
        :total="peopleData.length"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog :visible.sync="jibenVisible" title="审核详情">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">姓&#8195;&#8195;名：</span><span>王老师</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">性&#8195;&#8195;别：</span><span>女</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">民&#8195;&#8195;族：</span><span>汉</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">出生年月：</span><span>1980-3-2</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span><span>北京</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职&#8195;&#8195;别：</span><span>讲师</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">身份证号：</span><span>234445198xxxxxx</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">政治面目：</span><span>党员</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">入党团时间：</span><span>2003-2-3</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">家庭住址：</span><span>北京市朝阳区</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">手机号码：</span><span>12345678943</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">Email：</span><span>222334424#ddd</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任教学科：</span><span>临床医学</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">部门：</span><span>临床医学系</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">参加工作时间：</span><span>2009.3.1</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">工作状态：</span><span>任职</span>
            </div>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘用合同起始时间：</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘用合同终止时间：</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider />
      <h4>部门意见</h4>
      <div>
        <el-row>
          <el-col :span="6">
            信息属实
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="6">
            <span>审核人：</span>
            <span>刘老师</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag type="success" size="small">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider />
      <h4>系部意见</h4>
      <div>
        <el-row>
          <el-col :span="6">
            批准通过
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="6">
            <span>审核人：</span>
            <span>郭老师</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag type="success" size="small">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">人事处意见</span>
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
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="success" size="small" plain @click="pass">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="pass">审核未通过</el-button>
          <el-button type="primary" size="small" plain @click="jibenVisible = false">关闭</el-button>
        </span>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="zhuanyeVisible" title="审核详情">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职&#8195;&#8195;称：</span>
              <span>教授</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职称评定时间：</span>
              <span>2013.5.4</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">岗位级别：</span>
              <span>教授</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">荣誉称号：</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">荣誉称号取得时间：</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">专业发展称号：</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">专业发展称号取得时间：</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任现职以来担任学校工作：</span>
              <span>科研</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">担任工作起始时间：</span>
              <span>2003.3.3</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">担任工作结束时间：</span>
              <span>2003.3.4</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider />
      <h4>部门意见</h4>
      <div>
        <el-row>
          <el-col :span="6">
            信息属实
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="6">
            <span>审核人：</span>
            <span>刘明至</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag type="success" size="small">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider />
      <h4>系部意见</h4>
      <div>
        <el-row>
          <el-col :span="6">
            批准通过
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="6">
            <span>审核人：</span>
            <span>郭志</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag type="success" size="small">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">科研处意见</span>
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
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="success" size="small" plain @click="pass">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="pass">审核未通过</el-button>
          <el-button type="primary" size="small" plain @click="zhuanyeVisible = false">关闭</el-button>
        </span>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="workVisible" title="审核详情">
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <span style="font-weight: bolder">姓名：</span>
          <span>王老师</span>
        </el-col>
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">工作单位：</span>
            <span>大学</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">担任职务：</span>
            <span>讲师</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">开始时间：</span>
            <span>2000</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">结束时间：</span>
            <span>xxxxxx</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">证明人：</span>
            <span>王老师</span>
          </div>
        </el-col>
      </el-row>
      <el-divider />
      <h4>部门意见</h4>
      <div>
        <el-row>
          <el-col :span="6">
            信息属实
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="6">
            <span>审核人：</span>
            <span>刘明至</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag type="success" size="small">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider />
      <h4>系部意见</h4>
      <div>
        <el-row>
          <el-col :span="6">
            批准通过
          </el-col>
          <el-col :span="6">
            <span>审核时间：</span>
            <span>2019-12-04</span>
          </el-col>
          <el-col :span="6">
            <span>审核人：</span>
            <span>郭志</span>
          </el-col>
          <el-col :span="5">
            <span>审核状态</span>
            <el-tag type="success" size="small">通过</el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">科研处意见</span>
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
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="success" size="small" plain @click="pass">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="pass">审核未通过</el-button>
          <el-button type="primary" size="small" plain @click="zhuanyeVisible = false">关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'PeopleApproval',
  data() {
    return {
      currentPage: 1,
      pagesize: 5,
      AuditingReason: '',
      zhuanyeVisible: false,
      workVisible: false,
      jibenVisible: false,
      peopleData: [
        {
          number: '1',
          sub: '基本信息',
          applypeople: '王老师',
          approvalpeople: '刘老师',
          subdate: '2020-06-21',
          approvaldate: '2020-1-2',
          approval: '待通过',
          department: '临床医学系',
          name: '基本信息修改'
        },
        {
          number: '2',
          sub: '专业能力',
          applypeople: '张老师',
          approvalpeople: '刘老师',
          subdate: '2020-05-02',
          approvaldate: '2018-1-2',
          approval: '待通过',
          department: '中医与药学系',
          name: '基本信息修改'
        },
        {
          number: '3',
          sub: '工作经历',
          applypeople: '刘老师',
          approvalpeople: '刘老师',
          subdate: '2020-04-20',
          approvaldate: '2019-5-2',
          approval: '待通过',
          department: '护理系',
          name: '基本信息修改'
        },
        {
          number: '4',
          sub: '工作经历',
          applypeople: '赵老师',
          approvalpeople: '刘老师',
          subdate: '2019-12-05',
          approvaldate: '2019-5-2',
          approval: '待通过',
          department: '护理系',
          name: '基本信息修改'
        },
        {
          number: '5',
          sub: '工作经历',
          applypeople: '胡老师',
          approvalpeople: '刘老师',
          subdate: '2019-11-18',
          approvaldate: '2019-5-2',
          approval: '待通过',
          department: '中医与药学系',
          name: '基本信息修改'
        },
        {
          number: '6',
          sub: '工作经历',
          applypeople: '邓老师',
          approvalpeople: '刘老师',
          subdate: '2019-11-03',
          approvaldate: '2019-5-2',
          approval: '待通过',
          department: '口腔医学系',
          name: '基本信息修改'
        }
      ]
    }
  },
  methods: {
    jibenview(sub) {
      if (sub === '基本信息') {
        this.jibenVisible = true
      } else if (sub === '专业能力') {
        this.zhuanyeVisible = true
      } else if (sub === '工作经历') {
        this.workVisible = true
      }
    },
    pass() {
      this.$message({
        type: 'success',
        message: '审核成功'
      }
      )
    }
  }
}
</script>

<style scoped>
  .foot{
    text-align: center;
    margin-top: 20px;
  }
</style>
