<template>
    <div class="pie">
      <div id="pie1">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main1" style="width:100%;height: 400px"></div>
      </div>
    </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
name: "chart_one",
  data(){
  return{
    option:{
      title : {
        text: '每月工资信息',//主标题
        // subtext: '纯属虚构',//副标题
        x:'center',//x轴方向对齐方式
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: [{
        data: ['岗位工资','薪级工资','绩效基本','奖励绩效','人才津贴','交通补助'],
        orient: "horizontal",
        bottom:'50px',
        left:'5rem'
        // orient: 'vertical',

      },{
        data: ['生活补助','物价补贴','养老保险','医疗保险','失业保险','教师公寓'],
        orient: "horizontal",
        bottom:'25px',
        left:'5rem'
        // orient: 'vertical',

      },{
        data: ['公积金','工会费','个人所得税'],
        orient: "horizontal",
        bottom:'0px',
        left:'5rem'
        // orient: 'vertical',

      }],
      // legend: {
      //   orient: 'vertical',
      //   bottom: 'bottom',
      //   data: ['岗位工资','薪级工资','绩效基本','奖励绩效','人才津贴','交通补助','生活补助','物价补贴',]
      // },
      series : [
        {
          name: '教师工资',
          type: 'pie',
          radius : '55%',
          center: ['50%', '40%'],
          data:[
            {value:2900, name:'岗位工资'},
            {value:2000, name:'薪级工资'},
            {value:2100, name:'绩效基本'},
            {value:500, name:'奖励绩效'},
            {value:300, name:'人才津贴'},
            {value:100, name:'交通补助'},
            {value:100, name:'生活补助'},
            {value:50, name:'物价补贴'},
            {value:500, name:'养老保险'},
            {value:1000, name:'公积金'},
            {value:300, name:'医疗保险'},
            {value:10, name:'工会费'},
            {value:50, name:'失业保险'},
            {value:700, name:'教师公寓'},
            {value:800, name:'个人所得税'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }
    },
  created(){
  },
  mounted(){
    this.initData();
  },
  methods:{
    //初始化数据
    initData() {
      this.chart = echarts.init(document.getElementById('main1'), 'macarons')
      this.chart.setOption(this.option)
    },
  }
}
</script>

<style scoped>

</style>
