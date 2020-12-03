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
        prop="basic"
        label="基础工资">
      </el-table-column>
      <el-table-column
        prop="xinji"
        label="其他津贴">
      </el-table-column>
      <el-table-column
        prop="jixiao"
        label="岗位津贴">
      </el-table-column>
      <el-table-column
        prop="reward"
        label="学位津贴">
      </el-table-column>
      <el-table-column
        prop="personnel"
        label="午餐补助">
      </el-table-column>
      <el-table-column
        prop="traffic"
        label="校龄津贴">
      </el-table-column>
      <el-table-column
        prop="sum"
        label="应发合计">
      </el-table-column>
    </el-table>
      <div style="font-size: 16px;font-weight: bolder;text-align: center;margin-top: 30px">
        <span style="">特殊津贴部分</span>
        <!--      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addClass">新增</el-button></div>-->
      </div>
      <el-table
        :data="daiData"
        stripe
        style="width: 100%;margin-top: 10px">
        <el-table-column
          prop="pension"
          label="话费补助">
        </el-table-column>
        <el-table-column
          prop="accumulation"
          label="值班费">
        </el-table-column>
        <el-table-column
          prop="medical"
          label="安全奖">
        </el-table-column>
        <el-table-column
          prop="gonghui"
          label="公里补">
        </el-table-column>
        <el-table-column
          prop="nowork"
          label="教研室主任补贴">
        </el-table-column>
        <el-table-column
          prop="teacher"
          label="思政岗位绩效津贴">
        </el-table-column>
        <el-table-column
          prop="teacher"
          label="系部主任津贴">
        </el-table-column>
        <el-table-column
          prop="teacher"
          label="辅导员岗位津贴">
        </el-table-column>
        <el-table-column
          prop="teacher"
          label="特殊津贴">
        </el-table-column>
        <el-table-column
          prop="teacher"
          label="保险津贴">
        </el-table-column>
        <el-table-column
          prop="teacher"
          label="思政岗位绩效津贴">
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
          prop="pension"
          label="养老扣费">
        </el-table-column>
        <el-table-column
          prop="accumulation"
          label="医保扣费">
        </el-table-column>
        <el-table-column
          prop="medical"
          label="失业扣费">
        </el-table-column>
        <el-table-column
          prop="gonghui"
          label="保险扣费合计">
        </el-table-column>
        <el-table-column
          prop="nowork"
          label="上月个税">
        </el-table-column>
        <el-table-column
          prop="teacher"
          label="实发工资">
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
