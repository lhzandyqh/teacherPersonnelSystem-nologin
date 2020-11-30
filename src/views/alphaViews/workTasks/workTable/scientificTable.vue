<template>
  <div class="app-container">
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">论文发表情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addClass">新增</el-button></div>
    </div>
    <el-table :data="paperData" style="width: 100%" stripe>
      <el-table-column prop="papername" label="论文名称" >
      </el-table-column>
      <el-table-column prop="isauthor" label="是否第一作者">
      </el-table-column>
      <el-table-column prop="publication" label="发表刊物" >
      </el-table-column>
      <el-table-column prop="press" label="出版社">
      </el-table-column>
      <el-table-column prop="pubtime" label="发表时间">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
<!--          <el-button type="text" size="medium" @click="changeinfo">修改</el-button>-->
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
        :total="paperData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    <hr style="margin: 30px 0 30px 0"/>
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">组织指导课外活动情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addOrganization">新增</el-button></div>
    </div>
    <el-table :data="activeData" style="width: 100%" stripe>
      <el-table-column prop="activebtime" label="起始时间" >
      </el-table-column>
      <el-table-column prop="activeftime" label="终止时间">
      </el-table-column>
      <el-table-column prop="activename" label="组织名称" >
      </el-table-column>
      <el-table-column prop="peoplenum" label="参加人数">
      </el-table-column>
      <el-table-column prop="activenum" label="活动次数">
      </el-table-column>
      <el-table-column prop="activecontent" label="活动内容">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="medium" @click="changcOrganization(scope.row)">修改</el-button>
          <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" @click="deletework">删除</el-button>
<!--          <el-button type="text" size="medium" @click="changcOrganization">修改</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        :current-page="1"
        :page-size="10"
        :page-sizes="[5, 10]"
        :total="activeData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <hr style="margin: 30px 0 30px 0"/>
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span style="">参与进修教育情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addFurther">新增</el-button></div>
    </div>
    <el-table :data="jinxiuData" style="width: 100%" stripe>
      <el-table-column prop="furtherbtime" label="起始时间" >
      </el-table-column>
      <el-table-column prop="furtherftime" label="终止时间">
      </el-table-column>
      <el-table-column prop="furthername" label="进修单位名称" >
      </el-table-column>
      <el-table-column prop="furthercontent" label="进修内容">
      </el-table-column>
      <el-table-column prop="furtherform" label="进修形式">
      </el-table-column>
      <el-table-column prop="furthernum" label="完成课时">
      </el-table-column>
      <el-table-column prop="furtherenddate" label="结业时间">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
<!--          <el-button type="text" size="medium" @click="changeFurtherinfo">修改</el-button>-->
          <el-button type="text" size="medium" @click="changeFurtherinfo(scope.row)">修改</el-button>
          <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" @click="deletework">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        :current-page="1"
        :page-size="10"
        :page-sizes="[5, 10]"
        :total="jinxiuData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <div>
      <el-dialog :visible.sync="addVisible" :title="title">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="论文名称">
            <el-input v-model="form.papername"/>
          </el-form-item>
          <el-form-item label="是否第一作者">
            <el-select v-model="form.isauthor"  placeholder="请选择">
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发表刊物">
            <el-input v-model="form.publication"/>
          </el-form-item>
          <el-form-item label="出版社">
            <el-input v-model="form.press"/>
          </el-form-item>
          <el-form-item label="发表时间">
            <el-col :span="11">
              <el-date-picker v-model="form.pubtime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addVisible = false">取 消</el-button>
          <el-button type="primary" @click="addClassSuccess">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="organizationVisible" :title="title">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="起始时间">
            <el-col :span="11">
              <el-date-picker v-model="form.activebtime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="终止时间">
            <el-col :span="11">
              <el-date-picker v-model="form.activeftime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="组织名称">
            <el-input v-model="form.activename"/>
          </el-form-item>
          <el-form-item label="参加人数">
            <el-input v-model="form.peoplenum"/>
          </el-form-item>
          <el-form-item label="活动次数">
            <el-input v-model="form.activenum"/>
          </el-form-item>
          <el-form-item label="活动内容">
            <el-input v-model="form.activecontent"/>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="organizationVisible = false">取 消</el-button>
          <el-button type="primary" @click="addOrganizationSuccess">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="further" :title="title">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="起始时间">
            <el-col :span="11">
              <el-date-picker v-model="form.furtherbtime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="终止时间">
            <el-col :span="11">
              <el-date-picker v-model="form.furtherftime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="进修单位名称">
            <el-input v-model="form.furthername"/>
          </el-form-item>
          <el-form-item label="进修内容">
            <el-input v-model="form.furthercontent"/>
          </el-form-item>
          <el-form-item label="进修形式">
            <el-input v-model="form.furtherform"/>
          </el-form-item>
          <el-form-item label="完成课时">
            <el-input v-model="form.furthernum"/>
          </el-form-item>
          <el-form-item label="结业时间">
            <el-input v-model="form.furtherenddate"/>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="further = false">取 消</el-button>
          <el-button type="primary" @click="addFurtherSuccess">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    </div>
  </div>
</template>

<script>
export default {
name: "scientificTable",
  data(){
    return{
      title:'',
      addVisible:false,
      changeVisible:false,
      addMatchVisible:false,
      changematchVisible:false,
      organizationVisible:false,
      corganizationVisible:false,
      further:false,
      changeFurther:false,
      form: {},
      jinxiuData:[{
        furtherbtime:'2020-6-5',
        furtherftime:'2020-7-1',
        furthername:'河北医科大学第四医院',
        furthercontent:'医学影像合成',
        furtherform:'实践',
        furthernum:'10',
        furtherenddate: '2020-7-1'
      },
        {
          furtherbtime:'2020-3-5',
          furtherftime:'2020-4-1',
          furthername:'中国医科大学',
          furthercontent:'工程伦理',
          furtherform:'授课',
          furthernum:'10',
          furtherenddate:'2020-4-1'
        },
        {
          furtherbtime:'2020-6-5',
          furtherftime:'2020-7-1',
          furthername:'石家庄市五医院',
          furthercontent:'临床研究',
          furtherform:'合作',
          furthernum:'10',
          furtherenddate:'2020-7-1'
        },

      ],
      activeData:[{
        activebtime:'2020-6-5',
        activeftime:'2020-7-1',
        activename:'三甲医院参观',
        peoplenum:'20',
        activenum:'2',
        activecontent:'熟悉手术台'
      },
        {
          activebtime:'2019-6-5',
          activeftime:'2019-6-20',
          activename:'临床医学观看手术过程',
          peoplenum:'20',
          activenum:'2',
          activecontent:'参观'
        },
        {
          activebtime:'2019-9-5',
          activeftime:'2019-9-20',
          activename:'临床医学讲座',
          peoplenum:'10',
          activenum:'3',
          activecontent:'刘教授关于临床医学前沿方向的讲座'
        }
      ],
      paperData: [{
        papername: '肝衰竭诊疗指南',
        isauthor: '是',
        publication: '中华肝脏病杂志',
        press:'北京出版社',
        pubtime:'2020-8-20',
      }, {
        papername: '微创经皮肾穿刺造瘘术治疗上尿路疾病',
        isauthor: '是',
        publication: '中华泌尿外科杂志',
        press:'北京出版社',
        pubtime:'2020-8-20',
      }, {
        papername: '整合医学初探',
        isauthor: '是',
        publication: '医学争鸣',
        press:'北京出版社',
        pubtime:'2020-8-20',
      },{
        papername: 'SNP-为人类基因组描绘新的蓝图',
        isauthor: '是',
        publication: '遗传',
        press:'北京出版社',
        pubtime:'2020-8-20',
      },{
        papername: '促进术后康复的麻醉管理专家共识',
        isauthor: '是',
        publication: '中华麻醉学杂志',
        press:'北京出版社',
        pubtime:'2020-8-20',
      }
      ],
    }
  },
  methods: {
  reset(){
    this.form ={
      papername:undefined,
      isauthor:undefined,
      publication:undefined,
      press:undefined,
      pubtime:undefined,
      activebtime:undefined,
      activeftime:undefined,
      activename:undefined,
      peoplenum:undefined,
      activenum:undefined,
      activecontent:undefined,
      furtherbtime:undefined,
      furtherftime:undefined,
      furthername:undefined,
      furthercontent:undefined,
      furtherform:undefined,
      furthernum:undefined,
      furtherenddate:undefined,
    }
  },
    addClass(){
    this.reset()
      this.title = '新增论文发表'
      this.addVisible = true;
    },
    changeinfo(row){
    this.title = '修改论文发表'
      this.form = row
      this.changeVisible = true;
    },
    addClassSuccess(){
      this.addVisible = false;
      this.$message({
          type: 'success',
          message: '新增成功',
        }
      )
    },
    addMatch(){
      this.addMatchVisible = true;
    },
    addMatchSuccess(){
      this.addMatchVisible = false;
      this.$message({
          type: 'success',
          message: '新增成功',
        }
      )
    },
    changematch(){
      this.changematchVisible = true;
    },
    changeSuccess(){
      this.changeVisible = false;
      this.$message({
        type: 'success',
        message: '修改成功',
      })
    },
    changematchSuccess(){
      this.changematchVisible = false;
      this.$message({
        type: 'success',
        message: '修改成功',
      })
    },
    addOrganization(){
      this.title ='新增组织指导课外活动'
      this.reset()
      this.organizationVisible = true;
    },
    addOrganizationSuccess(){
      this.organizationVisible = false;
      this.$message({
          type: 'success',
          message: '新增成功',
        }
      )
    },
    changcOrganization(row){
    this.title = '修改组织指导课外活动'
      this.form = row
      this.organizationVisible = true;
    },
    changcOrganizationSuccess(){
      this.corganizationVisible = false;
      this.$message({
          type: 'success',
          message: '修改成功',
        }
      )
    },
    addFurther(){
    this.title = '新增进修教育情况'
      this.reset()
      this.further = true
    },
    changeFurtherinfo(row){
      this.form  = row
      this.title = '修改进修教育情况'
      this.further = true
    },
    addFurtherSuccess(){
      this.further = false;
      this.$message({
          type: 'success',
          message: '新增成功',
        }
      )
    },
    changFurtherSuccess(){
      this.changeFurther = false;
      this.$message({
        type: 'success',
        message: '修改成功',
      })
    },
    deletework() {
      this.$confirm('确认删除此条记录?', '提示', {
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
