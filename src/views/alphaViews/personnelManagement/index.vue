<template>
  <div class="app-container">
    <el-card>
    <div style="margin: 0 0 10px 0;font-size: 16px;font-weight: bolder;text-align: center;">
      <span>临床医学系人员情况</span>
      <div style="float: right;margin-right: 1.5rem"><el-button type="text" size="medium" @click="addClass">新增</el-button></div>
      <div style="float: right;margin-right: 2rem"><el-button type="text" size="medium" icon="el-icon-search" @click="searchPeople">查询</el-button></div>
    </div>
    <el-table :data="peopleData" style="width: 100%" stripe>
      <el-table-column prop="name" label="姓名" width="100px">
      </el-table-column>
      <el-table-column prop="workname" label="岗位">
      </el-table-column>
      <el-table-column prop="class" label="职称" width="100px">
      </el-table-column>
      <el-table-column prop="tel" label="联系方式">
      </el-table-column>
      <el-table-column prop="date" label="入职时间">
      </el-table-column>
      <el-table-column prop="money" label="工资" width="100px">
      </el-table-column>
      <el-table-column prop="kaoqin" label="考勤情况">
      </el-table-column>
      <el-table-column label="岗位状态">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.approval==='离职'" type="danger" >离职</el-tag>
          <el-tag  v-if="scope.row.approval==='试用'" type="warning">试用</el-tag>
          <el-tag  v-if="scope.row.approval==='在岗'" type="success">在岗</el-tag>
          <el-tag  v-if="scope.row.approval==='出差'" >出差</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="medium" @click="changeinfo">编辑</el-button>
          <el-button type="text" size="medium" @click="viewinfo">详细信息</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        :page-sizes="[5, 10]"
        :total="peopleData.length"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    </el-card>
    <div>
      <el-dialog :visible.sync="searchVisible" title="查询人员" style="width: 100%">
        <span style="font-size: 16px;font-weight: bolder;margin-right: 15px">请输入关键词(选填):</span>
        <el-input  v-model="input" placeholder="姓名/职称/岗位/岗位状态" style="width: 18vw"></el-input>
        <el-row style="margin-top: 20px">
          <span style="font-size: 1rem;font-weight: bolder;float:left;margin-left: 3vh">设置筛选条件:</span>
          <span style="font-size: 0.95rem;font-weight: bolder;float:left;margin-left:15px;margin-right: 10px">职称</span>
          <el-checkbox v-model="checked1" style="float:left;margin-right: 2vw">不限</el-checkbox>
          <el-checkbox-group v-model="zhicheng" style="width: 100%;">
            <el-checkbox v-for="(item,index) in collegeList"
                         :key="index"
                         :label="item.label"
                         @change="change1"
            ></el-checkbox>
          </el-checkbox-group>
        </el-row>
        <el-row style="margin-top: 20px">
          <span style="text-indent:120.38px;font-size: 0.95rem;font-weight: bolder;float:left;margin-left:15px;margin-right: 10px">岗位</span>
          <el-checkbox v-model="checked2" style="float:left;margin-right: 2vw">不限</el-checkbox>
          <el-checkbox-group v-model="work" style="width: 100%;">
            <el-checkbox v-for="(item,index) in workList"
                         :key="index"
                         :label="item.label"
                         @change="change2"
            ></el-checkbox>
          </el-checkbox-group>
        </el-row>
        <el-row style="margin-top: 20px">
          <span style="text-indent:90px;font-size: 0.95rem;font-weight: bolder;float:left;margin:0 10px 0 15px;">岗位状态</span>
          <el-checkbox v-model="checked4" style="float:left;margin-right: 2vw">不限</el-checkbox>
          <el-checkbox-group v-model="workstate" style="width: 100%;">
            <el-checkbox v-for="(item,index) in stateList"
                         :key="index"
                         :label="item.label"
                         @change="change4"
            ></el-checkbox>
          </el-checkbox-group>
        </el-row>
        <el-row style="margin-top: 20px">
          <span style="text-indent:120.38px;font-size: 0.95rem;font-weight: bolder;float:left;margin-left:15px;margin-right: 10px">工资</span>
          <el-checkbox v-model="checked3" style="float:left;margin-right: 2vw">不限</el-checkbox>
          <el-checkbox-group v-model="money" style="width: 100%;">
            <el-checkbox v-for="(item,index) in monList"
                         :key="index"
                         :label="item.label"
                         @change="change3"
            ></el-checkbox>
          </el-checkbox-group>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" round plain style="margin-left: 3vw" icon="el-icon-search" @click="searchmsg">点击查询</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="addVisible" title="新增学院人员">
        <el-form ref="form" :inline="true" :model="form" label-width="100px">
          <el-form-item label="姓名">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="岗位">
            <el-input v-model="form.class"/>
          </el-form-item>
          <el-form-item label="职称">
            <el-input v-model="form.department"/>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.tel"/>
          </el-form-item>
          <el-form-item label="入职时间">
              <el-date-picker type="date" placeholder="请选择" v-model="form.bdate" style="width: 185px;"></el-date-picker>
          </el-form-item>
          <el-form-item label="工资">
            <el-input v-model="form.money"/>
          </el-form-item>
          <el-form-item label="考勤情况">
            <el-input v-model="form.kaoqin"/>
          </el-form-item>
          <el-form-item label="岗位状态">
            <el-select v-model="form.state" style="width: 185px" placeholder="请选择">
              <el-option label="在岗" value="0"></el-option>
              <el-option label="出差" value="1"></el-option>
              <el-option label="试用" value="2"></el-option>
              <el-option label="离职" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addVisible = false">取 消</el-button>
          <el-button type="primary" @click="addClassSuccess">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="changeVisible" title="修改人员信息">
        <el-form ref="form" :inline="true" :model="form" label-width="100px">
          <el-form-item label="姓名">
            <el-input v-model="form.name" placeholder="王宁"/>
          </el-form-item>
          <el-form-item label="岗位">
            <el-input v-model="form.class" placeholder="辅导员" />
          </el-form-item>
          <el-form-item label="职称">
            <el-input v-model="form.department" placeholder="助教"/>
          </el-form-item>
          <el-form-item label="联系方式" >
            <el-input v-model="form.tel" placeholder="13456778652" />
          </el-form-item>
          <el-form-item label="入职时间">
            <el-date-picker type="date" placeholder="2018-7-1" v-model="form.bdate" style="width: 185px;"></el-date-picker>
          </el-form-item>
          <el-form-item label="工资">
            <el-input v-model="form.money" placeholder="5000"/>
          </el-form-item>
          <el-form-item label="考勤情况">
            <el-input v-model="form.kaoqin" placeholder="良好"/>
          </el-form-item>
          <el-form-item label="岗位状态">
            <el-select v-model="form.state" style="width: 185px" placeholder="在岗">
              <el-option label="在岗" value="0"></el-option>
              <el-option label="出差" value="1"></el-option>
              <el-option label="试用" value="2"></el-option>
              <el-option label="离职" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="changeVisible = false">取 消</el-button>
          <el-button type="primary" @click="changeSuccess">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <el-dialog :visible.sync="jibenVisible" title="个人详细信息">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">姓&#8195;&#8195;名：</span><span>王老师</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">性&#8195;&#8195;别：</span><span>女</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">民&#8195;&#8195;族：</span><span>汉</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">出生年月：</span><span>1980-3-2</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span><span>北京</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职&#8195;&#8195;别：</span><span>助教</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">身份证号：</span><span>234445198xxxxxx</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">政治面目：</span><span>党员</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">入党团时间：</span><span>2003-2-3</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">家庭住址：</span><span>北京市朝阳区</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">手机号码：</span><span>12345678943</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">Email：</span><span>222334424#ddd</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任教学科：</span><span>临床医学</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">部门：</span><span>临床医学系</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">参加工作时间：</span><span>2009.3.1</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">工作状态：</span><span>任职</span>
            </div>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘用合同起始时间：</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘用合同终止时间：</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="foot">
        <span slot="footer" >
          <el-button type="primary" @click="jibenVisible = false" size="small" plain>关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data(){
    return{
      jibenVisible:false,
      checked1:true,
      checked2:true,
      checked3:true,
      checked4:true,
      searchVisible:false,
      addVisible:false,
      changeVisible:false,
      input:'',
      zhicheng:[],
      work:[],
      money:[],
      workstate:[],
      stateList: [
        { label: '在岗', value: '1' },
        { label: '出差', value: '2' },
        { label: '试用', value: '3' },
        { label: '离职', value: '4' },
      ],
      monList: [
        { label: '5K以下', value: '1' },
        { label: '5K~7K', value: '2 ' },
        { label: '7K~1万', value: '4' },
        { label: '1万以上', value: '4' },
      ],
      workList: [
        { label: '书记', value: '1' },
        { label: '院长', value: '2 ' },
        { label: '副院长', value: '3' },
        { label: '辅导员', value: '4' },

      ],
      collegeList: [
        { label: '助教', value: '助教' },
        { label: '讲师', value: '讲师' },
        { label: '副教授', value: '副教授' },
        { label: '教授', value: '教授' },

      ],
      form: {
        name:'',
        class:'',
        department:'',
        tel:'',
        money:'',
        kaoqin:'',
        state:'',
        bdate:'',
      },
      peopleData:[
        {
          name: '王宁',
          workname:'辅导员',
          class:'助教',
          tel:'13455654432',
          date:'2018-12-13',
          money:'5000',
          kaoqin:'良好',
          approval:'在岗',
        },
        {
          name: '李强',
          workname:'副院长',
          class:'教授',
          tel:'13455654432',
          date:'2010-12-13',
          money:'9000',
          kaoqin:'优秀',
          approval:'在岗',
        },{
          name: '黎明',
          workname:'辅导员',
          class:'讲师',
          tel:'13455654432',
          date:'2018-12-13',
          money:'8000',
          kaoqin:'良好',
          approval:'出差',
        },{
          name: '少永',
          workname:'辅导员',
          class:'讲师',
          tel:'13455654432',
          date:'2015-12-13',
          money:'6000',
          kaoqin:'一般',
          approval:'离职',
        },{
          name: '李三',
          workname:'辅导员',
          class:'助教',
          tel:'13455654432',
          date:'2020-9-13',
          money:'4000',
          kaoqin:'良好',
          approval:'试用',
        },{
          name: '张良',
          workname:'院长',
          class:'教授',
          tel:'13455654432',
          date:'2009-12-13',
          money:'10000',
          kaoqin:'良好',
          approval:'在岗',
        },{
          name: '荆轲',
          workname:'辅导员',
          class:'助教',
          tel:'13455654432',
          date:'2017-12-13',
          money:'7000',
          kaoqin:'良好',
          approval:'出差',
        },{
          name: '王强',
          workname:'副院长',
          class:'副教授',
          tel:'13455654432',
          date:'2018-12-13',
          money:'8000',
          kaoqin:'良好',
          approval:'在岗',
        },{
          name: '弘扬',
          workname:'辅导员',
          class:'助教',
          tel:'13455654432',
          date:'2018-12-13',
          money:'5000',
          kaoqin:'差',
          approval:'离职',
        },

      ]
    }
  },
  methods: {
    searchPeople(){
      this.searchVisible = true;
    },
    searchmsg(){
      this.searchVisible = false;
      this.$message({
          type: 'success',
          message: '查询成功',
        }
      )
    },
    viewinfo(){
      this.jibenVisible = true;
    },
    addClass(){
      this.addVisible = true;
    },
    changeinfo(){
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
    changeSuccess(){
      this.changeVisible = false;
      this.$message({
        type: 'success',
        message: '修改成功',
      })
    },
    change1(){
      this.checked1 = false;
    },
    change2(){
      this.checked2= false;
     }
  }
}
</script>

<style scoped>
.dialog-footer{
  text-align: center;
}
.foot{
  margin-top: 15px;
  text-align: center;
}
</style>
