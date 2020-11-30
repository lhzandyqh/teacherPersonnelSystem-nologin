<template>
  <div class="app-container">
    <el-row>
      <span style="font-weight: bolder">学院及个人绩效查询</span>
    </el-row>
    <el-row>
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;">请输入教师名称:</div>
        <div>
          <el-input v-model="teachername" />
        </div>
        <div style="font-size: 14px;margin: 0 15px;">请选择部门:</div>
        <div>
          <el-select v-model="jiaoyanzu" placeholder="请选择部门">
            <el-option
              v-for="item in optionstwo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            />
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;">请选择时间:</div>
        <div>
          <el-date-picker
            v-model="value9"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            value-format="yyyy-MM-dd"
            end-placeholder="结束日期"
          />
        </div>
        <div><el-button type="primary" style="margin-left:15px" @click="getKPIData">查询</el-button></div>
      </div>
    </el-row>
    <el-row>
      <div id="home_page_chart" style="height: 300px" />
    </el-row>
  </div>
</template>

<script>
// import { getToken } from '@/utils/auth'
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'RenshiChartOne',
  data() {
    return {
      // token: getToken(),
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['教学成果', '发表论文个数', '资质获奖']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['临床医学系', '口腔医学系', '护理系', '中医与药学系',]

        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '教学成果',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '发表论文个数',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '资质获奖',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      },
      teachername: '',
      value9: [],
      jiaoyanzu: '',
      optionstwo: []
    }
  },
  mounted() {
    this.initChart()
    // this.getTeachGroupList()
    // this.getKPIData()
  },
  methods: {
    getTeachGroupList: function() {
    },
    getKPIData: function() {
    },
    initChart: function() {
      this.chart = echarts.init(document.getElementById('home_page_chart'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
