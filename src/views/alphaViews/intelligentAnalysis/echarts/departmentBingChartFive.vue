<template>
    <div class="app-container">
      <div class="content">
        <div id="bing_Five" style="width:100%;height: 400px" />
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import { getshuxingEchartsData } from '@/api/allChangeAnalysis'
  require('echarts/theme/macarons') // echarts theme
    export default {
      name: "departmentChartThree",
      data() {
        return {
          option: {
            title: {
              text: '属性结构',
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
              data: ['专任', '兼职', '兼课']
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
                  {value: 143, name: '专任'},
                  {value: 24, name: '兼职'},
                  {value: 43, name: '兼课'}
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
            tecUsername: 'rmyzAdmin',
            // tecUsername: localStorage.getItem('jwt')
            authority: '系部主管'
          }
          getshuxingEchartsData(prams).then(response => {
            console.log('系部主管测试属性结构分布')
            console.log(response.data.data)
            this.option.series[0].data[0].value = response.data.data[0].nums
            this.option.series[0].data[1].value = response.data.data[1].nums
            this.option.series[0].data[2].value = response.data.data[2].nums
          })
        },
        initChart: function() {
          this.chart = echarts.init(document.getElementById('bing_Five'), 'macarons')
          this.chart.setOption(this.option)
          // window.addEventListener("resize",function (){
          //   this.chart.resize;
          // });
        },

      }
    }
</script>

<style scoped>

</style>
