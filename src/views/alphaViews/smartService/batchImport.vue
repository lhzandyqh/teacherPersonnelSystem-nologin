<template>
  <div class="app-container">
    <div style="background-color: white;padding: 20px">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">导入类别:</div>
        <div>
          <el-select v-model="typeValue" placeholder="请选择类别">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"/>
          </el-select>
        </div>
        <div style="margin-left: 20px">
          <el-button type="primary" plain @click="excelImportShow = true" >批量导入</el-button>
        </div>
      </div>
    </el-row>
    <el-divider/>
    <div v-if="typeValue=='教师信息'">
      <teacher-table/>
    </div>
    <div v-if="typeValue=='工资信息'">
      <money-table/>
    </div>
<!--    <div v-if="typeValue=='考勤信息'">-->
<!--      <kaoqin-table/>-->
<!--    </div>-->
    <el-dialog :visible.sync="excelImportShow" width="30%" title="导入文件">
      <el-upload
        :before-upload="beforeUpload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        class="upload-demo"
        drag
        action="http://zhongkeruitong.top/show/assertmanager/batch_add_asset"
      >
        <i class="el-icon-upload" />
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div slot="tip" class="el-upload__tip">只能上传xls/xlsx文件</div>
        <div slot="tip" class="el-upload-list__item-name">{{ fileName }}</div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="excelImportShow = false">取消</el-button>
        <el-button type="primary" @click="submitUpload()">提交</el-button>
      </span>
    </el-dialog>
    </div>
  </div>
</template>

<script>
import teacherTable from "./importTable/teacherTable";
import moneyTable from "./importTable/moneyTable";
import kaoqinTable from "./importTable/kaoqinTable";
export default {
  name: 'BatchImport',
  components: {teacherTable,moneyTable,kaoqinTable},
  data() {
    return {
      excelImportShow: false,
      typeValue: '教师信息',
      options: [
        {
          value: '教师信息',
          label: '教师信息'
        },
        {
          value: '工资信息',
          label: '工资信息'
        },
        // {
        //   value: '考勤信息',
        //   label: '考勤信息'
        // },
      ]
    }
  }
}
</script>

<style scoped>

</style>
