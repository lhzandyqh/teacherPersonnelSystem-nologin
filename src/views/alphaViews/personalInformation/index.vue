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
            <el-row>
              <el-col :span="18">
                <el-row>
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
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="margin-top: 10px">
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">出生日期：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">年&#8195;&#8195;龄：</span>
                      </div>
                      <div class="content">
                        <span>女</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="margin-top: 10px">
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">户籍所在地：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">现住址：</span>
                      </div>
                      <div class="content">
                        <span>女</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">学年教学质量考核情况：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="margin-top: 10px">
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">身份证号：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">政治面貌：</span>
                      </div>
                      <div class="content">
                        <span>女</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">入党团时间：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="margin-top: 10px">
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">联系方式：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">邮&#8195;&#8195;箱：</span>
                      </div>
                      <div class="content">
                        <span>女</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">参加工作时间：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="margin-top: 10px">
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">来校时间：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">工&#8195;&#8195;龄：</span>
                      </div>
                      <div class="content">
                        <span>女</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">部&#8195;&#8195;门：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row style="margin-top: 10px">
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">工&#8195;&#8195;号：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">现任职务：</span>
                      </div>
                      <div class="content">
                        <span>女</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">任职时间：</span>
                      </div>
                      <div class="content">
                        <span>王老师</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">个人照片：</span>
                  </div>
                  <div class="content">
                    <div class="person_img">
                      <img>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top: 10px">
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">聘任形式：</span>
                  </div>
                  <div class="content">
                    <span>王老师</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">工作状态：</span>
                  </div>
                  <div class="content">
                    <span>女</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">合同起始时间：</span>
                  </div>
                  <div class="content">
                    <span>汉</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">合同终止时间：</span>
                  </div>
                  <div class="content">
                    <span>汉</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top: 10px">
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">高校教资证取得时间：</span>
                  </div>
                  <div class="content">
                    <span>王老师</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">授予单位：</span>
                  </div>
                  <div class="content">
                    <span>女</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">任教学科：</span>
                  </div>
                  <div class="content">
                    <span>汉</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">年度考核情况：</span>
                  </div>
                  <div class="content">
                    <span>汉</span>
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
                  <span style="font-weight: bolder">第一学历：</span>
                </div>
                <div class="content">
                  <span>大学本科</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">第一学历毕业院校：</span>
                </div>
                <div class="content">
                  <span>东北大学</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">第一学历毕业时间：</span>
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
                <span style="font-weight: bolder">最高学历：</span>
              </div>
              <div class="content">
                <span>大学本科</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历毕业院校：</span>
              </div>
              <div class="content">
                <span>东北大学</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历毕业时间：</span>
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
                  <span style="font-weight: bolder">学位：</span>
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
                  <span style="font-weight: bolder">第一学历学制：</span>
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
                  <span style="font-weight: bolder">最高学历学制：</span>
                </div>
                <div class="content">
                  <span>硕士学位</span>
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
                  <span style="font-weight: bolder">专业技术职务：</span>
                </div>
                <div class="content">
                  <span>临床医学与医学技术类</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业技术职务授予时间：</span>
                </div>
                <div class="content">
                  <span>教授</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业技术职务颁发时间：</span>
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
                  <span style="font-weight: bolder">专业技术职务颁发单位：</span>
                </div>
                <div class="content">
                  <span>九级</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">执业资格证名称：</span>
                </div>
                <div class="content">
                  <span>科级</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">执业资格证授予时间：</span>
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
                  <span style="font-weight: bolder">执业资格证颁发时间：</span>
                </div>
                <div class="content">
                  <span>助教</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">执业资格证颁发单位：</span>
                </div>
                <div class="content">
                  <span>2013.5.4</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证名称：</span>
                </div>
                <div class="content">
                  <span>临床医学检验主管技师</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证授予时间：</span>
                </div>
                <div class="content">
                  <span>2015.5.4</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证颁发时间：</span>
                </div>
                <div class="content">
                  <span>临床医学检验主任技师</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证颁发单位：</span>
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
                  <span style="font-weight: bolder">职称：</span>
                </div>
                <div class="content">
                  <span>研究员</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称授予时间：</span>
                </div>
                <div class="content">
                  <span>2019.5.4</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称取得时间：</span>
                </div>
                <div class="content">
                  <span>名誉教授</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">骨干教师：</span>
                </div>
                <div class="content">
                  <span>是</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">骨干教师聘任时间：</span>
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
                  <span style="font-weight: bolder">是否双师：</span>
                </div>
                <div class="content">
                  <span>是</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">双师聘任时间：</span>
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
                  <span style="font-weight: bolder">专业学科带头人：</span>
                </div>
                <div class="content">
                  <span>是</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业学科带头人聘任时间：</span>
                </div>
                <div class="content">
                  <span>2019.4.3</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业领域：</span>
                </div>
                <div class="content">
                  <span>科研</span>
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
                <span style="font-weight: bolder">第一学历：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;&#8195;第一学历毕业院校：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;&#8195;第一学历毕业时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="8">
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
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历毕业时间：</span>
              </div>
              <div class="content">
                <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学位：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;&#8195;所学专业：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;&#8195;第一学历学制：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历学制：</span>
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
                <span style="font-weight: bolder">专业技术职务：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业技术职务授予时间：</span>
              </div>
              <div class="content">
                <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业技术职务颁布时间：</span>
              </div>
              <div class="content" style="width: 220px">
                <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业技术职务颁发单位：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">执业资格证名称：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">执业资格证授予时间：</span>
              </div>
              <div class="content">
                <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-row>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">执业资格证颁发时间：</span>
                </div>
                <div class="content">
                  <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">执业资格证颁发单位：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-input placeholder="请输入内容"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证名称：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-input placeholder="请输入内容"/>
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
                  <span style="font-weight: bolder">职业资格证授予时间：</span>
                </div>
                <div class="content">
                  <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证颁发时间：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证颁发单位：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-input placeholder="请输入内容"/>
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
                  <span style="font-weight: bolder">职称：</span>
                </div>
                <div class="content">
                  <el-input placeholder="请输入内容"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称授予时间：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称取得时间：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
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
                  <span style="font-weight: bolder">骨干教师：</span>
                </div>
                <div class="content">
                  <el-select  style="width: 185px" placeholder="请选择">
                    <el-option label="是" value="临床医学" />
                    <el-option label="否" value="口腔医学" />
                  </el-select>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">骨干教师聘任时间：</span>
                </div>
                <div class="content" style="width: 190px">
                  <el-date-picker value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 70%;"/>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">是否双师：</span>
              </div>
              <div class="content">
                <el-select  style="width: 185px" placeholder="请选择">
                  <el-option label="是" value="临床医学" />
                  <el-option label="否" value="口腔医学" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">双师聘任时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 15px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业学科带头人：</span>
              </div>
              <div class="content">
                <el-select  style="width: 185px" placeholder="请选择">
                  <el-option label="是" value="临床医学" />
                  <el-option label="否" value="口腔医学" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业学科带头人聘任时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业领域：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-input placeholder="请输入内容"/>
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
                <el-select style="width: 185px" placeholder="请选择">
                  <el-option label="汉族" value="汉族" />
                  <el-option label="满族" value="满族" />
                  <el-option label="回族" value="回族" />
                  <el-option label="藏族" value="藏族" />
                  <el-option label="维吾尔族" value="维吾尔族" />
                  <el-option label="苗族" value="苗族" />
                  <el-option label="彝族" value="彝族" />
                  <el-option label="壮族" value="壮族" />
                  <el-option label="布依族" value="布依族" />
                  <el-option label="侗族" value="侗族" />
                  <el-option label="瑶族" value="瑶族" />
                  <el-option label="白族" value="白族" />
                  <el-option label="土家族" value="土家族" />
                  <el-option label="哈尼族" value="哈尼族" />
                  <el-option label="哈萨克族" value="哈萨克族" />
                  <el-option label="傣族" value="傣族" />
                  <el-option label="黎族" value="黎族" />
                  <el-option label="傈僳族" value="傈僳族" />
                  <el-option label="佤族" value="佤族" />
                  <el-option label="畲族" value="畲族" />
                  <el-option label="高山族" value="高山族" />
                  <el-option label="拉祜族" value="拉祜族" />
                  <el-option label="水族" value="水族" />
                  <el-option label="东乡族" value="东乡族" />
                  <el-option label="纳西族" value="纳西族" />
                  <el-option label="景颇族" value="景颇族" />
                  <el-option label="柯尔克孜族" value="柯尔克孜族" />
                  <el-option label="土族" value="土族" />
                  <el-option label="达斡尔族" value="在校" />
                  <el-option label="仫佬族" value="休学" />
                  <el-option label="羌族" value="退学" />
                  <el-option label="布朗族" value="在校" />
                  <el-option label="撒拉族" value="休学" />
                  <el-option label="毛南族" value="毛南族" />
                  <el-option label="仡佬族" value="仡佬族" />
                  <el-option label="锡伯族" value="锡伯族" />
                  <el-option label="阿昌族" value="阿昌族" />
                  <el-option label="普米族" value="普米族" />
                  <el-option label="朝鲜族" value="朝鲜族" />
                  <el-option label="塔吉克族" value="塔吉克族" />
                  <el-option label="怒族" value="怒族" />
                  <el-option label="乌孜别克族" value="乌孜别克族" />
                  <el-option label="俄罗斯族" value="俄罗斯族" />
                  <el-option label="鄂温克族" value="鄂温克族" />
                  <el-option label="德昂族" value="德昂族" />
                  <el-option label="保安族" value="保安族" />
                  <el-option label="裕固族" value="裕固族" />
                  <el-option label="京族" value="京族" />
                  <el-option label="塔塔尔族" value="塔塔尔族" />
                  <el-option label="独龙族" value="独龙族" />
                  <el-option label="鄂伦春族" value="鄂伦春族" />
                  <el-option label="赫哲族" value="赫哲族" />
                  <el-option label="门巴族" value="门巴族" />
                  <el-option label="珞巴族" value="珞巴族" />
                  <el-option label="基诺族" value="基诺族" />
                </el-select>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">出生日期：</span>
              </div>
              <div class="content" style="width: 185px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
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
                <el-cascader
                  size="large"
                  :options="optionsOne"
                  @change="handleChange"
                />
              </div>
            </div>
          </el-col>

        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">户籍所在地：</span>
              </div>
              <div class="content">
                <el-cascader
                  size="large"
                  :options="options"
                  @change="handleChange"
                />
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">现住址：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder;">&#8195;&#8195;&#8195;&#8195;学年教学质量考核情况：</span>
              </div>
              <div class="content" style="width: 176px;padding: 0 0 ">
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
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">政治面貌：</span>
              </div>
              <div class="content">
                <el-select style="width: 185px" placeholder="请选择">
                  <el-option label="中共党员" value="中共党员" />
                  <el-option label="中共预备党员" value="中共预备党员" />
                  <el-option label="共青团员" value="共青团员" />
                  <el-option label="民革党员" value="民革党员" />
                  <el-option label="民盟盟员" value="民盟盟员" />
                  <el-option label="民建会员" value="民建会员" />
                  <el-option label="民进会员" value="民进会员" />
                  <el-option label="农工党党员" value="农工党党员" />
                  <el-option label="致公党党员" value="致公党党员" />
                  <el-option label="九三学社社员" value="九三学社社员" />
                  <el-option label="台盟盟员" value="台盟盟员" />
                  <el-option label="无党派人士" value="无党派人士" />
                  <el-option label="群众" value="群众" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">入党团时间</span>
              </div>
              <div class="content" style="width: 200px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">联系方式：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">邮&#8195;&#8195;箱：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">参加工作时间：</span>
              </div>
              <div class="content">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">来校时间：</span>
              </div>
              <div class="content">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">工&#8195;&#8195;龄：</span>
              </div>
              <div class="content" style="width: 185px;padding: 0 0">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">部&#8195;&#8195;门：</span>
              </div>
              <div class="content" style="width: 185px;padding: 0 0">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">工&#8195;&#8195;号：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">现任职务：</span>
              </div>
              <div class="content" style="width: 185px;padding: 0 0">
                <el-input placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">任职时间：</span>
              </div>
              <div class="content">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">聘任形式：</span>
              </div>
              <div class="content">
                <el-input style="width: 185px" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
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
                <span style="font-weight: bolder">合同起始时间：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-date-picker type="month" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 100%;padding-right: 0px"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">聘用合同终止时间：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 100%;padding-right: 0px"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">高校教资证取得时间：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
                                style="width: 100%;padding-right: 0px"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;授予单位：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input style="width: 185px" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">任教学科：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input style="width: 185px" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">年度考核情况：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input style="width: 185px" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-top: 10px">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">&#8195;个人照片上传：</span>
            </div>
            <div class="content" style="width: 130px">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </div>
          </div>
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
  import { regionDataPlus, CodeToText, TextToCode, provinceAndCityData } from 'element-china-area-data'
export default {
  name: 'Index',
  data() {
    return {
      options: regionDataPlus,
      optionsOne: provinceAndCityData,
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
    },
    handleChange(value) {
      // console.log(this.selectedOptions)
      console.log('户籍所在地')
      console.log(value)// ["110000", "110100", "110101"]
      // CodeToText是个大对象，属性是区域码，属性值是汉字 用法例如：CodeToText['110000']输出北京市
      console.log(CodeToText[value[0]], CodeToText[value[1]], CodeToText[value[2]])// 北京市 市辖区 东城区
      var str = CodeToText[value[0]] + CodeToText[value[1]] + CodeToText[value[2]]
      // this.infoForm.placeOfBorn = str
      // console.log(this.infoForm.placeOfBorn)
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
  .person_img {
    width: 150px;
    height: 180px;
    background-color: #999999;
  }
</style>
