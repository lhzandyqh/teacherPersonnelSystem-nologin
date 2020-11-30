<template>
  <div class="app-container">
    <div class="main_container">
      <div class="left_container">
        <div class="left_content">
          <div class="button_container">
            <el-button-group>
              <el-button type="primary" size="small">新建</el-button>
              <el-button type="primary" size="small">编辑</el-button>
              <el-button type="primary" size="small">删除</el-button>
            </el-button-group>
          </div>
          <div class="tree_container">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
          </div>
        </div>
      </div>
      <div class="right_container">
        <div class="function_item">
          <span>成员姓名:</span>
          <el-input v-model="value1" style="width: 150px;margin-left: 15px" placeholder="请输入" />
        </div>
        <div class="function_item">
          <span>成员职务:</span>
          <el-input v-model="value1" style="width: 150px;margin-left: 15px" placeholder="请输入" />
        </div>
        <div class="function_item">
          <el-button type="primary" size="small">搜索</el-button>
        </div>
        <div class="right_first_container">
          <div class="button-container">
            <el-button type="primary" size="small">加入成员</el-button>
            <el-button type="primary" size="small">导出表格</el-button>
          </div>
        </div>
        <div class="right_second_container">
          <div class="block">
            <structure-table />
            <el-pagination
              :current-page="currentPage4"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="6"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import structureTable from '@/views/alphaViews/organizationalStructure/tables/structureTable'
export default {
  name: 'Index',
  components: {
    structureTable
  },
  data() {
    return {
      data: [{
        label: '党群系统',
        children: [{
          label: '党委办公室'
        }, {
          label: '党委组织部'
        }, {
          label: '党委宣传部'
        }, {
          label: '学工部'
        }, {
          label: '纪检监察室'
        }, {
          label: '人武部'
        }, {
          label: '团委'
        }]
      }, {
        label: '行政系统',
        children: [{
          label: '学院办公室'
        }, {
          label: '人事处'
        }, {
          label: '财务处'
        }, {
          label: '学生处'
        }, {
          label: '保卫处'
        }, {
          label: '招生就业办'
        }, {
          label: '综合管理处'
        }, {
          label: '科研与产学合作处'
        }, {
          label: '高教研究所'
        }, {
          label: '发展办'
        }, {
          label: '督导室'
        }, {
          label: '网络中心'
        }, {
          label: '图书信息中心'
        }, {
          label: '后勤服务中心'
        }, {
          label: '校医院'
        }]
      }, {
        label: '二级学院',
        children: [
          {
            label: '机械工程学院'
          }, {
            label: '电子电器工程学院'
          }, {
            label: '计算机工程学院'
          }, {
            label: '经贸管理学院'
          }, {
            label: '人文社科学院'
          }, {
            label: '设计艺术学院'
          }, {
            label: '继续教育学院'
          }, {
            label: '外国语学院'
          }, {
            label: '材料学院'
          }, {
            label: '商务学院'
          }, {
            label: '理学院'
          }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>
  .main_container{
    display: flex;
    height: 100%;
  }
  .left_container{
    flex: 1;
    height: 580px;
    /*background-color: pink;*/
    text-align: center;
    padding-right: 10px;
  }
  .right_container{
    flex: 3;
    height: 580px;
    /*background-color: hotpink;*/
    background-color: white;
    padding-left: 10px;
  }
  .right_first_container {
    width: 100%;
    height: 80px;
    background-color: white;
    border-bottom-style: solid;
    border-bottom-color: #bcbcbc;
    border-bottom-width: 1px;
  }
  .left_content {
    width: 100%;
    /*height: 600px;*/
    height: 100%;
    padding-right: 10px;
    background-color: white;
  }
  .button_container {
    padding-top: 20px;
  }
  .tree_container {
    padding-top: 20px;
    padding-left: 40px;
  }
  .function_item {
    font-size: 14px;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
  }
  .button-container {
    float: right;
    margin-top: 20px;
    margin-right: 20px;
  }
  .block {
    text-align: center;
  }
</style>
