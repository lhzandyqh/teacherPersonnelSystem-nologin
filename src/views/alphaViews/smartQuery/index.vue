<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-row gutter="20" style="margin-top: 1vh">
        <span style="font-size: 1rem;font-weight: bolder;margin-left: 1vw;margin-right: 15px">请选择查询类型:</span>
        <el-select v-model="sub" placeholder="选择查询类型" style="width: 18vw">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
        <span style="font-size: 1rem;font-weight: bolder;margin-left: 3vw;margin-right: 15px">请输入关键词(选填):</span>
        <el-input  v-model="input" placeholder="教师姓名/学院/部门" style="width: 18vw"></el-input>
        <el-button type="primary" round plain style="margin-left: 3vw" icon="el-icon-search" @click="searchmsg">点击查询</el-button>
      </el-row>
      <!--        <el-row  ">-->
      <div style="margin-top: 3vh;overflow: hidden;width: 100%">
        <span style="font-size: 1rem;font-weight: bolder;float:left;margin-left: 3vh">设置筛选条件:</span>
        <span style="font-size: 0.95rem;font-weight: bolder;float:left;margin-left:15px;margin-right: 10px">学院</span>
        <el-checkbox v-model="checked1" style="float:left;margin-right: 3vh">不限</el-checkbox>
        <el-checkbox-group v-model="college" style="width: 70%;float:left">
          <el-checkbox v-for="(item,index) in collegeList"
                       :key="index"
                       :label="item.label"
                       @change="change1"
          ></el-checkbox>
        </el-checkbox-group>
      </div>
      <!--        </el-row>-->
      <!--        <HR width=1100 color=#dcdfe6 SIZE=1 align="right" />-->
      <el-row  style="margin-top: 3vh">
        <span style="font-size: 0.95rem;font-weight: bolder;float:left;margin-right: 10px;margin-left: 135.5px">部门</span>
        <el-checkbox v-model="checked2" style="float:left;margin-right: 3vh">不限</el-checkbox>
        <el-checkbox-group v-model="department" style="width: 70%;float:left">
          <el-checkbox v-for="(item,index) in departmentList"
                       :key="index"
                       :label="item.label"
                       @change="change2"
          ></el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-row  style="margin-top: 3vh">
        <span style="font-size: 0.95rem;font-weight: bolder;float:left;margin-right: 10px;margin-left: 135.5px">工资</span>
        <el-checkbox v-model="checked5" style="float:left;margin-right: 3vh">不限</el-checkbox>
        <el-checkbox-group v-model="money" style="width: 70%;float:left">
          <el-checkbox v-for="(item,index) in moneyList"
                       :key="index"
                       :label="item.label"
                       @change="change5"
          ></el-checkbox>
        </el-checkbox-group>
      </el-row>
      <el-row  style="margin-top: 3vh">
        <span style="font-size: 0.95rem;font-weight: bolder;float:left;margin-right: 10px;margin-left: 135.5px">职称</span>
        <el-checkbox v-model="checked3" style="float:left;margin-right: 3vh">不限</el-checkbox>
        <el-checkbox-group v-model="zhicheng" style="width: 70%;float:left">
          <el-checkbox v-for="(item,index) in classList"
                       :key="index"
                       :label="item.label"
                       @change="change3"
          ></el-checkbox>
        </el-checkbox-group>
        <span style="float: right;font-size: 0.95rem;font-weight: bolder;">100+个老师符合条件</span>
      </el-row>
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
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;margin-top: 20px"
          @selection-change="handleSelectionChange">
          <el-table-column
            v-if="piliangFlag"
            type="selection"
            width="55"/>
          <!--      <el-table-column-->
          <!--        label="编号">-->
          <!--        <template slot-scope="scope">{{ scope.row.id }}</template>-->
          <!--      </el-table-column>-->
          <el-table-column
            prop="name"
            label="教师姓名"
            />
          <el-table-column
            prop="department"
            label="学院"
            />
          <el-table-column
            prop="class"
            label="部门"
          />
          <el-table-column
            prop="zhicheng"
            label="职称"/>
          <el-table-column
            prop="bdate"
            label="入职时间"/>
          <el-table-column
            prop="money"
            label="工资"/>
          <el-table-column
            prop="work"
            label="工作状态"
          />
          <el-table-column
            prop="tel"
            label="联系方式"
          />
        </el-table>
        <div style="text-align: center">
          <el-pagination
            :current-page="currentPage"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
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
export default {
  name: 'Index',
  data(){
    return{
      tableData: [
        {
         name:'王宁',
          department:'临床医学系',
          class:'教务处',
          zhicheng:'教授',
          bdate: '2015-7-5',
          money:'7000',
          work:'在岗',
          tel:'13956432xxxx'
        },
        {
          name:'李强',
          department:'中医与药学系',
          class:'档案中心',
          zhicheng:'讲师',
          bdate: '2012-7-5',
          money:'5000',
          work:'在岗',
          tel:'13956432xxxx'
        },
        {
          name:'成佳宁',
          department:'口腔医学系',
          class:'校党委',
          zhicheng:'教授',
          bdate: '2010-7-5',
          money:'9000',
          work:'在岗',
          tel:'14556432xxxx'
        },
        {
          name:'刘明',
          department:'护理系',
          class:'教务处',
          zhicheng:'副教授',
          bdate: '2013-7-5',
          money:'6000',
          work:'在岗',
          tel:'13956432xxxx'
        },
        {
          name:'王侯',
          department:'口腔医学系',
          class:'教务处',
          zhicheng:'副教授',
          bdate: '2014-7-5',
          money:'7000',
          work:'在岗',
          tel:'13956112xxxx'
        },
        {
          name:'张铁林',
          department:'临床医学系',
          class:'审计处',
          zhicheng:'助教',
          bdate: '2017-7-5',
          money:'4000',
          work:'在岗',
          tel:'13888432xxxx'
        },
        {
          name:'王正',
          department:'中医与药学系',
          class:'教务处',
          zhicheng:'副教授',
          bdate: '2014-7-5',
          money:'7000',
          work:'在岗',
          tel:'13956112xxxx'
        },
        {
          name:'张强',
          department:'中医与药学系',
          class:'档案中心',
          zhicheng:'助教',
          bdate: '2018-7-5',
          money:'4000',
          work:'在岗',
          tel:'13866632xxxx'
        },
      ],
      viewtable:false,
      viewimg:true,
      college:[],
      department:[],
      zhicheng:[],
      sub:'',
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
      options2: [
        {
          value: '教师信息',
          label: '教师信息'
        }, {
          value: '工作任务',
          label: '工作任务'
        }, {
          value: '工资信息',
          label: '工资信息'
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
  methods: {
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

  }
}
</script>

<style scoped>
.box-card {
  width: 100%;
  height: 100%;

}
/*/deep/ .el-card__body{*/
/*  height: 100vh;*/
/*}*/
.img{
  text-align: center;
}
</style>
