<template>
    <div class="app-container">
      <div class="content">
        <div id="bing_one" style="width:100%;height: 400px" />
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import { getAgeEchartsData } from '@/api/allChangeAnalysis'
  require('echarts/theme/macarons') // echarts theme
    export default {
      name: "departmentChartThree",
      data() {
        return {
          option: {
            title: {
              text: '年龄结构',
              top: '20',
              left: 'center',
              textStyle: {
                fontSize: '15'
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
              left: 'center',
              top: 'bottom',
              data: ['20-30岁', '30-40岁', '40-50岁', '50-60岁', '50-60岁']
            },
            toolbox: {
              show: true,
              feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {
                  show: true,
                  type: ['pie', 'funnel']
                },
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            series: [
              {
                name: '面积模式',
                type: 'pie',
                radius: [30, 110],
                center: ['50%', '50%'],
                roseType: 'area',
                data: [
                  {value: 10, name: '20-30岁'},
                  {value: 5, name: '30-40岁'},
                  {value: 15, name: '40-50岁'},
                  {value: 25, name: '50-60岁'},
                  {value: 20, name: '60岁以上'}
                ]
              }
            ]
          }
        }
      },
      mounted() {
        this.getEchartData()
        setTimeout(()=>{
          this.initChart()
        },500)
      },
      methods: {
        getEchartData: function() {
          const prams = {
            // tecUsername: 'rmyzAdmin',
            tecUsername: localStorage.getItem('jwt'),
            authority: '系部主管'
          }
          getAgeEchartsData(prams).then(response => {
            console.log('系部主管测试年龄结构分布')
            console.log(response.data.data)
            this.option.series[0].data[0].value = response.data.data[0].nums
            this.option.series[0].data[1].value = response.data.data[1].nums
            this.option.series[0].data[2].value = response.data.data[2].nums
            this.option.series[0].data[3].value = response.data.data[3].nums
            this.option.series[0].data[4].value = response.data.data[4].nums
          })
        },
        initChart: function() {
          this.chart = echarts.init(document.getElementById('bing_one'), 'macarons')
          this.chart.setOption(this.option)
          // window.addEventListener("resize",function (){
          //   this.chart.resize;
          // });
        }
      }
    }
</script>

<style scoped>

</style>
