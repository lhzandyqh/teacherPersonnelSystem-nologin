<template>
  <div class="app-container">
    <el-table :data="peopleData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
      <el-table-column prop="insertDate" label="提交日期" />
      <el-table-column prop="submitPerson" label="提交人" />
      <el-table-column prop="dept" label="部门" />
      <el-table-column prop="auditType" label="审核类别" />
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.auditStatus==='通过'" type="success">审核通过</el-tag>
          <el-tag v-if="scope.row.auditStatus==='未通过'" type="danger">审核未通过</el-tag>
          <el-tag v-if="scope.row.auditStatus==='待审核'">审核待审核</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="jibenview(scope.row)">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center; margin-top: 10px;">
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="[5, 10]"
        :total="peopleData.length"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog :visible.sync="jibenVisible" title="审核详情">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">姓&#8195;&#8195;名：</span>
              <span>{{jibenData.teaName}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">性&#8195;&#8195;别：</span>
              <span>{{jibenData.teaSex}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">民&#8195;&#8195;族：</span>
              <span>{{jibenData.nation}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">出生年月：</span>
              <span>{{jibenData.birthDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">年&#8195;&#8195;龄：</span>
              <span>{{jibenData.age}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span>
              <span>{{jibenData.nativePlace}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">户籍所在地：</span>
              <span>{{jibenData.residence}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">现住址：</span>
              <span>{{jibenData.currentAddress}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">学年教学质量考核情况：</span>
              <span>{{jibenData.teachQualityAssessment}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">身份证号：</span>
              <span>{{jibenData.cardId}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">政治面貌：</span>
              <span>{{jibenData.politicStatus}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">入党团时间：</span>
              <span>{{jibenData.politicDate}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">联系方式：</span>
              <span>{{jibenData.phoneNum}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">邮箱：</span>
              <span>{{jibenData.email}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">参加工作时间：</span>
              <span>{{jibenData.workStartDate}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">来校时间：</span>
              <span>{{jibenData.comeToSchoolDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">工龄：</span>
              <span>{{jibenData.workYears}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">部门：</span>
              <span>{{jibenData.dept}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">工号：</span>
              <span>{{jibenData.teaId}}</span>
            </div>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">现任职务：</span>
              <span>{{jibenData.position}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任职时间：</span>
              <span>{{jibenData.positionDate}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘任形式：</span>
              <span>{{jibenData.hireType}}</span>
            </div>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">工作状态：</span>
              <span>{{jibenData.workStatus}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">合同起始时间：</span>
              <span>{{jibenData.contractStartDate}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">合同终止时间：</span>
              <span>{{jibenData.contractEndDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">高校教资证取得时间：</span>
              <span>{{jibenData.teaQualifiedDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">授予单位：</span>
              <span>{{jibenData.teaQualifiedUnit}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任教学科：</span>
              <span>{{jibenData.teachMajor}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">年度考核情况：</span>
              <span>{{jibenData.annualAssessment}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">系部意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="jibenAuditForm.auditDesc"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">是否提交人事处审核</span>
          <el-radio style="margin-left: 20px" v-model="jibenAuditForm.ifTwoLevelAUdit" label="是">是</el-radio>
          <el-radio v-model="jibenAuditForm.ifTwoLevelAUdit" label="否">否</el-radio>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="success" size="small" plain @click="jibenAudit('审核通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="jibenAudit('审核未通过')">审核未通过</el-button>
          <el-button type="primary" size="small" plain @click="jibenVisible = false">关闭</el-button>
        </span>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="xueliVisible" title="审核详情">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">第一学历：</span>
              <span>{{xueliData.initialEducation}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">第一学历毕业院校：</span>
              <span>{{xueliData.initialUniversity}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">第一学历毕业时间：</span>
              <span>{{xueliData.initialGraduateDate}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">最高学历：</span>
              <span>{{xueliData.highestEducation}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">最高学历毕业院校：</span>
              <span>{{xueliData.highestUniversity}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">最高学历毕业时间：</span>
              <span>{{xueliData.highestGraduateDate}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">学&#8195;&#8195;位：</span>
              <span>{{xueliData.highestDegree}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">所学专业：</span>
              <span>{{xueliData.highestMajor}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">第一学历学制：</span>
              <span>{{xueliData.initialStudyDuration}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">最高学历学制：</span>
              <span>{{xueliData.highestStudyDuration}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">系部意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="xueliAuditForm.auditDesc"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">是否提交人事处审核</span>
          <el-radio style="margin-left: 20px" v-model="xueliAuditForm.ifTwoLevelAUdit" label="是">是</el-radio>
          <el-radio v-model="xueliAuditForm.ifTwoLevelAUdit" label="否">否</el-radio>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="success" size="small" plain @click="xueliAudit('审核通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="xueliAudit('审核不通过')">审核未通过</el-button>
          <el-button type="primary" size="small" plain @click="xueliVisible = false">关闭</el-button>
        </span>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="zhuanyeVisible" title="审核详情">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">专业技术职务：</span>
              <span>{{zhuanliData.professTechPosition}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">专业技术职务授予时间：</span>
              <span>{{zhuanliData.professTechGrantDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">专业技术职务颁发时间：</span>
              <span>{{zhuanliData.professTechIssueDate}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">专业技术职务颁发单位：</span>
              <span>{{zhuanliData.professTechIssueUnit}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">执业资格证名称：</span>
              <span>{{zhuanliData.qualificateCertName}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">执业资格证授予时间：</span>
              <span>{{zhuanliData.qualificateCertGrantDate}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">执业资格证颁发时间：</span>
              <span>{{zhuanliData.qualificateCertIssueDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">执业资格证颁发单位：</span>
              <span>{{zhuanliData.qualificateCertIssueUnit}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职业资格证名称：</span>
              <span>{{zhuanliData.professCertName}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职业资格证授予时间：</span>
              <span>{{zhuanliData.professCertGrantDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职业资格证颁发时间：</span>
              <span>{{zhuanliData.professCertIssueDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职业资格证颁发单位：</span>
              <span>{{zhuanliData.professCertIssueUnit}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职&#8195;&#8195;称：</span>
              <span>{{zhuanliData.positionTitle}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职称授予时间：</span>
              <span>{{zhuanliData.positionGrantDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职称取得时间：</span>
              <span>{{zhuanliData.positionObtainDate}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">是否骨干教师：</span>
              <span>{{zhuanliData.ifCadreTeacher}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">骨干教师聘任时间：</span>
              <span>{{zhuanliData.cadreTeacherEngageDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">是否双师：</span>
              <span>{{zhuanliData.ifDoubleTeacher}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">双师聘任时间：</span>
              <span>{{zhuanliData.doubleTeacherEngageDate}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">是否专业学科带头人：</span>
              <span>{{zhuanliData.majorSubjectLeader}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">专业学科带头人聘任时间：</span>
              <span>{{zhuanliData.majorSubjectLeaderDate}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">专业领域：</span>
              <span>{{zhuanliData.professArea}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">系部意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="zhuanliAuditForm.auditDesc"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">是否提交人事处审核</span>
          <el-radio style="margin-left: 20px" v-model="zhuanliAuditForm.ifTwoLevelAUdit" label="是">是</el-radio>
          <el-radio v-model="zhuanliAuditForm.ifTwoLevelAUdit" label="否">否</el-radio>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="success" size="small" plain @click="zhuanyeAudit('审核通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="zhuanyeAudit('审核未通过')">审核未通过</el-button>
          <el-button type="primary" size="small" plain @click="zhuanyeVisible = false">关闭</el-button>
        </span>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="workVisible" title="审核详情">
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <span style="font-weight: bolder">姓名：</span>
          <span>{{workData.teaUsername}}</span>
        </el-col>
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">工作单位：</span>
            <span>{{workData.workUnit}}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">担任职务：</span>
            <span>{{workData.position}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">开始时间：</span>
            <span>{{workData.workStartDate}}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">结束时间</span>
            <span>{{workData.workEndDate}}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="biaoqian">
            <span style="font-weight: bolder">证明人：</span>
            <span>{{workData.witness}}</span>
          </div>
        </el-col>
      </el-row>
      <el-divider />
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">系部意见</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            v-model="workAuditForm.auditDesc"
            :rows="4"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-row>
      </div>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">是否提交人事处审核</span>
          <el-radio style="margin-left: 20px" v-model="workAuditForm.ifTwoLevelAUdit" label="是">是</el-radio>
          <el-radio v-model="workAuditForm.ifTwoLevelAUdit" label="否">否</el-radio>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="success" size="small" plain @click="workAudit('审核通过')">审核通过</el-button>
          <el-button type="danger" size="small" plain @click="workAudit('审核未通过')">审核未通过</el-button>
          <el-button type="primary" size="small" plain @click="workVisible = false">关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { departmentGetInformationAuditingList, getAuditDetailById, beginAudit } from '@/api/auditData'
export default {
  name: 'PeopleApproval',
  data() {
    return {
      pageSize: 10, // 每页的数据条数,
      xueliVisible: false,
      radio: '1',
      currentPage: 1,
      pagesize: 5,
      AuditingReason: '',
      zhuanyeVisible: false,
      workVisible: false,
      jibenVisible: false,
      peopleData: [],
      xueliData: {},
      xueliAuditForm:{
        id: '',
        tecUsername: 'rmyzAdmin',
        ifTwoLevelAUdit: '',
        auditType: '学历信息修改',
        auditStatus: '',
        auditDesc: ''
      },
      zhuanliData: {},
      zhuanliAuditForm:{
        id: '',
        tecUsername: 'rmyzAdmin',
        ifTwoLevelAUdit: '',
        auditType: '专业能力修改',
        auditStatus: '',
        auditDesc: ''
      },
      jibenData: {},
      jibenAuditForm:{
        id: '',
        tecUsername: 'rmyzAdmin',
        ifTwoLevelAUdit: '',
        auditType: '基本信息修改',
        auditStatus: '',
        auditDesc: ''
      },
      workData: {},
      workAuditForm:{
        id: '',
        tecUsername: 'rmyzAdmin',
        ifTwoLevelAUdit: '',
        auditType: '工作经历新增',
        auditStatus: '',
        auditDesc: ''
      }
    }
  },
  mounted() {
    this.getAllList()
  },
  methods: {
    getAllList: function() {
      const prams = {
        tecUsername: 'rmyzAdmin'
      }
      departmentGetInformationAuditingList(prams).then(response => {
        console.log('测试所有获取个人信息的审核')
        console.log(response.data)
        this.peopleData = response.data.data
        console.log(this.peopleData)
      })
    },
    jibenview(row) {
      if (row.auditType === '基本信息修改') {
        const prams = {
          id: row.id,
          auditType: '基本信息修改'
        }
        getAuditDetailById(prams).then(response=>{
          console.log('根据id获取基本信息修改审核详情')
          console.log(response.data)
          this.jibenData = response.data.data[0]
          console.log(this.jibenData)
        })
        this.jibenVisible = true
      } else if (row.auditType === '专业能力修改') {
        const prams = {
          id: row.id,
          auditType: '专业能力修改'
        }
        getAuditDetailById(prams).then(response=>{
          console.log('根据id获取专业能力修改审核详情')
          console.log(response.data)
          this.zhuanliData = response.data.data[0]
          console.log(this.zhuanliData)
        })
        this.zhuanyeVisible = true
      } else if (row.auditType === '学历信息修改') {
        const prams = {
          id: row.id,
          auditType: '学历信息修改'
        }
        getAuditDetailById(prams).then(response=>{
          console.log('根据id获取学历信息修改审核详情')
          console.log(response.data)
          this.xueliData = response.data.data[0]
          console.log(this.xueliData)
        })
        this.xueliVisible = true
      } else if (row.auditType === '工作经历新增') {
        const prams = {
          id: row.id,
          auditType: '工作经历新增'
        }
        getAuditDetailById(prams).then(response=>{
          console.log('根据id获取工作经历审核详情')
          console.log(response.data)
          this.workData = response.data.data[0]
          console.log(this.workData)
        })
        this.workVisible = true
      }
    },
    pass() {
      this.$message({
        type: 'success',
        message: '审核成功'
      }
      )
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    xueliAudit:function (tag) {
      if(this.xueliAuditForm.ifTwoLevelAUdit === ''){
        this.$message({
          message: '未选择是否要经过人事处审核',
          type: 'warning'
        });
      }else {
        this.xueliAuditForm.auditStatus = tag
        this.xueliAuditForm.id = this.xueliData.id
        const pram = this.xueliAuditForm
        console.log('测试xueliAuditForm')
        console.log(pram)
        beginAudit(pram).then(response => {
          console.log('测试学历信息修改审核提交')
          console.log(response.data)
          this.$message({
            message: '审核完成',
            type: 'success'
          });
          this.getAllList()
          this.xueliVisible = false
        })
      }
    },
    zhuanyeAudit:function (tag) {
      if(this.zhuanliAuditForm.ifTwoLevelAUdit === ''){
        this.$message({
          message: '未选择是否要经过人事处审核',
          type: 'warning'
        });
      }else {
        this.zhuanliAuditForm.auditStatus = tag
        this.zhuanliAuditForm.id = this.zhuanliData.id
        const pram = this.zhuanliAuditForm
        console.log('测试zhuanliAuditForm')
        console.log(pram)
        beginAudit(pram).then(response => {
          console.log('测试专业信息修改审核提交')
          console.log(response.data)
          this.$message({
            message: '审核完成',
            type: 'success'
          });
          this.getAllList()
          this.zhuanyeVisible = false
        })
      }
    },
    jibenAudit:function (tag) {
      if(this.jibenAuditForm.ifTwoLevelAUdit === ''){
        this.$message({
          message: '未选择是否要经过人事处审核',
          type: 'warning'
        });
      }else {
        this.jibenAuditForm.auditStatus = tag
        this.jibenAuditForm.id = this.jibenData.id
        const pram = this.jibenAuditForm
        console.log('测试jibenAuditForm')
        console.log(pram)
        beginAudit(pram).then(response => {
          console.log('测试基本信息修改审核提交')
          console.log(response.data)
          this.$message({
            message: '审核完成',
            type: 'success'
          });
          this.getAllList()
          this.jibenVisible = false
        })
      }
    },
    workAudit:function (tag) {
      if(this.workAuditForm.ifTwoLevelAUdit === ''){
        this.$message({
          message: '未选择是否要经过人事处审核',
          type: 'warning'
        });
      }else {
        this.workAuditForm.auditStatus = tag
        this.workAuditForm.id = this.workData.id
        const pram = this.workAuditForm
        console.log('测试workAuditForm')
        console.log(pram)
        beginAudit(pram).then(response => {
          console.log('测试工作经历审核提交')
          console.log(response.data)
          this.$message({
            message: '审核完成',
            type: 'success'
          });
          this.getAllList()
          this.workVisible = false
        })
      }
    }
  }
}
</script>

<style scoped>
  .foot{
    text-align: center;
    margin-top: 20px;
  }
</style>
