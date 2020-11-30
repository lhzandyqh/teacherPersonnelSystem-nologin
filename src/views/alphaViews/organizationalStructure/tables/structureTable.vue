<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      :header-cell-style="{background:'#F5F7FA',color:'#788c90'}"
    >
      <el-table-column
        prop="yiji"
        label="一级结构"
      />
      <el-table-column
        prop="erji"
        label="二级部门"
      />
      <el-table-column
        prop="name"
        label="姓名"
      />
      <el-table-column
        prop="sex"
        label="性别"
      />
      <el-table-column
        prop="age"
        label="年龄"
      />
      <el-table-column
        prop="zhicheng"
        label="职称"
      />
      <el-table-column
        prop="zhiwu"
        label="职务"
      />
      <el-table-column
        prop="address"
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="console.log(scope.row)">查看</el-button>
          <el-button type="text" @click="console.log(scope.row)">移出组织</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'StructureTable',
  data() {
    return {
      tableData: [{
        yiji: '党群系统',
        erji: '党委办公室',
        name: '李老师',
        sex: '男',
        age: '56',
        zhicheng: '教授',
        zhiwu: '党委书记'
      }, {
        yiji: '党群系统',
        erji: '党委办公室',
        name: '陈老师',
        sex: '男',
        age: '54',
        zhicheng: '教授',
        zhiwu: '常务副校长'
      }, {
        yiji: '党群系统',
        erji: '党委办公室',
        name: '杨老师',
        sex: '女',
        age: '50',
        zhicheng: '教授',
        zhiwu: '常务副校长'
      }, {
        yiji: '党群系统',
        erji: '党委办公室',
        name: '胡老师',
        sex: '男',
        age: '56',
        zhicheng: '教授',
        zhiwu: '党委副书记'
      }, {
        yiji: '党群系统',
        erji: '党委办公室',
        name: '刘老师',
        sex: '男',
        age: '55',
        zhicheng: '副教授',
        zhiwu: '党委副书记'
      }, {
        yiji: '党群系统',
        erji: '党委办公室',
        name: '赵老师',
        sex: '女',
        age: '48',
        zhicheng: '副教授',
        zhiwu: '书记员'
      }]
    }
  }
}
</script>

<style scoped>

</style>

