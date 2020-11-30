<template>
  <div class="app-container">
  <el-row style="padding-top: 10px">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: bolder;color:#409EFF ">个人分析</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="openEditPerson">修改</el-button>
      </div>
      <div class="card-container">
        <el-row :gutter="20">
            <div class="single">
              <div class="biaoqian">
               <p> <span style="font-weight: bolder">教学情况：</span>工作几年来，透过自己的理论实践和老教师们的悉心指导，我在教育教学潜力方面有了很大的提高，并构成了自己的特色。参加区里的说课、双优课、育才杯的比赛分获二、三等奖。所撰写的论文共四篇分获市一等奖、区级一、二、三等奖。所带体操运动队多次获市级一等奖。</p>
              </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div class="single">
              <div class="biaoqian">
                <p><span style="font-weight: bolder">科研情况：</span>任现职以来，积极开展科研工作，在研究工作中具有独立开拓、主持攻关重大课题的能力，创新精神与创新能力较强，能把握本专业、本学科的研究热点和方向，并把科研和推广应用紧密结合，实现科研、教学和推广的互动。通过任现职以来的努力，科研能力不断增强，科研水平不断提高，科研成绩显著。</p>
              </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div class="single">
              <div class="biaoqian">
                <p><span style="font-weight: bolder">专业方向：</span>长期从事临床医学系核心课程教学与研究，主要方向急诊医学。</p>
              </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div class="single">
              <div class="biaoqian">
                <p><span style="font-weight: bolder">发展优势：</span>工作踏实，热爱教育事业，热爱学生，在工作上能够积极完成学校领导布置的各项任务；与同事关系融洽，能和同事和睦相处，乐于助人；善于接受别人的不同意见，虚心向他人学习；有一定的教学经验和理论知识；能够积极参加各类教研活动和教师继续教育学习</p>
              </div>
            </div>
        </el-row>
        <el-row :gutter="20">
            <div class="single">
              <div class="biaoqian">
                <p><span style="font-weight: bolder">存在的问题：</span> 驾驭教材的潜力、设计课堂教学的潜力和教师语言水平有待进一步的提高，对后进生的关注程度不够与范围不够广，理论水平有待提高。同时对待学生或者工作有时有点急功近利，对待学生耐心还不够。</p>
              </div>
            </div>
        </el-row>
      </div>
    </el-card>
  </el-row>
    <el-row style="padding-top: 10px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bolder;color:#409EFF ">职业规划</span>

          <el-button style="float: right; padding: 3px 0" type="text" @click="drawer = true">查看更多</el-button>
          <el-button style="float: right; padding: 3px 0;margin-right: 10px" type="text" @click="addCareer">新增</el-button>
        </div>
        <el-drawer
          title="职业规划"
          :visible.sync="drawer"
          :with-header="false">
          <el-container>
            <el-header style="font-weight: bolder;text-align: center;margin-top: 15px">
              <span>职业规划</span>
            </el-header>
            <el-main>
              <div style="margin-top: 5px"  v-for="item of carrerData">
                <el-button type="text"  @click="viewCareerDetail(item)" >{{item}}</el-button>
              </div>
            </el-main>
          </el-container>
        </el-drawer>
        <div class="card-container">
          <el-row :gutter="20">
            <el-col :span="8" v-for="item of carrerData.slice(0,3)" :key="item">
              <el-card :body-style="{ padding: '0px' }">
                <img src="../../../assets/career.jpg" class="image">
                <div style="padding: 12px;">
                  <span>{{item}}</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button" @click="viewCareerDetail(item)">查看</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-row>
    <div>
      <el-dialog :visible.sync="editDialogVisible" title="修改个人分析">
        <el-form ref="form" :model="editform" label-width="100px">
          <el-form-item label="教学情况">
            <el-input
              type="textarea"
              autosize
              placeholder="请输入内容"
              v-model="editform.study">
            </el-input>
          </el-form-item>
          <el-form-item label="科研情况">
            <el-input
              type="textarea"
              autosize
              placeholder="请输入内容"
              v-model="editform.academic">
            </el-input>
          </el-form-item>
          <el-form-item label="专业方向">
            <el-input
              type="textarea"
              autosize
              placeholder="请输入内容"
              v-model="editform.career">
            </el-input>
          </el-form-item>
          <el-form-item label="发展优势">
            <el-input
              type="textarea"
              autosize
              placeholder="请输入内容"
              v-model="editform.development">
            </el-input>
          </el-form-item>
          <el-form-item label="存在的问题">
            <el-input
              type="textarea"
              autosize
              placeholder="请输入内容"
              v-model="editform.answer">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitPerson">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="careerVisible" title="新增职业规划">
        <el-form ref="form" :model="careerForm" label-width="100px">
          <el-form-item label="名称">
            <el-input
              placeholder="请输入内容"
              v-model="careerForm.name">
            </el-input>
          </el-form-item>
          <el-form-item label="教学目标">
            <el-input
              type="textarea"
              autosize
              placeholder="请输入内容"
              v-model="careerForm.study">
            </el-input>
          </el-form-item>
          <el-form-item label="科研目标">
            <el-input
              type="textarea"
              autosize
              placeholder="请输入内容"
              v-model="careerForm.academic">
            </el-input>
          </el-form-item>
          <el-form-item label="其他方面目标">
            <el-input
              type="textarea"
              autosize
              placeholder="请输入内容"
              v-model="careerForm.others">
            </el-input>
          </el-form-item>
          <el-form-item label="实施措施">
            <el-input
              type="textarea"
              autosize
              placeholder="请输入内容"
              v-model="careerForm.measures">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="careerVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitaddCareer">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="careerFlag" :title="title">
        <el-row>
          <span style="font-weight: bolder">教学目标：</span>
          <p>⑴提高课堂教学潜力，认真备课，认真反思，认真钻研，力求让学生学得主动，学得简单，学得愉快。⑵深化课改，充分培养和激发学生学习兴趣，重视学生认知过程中的情感培养，加强学生应用所学知识解决问题潜力的培养，提高课堂教学的有效性。⑶更新教育观念，不断学习与反思，积累个案，归纳资料，同时不断拓宽自己的知识视野，增加自身的知识含量。</p>
        </el-row>
        <el-row>
          <span style="font-weight: bolder">科研目标：</span>
          <p>积极实施学院教学改革，采取模块化教学方式--有效提高课堂教学效率。在本学期中，在教学中我将对教材要认真分析，整合个工作流程模块，运用多种灵活的教学方法，认真设计每一节课，来激发学生的学习兴趣，提高学生的各种实际操作能力，并及时对每节课进行反思，同时争取本年度能有1-2篇较高质量的教学论文在省级以上期刊交流或获奖。</p>
        </el-row>
        <el-row>
          <span style="font-weight: bolder">其他方面目标：</span>
          <p>树立终身学习的观念，坚持多看书，看好书，如定期阅读教育教学刊物，经常从网上浏览有关教育教学的文章等，并做好读书笔记，写好学习心得，在书中汲取营养，用教育理论武装自己。</p>
        </el-row>
        <el-row>
          <span style="font-weight: bolder">实施措施：</span>
          <p>充分利用业余时间，不断丰富自己，加强自身建设。请领导、同行多听课、多指导，大胆实践，不断创新，形成自己的教学风格。</p>
        </el-row>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
name: "index",
  data() {
    return {
      currentDate: new Date(),
      drawer: false,
      editDialogVisible: false,
      careerVisible: false,
      careerFlag: false,
      title:'',
      careerForm:{},
      carrerData:[
        '2020年职业规划',
        '2021年职业规划',
        '2022年职业规划',
        '2023年职业规划',
        '2024年职业规划',
      ],
      editform: {
        answer: '',
        development: '',
        career: '',
        academic: '',
        study: ''
      },
    };
  },
  methods:{
    openEditPerson(){
      this.editDialogVisible = true
    },
    addCareer(){
      this.careerVisible = true
    },
    viewCareerDetail(item){
      this.title = item
      this.careerFlag =  true
    },
    submitPerson(){
      this.editDialogVisible = false
      this.$message({

        type:"success",
        message:'提交成功',
      })
    },
    submitaddCareer(){
      this.careerVisible = false
      this.$message({

        type:"success",
        message:'提交成功',
      })
    }
  },


}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

</style>
