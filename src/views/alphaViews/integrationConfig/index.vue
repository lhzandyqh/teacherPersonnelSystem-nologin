<template>
    <div class="app-container">
      <div class="filter-container">
        <el-row :gutter="1">
          <el-col :span="2">
            <div class="selector">
              <span style="font-size: 15px;font-weight: bolder;margin-left: 15px">积分类型:</span>
            </div>
          </el-col>
          <el-col :span="3">
            <el-select v-model="listQuery.qualification_type" placeholder="积分类型" clearable class="filter-item">
              <el-option label="基本任务" value="课题项目"/>
              <el-option label="课题项目" value="课题项目"/>
              <el-option label="学术论文" value="学术论文"/>
              <el-option label="科研专利" value="科研专利"/>
              <el-option label="学术专著" value="学术专著"/>
            </el-select>
          </el-col>
<!--          <el-col :span="2" style="margin-left: 20px;margin-right: 0px">-->
<!--            <div class="selector">-->
<!--              <span style="font-size: 15px;font-weight: bolder;margin-left: 15px">积分级别:</span>-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :span="3">-->
<!--            <div style="margin-left: 0px">-->
<!--              <el-select v-model="value2" style="padding: 0px 0px 0px 0px" placeholder="积分级别">-->
<!--                <el-option-->
<!--                  v-for="item in option2"-->
<!--                  :key="item.value"-->
<!--                  :label="item.label"-->
<!--                  :value="item.value"-->
<!--                />-->
<!--              </el-select>-->
<!--            </div>-->
<!--          </el-col>-->
          <el-col :span="3">
            <div class="add">
              <el-button class="filter-item"  type="primary">查询</el-button>
            </div>
          </el-col>
<!--          <el-col :span="2" style="margin-left: 20px;margin-right: 0px">-->
<!--            <div class="selector">-->
<!--              <span style="font-size: 15px;font-weight: bolder;margin-left: 15px">积分类型:</span>-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :span="4">-->
<!--            <div class="select">-->
<!--              <el-select v-model="type_select_value" placeholder="请选择您的积分类型" >-->
<!--                                      <el-option label="学术成果积分配置" value="xueshu"/>-->
<!--                                      <el-option label="项目课题积分配置" value="yanjiuke"/>-->
<!--                                      <el-option label="学术讲座与经验分享积分配置" value="jinyan"/>-->
<!--                                      <el-option label="教育教学评比竞赛积分配置" value="jingsai"/>-->
<!--                                      <el-option label="研究课积分配置" value="yanjiu"/>-->
<!--                                      <el-option label="教育教学成果获奖积分配置" value="jiaoyu"/>-->
<!--                                      <el-option label="教师指导学生参加学科比赛获奖情况积分配置" value="xueke"/>-->
<!--                                      <el-option label="艺科体社团积分配置" value="yike"/>-->
<!--                                      <el-option label="行政获奖积分配置" value="xinzheng"/>-->
<!--                                      <el-option label="校本培训积分配置" value="xiaoben"/>-->
<!--                </el-select>-->
<!--            </div>-->
<!--          </el-col>-->
          <el-col :span="6">
            <div class="add">
              <el-button class="filter-item" style="margin-left: 10px;float: right" type="primary" icon="el-icon-edit" @click="dialogPvVisible = true">新增积分规则配置</el-button>
            </div>
          </el-col>
        </el-row>
        <el-divider/>
        <el-table
          :data="projectData"
          stripe
          style="width: 100%">
<!--          <el-table-column-->
<!--            prop="projectname"-->
<!--            label="积分名称"-->
<!--            />-->
          <el-table-column
            prop="projectsub"
            label="积分类型"
          />
          <el-table-column
            prop="projectuser"
            label="积分添加人"
            />
          <el-table-column
            prop="projectclass"
            label="积分级别"
            />
          <el-table-column
            prop="date"
            label="添加时间"
            />
          <el-table-column
            prop="score"
            label="分值"
           />
          <el-table-column label="操作">
            <!--                        <template slot-scope="scope">-->
            <!--                          <el-select v-model="scope.row.userrole" placeholder="权限" @change="eidtAuthority(scope.row.userid, scope.row.userrole)">-->
            <!--                            <el-option label="教师" value="教师"/>-->
            <!--                            <el-option label="系部主管" value="系部主管"/>-->
            <!--                            <el-option label="科研主管" value="科研主管"/>-->
            <!--                          </el-select>-->
            <!--                        </template>-->
            <template slot-scope="scope">
              <el-button type="primary" style="margin-top: 10px" @click="change">修改</el-button>
              <el-button type="primary" style="margin-top: 10px" @click="change">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: center; margin-top: 10px;">
          <el-pagination
            @current-change="2"
            :current-page="1"
            :page-size="pagesize"
            :page-sizes="[5, 10]"
            :total="projectData.length"
            layout="total, sizes, prev, pager, next, jumper"
          />
        </div>
      </div>
      <el-dialog :visible.sync="dialogPvVisible" title="新增积分规则配置">
        <el-form ref="form" label-width="150px" style="margin: 20px 0;">
          <el-form-item label="请选择您的积分项目">
            <el-select v-model="t_qualification_name" placeholder="请选择您的积分项目" >
              <el-option label="课题项目" value="ktxm"/>
              <el-option label="学术论文" value="xslw"/>
              <el-option label="科研专利" value="kyzl"/>
              <el-option label="科研著作" value="kyzz"/>
            </el-select>
          </el-form-item>
        </el-form>
        <el-divider/>
        <el-row v-if="t_qualification_name==='ktxm'">
          <el-form ref="ktxmform" :model="ktxmform" label-width="200px">
            <el-form-item label="课题级别">
              <el-select v-model="ktxmform.rank" placeholder="请选择课题级别">
                <el-option label="国家级" value="国家级"/>
                <el-option label="省级" value="省级"/>
                <el-option label="区级" value="区级"/>
                <el-option label="市级" value="市级"/>
                <el-option label="校级" value="校级"/>
              </el-select>
            </el-form-item>
            <el-form-item label="课题类型">
              <el-select v-model="ktxmform.type" placeholder="请选择课题级别">
                <el-option label="个人项目" value="国家级"/>
                <el-option label="教学建设" value="省级"/>
                <el-option label="学术科研" value="区级"/>
                <el-option label="集体科研" value="市级"/>
              </el-select>
            </el-form-item>
            <el-form-item label="个人角色">
              <el-select v-model="ktxmform.role" placeholder="请选择个人角色">
                <el-option label="主持" value="主持"/>
                <el-option label="参与" value="参与"/>
              </el-select>
              <el-input v-model="input" style="width: 200px" placeholder="分值比率"></el-input>
            </el-form-item>
            <el-form-item label="基础分值" style="width: 400px">
              <el-input v-model="ktxmform.score"/>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row v-if="t_qualification_name==='xslw'">
          <el-form ref="xslwform" :model="xslwform" label-width="200px">
            <el-form-item label="论文级别">
              <el-select v-model="xslwform.rank" placeholder="请选择论文级别">
                <el-option label="T类 特种刊物论文" value="特种刊物论文"/>
                <el-option label="A类 权威核心刊物论文" value="权威核心刊物论文"/>
                <el-option label="B类 重要核心刊物论文" value="重要核心刊物论文"/>
                <el-option label="C类 一般核心刊物论文" value="一般核心刊物论文"/>
                <el-option label="D类 一般公开刊物论文" value="一般公开刊物论文"/>
                <el-option label="E类 受限公开刊物论文" value="受限公开刊物论文"/>
              </el-select>
            </el-form-item>
            <el-form-item label="作者类别">
              <el-select v-model="xslwform.role" placeholder="请选择作者类别">
                <el-option label="第一作者" value="第一作者"/>
                <el-option label="第二作者" value="第二作者"/>
                <el-option label="第三作者" value="第三作者"/>
                <el-option label="其他" value="其他"/>
              </el-select>
              <el-input v-model="input" style="width: 200px" placeholder="分值比率"></el-input>
            </el-form-item>
            <el-form-item label="基础分值" style="width: 400px">
              <el-input v-model="xslwform.score"/>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row v-if="t_qualification_name==='kyzl'">
          <el-form ref="kyzlform" :model="kyzlform" label-width="200px">
            <el-form-item label="专利类型">
              <el-select v-model="kyzlform.rank" placeholder="请选择专利类型">
                <el-option label="发明专利" value="特种刊物论文"/>
                <el-option label="实用新型专利" value="实用新型专利"/>
                <el-option label="软件著作权" value="软件著作权"/>
              </el-select>
            </el-form-item>
<!--            <el-form-item label="作者类别">-->
<!--              <el-select v-model="yanjiukeform.role" placeholder="请选择作者类别">-->
<!--                <el-option label="第一作者" value="第一作者"/>-->
<!--                <el-option label="第二作者" value="第二作者"/>-->
<!--                <el-option label="第三作者" value="第三作者"/>-->
<!--                <el-option label="其他" value="其他"/>-->
<!--              </el-select>-->
<!--              <el-input v-model="input" style="width: 200px" placeholder="分值比率"></el-input>-->
<!--            </el-form-item>-->
            <el-form-item label="基础分值" style="width: 400px">
              <el-input v-model="kyzlform.score"/>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row v-if="t_qualification_name==='kyzz'">
          <el-form ref="kyzzform" :model="kyzzform" label-width="200px">
            <el-form-item label="著作类型">
              <el-select v-model="kyzzform.rank" placeholder="请选择专利类型">
                <el-option label="专著" value="专著"/>
                <el-option label="编著" value="编著"/>
                <el-option label="译著" value="译著"/>
                <el-option label="研究报告" value="研究报告"/>
              </el-select>
            </el-form-item>
            <el-form-item label="著作级别">
              <el-select v-model="kyzzform.rank" placeholder="请选择专利类型">
                <el-option label="T" value="T"/>
                <el-option label="A" value="A"/>
                <el-option label="B" value="B"/>
                <el-option label="C" value="C"/>
                <el-option label="D" value="D"/>
                <el-option label="E" value="E"/>
              </el-select>
            </el-form-item>
            <!--            <el-form-item label="作者类别">-->
            <!--              <el-select v-model="yanjiukeform.role" placeholder="请选择作者类别">-->
            <!--                <el-option label="第一作者" value="第一作者"/>-->
            <!--                <el-option label="第二作者" value="第二作者"/>-->
            <!--                <el-option label="第三作者" value="第三作者"/>-->
            <!--                <el-option label="其他" value="其他"/>-->
            <!--              </el-select>-->
            <!--              <el-input v-model="input" style="width: 200px" placeholder="分值比率"></el-input>-->
            <!--            </el-form-item>-->
            <el-form-item label="基础分值" style="width: 400px">
              <el-input v-model="kyzzform.score"/>
            </el-form-item>
          </el-form>
        </el-row>
        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">关闭</el-button>
        <el-button type="success" >确定</el-button>
      </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            pagesize: 5,
            value2: '',
            option2: [{
              value: '高级',
              label: '高级'
            }, {
              value: '中级',
              label: '中级'
            }, {
              value: '低级',
              label: '低级'
            }],
            projectData :[{
              projectname:'自然语言处理问答系统',
              projectsub:'课题项目',
              projectclass:'省级',
              projectuser:'刘老师',
              date:'2019-9-8',
              score:'5'
            },
              {
                projectname:'专业智能知识库建设',
                projectsub:'教学建设',
                projectclass:'省级',
                projectuser:'王老师',
                date:'2020-3-4',
                score:'5'
              },
              {
                projectname:'NLP语言智能识别',
                projectsub:'学术科研',
                projectclass:'国家级',
                projectuser:'李老师',
                date:'2019-7-6',
                score:'10'
              },
              {
                projectname:'校园大数据中心建设',
                projectsub:'课题项目',
                projectclass:'厅级',
                projectuser:'张老师',
                date:'2020-4-5',
                score:'8'
              },
              {
                projectname:'校园大数据中心建设',
                projectsub:'基本任务',
                projectclass:'厅级',
                projectuser:'卢老师',
                date:'2020-2-5',
                score:'5'
              }],
            dialogPvVisible: false,
            listQuery: {
              qualification_type: '',
              department_level: '',
              qualification_level: ''
            },
            xueshuform: {
              type: '',
              first: '',
              rank: '',
              score: ''
            },
            ktxmform: {
              type: '',
              first: '',
              rank: '',
              score: ''
            },
            xslwform: {
              type: '',
              first: '',
              rank: '',
              score: ''
            },
            kyzlform: {
              type: '',
              first: '',
              rank: '',
              score: ''
            },
            kyzzform: {
              type: '',
              first: '',
              rank: '',
              score: ''
            },
            yanjiukeform: {
              role: '',
              rank: '',
              score: ''
            },
            jinyanform: {
              type: '',
              rank: '',
              score: ''
            },
            jinsaiform: {
              type: '',
              rank: '',
              denji: '',
              score: ''
            },
            yanjiuform: {
              type: '',
              rank: '',
              score: ''
            },
            jiaoyuform: {
              region: '',
              rank: '',
              role: '',
              score: ''
            },
            xuekeform: {
              region: '',
              rank: '',
              score: '',
              subject: ''
            },
            yikeform: {
              type: '',
              rank: '',
              score: ''
            },
            xinzhengform: {
              region: '',
              rank: '',
              form: '',
              score: ''
            },
            xiaobenform: {
              type: '',
              score: ''
            },
            t_qualification_name: 'ktxm',
            type_select_value: 'ktxm',
          }
     }
    }
</script>

<style scoped>
.selector{
  margin-top: 10px;
}
</style>
