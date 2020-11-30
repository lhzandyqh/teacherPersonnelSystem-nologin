<template>
  <div class="app-container">
    <div style="background-color: white;padding: 20px">
      <el-row :gutter="20">
        <div style="display: flex;align-items: center;margin: 15px 0;">
          <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请选择组织:</div>
          <div>
            <el-select v-model="valuea" placeholder="请选择组织">
              <el-option
                v-for="item in optionstwo"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              />
            </el-select>
          </div>
          <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">请输入姓名:</div>
          <div>
            <el-input v-model="input" placeholder="请输入姓名" />
          </div>
          <div>
            <el-button type="primary" style="margin-left:15px">查询</el-button>
          </div>
        </div>
      </el-row>
      <el-divider />
      <el-row>
        <el-table :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">

          <el-table-column align="center" label="序号">
            <template slot-scope="scope">
              <span>{{ scope.row.userid }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="编号">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="姓名">
            <template slot-scope="scope">
              <span>{{ scope.row.personnel_name }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="性别">
            <template slot-scope="scope">
              <span>{{ scope.row.gender }}</span>
            </template>
          </el-table-column>

          <!--        <el-table-column align="center" label="年龄">-->
          <!--          <template slot-scope="scope">-->
          <!--            <span>{{ scope.row.certLevel }}</span>-->
          <!--          </template>-->
          <!--        </el-table-column>-->

          <el-table-column align="center" label="部门">
            <template slot-scope="scope">
              <span>{{ scope.row.post }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="职务">
            <template slot-scope="scope">
              <span>{{ scope.row.position_level }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="权限展示">
            <!--          <template slot-scope="scope">-->
            <!--            <el-select v-model="scope.row.userrole" placeholder="权限" @change="eidtAuthority(scope.row.userid, scope.row.userrole)">-->
            <!--              <el-option label="教师" value="教师"/>-->
            <!--              <el-option label="审核员" value="审核员"/>-->
            <!--              <el-option label="系统管理员" value="系统管理员"/>-->
            <!--            </el-select>-->
            <!--          </template>-->
            <template slot-scope="scope">
              <div v-for="(item,i) in scope.row.userrole" :key="i">
                <span>{{ item }}</span>
              </div>
            </template>
          </el-table-column>

          <el-table-column align="center" label="权限设置">
            <!--          <template slot-scope="scope">-->
            <!--            <el-select v-model="scope.row.userrole" placeholder="权限" @change="eidtAuthority(scope.row.userid, scope.row.userrole)">-->
            <!--              <el-option label="教师" value="教师"/>-->
            <!--              <el-option label="审核员" value="审核员"/>-->
            <!--              <el-option label="系统管理员" value="系统管理员"/>-->
            <!--            </el-select>-->
            <!--          </template>-->
            <template slot-scope="scope">
              <el-select v-model="scope.row.edit" multiple placeholder="请选择权限">
                <el-option label="教师" value="教师" />
                <el-option label="系部主管" value="系部主管" />
                <el-option label="人事处主管" value="人事处主管" />
              </el-select>
              <el-button type="primary" style="margin-top: 10px" @click="editRoles(scope.row.userid, scope.row.edit)">确认修改</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="fenye">
          <el-pagination
            :current-page="currentPage"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            :total="list.length"
            style="margin-top:20px;"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      pagesize: 10,
      currentPage: 1,
      value1: [],
      input: '',
      optionsone: [{
        value: '一',
        label: '高一'
      }, {
        value: '二',
        label: '高二'
      }, {
        value: '三',
        label: '高三'
      }],
      optionstwo: [],
      value: '',
      valuea: '',
      list: [{
        userid: '1',
        id: '32081',
        personnel_name: '李老师',
        gender: '男',
        post: '党委组织部',
        position_level: '组织部书记',
        userrole: ['教师']
      }, {
        userid: '2',
        id: '32082',
        personnel_name: '吴老师',
        gender: '男',
        post: '党委组织部',
        position_level: '组织部副书记',
        userrole: ['教师']
      }, {
        userid: '3',
        id: '32083',
        personnel_name: '杨老师',
        gender: '男',
        post: '学工部',
        position_level: '学工部部长',
        userrole: ['教师']
      }, {
        userid: '2',
        id: '32084',
        personnel_name: '吴老师',
        gender: '女',
        post: '人事处',
        position_level: '人事处处长',
        userrole: ['教师', '人事部主管']
      }],
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      dialogPvVisible: false,
      thisId: ''
    }
  },
  created() {
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    }
  }
}
</script>

<style scoped>
  .edit-input {
    padding-right: 100px;
  }
  .cancel-btn {
    position: absolute;
    right: 15px;
    top: 10px;
  }
  .fenye {
    text-align: center;
  }
</style>

