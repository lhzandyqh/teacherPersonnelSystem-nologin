<template>
    <div class="app-container">
      <div class="content">
        <div id="per_bing_Six" style="width:100%;height: 400px" />
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import { getXueyuanEchartsData } from '@/api/allChangeAnalysis'
  require('echarts/theme/macarons') // echarts theme
    export default {
      name: "departmentChartThree",
      data() {
        return {
          option: {
            title: {
              text: '学缘结构',
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
              orient: 'vertical',
              left: 'left',
              data: ['河北医科大学', '河北大学', '唐山师范学院', '承德医学院', '河北科技大学','其他']
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                  {value: 76, name: '河北医科大学'},
                  {value: 34, name: '河北大学'},
                  {value: 63, name: '唐山师范学院'},
                  {value: 45, name: '承德医学院'},
                  {value: 12, name: '河北科技大学'},
                  {value: 23, name: '其他'}
                ],
                emphasis: {
                  itemStyle: {
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
      mounted() {
        this.getEchartData()
        setTimeout(()=>{
          this.initChart()
        },500)
      },
      methods: {
        getEchartData: function(){
          const prams = {
            tecUsername: 'rmyzAdmin',
            // tecUsername: localStorage.getItem('jwt')
            authority: '人事处主管'
          }
          getXueyuanEchartsData(prams).then(response =>{
            console.log('人事处主管测试学缘结构数据')
            console.log(response.data.data)
            for(let i in response.data.data){
              // console.log(i)
              this.option.legend.data.push(response.data.data[i].college)
              const obj = {}
              obj.value = response.data.data[i].nums
              obj.name  = response.data.data[i].college
              this.option.series[0].data.push(obj)
            }
            console.log('测试legend')
            console.log(this.option.legend)
            console.log('测试seriesdata')
            console.log(this.option.series[0].data)
          })
        },
        initChart: function() {
          this.chart = echarts.init(document.getElementById('per_bing_Six'), 'macarons')
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
