<template>
    <div class="app-container">
      <div class="content">
        <div id="per_bing_Two" style="width:100%;height: 400px" />
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import { getXueliEchartsData } from '@/api/allChangeAnalysis'
  require('echarts/theme/macarons') // echarts theme
    export default {
      name: "departmentChartThree",
      data() {
        return {
          option: {
            title: {
              text: '学历结构',
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
              data: ['中专', '大专', '本科', '研究生']
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
                  {value: 2, name: '中专'},
                  {value: 13, name: '大专'},
                  {value: 76, name: '本科'},
                  {value: 85, name: '研究生'}
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
            authority: '人事处主管'
          }
          getXueliEchartsData(prams).then(response => {
            console.log('人事处主管测试学历结构分布')
            console.log(response.data.data)
            this.option.series[0].data[0].value = response.data.data[0].nums
            this.option.series[0].data[1].value = response.data.data[1].nums
            this.option.series[0].data[2].value = response.data.data[2].nums
            this.option.series[0].data[3].value = response.data.data[3].nums
          })
        },
        initChart: function() {
          this.chart = echarts.init(document.getElementById('per_bing_Two'), 'macarons')
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
