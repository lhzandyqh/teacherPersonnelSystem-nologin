<template>
  <div class="app-container">
    <h1>论文测试</h1>
    <div class="echart">
      <test-echart-one></test-echart-one>
      <div class="block" style="width: 600px">
        <el-slider
          v-model="value"
          range
          :marks="marks">
        </el-slider>
      </div>
    </div>
<!--    <test-echart-two></test-echart-two>-->
  </div>
</template>

<script>
import testEchartOne from "./echarts/testEchartOne";
import testEchartTwo from "./echarts/testEchartTwo";
export default {
  name: "index",
  data() {
    return {
      value: [40, 60],
      marks: {
        0: '2015-01',
        10: '2015-06',
        20: '2015-12',
        30: '2016-01',
        40: '2016-01',
        50: '2016-01',
        60: '2017-01',
        70: '2017-01',
        80: '2017-01',
        90: '2018-01',
        // 100: '2018-01',
        // 8: '8°C',
        // 37: '37°C',
        // 50: {
        //   style: {
        //     color: '#1989FA'
        //   },
        //   label: this.$createElement('strong', '50%')
        // }
      }
    }
  },
  components: {
    testEchartOne,
    testEchartTwo
  }
}
</script>

<style scoped>
.echart {
  margin-left: 30%;
}
</style>
