<template>
  <div class="app-container">
    <div v-if="roles==='教师'">
      <el-card class="box-card">
        <el-row>
          <jiaoshi-chart-one />
        </el-row>
        <el-row>
          <jiaoshi-chart-two />
        </el-row>
      </el-card>
    </div>
    <div v-if="roles==='人事处主管'">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <!--          <span>卡片名称</span>-->
          <div class="main_container juli">
            <div class="item_content">
              <div class="item zi_border">
                <span>校教职工总人数（人）</span>
                <div class="shuzi">343</div>
              </div>
              <div class="item lan_border">
                <span>新入教职工人人数(人)</span>
                <div class="shuzi">6</div>
              </div>
              <div class="item hong_border">
                <span>年度离职教职工人数(人)</span>
                <div class="shuzi">2</div>
              </div>
              <div class="item lv_border">
                <span>年度退休教职工人数（人）</span>
                <div class="shuzi">12</div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <el-row>
          <renshi-chart-two />
        </el-row>
        <el-row>
          <renshi-chart-one />
        </el-row>
      </el-card>
    </div>
    <div v-if="roles==='系部主管'">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <!--          <span>卡片名称</span>-->
          <div class="main_container juli">
            <div class="item_content">
              <div class="item zi_border">
                <span>学院教职工总人数(人)</span>
                <div class="shuzi">37</div>
              </div>
              <div class="item lan_border">
                <span>年度绩效均分(分)</span>
                <div class="shuzi">86</div>
              </div>
              <div class="item hong_border">
                <span>新入教职工人人数(人)</span>
                <div class="shuzi">67</div>
              </div>
              <div class="item lv_border">
                <span>年度退休教职工人数（人）</span>
                <div class="shuzi">3</div>
              </div>
            </div>
            <div />
          </div>
        </div>
        <el-row>
          <xibu-chart-one />
        </el-row>
        <el-row>
          <xibu-chart-two />
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import renshiChartOne from '@/views/alphaViews/homepage/echarts/renshiChartOne'
import renshiChartTwo from '@/views/alphaViews/homepage/echarts/renshiChartTwo'
import xibuChartOne from '@/views/alphaViews/homepage/echarts/xibuChartOne'
import xibuChartTwo from '@/views/alphaViews/homepage/echarts/xibuChartTwo'
import jiaoshiChartOne from '@/views/alphaViews/homepage/echarts/jiaoshiChartOne'
import jiaoshiChartTwo from '@/views/alphaViews/homepage/echarts/jiaoshiChartTwo'
export default {
  name: 'Index',
  components: {
    renshiChartOne,
    renshiChartTwo,
    xibuChartOne,
    xibuChartTwo,
    jiaoshiChartOne,
    jiaoshiChartTwo
  },
  data() {
    return {

    }
  },
  computed: {
    roles() {
      return this.$store.getters.roles[0]
    }
  }
}
</script>

<style scoped>
  .juli {
    margin-top: 15px;
  }
  .main_container {
    width: 100%;
    /*height: 650px;*/
    background-color: white;
  }
  .item_content {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    /*border-bottom-style: solid;*/
    /*border-bottom-color: #bcbcbc;*/
    /*border-bottom-width: 1px;*/
  }
  .item {
    margin-top: 15px;
    /*padding-top: 10px;*/
    height: 100px;
    width: 250px;
    border-style: solid;
    border-width: 1px;
    border-color: #d7d7d7;
  }
  .item span {
    display: block;
    height: 100px;
    line-height: 100px;
    float: left;
    margin-left: 10px;
    font-size: 14px;
  }
  .shuzi {
    display: block;
    height: 100px;
    line-height: 100px;
    float: right;
    margin-right: 25px;
    font-size: 25px;
  }
  .zi_border {
    border-top-width: 2px;
    border-top-color: #d45cf9;
  }
  .lan_border {
    border-top-width: 2px;
    border-top-color: #57d8f9;
  }
  .hong_border {
    border-top-width: 2px;
    border-top-color: #f93f49;
  }
  .lv_border {
    border-top-width: 2px;
    border-top-color: #85ec76;
  }
  .block {
    text-align: center;
  }
</style>
