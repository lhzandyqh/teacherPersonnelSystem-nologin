<template>
  <div class="app-container">
  <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
    <span style="">参加比赛情况</span>
    <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addMatch">新增</el-button></div>
  </div>
  <el-table :data="matchData" style="width: 100%" stripe>
    <el-table-column prop="matchname" label="比赛名称" >
    </el-table-column>
    <el-table-column prop="matchtime" label="比赛时间">
    </el-table-column>
    <el-table-column prop="matchsub" label="比赛级别" >
    </el-table-column>
    <el-table-column label="比赛状态">
      <template slot-scope="scope">
        <el-tag  v-if="scope.row.matchprogress==='已报名'" type="danger" >已报名</el-tag>
        <el-tag  v-if="scope.row.matchprogress==='进行中'" >进行中</el-tag>
        <el-tag  v-if="scope.row.matchprogress==='已结束'" type="success">已结束</el-tag>
      </template>
    </el-table-column>
    <el-table-column v- prop="matchwork" label="作品名称">
    </el-table-column>
    <el-table-column prop="matchresult" label="获奖情况">
    </el-table-column>
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
          <el-form-item label="比赛名称">
            <el-input v-model="form.matchname"/>
          </el-form-item>
          <el-form-item label="比赛时间">
            <el-col :span="11">
              <el-date-picker v-model="form.matchtime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="比赛级别">
            <el-input v-model="form.matchsub"/>
          </el-form-item>
          <el-form-item label="比赛状态">
            <el-select v-model="form.matchprogress" style="width: 185px" placeholder="请选择">
              <el-option label="已报名" value="已报名"></el-option>
              <el-option label="进行中" value="进行中"></el-option>
              <el-option label="已结束" value="已结束"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item  v-if="form.matchprogress == '进行中' || form.matchprogress == '已结束' "  label="作品名称">
            <el-input v-model="form.matchwork"/>
          </el-form-item>
          <el-form-item  v-if="form.matchprogress == '已结束'" label="获奖情况">
            <el-input v-model="form.matchresult"/>
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
name: "matchInfoTable",
  data(){
  return{
    addMatchVisible:false,
    title:'',
    form:{},
    matchData: [{
      matchname:'临床技能大赛',
      matchtime:'2019-6-7',
      matchsub:'国家级',
      matchwork:'',
      matchresult:'单项操作奖',
      matchprogress:'已结束',
    },
      {
        matchname:'大学生创业大赛',
        matchtime:'2019-9-1',
        matchsub:'国际级',
        matchwork:'临床医学影像',
        matchresult:'一等奖',
        matchprogress:'已结束',
      },
      {
        matchname:'挑战杯',
        matchtime:'2019-6-7',
        matchsub:'国家级',
        matchwork:'临床医学数据可视化',
        matchresult:'',
        matchprogress:'进行中',
      },
      {
        matchname:'挑战杯',
        matchtime:'2019-6-7',
        matchsub:'国家级',
        matchwork:'',
        matchresult:'',
        matchprogress:'已报名',
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
    }
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
