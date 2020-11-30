<template>
  <div class="app-container">
    <div style="background-color: white;padding: 20px">
    <el-row>
      <span style="font-size: 16px;font-weight: bolder">查看</span>
      <el-date-picker
        v-model="valuedate"
        type="month"
        placeholder="2020-9"
        style="width: 8rem" >
      </el-date-picker>
      <span style="font-size: 16px;font-weight: bolder">工资信息</span>
    </el-row>
<!--      <el-divider/>-->
    <div style="font-size: 16px;font-weight: bolder;text-align: center">
      <span style="">应发薪酬部分</span>
    </div>
    <el-table
      :data="salaryData"
      stripe
      style="width: 100%;margin-top: 10px">
      <el-table-column
        prop="name"
        label="教师姓名">
      </el-table-column>
      <el-table-column
        prop="basic"
        label="岗位工资">
      </el-table-column>
      <el-table-column
        prop="xinji"
        label="薪级工资">
      </el-table-column>
      <el-table-column
        prop="jixiao"
        label="绩效基本">
      </el-table-column>
      <el-table-column
        prop="reward"
        label="奖励绩效">
      </el-table-column>
      <el-table-column
        prop="personnel"
        label="人才津贴">
      </el-table-column>
      <el-table-column
        prop="traffic"
        label="交通补助">
      </el-table-column>
      <el-table-column
        prop="life"
        label="生活补助">
      </el-table-column>
      <el-table-column
        prop="price"
        label="物价补贴">
      </el-table-column>
      <el-table-column
        prop="sum"
        label="应发合计">
      </el-table-column>
    </el-table>
    <div style="font-size: 16px;font-weight: bolder;text-align: center;margin-top: 30px">
      <span style="">代扣、代缴部分</span>
      <!--      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addClass">新增</el-button></div>-->
    </div>
    <el-table
      :data="daiData"
      stripe
      style="width: 100%;margin-top: 10px">
      <el-table-column
        prop="name"
        label="教师姓名">
      </el-table-column>
      <el-table-column
        prop="pension"
        label="养老金">
      </el-table-column>
      <el-table-column
        prop="accumulation"
        label="公积金">
      </el-table-column>
      <el-table-column
        prop="medical"
        label="医疗金">
      </el-table-column>
      <el-table-column
        prop="gonghui"
        label="工会费">
      </el-table-column>
      <el-table-column
        prop="nowork"
        label="失业金">
      </el-table-column>
      <el-table-column
        prop="teacher"
        label="教师公寓">
      </el-table-column>
      <el-table-column
        prop="person"
        label="个人所得税">
      </el-table-column>
      <el-table-column
        prop="sum"
        label="扣款合计">
      </el-table-column>
      <el-table-column
        prop="shifa"
        label="实发合计">
      </el-table-column>
    </el-table>
    <div style="margin-top: 3vh">
      <el-row>

        <el-col :span="12" style="margin-top: 23px"> <chart-one/></el-col>
        <el-col :span="12"><chart-two/></el-col>
      </el-row>
    </div>
    </div>
  </div>
</template>

<script>
import chartOne from "@/views/alphaViews/salaryInformation/salaryEchart/chart_one.vue"
import chartTwo from '@/views/alphaViews/salaryInformation/salaryEchart/chart_two.vue'
export default {
  name: 'Index',
  components:{chartOne,chartTwo},
  data() {
    return {
      valuedate:'',
      salaryData: [{
        name:'王明',
        basic:'2900',
        xinji:'2000',
        jixiao:'2100',
        reward:'500',
        personnel:'300',
        traffic:'100',
        life:'100',
        price:'50',
        sum:'8050'
      }],
      daiData: [{
        name:'王明',
        pension:'500',
        accumulation:'1000',
        medical:'300',
        gonghui:'10',
        nowork:'50',
        teacher:'700',
        person:'800',
        sum:'3360',
        shifa:'4630'
      }],

    }
  }
}
</script>

<style scoped>

</style>
