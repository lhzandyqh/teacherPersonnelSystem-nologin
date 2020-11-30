<template>
  <div class="app-container">
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">学术交流情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addMatch">新增</el-button></div>
    </div>
    <el-table :data="matchData" style="width: 100%" stripe>
      <el-table-column prop="academicname" label="学术交流主题" >
      </el-table-column>
      <el-table-column prop="academicform" label="交流形式">
      </el-table-column>
      <el-table-column prop="academictime" label="交流时间" >
      </el-table-column>
      <el-table-column prop="academicplace" label="地点" >
      </el-table-column>
      <el-table-column label="交流状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.academicprogress==='未开始'" type="danger" >未开始</el-tag>
          <el-tag  v-if="scope.row.academicprogress==='进行中'" >进行中</el-tag>
          <el-tag  v-if="scope.row.academicprogress==='已结束'" type="success">已结束</el-tag>
        </template>
      </el-table-column>
<!--      <el-table-column  label="详情">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button type="text" size="medium" @click="viewDetail(scope.row)">查看详细信息</el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="medium" @click="changematch(scope.row)">修改</el-button>
          <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" @click="deletework">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-size="10"
        :page-sizes="[5, 10]"
        :total="matchData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <div>
      <el-dialog :visible.sync="addMatchVisible" :title="title">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="学术交流主题">
            <el-input v-model="form.academicname"/>
          </el-form-item>
          <el-form-item label="交流形式">
            <el-input v-model="form.academicform"/>
          </el-form-item>
          <el-form-item label="交流时间">
            <el-col :span="11">
              <el-date-picker v-model="form.academictime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="地点">
            <el-input v-model="form.academicplace"/>
          </el-form-item>
          <el-form-item label="交流状态">
            <el-select v-model="form.academicprogress" style="width: 185px" placeholder="请选择">
              <el-option label="未开始" value="未开始"></el-option>
              <el-option label="进行中" value="进行中"></el-option>
              <el-option label="已结束" value="已结束"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.beizhu"/>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addMatchVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitMatchSuccess">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "academicExchangeTable",
  data(){
    return{
      addMatchVisible:false,
      detailFlag:false,
      title:'',
      form:{},
      detail:{},
      matchData: [{
        academicname:'国家临床医学研究中心学术交流会议',
        academictime:'2020-11-7',
        academicform:'会议',
        academicplace:'北京市',
        academicprogress:'未开始',
      },
        {
          academicname:'临床医学前沿技术',
          academictime:'2019-6-7',
          academicform:'专题报告',
          academicplace:'北京市',
          academicprogress:'已结束',

        },
        {
          academicname:'关于临床医学影像探讨',
          academictime:'2019-6-7',
          academicform:'讨论会',
          academicplace:'北京市',
          academicprogress:'已结束',

        },
        {
          academicname: '中国医科大学学术日',
          academictime: '2020-10-24',
          academicform: '学术日',
          academicplace: '北京市',
          academicprogress: '进行中',
        }
      ],
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    reset(){
      this.form = {
        matchname:undefined,
        matchtime:undefined,
        matchsub:undefined,
        matchprogress:undefined,
        matchwork:undefined,
        matchresult:undefined,
        beizhu:undefined,
      }
    },
    viewDetail(row){
      this.detailFlag = true
      this.title = '详细信息'
      this.detail = row
      console.log(row)
    },
    addMatch(){
      this.reset()
      this.title = '增加比赛信息'
      this.addMatchVisible = true;
    },
    changematch(row){
      this.title = '修改比赛信息'
      this.form = row
      this.addMatchVisible = true;
    },
    submitMatchSuccess(){
      this.$message({
        type:'success',
        message:'提交成功'
      })
      this.addMatchVisible = false
    },
    deletework() {
      this.$confirm('确认删除此条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style scoped>

</style>
