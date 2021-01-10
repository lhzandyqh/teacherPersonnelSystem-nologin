<template>
  <div class="app-container">
    <div class="main_container">
      <div class="left_container">
        <div class="left_content">
          <div class="button_container">
            <el-button-group>
              <el-button type="primary" size="small" @click="beginNew">新建组织</el-button>
<!--              <el-button type="primary" size="small">编辑</el-button>-->
              <el-button type="primary" size="small" @click="deleteOrg">删除组织</el-button>
            </el-button-group>
          </div>
          <div class="tree_container">
            <el-tree :data="orgData" :props="defaultProps" @node-click="handleNodeClick" />
          </div>
        </div>
      </div>
      <div class="right_container">
        <div class="function_item">
          <span>成员姓名:</span>
          <el-input v-model="value1" style="width: 150px;margin-left: 15px" placeholder="请输入" />
        </div>
<!--        <div class="function_item">-->
<!--          <span>成员职务:</span>-->
<!--          <el-input v-model="value1" style="width: 150px;margin-left: 15px" placeholder="请输入" />-->
<!--        </div>-->
        <div class="function_item">
          <el-button type="primary" size="small" @click="findMember">搜索</el-button>
        </div>
        <div class="right_first_container">
          <div class="button-container">
            <el-button type="primary" size="small" @click="beginAdd">加入成员</el-button>
            <el-button type="primary" size="small">导出表格</el-button>
          </div>
        </div>
        <div class="right_second_container">
          <div v-if="tableFlag" class="block">
<!--            <structure-table />-->
            <el-table
              :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
                prop="teaName"
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
                prop="title"
                label="职称"
              />
              <el-table-column
                prop="position"
                label="职务"
              />
              <el-table-column
                label="操作"
                width="150"
              >
                <template slot-scope="scope">
<!--                  <el-button type="text" @click="console.log(scope.row)">查看</el-button>-->
                  <el-button type="text" @click="removeMember(scope.row)">移出组织</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-pagination
                :current-page="currentPage"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </div>
          <div v-else class="block">
            <!--            <structure-table />-->
            <el-table
              :data="tableDataTwo"
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
                prop="teaName"
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
                prop="title"
                label="职称"
              />
              <el-table-column
                prop="position"
                label="职务"
              />
            </el-table>
<!--            <div style="margin-top: 20px">-->
<!--              <el-pagination-->
<!--                :current-page="currentPage"-->
<!--                :page-sizes="[5, 10, 15, 20]"-->
<!--                :page-size="5"-->
<!--                layout="total, sizes, prev, pager, next, jumper"-->
<!--                :total="tableData.length"-->
<!--                @size-change="handleSizeChange"-->
<!--                @current-change="handleCurrentChange"-->
<!--              />-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="新建组织"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="组织名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="组织职责">
          <el-input v-model="form.duty"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitNew">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog
      title="加入成员"
      :visible.sync="dialogVisibleTwo"
      width="40%"
      :before-close="handleClose">
      <el-form ref="form" :model="addForm" label-width="80px">
        <el-form-item label="成员姓名">
          <el-input v-model="addForm.teaName"></el-input>
        </el-form-item>
        <el-form-item label="成员性别">
          <el-input v-model="addForm.sex"></el-input>
        </el-form-item>
        <el-form-item label="成员年龄">
          <el-input v-model="addForm.age"></el-input>
        </el-form-item>
        <el-form-item label="成员职称">
          <el-input v-model="addForm.title"></el-input>
        </el-form-item>
        <el-form-item label="成员职务">
          <el-input v-model="addForm.position"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibleTwo = false">取 消</el-button>
    <el-button type="primary" @click="submitAdd">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import structureTable from '@/views/alphaViews/organizationalStructure/tables/structureTable'
import { getAllOrganizationData, beginNewOrganization, beginDeleteOrganization, getOrganizationAllMember,removeMemberFromOrgById, addNewMember,findMemberByName } from '@/api/organizationStructure'
export default {
  name: 'Index',
  components: {
    structureTable
  },
  data() {
    return {
      value1: '',
      currentPage: 1, // 当前页码
      pageSize: 5, // 每页的数据条数
      dialogVisible: false,
      dialogVisibleTwo: false,
      tableFlag: true,
      deleteId: '',
      addId: '',
      form: {
        id: '1',
        name: '',
        duty: ''
      },
      addForm: {
        age: '',
        directOrgId: '',
        position: '',
        sex: '',
        teaName: '',
        title: ''
      },
      orgData: [],
      tableData: [],
      tableDataTwo: [],
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
        label: 'orgName'
      }
    }
  },
  mounted(){
    this.getAllOrgData()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    handleNodeClick(data) {
      console.log(data)
      this.form.id = data.id
      this.deleteId = data.id
      this.addId = data.id
      console.log('测试选中id')
      console.log(this.form.id)
      const prams = {
        directOrgId: data.id
      }
      getOrganizationAllMember(prams).then(response => {
        console.log('测试选中组织获取所有成员')
        console.log(response.data)
        this.tableData = response.data.data
        this.tableFlag = true
      })
    },
    getAllOrgData: function () {
      getAllOrganizationData().then(response => {
        console.log('测试获取所有的组织结构')
        console.log(response.data.data)
        this.orgData = response.data.data.children
        console.log('测试orgData')
        console.log(this.orgData)
      })
    },
    beginNew:function () {
      this.dialogVisible = true
    },
    submitNew: function () {
      if(this.form.name === '' ){
        this.$message({
          message: '未填入组织名称',
          type: 'warning'
        });
      }else {
        const prams = {
          orgName: this.form.name,
          parentId: this.form.id
        }
        beginNewOrganization(prams).then(response => {
          console.log('测试新建组织')
          console.log(response.data)
          this.getAllOrgData()
          this.$message({
            message: '新建成功',
            type: 'success'
          });
          this.dialogVisible = false
        })
      }
    },
    deleteOrg: function () {
      this.$confirm('此操作将永久删除该组织, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const prams = {
          id: this.deleteId
        }
        beginDeleteOrganization(prams).then(response => {
          console.log('测试删除组织')
          console.log(response.data)
          this.getAllOrgData()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    },
    removeMember: function (row) {
      this.$confirm('此操作将把成员从组织移除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const prams = {
          id: row.id
        }
        removeMemberFromOrgById(prams).then(response => {
          console.log('测试从组织移除成员')
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          const prams = {
            directOrgId: this.form.id
          }
          getOrganizationAllMember(prams).then(response => {
            // console.log('测试选中组织获取所有成员')
            console.log(response.data)
            this.tableData = response.data.data
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      })
    },
    beginAdd: function () {
      this.dialogVisibleTwo = true
    },
    submitAdd: function () {
      this.addForm.directOrgId = this.addId
      addNewMember(this.addForm).then(response => {

        console.log('测试添加新成员')
        console.log(response.data)
        this.dialogVisibleTwo = false
        this.addForm.teaName = ''
        this.addForm.age = ''
        this.addForm.sex = ''
        this.addForm.position = ''
        this.addForm.title = ''
        this.$message({
          type: 'success',
          message: '添加新成员!'
        })
        const prams = {
          directOrgId: this.form.id
        }
        getOrganizationAllMember(prams).then(response => {
          // console.log('测试选中组织获取所有成员')
          console.log(response.data)
          this.tableData = response.data.data
        })
      })
    },
    findMember: function () {
      const prams = {
        teaName: this.value1,
        position: ''
      }
      findMemberByName(prams).then(response => {
        console.log('测试搜索组织成员')
        console.log(response.data)
        if (response.data.data.length!== 0){
          this.tableDataTwo = response.data.data
          this.tableFlag = false
        } else {
          this.tableFlag = false
          this.$message({
            message: '暂无数据',
            type: 'warning'
          })
        }
      })
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
    margin-top: 20px;
  }
</style>
