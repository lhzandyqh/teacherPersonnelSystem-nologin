<template>
  <div class="app-container">
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">教学工作情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addClass">新增</el-button></div>
    </div>
    <el-table :data="peopleData" style="width: 100%" stripe>
      <el-table-column prop="name" label="课程名称" >
      </el-table-column>
      <el-table-column prop="class" label="任教年级">
      </el-table-column>
      <el-table-column prop="department" label="任教学院" >
      </el-table-column>
      <el-table-column prop="bdate" label="课程开始时间">
      </el-table-column>
      <el-table-column prop="fdate" label="课程结束时间">
      </el-table-column>
      <el-table-column prop="weeknum" label="每周课时" width="100px">
      </el-table-column>
      <el-table-column prop="sumnum" label="总课时" width="100px">
      </el-table-column>
      <el-table-column label="学科状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.approval==='未开始'" type="danger" >未开始</el-tag>
          <el-tag  v-if="scope.row.approval==='进行中'" >进行中</el-tag>
          <el-tag  v-if="scope.row.approval==='已结课'" type="success">已结课</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="medium" @click="changeinfo(scope.row)">修改</el-button>
          <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" @click="deletework">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        :current-page="1"
        :page-size="10"
        :page-sizes="[5, 10]"
        :total="peopleData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <div>
      <el-dialog :visible.sync="addVisible" :title="title">
        <el-form ref="form" :inline="true" :model="form" label-width="100px">
          <el-form-item label="课程名称">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="任教年级">
            <el-input v-model="form.class"/>
          </el-form-item>
          <el-form-item label="任教学院">
            <el-input v-model="form.department"/>
          </el-form-item>
          <el-form-item label="课程时间">
            <el-col :span="9">
              <el-date-picker type="date" placeholder="开课日期" v-model="form.bdate" style="width: 90%;"></el-date-picker>
            </el-col>
            <el-col :span="1">-</el-col>
            <el-col :span="9">
              <el-date-picker type="date" placeholder="结课日期" v-model="form.fdate" style="width: 90%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="每周课时">
            <el-input v-model="form.weeknum"/>
          </el-form-item>
          <el-form-item label="总课时">
            <el-input v-model="form.sumnum"/>
          </el-form-item>
          <el-form-item label="学科状态">
            <el-select v-model="form.approval" style="width: 185px" placeholder="请选择">
              <el-option label="未开始" value="0"></el-option>
              <el-option label="进行中" value="1"></el-option>
              <el-option label="已结课" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addVisible = false">取 消</el-button>
          <el-button type="primary" @click="addClassSuccess">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "basicTable",
  data(){
    return{
      addVisible:false,
      changeVisible:false,
      title:'',
      form: {},
      peopleData:[
        {
          name: '人体解剖学',
          class:'大二',
          department:'临床医学系',
          bdate:'2019-9-1',
          fdate:'2019-12-13',
          weeknum:'2',
          sumnum:'32',
          approval:'已结课',
        },
        {
          name: '生物化学',
          class:'大一',
          department:'临床医学系',
          bdate:'2020-3-1',
          fdate:'2020-6-30',
          weeknum:'1',
          sumnum:'16',
          approval:'已结课',
        },
        {
          name: '生理学',
          class:'大二',
          department:'临床医学系',
          bdate:'2020-9-1',
          fdate:'2020-12-30',
          weeknum:'1',
          sumnum:'16',
          approval:'进行中',
        },
        {
          name: '医学心理学',
          class:'大二',
          department:'临床医学系',
          bdate:'2020-10-1',
          fdate:'2020-10-10',
          weeknum:'8',
          sumnum:'8',
          approval:'未开始',
        },
        {
          name: '组织学与胚胎学',
          class:'大二',
          department:'临床医学系',
          bdate:'2020-9-1',
          fdate:'2020-11-10',
          weeknum:'2',
          sumnum:'24',
          approval:'进行中',
        },
        {
          name: '医学伦理学',
          class:'大三',
          department:'临床医学系',
          bdate:'2020-10-1',
          fdate:'2020-12-10',
          weeknum:'1',
          sumnum:'9',
          approval:'未开始',
        },
        {
          name: '循证医学',
          class:'大三',
          department:'临床医学系',
          bdate:'2020-9-1',
          fdate:'2020-9-10',
          weeknum:'8',
          sumnum:'8',
          approval:'已结课',
        },
        {
          name: '医学生物学实验',
          class:'大二',
          department:'临床医学系',
          bdate:'2020-3-1',
          fdate:'2020-6-10',
          weeknum:'2',
          sumnum:'24',
          approval:'已结课',
        },

      ]
    }
  },
  methods: {
    reset(){
      this.form = {
        name:undefined,
        class:undefined,
        department:undefined,
        bdate:undefined,
        fdate:undefined,
        weeknum:undefined,
        sumnum:undefined,
        approval:undefined,
      }
    },
    addClass(){
      this.reset()
      this.title ='新增课程信息'
      this.addVisible = true;
    },
    changeinfo(row){
      this.title = '修改课程信息'
      this.form = row
      this.addVisible = true;
    },
    addClassSuccess(){
      this.addVisible = false;
      this.$message({
          type: 'success',
          message: '新增成功',
        }
      )
    },
    changeSuccess(){
      this.changeVisible = false;
      this.$message({
        type: 'success',
        message: '修改成功',
    })
  },
    deletework() {
      this.$confirm('确认删除此课程?', '提示', {
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
