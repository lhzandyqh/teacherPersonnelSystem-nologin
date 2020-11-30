<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">基本信息</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="openJibenDialog">修改</el-button>
          </div>
          <div class="card-container">
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">姓&#8195;&#8195;名：</span>
                  </div>
                  <div class="content">
                    <span>王老师</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">性&#8195;&#8195;别：</span>
                  </div>
                  <div class="content">
                    <span>女</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">民&#8195;&#8195;族：</span>
                  </div>
                  <div class="content">
                    <span>汉</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">出生年月：</span>
                  </div>
                  <div class="content">
                    <span>1980-3-2</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">年&#8195;&#8195;龄：</span>
                  </div>
                  <div class="content">
                    <span>40</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span>
                  </div>
                  <div class="content">
                    <span>北京</span>
                  </div>
                </div>
              </el-col>

            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">身份证号：</span>
                  </div>
                  <div class="content">
                    <span>234445198xxxxxxxxx</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">政治面目：</span>
                  </div>
                  <div class="content">
                    <span>党员</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">入党团时间：</span>
                  </div>
                  <div class="content">
                    <span>2003-2-3</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">家庭住址：</span>
                  </div>
                  <div class="content">
                    <span>北京市朝阳区xxxxxxxxxxxx</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">手机号码：</span>
                  </div>
                  <div class="content">
                    <span>12345678943</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">Email：</span>
                  </div>
                  <div class="content">
                    <span>222334424#ddd</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">部&#8195;&#8195;门：</span>
                  </div>
                  <div class="content">
                    <span>临床医学系</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">教职工号：</span>
                  </div>
                  <div class="content">
                    <span>32423435</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">任教学科：</span>
                  </div>
                  <div class="content">
                    <span>临床医学</span>
                  </div>
                </div>
              </el-col>

              <!--              <el-col :span="8">-->
              <!--                <div class="single">-->
              <!--                  <div class="biaoqian">-->
              <!--                    <span style="font-weight: bolder">参加工作时间：</span>-->
              <!--                  </div>-->
              <!--                  <div class="content">-->
              <!--                    <span>2009.3.1</span>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </el-col>-->
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">现任职务：</span>
                  </div>
                  <div class="content">
                    <span>临床医学系辅导员</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">任职时间：</span>
                  </div>
                  <div class="content">
                    <span>2017-05-23</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">工作时间：</span>
                  </div>
                  <div class="content">
                    <span>2015-03-01</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">聘用形式：</span>
                  </div>
                  <div class="content">
                    <span>人才派遣</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">聘任时间：</span>
                  </div>
                  <div class="content">
                    <span>2015-07-10</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">工&#8195;&#8195;龄：</span>
                  </div>
                  <div class="content">
                    <span>5年</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">工作状态：</span>
                  </div>
                  <div class="content">
                    <span>任职</span>
                  </div>
                </div>
              </el-col>

              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">聘用合同起始时间：</span>
                  </div>
                  <div class="content">
                    <span></span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">聘用合同终止时间：</span>
                  </div>
                  <div class="content">
                    <span></span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding-top: 10px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bolder;color:#409EFF ">学历信息</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="openEditStudyExperience">修改</el-button>
        </div>
        <div class="card-container">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">初始学历：</span>
                </div>
                <div class="content">
                  <span>大学本科</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">初始学历毕业院校：</span>
                </div>
                <div class="content">
                  <span>东北大学</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">初始学历毕业时间：</span>
                </div>
                <div class="content">
                  <span>2015-06-10</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">初始学位：</span>
                </div>
                <div class="content">
                  <span>本科学位</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">所学专业：</span>
                </div>
                <div class="content">
                  <span>临床医学</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">学制：</span>
                </div>
                <div class="content">
                  <span>5年</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">最高学历：</span>
                </div>
                <div class="content">
                  <span>硕士研究生</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">最高学历毕业院校：</span>
                </div>
                <div class="content">
                  <span>清华大学</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">最高学历毕业时间：</span>
                </div>
                <div class="content">
                  <span>2018-06-10</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">最高学位：</span>
                </div>
                <div class="content">
                  <span>硕士学位</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">所学专业：</span>
                </div>
                <div class="content">
                  <span>临床医学</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">学制：</span>
                </div>
                <div class="content">
                  <span>3年</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-row>
    <el-row style="padding-top: 10px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bolder;color:#409EFF ">专业能力</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="openZhuanyeDialog">修改</el-button>
        </div>
        <div class="card-container">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">工&#8195;&#8195;种：</span>
                </div>
                <div class="content">
                  <span>临床医学与医学技术类</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称(资格)：</span>
                </div>
                <div class="content">
                  <span>教授</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称评定时间：</span>
                </div>
                <div class="content">
                  <span>2013.5.4</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业技术岗位级别：</span>
                </div>
                <div class="content">
                  <span>九级</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">管理岗位级别：</span>
                </div>
                <div class="content">
                  <span>科级</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">工勤技术岗位级别：</span>
                </div>
                <div class="content">
                  <span>高级工</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">初级职称：</span>
                </div>
                <div class="content">
                  <span>助教</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">初级职称评审时间：</span>
                </div>
                <div class="content">
                  <span>2013.5.4</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">中级职称：</span>
                </div>
                <div class="content">
                  <span>临床医学检验主管技师</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">中级职称评审时间：</span>
                </div>
                <div class="content">
                  <span>2015.5.4</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">高级职称：</span>
                </div>
                <div class="content">
                  <span>临床医学检验主任技师</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">高级职称评审时间：</span>
                </div>
                <div class="content">
                  <span>2017.5.4</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">正高级职称：</span>
                </div>
                <div class="content">
                  <span>研究员</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">正高级职称评审时间：</span>
                </div>
                <div class="content">
                  <span>2019.5.4</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">荣誉称号：</span>
                </div>
                <div class="content">
                  <span>名誉教授</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">荣誉称号取得时间：</span>
                </div>
                <div class="content">
                  <span>2003.3.3</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业发展称号：</span>
                </div>
                <div class="content">
                  <span>学科带头人</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业发展称号取得时间：</span>
                </div>
                <div class="content">
                  <span>2019.4.3</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">任现职以来担任学校工作：</span>
                </div>
                <div class="content">
                  <span>科研</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">担任工作起始时间：</span>
                </div>
                <div class="content">
                  <span>2003.3.3</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">担任工作结束时间：</span>
                </div>
                <div class="content">
                  <span>2003.3.4</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-row>
    <el-row style="padding-top:10px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bolder;color:#409EFF ">工作经历</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="openDialog">增加</el-button>
        </div>
        <div class="card-container">
          <el-table
            :data="tableData"
            style="width: 100%"
            stripe
          >
            <el-table-column
              prop="name"
              label="姓名"
            />
            <el-table-column
              prop="companies"
              label="工作单位"
            />
            <el-table-column
              prop="work"
              label="担任职务"
            />
            <el-table-column
              prop="btime"
              label="开始时间"
            />
            <el-table-column
              prop="endtime"
              label="结束时间"
            />
            <el-table-column
              prop="witness"
              label="证明人"
            />
            <el-table-column label="操作" align="center"  class-name="small-padding fixed-width">
              <template slot-scope="scope">
                <el-button size="mini" type="text" icon="el-icon-edit" @click="handleUpdate(scope.row)">修改</el-button>
                <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" @click="deletework">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </el-row>
    <div>
      <el-dialog :visible.sync="dialogVisible" :title="title">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="姓名">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="工作单位">
            <el-input v-model="form.companies"/>
          </el-form-item>
          <el-form-item label="担任职务">
            <!--            <el-input v-model="form.zhiwu"/>-->
            <el-input v-model="form.work"/>
          </el-form-item>
          <el-form-item label="证明人">
            <el-input v-model="form.witness"/>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-col :span="11">
              <el-date-picker v-model="form.btime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"
                              placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-col :span="11">
              <el-date-picker v-model="form.endtime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"
                              placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.beizhu"/>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="studyDialogVisible" title="修改学习经历" width="80%">
        <el-row>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">初始学历：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">初始学历毕业院校：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">初始学历毕业时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期"
                                style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">初始学位：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">所学专业：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学制：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历毕业院校：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历毕业时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期"
                                style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学位：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">所学专业：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学制：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click=" studyDialogVisible=false">取 消</el-button>
          <el-button type="primary" @click="confirmEditStudyExp">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="zhuanyeDialogVisible" title="修改专业能力" width="80%">
        <el-row>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">工种：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">职称(资格)：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">职称评定时间：</span>
              </div>
              <div class="content" style="width: 220px">
                <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期"
                                style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业技术岗位级别：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">管理岗位级别：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">工勤技术岗位级别：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-row>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">初级职称：</span>
                </div>
                <div class="content">
                  <el-input placeholder="请输入内容"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">初级职称评审时间：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期"
                                  style="width: 60%;"/>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-row>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">中级职称：</span>
                </div>
                <div class="content">
                  <el-input placeholder="请输入内容"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">中级职称评审时间：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期"
                                  style="width: 60%;"/>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-row>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">高级职称：</span>
                </div>
                <div class="content">
                  <el-input placeholder="请输入内容"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">高级职称评审时间：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期"
                                  style="width: 60%;"/>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-row>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">正高级职称：</span>
                </div>
                <div class="content">
                  <el-input placeholder="请输入内容"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">正高级职称评审时间：</span>
                </div>
                <div class="content" style="width: 190px">
                  <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期"
                                  style="width: 70%;"/>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业发展称号：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业发展称号取得时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">荣誉称号：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="11">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">荣誉称号取得时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">任现职以来担任学校工作：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">担任工作起始时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">担任工作结束时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button>取 消</el-button>
          <el-button type="primary" @click="change">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="basicDialogVisible" title="修改基本信息" width="80%">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">姓&#8195;&#8195;名：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">性&#8195;&#8195;别：</span>
              </div>
              <div class="content">
                <el-select v-model="sex" style="width: 185px" placeholder="请选择">
                  <el-option label="男" value="1"/>
                  <el-option label="女" value="0"/>
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">民&#8195;&#8195;族：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">出生年月：</span>
              </div>
              <div class="content" style="width: 185px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 100%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">年&#8195;&#8195;龄：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">身份证号：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">政治面目：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder;">&#8195;&#8195;&#8195;入党团时间：</span>
              </div>
              <div class="content" style="width: 176px;padding: 0 0 ">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 100%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">家庭住址：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">手机号码：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">Email：</span>
              </div>
              <div class="content" style="width: 200px">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">部&#8195;&#8195;门：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">教职工号：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">任教学科：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>

          <!--          <el-col :span="9">-->
          <!--            <div class="single">-->
          <!--              <div class="biaoqian">-->
          <!--                <span style="font-weight: bolder">&#8195;&#8195;&#8195;参加工作时间：</span>-->
          <!--              </div>-->
          <!--              <div class="content" style="width: 155px;padding: 0 0">-->
          <!--                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"-->
          <!--                                style="width: 100%;padding-right: 0px"/>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </el-col>-->
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">现任职务：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">任职时间：</span>
              </div>
              <div class="content" style="width: 185px;padding: 0 0">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 100%;padding-right: 0px"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">工作时间：</span>
              </div>
              <div class="content" style="width: 185px;padding: 0 0">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 100%;padding-right: 0px"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">聘用形式：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">聘任时间：</span>
              </div>
              <div class="content" style="width: 185px;padding: 0 0">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 100%;padding-right: 0px"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">工&#8195;&#8195;龄：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">工作状态：</span>
              </div>
              <div class="content">
                <el-input style="width: 185px" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;聘用合同起始时间：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-date-picker type="month" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 100%;padding-right: 0px"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;聘用合同终止时间：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 100%;padding-right: 0px"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notEditJiben">取 消</el-button>
          <el-button type="primary" @click="confirmEditJiben">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      sex: '',
      title:'',
      zhuanyeDialogVisible: false,
      dialogVisible: false,
      basicDialogVisible: false,
      editDialogVisible: false,
      studyDialogVisible: false,
      tableData: [{
        name: '张强',
        companies: '石家庄市第一医院',
        work:'主治医师',
        btime:'2015-8-20',
        endtime:'2016-7-4',
        witness:'李宁'
      }, {
        name: '张强',
        companies: '北京医学专科学院',
        work:'辅导员',
        btime:'2016-9-20',
        endtime:'2018-6-20',
        witness:'王伟'
      }],
      // fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      form: {
        zhiwu: '',
        begindate: '',
        overdate: '',
        danwei: '',
        people: '',
        beizhu: ''
      },
      editform: {
        zhiwu: '',
        begindate: '',
        overdate: '',
        danwei: '',
        people: ''
      },
      form: {}
    }
  },
  methods: {
    reset(){
      this.form = {
        name: undefined,
        companies: undefined,
        work: undefined,
        witness: undefined,
        btime: undefined,
        endtime: undefined,
        beizhu: undefined,
      }
    },
    onSubmit() {
      console.log('submit!')
    },
    submit() {
      this.dialogVisible = false
      this.$message({
        type: 'success',
        message: '提交成功'
      })
    },
    change() {
      this.$message({
        type: 'success',
        message: '修改成功'
      })
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    openJibenDialog: function () {
      console.log('我点了我点了我点了')
      this.basicDialogVisible = true
    },
    openDialog: function () {
      this.reset();
      this.title = '增加工作经历'
      console.log('我点了')
      this.dialogVisible = true
    },
    openZhuanyeDialog: function () {
      this.zhuanyeDialogVisible = true
    },
    notEditJiben: function () {
      this.basicDialogVisible = false
      const prams = {
        infotype: '基础信息'
      }
    },
    openEditStudyExperience() {
      this.studyDialogVisible = true
    },
    confirmEditStudyExp() {
      this.$message({
        type: 'success',
        message: '修改成功'
      })
      this.studyDialogVisible = false
    },
    confirmEditJiben: function () {
      this.$message({
        type: 'success',
        message: '修改成功'
      })
      this.basicDialogVisible = false
    },
    notEditProfessionalAbility: function () {
      this.zhuanyeDialogVisible = false
      const prams = {
        infotype: '专业能力'
      }
    },
    confirmEditProfessionalAbility: function () {
      this.zhuanyeDialogVisible = false
    },
    handleUpdate(row){
      this.dialogVisible = true
      this.form = row;
      this.title = "修改工作经历";
    },
    deletework() {
      this.$confirm('确认删除此条工作经历?', '提示', {
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
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
  height: 100%;
}

.single {
  display: inline-block;
}

.biaoqian {
  display: inline-block;
}

.content {
  display: inline-block;
}

.row-container {
  padding-top: 10px;
}

.button {
  display: inline-block;
  margin-left: 80px;
}

.card-container {
  margin-top: 10px;
}

.twoButton {
  display: inline-block;
}
</style>
