<template>
  <div class="app-container">
    <div style="background-color: white;padding: 20px">
      <el-row :gutter="20">
        <div style="display: flex;align-items: center;margin: 15px 0;">
          <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">姓名:</div>
          <div>
            <el-input v-model="input" placeholder="请输入姓名" />
          </div>
          <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">性别:</div>
          <div>
            <el-input v-model="input" placeholder="请输入性别" />
          </div>
          <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">最高学历:</div>
          <div>
            <el-input v-model="input" placeholder="请输入最高学历" />
          </div>
          <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">是否应届生:</div>
          <div>
            <el-input v-model="input" placeholder="请输入是否应届生" />
          </div>
        </div>
      </el-row>
      <el-row :gutter="20">
        <div style="display: flex;align-items: center;margin: 15px 0;">
          <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">聘用部门:</div>
          <div>
            <el-input v-model="input" placeholder="请输入聘用部门" />
          </div>
          <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">职位:</div>
          <div>
            <el-input v-model="input" placeholder="请输入职位" />
          </div>
          <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">招聘渠道:</div>
          <div>
            <el-select v-model="valuea" placeholder="请选择招聘渠道">
              <el-option
                v-for="item in optionstwo"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              />
            </el-select>
          </div>
          <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">招聘类别:</div>
          <div>
            <el-select v-model="valuea" placeholder="请选择招聘类别">
              <el-option
                v-for="item in optionstwo"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              />
            </el-select>
          </div>
          <div>
            <el-button type="primary" style="margin-left:15px">查询</el-button>
          </div>
        </div>
      </el-row>
      <el-divider />
      <el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="候选人" name="first">
            <el-table :data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">

              <el-table-column align="center" fixed label="编号">
                <template slot-scope="scope">
                  <span>{{ scope.row.id }}</span>
                </template>
              </el-table-column>

              <el-table-column align="center" label="姓名">
                <template slot-scope="scope">
                  <span>{{ scope.row.personnel_name }}</span>
                </template>
              </el-table-column>

              <el-table-column align="center" label="应聘部门">
                <template slot-scope="scope">
                  <span>{{ scope.row.bumen }}</span>
                </template>
              </el-table-column>

              <el-table-column align="center" label="应聘职位">
                <template slot-scope="scope">
                  <span>{{ scope.row.zhiwei }}</span>
                </template>
              </el-table-column>

              <!--        <el-table-column align="center" label="年龄">-->
              <!--          <template slot-scope="scope">-->
              <!--            <span>{{ scope.row.certLevel }}</span>-->
              <!--          </template>-->
              <!--        </el-table-column>-->

              <el-table-column align="center" label="当前所在地">
                <template slot-scope="scope">
                  <span>{{ scope.row.didian }}</span>
                </template>
              </el-table-column>

              <el-table-column align="center" label="手机">
                <template slot-scope="scope">
                  <span>{{ scope.row.shouji }}</span>
                </template>
              </el-table-column>

              <el-table-column align="center" label="邮箱">
                <template slot-scope="scope">
                  <span>{{ scope.row.youxiang }}</span>
                </template>
              </el-table-column>

              <el-table-column align="center" label="招聘渠道">
                <!--          <template slot-scope="scope">-->
                <!--            <el-select v-model="scope.row.userrole" placeholder="权限" @change="eidtAuthority(scope.row.userid, scope.row.userrole)">-->
                <!--              <el-option label="教师" value="教师"/>-->
                <!--              <el-option label="审核员" value="审核员"/>-->
                <!--              <el-option label="系统管理员" value="系统管理员"/>-->
                <!--            </el-select>-->
                <!--          </template>-->
                <template slot-scope="scope">
                  <span>{{ scope.row.qudao }}</span>
                </template>
              </el-table-column>

              <el-table-column align="center" label="操作" width="200">
                <template slot-scope="scope">
                  <el-button type="text" style="margin-top: 10px" @click="handleClick(scope.row)">查看简历</el-button>
                  <el-button type="text" style="margin-top: 10px">确认</el-button>
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
          </el-tab-pane>
          <el-tab-pane label="沟通中" name="second">沟通中</el-tab-pane>
          <el-tab-pane label="待反馈" name="third">待反馈</el-tab-pane>
        </el-tabs>
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
      activeName: 'first',
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
        personnel_name: '吴一鸣',
        qudao: '其他',
        bumen: '临床医学系',
        zhiwei: '教师',
        youxiang: '239394@qq.com',
        shouji: '13875556523',
        didian: '北京'
      }, {
        userid: '1',
        id: '32082',
        personnel_name: '程伊',
        qudao: '其他',
        bumen: '护理系',
        zhiwei: '教师',
        youxiang: '733094@qq.com',
        shouji: '13475345452',
        didian: '北京'
      }, {
        userid: '',
        id: '32083',
        personnel_name: '刘赫然',
        qudao: '其他',
        bumen: '口腔医学系',
        zhiwei: '教师',
        youxiang: '239394@qq.com',
        shouji: '19075996523',
        didian: '北京'
      }, {
        userid: '1',
        id: '32084',
        personnel_name: '徐晓帆',
        qudao: '其他',
        bumen: '网络中心',
        zhiwei: '教师',
        youxiang: '876934@qq.com',
        shouji: '13967556083',
        didian: '石家庄'
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
    },
    handleClick(tab, event) {
      console.log(tab, event)
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

