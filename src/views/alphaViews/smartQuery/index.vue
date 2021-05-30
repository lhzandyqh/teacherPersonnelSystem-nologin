<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-row gutter="20" style="margin-top: 1vh">
        <span style="font-size: 1rem;font-weight: bolder;margin-left: 1vw;margin-right: 15px">请选择查询类型:</span>
        <el-select v-model="sub" placeholder="选择查询类型" style="width: 18vw">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
<!--        <span style="font-size: 1rem;font-weight: bolder;margin-left: 3vw;margin-right: 15px">请输入关键词(选填):</span>-->
<!--        <el-input  v-model="input" placeholder="教师姓名/学院/部门" style="width: 18vw"></el-input>-->
        <el-button type="primary" round plain style="margin-left: 3vw" icon="el-icon-search" @click="beginFindOneTeacher">点击查询</el-button>
      </el-row>
      <!--        <el-row  ">-->
      <div class="teacher_option_container">
        <div class="option_container_title">
          <span style="font-size: 1rem;font-weight: bolder;margin-left: 1vw;margin-right: 15px">可用查询条件</span>
        </div>
        <div>
          <el-row style="margin-top: 15px">
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">性别:</span>
              <el-select v-model="queryForm.gender" placeholder="选择查询类型" style="width: 18vw">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-col>
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">部门:</span>
<!--              <el-select v-model="sub" placeholder="选择查询类型" style="width: 18vw">-->
<!--                <el-option-->
<!--                  v-for="item in options2"-->
<!--                  :key="item.value"-->
<!--                  :label="item.label"-->
<!--                  :value="item.value"/>-->
<!--              </el-select>-->
              <el-cascader
                v-model="queryForm.dept"
                style="width: 18vw"
                :options="options"
                :props="defaultProps"
                @change="handleChange"></el-cascader>
            </el-col>
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">政治面貌:</span>
              <el-select v-model="queryForm.political" placeholder="选择查询类型" style="width: 16vw">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-col>
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">任职时间:</span>
              <el-date-picker
                style="width: 16vw"
                v-model="queryForm.positionTime"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
              </el-date-picker>
            </el-col>
          </el-row>
          <el-row style="margin-top: 15px">
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">聘任形式:</span>
              <el-select v-model="queryForm.hireType" placeholder="选择查询类型" style="width: 16vw">
                <el-option
                  v-for="item in options4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-col>
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">工作状态:</span>
              <el-select v-model="queryForm.workStatus" placeholder="选择查询类型" style="width: 16vw">
                <el-option
                  v-for="item in options5"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-col>
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">合同起始时间:</span>
              <el-date-picker
                style="width: 14vw"
                v-model="queryForm.conBeginTime"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
              </el-date-picker>
            </el-col>
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">年度考核情况:</span>
              <el-select v-model="queryForm.yearExam" placeholder="选择查询类型" style="width: 14vw">
                <el-option
                  v-for="item in options6"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-col>
          </el-row>
          <el-row style="margin-top: 15px">
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">高校教资证取得时间:</span>
              <el-date-picker
                style="width: 12vw"
                v-model="queryForm.jiaoziTime"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
              </el-date-picker>
            </el-col>
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">离职时间:</span>
              <el-date-picker
                style="width: 16vw"
                v-model="queryForm.departureTime"
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
              </el-date-picker>
            </el-col>
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">第一学历:</span>
              <el-select v-model="queryForm.firstXue" placeholder="选择查询类型" style="width: 16vw">
                <el-option
                  v-for="item in options7"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-col>
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">最高学历:</span>
              <el-select v-model="queryForm.highestXue" placeholder="选择查询类型" style="width: 16vw">
                <el-option
                  v-for="item in options8"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-col>
          </el-row>
          <el-row style="margin-top: 15px">
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">学位:</span>
              <el-select v-model="queryForm.xuewei" placeholder="选择查询类型" style="width: 18vw">
                <el-option
                  v-for="item in options9"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-col>
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">是否骨干教师:</span>
              <el-select v-model="queryForm.ifBackBone" placeholder="选择查询类型" style="width: 14vw">
                <el-option
                  v-for="item in options10"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-col>
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">是否双师:</span>
              <el-select v-model="queryForm.ifDouble" placeholder="选择查询类型" style="width: 16vw">
                <el-option
                  v-for="item in options10"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-col>
            <el-col :span="6">
              <span style="font-size: 15px;margin-left: 20px;font-weight: bold">是否专业学科带头人:</span>
              <el-select v-model="queryForm.ifMajorHead" placeholder="选择查询类型" style="width: 12vw">
                <el-option
                  v-for="item in options10"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-col>
          </el-row>
        </div>
      </div>
      <el-divider></el-divider>
      <div v-if="viewimg" class="img">
        <img src="../../../assets/zanwu.png">
        <div style="text-align: center">
          <span style="font-size: 15px;font-weight: bold;color: #999999">暂无内容</span>
        </div>
      </div>
      <div v-if="viewtable">
        <el-table
          v-if="viewtable"
          ref="multipleTable"
          :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          tooltip-effect="dark"
          style="width: 100%;margin-top: 20px">
          <!--      <el-table-column-->
          <!--        label="编号">-->
          <!--        <template slot-scope="scope">{{ scope.row.id }}</template>-->
          <!--      </el-table-column>-->
          <el-table-column
            prop="teaName"
            label="教师姓名"
            />
          <el-table-column
            prop="teaSex"
            label="性别"/>
          <el-table-column
            prop="teaUsername"
            label="年龄"/>
          <el-table-column
            prop="teaUsername"
            label="工号"/>
          <el-table-column
            prop="dept"
            label="部门"
          />
          <el-table-column
            prop="workStatus"
            label="工作状态"/>
          <el-table-column
            prop="hireType"
            label="人员类别"/>
          <el-table-column
            prop="workStartDate"
            label="入职时间"/>
          <el-table-column
            prop="leaveSchoolDate"
            label="离职时间"/>
          <el-table-column
            prop="phoneNum"
            label="联系方式"
          />
        </el-table>
        <div style="text-align: center">
          <el-pagination
            :current-page="currentPage"
            :page-sizes="[5, 10, 15]"
            :page-size="pageSize"
            :total="tableData.length"
            style="margin-top:20px;"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { perGetAllOrg } from '@/api/authorityManagement'
import { teacherInformationQuery } from '@/api/intelligentSearch'
export default {
  name: 'Index',
  data(){
    return{
      currentPage: 1,
      pageSize: 5,
      options: [],
      defaultProps: {
        children: 'children',
        label: 'orgName',
        value: 'orgName'
      },
      queryForm: {
        dept: [],
        gender: '',
        political: '',
        positionTime: '',
        hireType: '',
        workStatus: '',
        conBeginTime: '',
        yearExam: '',
        jiaoziTime: '',
        departureTime: '',
        firstXue: '',
        highestXue: '',
        xuewei: '',
        ifBackBone: '',
        ifDouble: '',
        ifMajorHead: ''
      },
      tableData: [],
      viewtable:false,
      viewimg:true,
      college:[],
      department:[],
      zhicheng:[],
      sub:'教师信息',
      checked1:true,
      checked2:true,
      checked3:true,
      checked4:true,
      checked5:true,
      input:'',
      projectsub:'',
      inputsearch:'',
      selectWord1: '',
      selectWord3: '',
      selectWord4: '',
      selectWord2: '',
      options1: [
        {
          value: '教师信息',
          label: '教师信息'
        },
        // {
        //   value: '工作任务',
        //   label: '工作任务'
        // }, {
        //   value: '工资信息',
        //   label: '工资信息'
        // }
      ],
      options2: [
        {
          value: '男',
          label: '男'
        },
        {
          value: '女',
          label: '女'
        }
      ],
      options3: [
        {
          value: '中共党员',
          label: '中共党员'
        },
        {
          value: '中共预备党员',
          label: '中共预备党员'
        },
        {
          value: '共青团员',
          label: '共青团员'
        },
        {
          value: '其他民主党派人士',
          label: '其他民主党派人士'
        },
        {
          value: '群众',
          label: '群众'
        }
      ],
      options4: [
        {
          value: '在编',
          label: '在编'
        },
        {
          value: '返聘',
          label: '返聘'
        },
        {
          value: '编外聘用',
          label: '编外聘用'
        },
        {
          value: '劳务派遣',
          label: '劳务派遣'
        }
      ],
      options5: [
        {
          value: '在职',
          label: '在职'
        },
        {
          value: '离职',
          label: '离职'
        },
        {
          value: '退休',
          label: '退休'
        }
      ],
      options6: [
        {
          value: '优秀',
          label: '优秀'
        },
        {
          value: '中等',
          label: '中等'
        },
        {
          value: '及格',
          label: '及格'
        },
        {
          value: '不及格',
          label: '不及格'
        }
      ],
      options7: [
        {
          value: '专科',
          label: '专科'
        },
        {
          value: '本科',
          label: '本科'
        },
        {
          value: '硕士研究生',
          label: '硕士研究生'
        },
        {
          value: '博士研究生',
          label: '博士研究生'
        }
      ],
      options8: [
        {
          value: '专科',
          label: '专科'
        },
        {
          value: '本科',
          label: '本科'
        },
        {
          value: '硕士研究生',
          label: '硕士研究生'
        },
        {
          value: '博士研究生',
          label: '博士研究生'
        }
      ],
      options9: [
        {
          value: '学士',
          label: '学士'
        },
        {
          value: '硕士',
          label: '硕士'
        },
        {
          value: '博士',
          label: '博士'
        }
      ],
      options10: [
        {
          value: '是',
          label: '是'
        },
        {
          value: '否',
          label: '否'
        }
      ],
      collegeList: [
        { label: '临床医学系', value: '临床医学系' },
        { label: '护理系', value: '护理系' },
        { label: '口腔医学系', value: '口腔医学系' },
        { label: '中医与药学系', value: '中医与药学系' },

      ],
      departmentList: [
        { label: '校党委', value: '1' },
        { label: '教务处', value: '2 ' },
        { label: '档案中心', value: '3' },
        { label: '电教设备处', value: '4' },
        { label: '审计处', value: '5' },
        { label: '科研处', value: '6' },
      ],
      classList: [
        { label: '助教', value: '助教' },
        { label: '讲师', value: '讲师' },
        { label: '副教授', value: '副教授' },
        { label: '教授', value: '教授' },
      ],
      numList: [
        { label: '1', value: '1' },
        { label: '2', value: '2 ' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5人以上', value: '5' },
      ],
      moneyList: [
        { label: '3K以下', value: '1' },
        { label: '3K~5K', value: '2 ' },
        { label: '5K~7K', value: '3' },
        { label: '7K~1万', value: '4' },
        { label: '1万以上', value: '5' },
      ],
      num:[],
      money:[],
      checkList: [], // 选中展示的字段
      uncheckList: {}, // 控制隐藏的字段
    }
  },
  mounted() {
    this.getAllOrg()
  },
  methods: {
    beginFindOneTeacher: function (){
      const prams = {
        sex: this.queryForm.gender,
        dept: this.queryForm.dept[this.queryForm.dept.length-1],
        politicStatus: this.queryForm.political,
        comeToSchoolDate: this.queryForm.positionTime,
        hireType: this.queryForm.hireType,
        workStatus: this.queryForm.workStatus,
        annualAssessment: this.queryForm.yearExam,
        teaQualifiedDate: this.queryForm.jiaoziTime,
        leaveSchoolDate: this.queryForm.departureTime,
        initialEducation: this.queryForm.firstXue,
        highestEducation: this.queryForm.highestXue,
        highestDegree: this.queryForm.xuewei,
        ifCadreTeacher: this.queryForm.ifBackBone,
        ifDoubleTeacher: this.queryForm.ifDouble,
        majorSubjectLeader: this.queryForm.ifMajorHead
      }
      teacherInformationQuery(prams).then(response => {
        console.log('开始测试智能查询接口')
        console.log(response.data)
        if(response.data.data.length === 0){
          this.$message({
            message: '未查询到满足以上条件的教师',
            type: 'warning'
          })
        }else {
          this.$message({
            type:'success',
            message:'查询成功'
          })
          this.tableData = response.data.data
          this.viewimg = false
          this.viewtable = true
        }
      })
    },
    handleChange(value) {
      console.log(value);
      this.condition = value
    },
    getAllOrg: function (){
      perGetAllOrg().then(response => {
        console.log('测试获取所有的组织')
        console.log(response.data)
        this.options = response.data.data.children
      })
    },
    searchmsg(){
      this.$message({
        type:'success',
        message:'查询成功'
      })
      this.viewimg = false
      this.viewtable = true
    },
    change1(){
      this.checked1 = false
    },
    change2(){
      this.checked2 = false
    },
    change3(){
      this.checked3 = false
    },
    change4(){
      this.checked4 = false
    },
    change5(){
      this.checked5 = false
    },
    handleSizeChange(val) {
      this.currentPage = 1
      this.pageSize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    }
  }
}
</script>

<style scoped>
.box-card {
  width: 100%;
  height: 100%;
}
.teacher_option_container {
  margin-top: 20px;
}
/*/deep/ .el-card__body{*/
/*  height: 100vh;*/
/*}*/
.img{
  text-align: center;
}
</style>
