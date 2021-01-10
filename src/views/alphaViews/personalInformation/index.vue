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
                        <span>{{this.allInfo.basicInfo.teaName}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">性&#8195;&#8195;别：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.teaSex}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">民&#8195;&#8195;族：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.nation}}</span>
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
                        <span>{{this.allInfo.basicInfo.birthDate}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">年&#8195;&#8195;龄：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.age}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.nativePlace}}</span>
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
                        <span>{{this.allInfo.basicInfo.residence}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">现住址：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.currentAddress}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">学年教学质量考核情况：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.teachQualityAssessment}}</span>
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
                        <span>{{this.allInfo.basicInfo.cardId}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">政治面貌：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.politicStatus}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">入党团时间：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.politicDate}}</span>
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
                        <span>{{this.allInfo.basicInfo.phoneNum}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">邮&#8195;&#8195;箱：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.email}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">参加工作时间：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.workStartDate}}</span>
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
                        <span>{{this.allInfo.basicInfo.comeToSchoolDate}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">工&#8195;&#8195;龄：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.workYears}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">部&#8195;&#8195;门：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.dept}}</span>
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
                        <span>{{this.allInfo.basicInfo.teaId}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">现任职务：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.position}}</span>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="single">
                      <div class="biaoqian">
                        <span style="font-weight: bolder">任职时间：</span>
                      </div>
                      <div class="content">
                        <span>{{this.allInfo.basicInfo.positionDate}}</span>
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
                      <img :src="this.allInfo.basicInfo.teaPhoto">
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
                    <span>{{this.allInfo.basicInfo.hireType}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">工作状态：</span>
                  </div>
                  <div class="content">
                    <span>{{this.allInfo.basicInfo.workStatus}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">合同起始时间：</span>
                  </div>
                  <div class="content">
                    <span>{{this.allInfo.basicInfo.contractStartDate}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">合同终止时间：</span>
                  </div>
                  <div class="content">
                    <span>{{this.allInfo.basicInfo.contractEndDate}}</span>
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
                    <span>{{this.allInfo.basicInfo.teaQualifiedDate}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">授予单位：</span>
                  </div>
                  <div class="content">
                    <span>{{this.allInfo.basicInfo.teaQualifiedUnit}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">任教学科：</span>
                  </div>
                  <div class="content">
                    <span>{{this.allInfo.basicInfo.teachMajor}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">年度考核情况：</span>
                  </div>
                  <div class="content">
                    <span>{{this.allInfo.basicInfo.annualAssessment}}</span>
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
                  <span>{{this.allInfo.educationInfo.initialEducation}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">第一学历毕业院校：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.educationInfo.initialUniversity}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">第一学历毕业时间：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.educationInfo.initialGraduateDate}}</span>
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
                <span>{{this.allInfo.educationInfo.highestEducation}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历毕业院校：</span>
              </div>
              <div class="content">
                <span>{{this.allInfo.educationInfo.highestUniversity}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历毕业时间：</span>
              </div>
              <div class="content">
                <span>{{this.allInfo.educationInfo.highestGraduateDate}}</span>
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
                  <span>{{this.allInfo.educationInfo.highestDegree}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">所学专业：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.educationInfo.highestMajor}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">第一学历学制：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.educationInfo.initialStudyDuration}}</span>
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
                  <span>{{this.allInfo.educationInfo.highestStudyDuration}}</span>
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
                  <span>{{this.allInfo.professionalAbility.professTechPosition}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业技术职务授予时间：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.professTechGrantDate}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业技术职务颁发时间：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.professTechIssueDate}}</span>
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
                  <span>{{this.allInfo.professionalAbility.professTechIssueUnit}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">执业资格证名称：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.qualificateCertName}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">执业资格证授予时间：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.qualificateCertGrantDate}}</span>
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
                  <span>{{this.allInfo.professionalAbility.qualificateCertIssueDate}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">执业资格证颁发单位：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.qualificateCertIssueUnit}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证名称：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.professCertName}}</span>
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
                  <span>{{this.allInfo.professionalAbility.professCertGrantDate}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证颁发时间：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.professCertIssueDate}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证颁发单位：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.professCertIssueUnit}}</span>
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
                  <span>{{this.allInfo.professionalAbility.positionTitle}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称授予时间：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.positionGrantDate}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称取得时间：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.positionObtainDate}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">是否骨干教师：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.ifCadreTeacher}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">骨干教师聘任时间：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.cadreTeacherEngageDate}}</span>
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
                  <span>{{this.allInfo.professionalAbility.ifDoubleTeacher}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">双师聘任时间：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.doubleTeacherEngageDate}}</span>
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
                  <span>{{this.allInfo.professionalAbility.majorSubjectLeader}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业学科带头人聘任时间：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.majorSubjectLeaderDate}}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业领域：</span>
                </div>
                <div class="content">
                  <span>{{this.allInfo.professionalAbility.professArea}}</span>
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
              prop="submitPerson"
              label="姓名"
            />
            <el-table-column
              prop="workUnit"
              label="工作单位"
            />
            <el-table-column
              prop="position"
              label="担任职务"
            />
            <el-table-column
              prop="workStartDate"
              label="开始时间"
            />
            <el-table-column
              prop="workEndDate"
              label="结束时间"
            />
            <el-table-column
              prop="witness"
              label="证明人"
            />
            <el-table-column label="操作" align="center"  class-name="small-padding fixed-width">
              <template slot-scope="scope">
<!--                <el-button size="mini" type="text" icon="el-icon-edit" @click="handleUpdate(scope.row)">修改</el-button>-->
                <el-button  size="mini" type="text" icon="el-icon-delete" style="color: red" disabled="disabled" @click="deletework">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </el-row>
    <div>
      <el-dialog :visible.sync="dialogVisible" :title="title">
        <el-form ref="form" :model="form" label-width="100px">
<!--          <el-form-item label="姓名">-->
<!--            <el-input v-model="form.name"/>-->
<!--          </el-form-item>-->
          <el-form-item label="工作单位">
            <el-input v-model="form.workUnit"/>
          </el-form-item>
          <el-form-item label="担任职务">
            <!--            <el-input v-model="form.zhiwu"/>-->
            <el-input v-model="form.position"/>
          </el-form-item>
          <el-form-item label="证明人">
            <el-input v-model="form.witness"/>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-col :span="11">
              <el-date-picker v-model="form.workStartDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"
                              placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-col :span="11">
              <el-date-picker v-model="form.workEndDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"
                              placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
<!--          <el-form-item label="备注">-->
<!--            <el-input v-model="form.beizhu"/>-->
<!--          </el-form-item>-->
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
                <el-input v-model="eduForm.initialEducation" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;&#8195;第一学历毕业院校：</span>
              </div>
              <div class="content">
                <el-input v-model="eduForm.initialUniversity" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;&#8195;第一学历毕业时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="eduForm.initialGraduateDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
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
                <el-input v-model="eduForm.highestEducation" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历毕业院校：</span>
              </div>
              <div class="content">
                <el-input v-model="eduForm.highestUniversity" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历毕业时间：</span>
              </div>
              <div class="content">
                <el-date-picker v-model="eduForm.highestGraduateDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
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
                <el-input v-model="eduForm.highestDegree" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;&#8195;所学专业：</span>
              </div>
              <div class="content">
                <el-input v-model="eduForm.highestMajor" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;&#8195;第一学历学制：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-input v-model="eduForm.initialStudyDuration" placeholder="请输入内容"/>
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
                <el-input v-model="eduForm.highestStudyDuration" placeholder="请输入内容"/>
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
                <el-input v-model="proForm.professTechPosition" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业技术职务授予时间：</span>
              </div>
              <div class="content">
                <el-date-picker v-model="proForm.professTechGrantDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业技术职务颁布时间：</span>
              </div>
              <div class="content" style="width: 220px">
                <el-date-picker v-model="proForm.professTechIssueDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
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
                <el-input v-model="proForm.professTechIssueUnit" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">执业资格证名称：</span>
              </div>
              <div class="content">
                <el-input v-model="proForm.qualificateCertName" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">执业资格证授予时间：</span>
              </div>
              <div class="content">
                <el-date-picker v-model="proForm.qualificateCertGrantDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
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
                  <el-date-picker v-model="proForm.qualificateCertIssueDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">执业资格证颁发单位：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-input v-model="proForm.qualificateCertIssueUnit" placeholder="请输入内容"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证名称：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-input v-model="proForm.professCertName" placeholder="请输入内容"/>
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
                  <el-date-picker v-model="proForm.professCertGrantDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证颁发时间：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-date-picker v-model="proForm.professCertIssueDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职业资格证颁发单位：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-input v-model="proForm.professCertIssueUnit" placeholder="请输入内容"/>
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
                  <el-input v-model="proForm.positionTitle" placeholder="请输入内容"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称授予时间：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-date-picker v-model="proForm.positionGrantDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称取得时间：</span>
                </div>
                <div class="content" style="width: 200px">
                  <el-date-picker v-model="proForm.positionObtainDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
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
                  <el-select v-model="proForm.ifCadreTeacher" style="width: 185px" placeholder="请选择">
                    <el-option label="是" value="是" />
                    <el-option label="否" value="否" />
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
                  <el-date-picker v-model="proForm.cadreTeacherEngageDate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 70%;"/>
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
                <el-select  v-model="proForm.ifDoubleTeacher" style="width: 185px" placeholder="请选择">
                  <el-option label="是" value="是" />
                  <el-option label="否" value="否" />
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
                <el-date-picker v-model="proForm.doubleTeacherEngageDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
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
                <el-select v-model="proForm.majorSubjectLeader" style="width: 185px" placeholder="请选择">
                  <el-option label="是" value="是" />
                  <el-option label="否" value="否" />
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
                <el-date-picker v-model="proForm.majorSubjectLeaderDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业领域：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-input v-model="proForm.professArea" placeholder="请输入内容"/>
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
                <el-input v-model="basicForm.teaName" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">性&#8195;&#8195;别：</span>
              </div>
              <div class="content">
                <el-select v-model="basicForm.teaSex" style="width: 185px" placeholder="请选择">
                  <el-option label="男" value="男"/>
                  <el-option label="女" value="女"/>
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
                <el-select style="width: 185px" placeholder="请选择" v-model="basicForm.nation">
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
                <el-date-picker type="date" v-model="basicForm.birthDate" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">年&#8195;&#8195;龄：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.age" placeholder="请输入内容"/>
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
                  v-model="selectedOptionsOne"
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
                  v-model="selectedOptionsTwo"
                  :options="options"
                  @change="handleChangeTwo"
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
                <el-input v-model="basicForm.currentAddress" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder;">&#8195;&#8195;&#8195;&#8195;学年教学质量考核情况：</span>
              </div>
              <div class="content" style="width: 176px;padding: 0 0 ">
                <el-input v-model="basicForm.teachQualityAssessment" placeholder="请输入内容"/>
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
                <el-input v-model="basicForm.cardId" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">政治面貌：</span>
              </div>
              <div class="content">
                <el-select v-model="basicForm.politicStatus" style="width: 185px" placeholder="请选择">
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
                <el-date-picker v-model="basicForm.politicDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
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
                <el-input v-model="basicForm.phoneNum" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">邮&#8195;&#8195;箱：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.email" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">参加工作时间：</span>
              </div>
              <div class="content">
                <el-date-picker v-model="basicForm.workStartDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
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
                <el-date-picker v-model="basicForm.comeToSchoolDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">工&#8195;&#8195;龄：</span>
              </div>
              <div class="content" style="width: 185px;padding: 0 0">
                <el-input v-model="basicForm.workYears" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">部&#8195;&#8195;门：</span>
              </div>
              <div class="content" style="width: 185px;padding: 0 0">
                <el-input v-model="basicForm.dept" placeholder="请输入内容"/>
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
                <el-input v-model="basicForm.teaId" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">现任职务：</span>
              </div>
              <div class="content" style="width: 185px;padding: 0 0">
                <el-input v-model="basicForm.position" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">任职时间：</span>
              </div>
              <div class="content">
                <el-date-picker v-model="basicForm.positionDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;"/>
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
                <el-input v-model="basicForm.hireType" style="width: 185px" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">工作状态：</span>
              </div>
              <div class="content">
                <el-input v-model="basicForm.workStatus" style="width: 185px" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">合同起始时间：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-date-picker v-model="basicForm.contractStartDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
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
                <el-date-picker v-model="basicForm.contractEndDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
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
                <el-date-picker v-model="basicForm.teaQualifiedDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期"
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
                <el-input v-model="basicForm.teaQualifiedUnit" style="width: 185px" placeholder="请输入内容"/>
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
                <el-input v-model="basicForm.teachMajor" style="width: 185px" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">年度考核情况：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input v-model="basicForm.annualAssessment" style="width: 185px" placeholder="请输入内容"/>
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
                :http-request="uploadPic"
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
  import { userGetPersonalInformation } from '@/api/personalInformation'
  import { uploadPicture } from '@/api/personalInformation'
  import { editBasicInformation, editEducationInformation, editProfessionalInformation, addWorkInformation } from '@/api/personalInformation'
  import { ifHaveAuditData } from '@/api/auditData'
export default {
  name: 'Index',
  data() {
    return {
      fileList:[],
      selectedOptionsOne: [],
      selectedOptionsTwo: [],
      allInfo: {},
      touxiang: '',
      options: regionDataPlus,
      optionsOne: provinceAndCityData,
      sex: '',
      title:'',
      zhuanyeDialogVisible: false,
      dialogVisible: false,
      basicDialogVisible: false,
      editDialogVisible: false,
      studyDialogVisible: false,
      tableData: [],
      // fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
       form: {
        position: '',
        witness: '',
        workEndDate: '',
        workStartDate: '',
        workUnit: '',
      },
      editform: {
        position: '',
        witness: '',
        workEndDate: '',
        workStartDate: '',
        workUnit: ''
      },
      picUrl: [],
      basicForm: {
        teaName: '',
        teaSex: '',
        nation: '',
        birthDate: '',
        age: '',
        nativePlace: '',
        residence: '',
        currentAddress: '',
        teachQualityAssessment: '',
        cardId: '',
        politicStatus: '',
        politicDate: '',
        phoneNum: '',
        email: '',
        workStartDate: '',
        comeToSchoolDate: '',
        workYears: '',
        dept: '',
        teaId: '',
        position: '',
        positionDate: '',
        hireType: '',
        workStatus: '',
        contractStartDate: '',
        contractEndDate: '',
        teaQualifiedDate: '',
        teaQualifiedUnit: '',
        teachMajor: '',
        annualAssessment: '',
        teaUsername: localStorage.getItem('jwt'),
        teaPhoto: ''
      },
      eduForm: {
        initialEducation: '',
        initialUniversity: '',
        initialGraduateDate: '',
        // initialDegree: '',
        highestEducation: '',
        highestUniversity: '',
        highestGraduateDate: '',
        highestDegree: '',
        highestMajor: '',
        highestStudyDuration: '',
        initialStudyDuration: '',
        tecUsername: localStorage.getItem('jwt'),
      },
      proForm: {
        professTechPosition: '',
        professTechGrantDate: '',
        professTechIssueDate: '',
        professTechIssueUnit: '',
        qualificateCertName: '',
        qualificateCertGrantDate: '',
        qualificateCertIssueDate: '',
        qualificateCertIssueUnit: '',
        positionTitle: '',
        positionGrantDate: '',
        positionObtainDate: '',
        ifCadreTeacher: '',
        cadreTeacherEngageDate: '',
        ifDoubleTeacher: '',
        doubleTeacherEngageDate: '',
        majorSubjectLeader: '',
        majorSubjectLeaderDate: '',
        professArea: '',
        professCertName: '',
        professCertGrantDate: '',
        professCertIssueDate: '',
        professCertIssueUnit: '',
        tecUsername: localStorage.getItem('jwt'),
      }
    }
  },
  mounted() {
    this.getAllData()
  },
  methods: {
    getAllData: function() {
      const parms = {
        // tecUsername: 'rmyzAdmin'
        tecUsername: localStorage.getItem('jwt'),
      }
      userGetPersonalInformation(parms).then(response => {
        console.log('测试登陆获取个人信息')
        console.log(response.data)
        this.allInfo = response.data.data
        this.tableData = response.data.data.workExperience
        console.log(this.allInfo)
      })
    },
    uploadPic: function(params) {
      const formData = new FormData()
      formData.append('file', params.file)
      uploadPicture(formData).then(response => {
        console.log('测试图片上传')
        console.log(response)
        this.picUrl.push(response.data.data.fileUrl)
        console.log(this.picUrl)
        this.basicForm.teaPhoto = this.picUrl[0]
      })
    },
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
      // this.form.teaUsername = 'rmyzAdmin'
      this.form.teaUsername = localStorage.getItem('jwt')
      console.log('测试form')
      console.log(this.form)
      addWorkInformation(this.form).then(response => {
        console.log('测试增加工作经历')
        console.log(response.data)
        this.dialogVisible = false
        this.$message({
          type: 'success',
          message: '提交成功'
        })
        this.getAllData()
      })
    },
    change() {
      editProfessionalInformation(this.proForm).then(response => {
        this.$message({
          type: 'success',
          message: '提交成功'
        })
        this.zhuanyeDialogVisible = false
        console.log('测试专业能力修改')
        console.log(response.data)
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
      // console.log('我点了我点了我点了')
      // this.basicDialogVisible = true
      var flag
      const prams = {
        // tecUsername: 'rmyzAdmin',
        tecUsername: localStorage.getItem('jwt'),
        teaInfoUpdateType: '基本信息修改'
      }
      ifHaveAuditData(prams).then(response => {
        console.log('测试是否已经提交基本信息修改表单')
        console.log(response.data.data.status)
        flag = response.data.data.status
        if(flag === 'true'){
          this.basicDialogVisible = true
          this.basicForm.teaName = this.allInfo.basicInfo.teaName
          this.basicForm.teaSex = this.allInfo.basicInfo.teaSex
          this.basicForm.nation = this.allInfo.basicInfo.nation
          this.basicForm.birthDate = this.allInfo.basicInfo.birthDate
          this.basicForm.age = this.allInfo.basicInfo.age
          this.basicForm.nativePlace = this.allInfo.basicInfo.nativePlace
          this.basicForm.residence = this.allInfo.basicInfo.residence
          this.basicForm.currentAddress = this.allInfo.basicInfo.currentAddress
          this.basicForm.teachQualityAssessment = this.allInfo.basicInfo.teachQualityAssessment
          this.basicForm.cardId = this.allInfo.basicInfo.cardId
          this.basicForm.politicStatus = this.allInfo.basicInfo.politicStatus
          this.basicForm.politicDate = this.allInfo.basicInfo.politicDate
          this.basicForm.phoneNum = this.allInfo.basicInfo.phoneNum
          this.basicForm.email = this.allInfo.basicInfo.email
          this.basicForm.workStartDate = this.allInfo.basicInfo.workStartDate
          this.basicForm.comeToSchoolDate = this.allInfo.basicInfo.comeToSchoolDate
          this.basicForm.workYears = this.allInfo.basicInfo.workYears
          this.basicForm.dept = this.allInfo.basicInfo.dept
          this.basicForm.teaId = this.allInfo.basicInfo.teaId
          this.basicForm.position = this.allInfo.basicInfo.position
          this.basicForm.positionDate = this.allInfo.basicInfo.positionDate
          this.basicForm.hireType = this.allInfo.basicInfo.hireType
          this.basicForm.workStatus = this.allInfo.basicInfo.workStatus
          this.basicForm.contractStartDate = this.allInfo.basicInfo.contractStartDate
          this.basicForm.contractEndDate = this.allInfo.basicInfo.contractEndDate
          this.basicForm.teaQualifiedDate = this.allInfo.basicInfo.teaQualifiedDate
          this.basicForm.teaQualifiedUnit = this.allInfo.basicInfo.teaQualifiedUnit
          this.basicForm.teachMajor = this.allInfo.basicInfo.teachMajor
          this.basicForm.annualAssessment = this.allInfo.basicInfo.annualAssessment
        }else {
          this.$message({
            message: '已提交修改申请，请审核完成后再提交',
            type: 'warning'
          });
        }
      })
    },
    openDialog: function () {
      var flag
      const prams = {
        // tecUsername: 'rmyzAdmin',
        tecUsername: localStorage.getItem('jwt'),
        teaInfoUpdateType: '工作经历新增'
      }
      ifHaveAuditData(prams).then(response => {
        console.log('测试是否已经提交工作经历增加表单')
        console.log(response.data.data.status)
        flag = response.data.data.status
        if(flag === 'true'){
          this.reset();
          this.title = '增加工作经历'
          console.log('我点了')
          this.dialogVisible = true
        }else {
          this.$message({
            message: '已提交修改申请，请审核完成后再提交',
            type: 'warning'
          });
        }
      })
    },
    openZhuanyeDialog: function () {
      var flag
      const prams = {
        // tecUsername: 'rmyzAdmin',
        tecUsername: localStorage.getItem('jwt'),
        teaInfoUpdateType: '专业能力修改'
      }
      ifHaveAuditData(prams).then(response => {
        console.log('测试是否已经提交专业能力修改修改表单')
        console.log(response.data.data.status)
        flag = response.data.data.status
        if(flag === 'true'){
          this.zhuanyeDialogVisible = true
          this.proForm.professTechPosition = this.allInfo.professionalAbility.professTechPosition
          this.proForm.professTechGrantDate = this.allInfo.professionalAbility.professTechGrantDate
          this.proForm.professTechIssueDate = this.allInfo.professionalAbility.professTechIssueDate
          this.proForm.professTechIssueUnit = this.allInfo.professionalAbility.professTechIssueUnit
          this.proForm.qualificateCertName = this.allInfo.professionalAbility.qualificateCertName
          this.proForm.qualificateCertGrantDate = this.allInfo.professionalAbility.qualificateCertGrantDate
          this.proForm.qualificateCertIssueDate = this.allInfo.professionalAbility.qualificateCertIssueDate
          this.proForm.qualificateCertIssueUnit = this.allInfo.professionalAbility.qualificateCertIssueUnit
          this.proForm.positionTitle = this.allInfo.professionalAbility.positionTitle
          this.proForm.positionGrantDate = this.allInfo.professionalAbility.positionGrantDate
          this.proForm.positionObtainDate = this.allInfo.professionalAbility.positionObtainDate
          this.proForm.ifCadreTeacher = this.allInfo.professionalAbility.ifCadreTeacher
          this.proForm.cadreTeacherEngageDate = this.allInfo.professionalAbility.cadreTeacherEngageDate
          this.proForm.ifDoubleTeacher = this.allInfo.professionalAbility.ifDoubleTeacher
          this.proForm.doubleTeacherEngageDate = this.allInfo.professionalAbility.doubleTeacherEngageDate
          this.proForm.majorSubjectLeader = this.allInfo.professionalAbility.majorSubjectLeader
          this.proForm.majorSubjectLeaderDate = this.allInfo.professionalAbility.majorSubjectLeaderDate
          this.proForm.professArea = this.allInfo.professionalAbility.professArea
          this.proForm.professCertName = this.allInfo.professionalAbility.professCertName
          this.proForm.professCertGrantDate = this.allInfo.professionalAbility.professCertGrantDate
          this.proForm.professCertIssueDate = this.allInfo.professionalAbility.professCertIssueDate
          this.proForm.professCertIssueUnit = this.allInfo.professionalAbility.professCertIssueUnit
        }else {
          this.$message({
            message: '已提交修改申请，请审核完成后再提交',
            type: 'warning'
          });
        }
      })
    },
    notEditJiben: function () {
      this.basicDialogVisible = false
      const prams = {
        infotype: '基础信息'
      }
    },
    openEditStudyExperience() {
      // this.studyDialogVisible = true
      var flag
      const prams = {
        // tecUsername: 'rmyzAdmin',
        tecUsername: localStorage.getItem('jwt'),
        teaInfoUpdateType: '学历信息修改'
      }
      ifHaveAuditData(prams).then(response => {
        console.log('测试是否已经提交学历信息修改表单')
        console.log(response.data.data.status)
        flag = response.data.data.status
        if(flag === 'true'){
          this.studyDialogVisible = true
          this.eduForm.initialEducation = this.allInfo.educationInfo.initialEducation
          this.eduForm.initialUniversity = this.allInfo.educationInfo.initialUniversity
          this.eduForm.initialGraduateDate = this.allInfo.educationInfo.initialGraduateDate
          this.eduForm.highestEducation = this.allInfo.educationInfo.highestEducation
          this.eduForm.highestUniversity = this.allInfo.educationInfo.highestUniversity
          this.eduForm.highestGraduateDate = this.allInfo.educationInfo.highestGraduateDate
          this.eduForm.highestDegree = this.allInfo.educationInfo.highestDegree
          this.eduForm.highestMajor = this.allInfo.educationInfo.highestMajor
          this.eduForm.highestStudyDuration = this.allInfo.educationInfo.highestStudyDuration
          this.eduForm.initialStudyDuration = this.allInfo.educationInfo.initialStudyDuration
        }else {
          this.$message({
            message: '已提交修改申请，请审核完成后再提交',
            type: 'warning'
          });
        }
      })
    },
    confirmEditStudyExp() {
      this.$message({
        type: 'success',
        message: '提交成功'
      })
      this.studyDialogVisible = false
      editEducationInformation(this.eduForm).then(response => {
        console.log('测试修改学历信息')
        console.log(response.data)
      })
    },
    confirmEditJiben: function () {
      this.$message({
        type: 'success',
        message: '提交成功'
      })
      this.basicDialogVisible = false
      // var pingjie = ''
      // for (let i = 0; i < this.picUrl.length; i++) {
      //   pingjie = pingjie + this.picUrl[i]
      //   if (this.picUrl[i + 1] !== 'undefined') {
      //     pingjie = pingjie + ','
      //   } else {
      //     break
      //   }
      // }
      // console.log('测试拼接的图片数组')
      // console.log(pingjie)
      // this.basicForm.teaPhoto = pingjie
      editBasicInformation(this.basicForm).then(response => {
        console.log('测试修改基本信息')
        console.log(response.data)
      })
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
      console.log('籍贯')
      console.log(value)// ["110000", "110100", "110101"]
      // CodeToText是个大对象，属性是区域码，属性值是汉字 用法例如：CodeToText['110000']输出北京市
      console.log(CodeToText[value[0]], CodeToText[value[1]], CodeToText[value[2]])// 北京市 市辖区 东城区
      var str = CodeToText[value[0]] + CodeToText[value[1]]
      this.basicForm.nativePlace = str
      console.log(this.basicForm.nativePlace )
    },
    handleChangeTwo(value) {
      // console.log(this.selectedOptions)
      console.log('户籍所在地')
      console.log(value)// ["110000", "110100", "110101"]
      // CodeToText是个大对象，属性是区域码，属性值是汉字 用法例如：CodeToText['110000']输出北京市
      console.log(CodeToText[value[0]], CodeToText[value[1]], CodeToText[value[2]])// 北京市 市辖区 东城区
      var str = CodeToText[value[0]] + CodeToText[value[1]]
      this.basicForm.residence = str
      console.log(this.basicForm.residence )
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
  background-color: white;
}
  .person_img img {
    width: 100%;
    height: 100%;
    object-fit:contain;
  }
</style>
