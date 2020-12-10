import request from '@/utils/request'
// 任务提交
export function guideStudentAdd(query) { // 指导学生实训情况新增
  return request({
    url: '/tecWorkTask/addTeaInstructStuTrain',
    method: 'post',
    // data: {
    //   teaInstructStuTrainingInfo: query
    // }
    data: query
  })
}

export function guideStudentSelect(query) { // 指导学生实训情况查询
  return request({
    url: '/tecWorkTask/getTeaInstructStuTrain',
    method: 'get',
    params: query
  })
}

export function guideGraduateAdd(query) { // 指导学生毕业设计新增
  return request({
    url: '/tecWorkTask/addTeaInstructStuGradu',
    method: 'post',
    // data: {
    //   teaInstructStuGraduInfo: query
    // }
    data: query
  })
}

export function guideGraduateSelect(query) { // 指导学生毕业设计查询
  return request({
    url: '/tecWorkTask/getTeaInstructStuGradu',
    method: 'get',
    params: query
  })
}

export function eduAndTeachAdd(query) { // 教育教学新增
  return request({
    url: '/tecWorkTask/addTeaEduAward',
    method: 'post',
    // data: {
    //   teaEduAwardInfo: query
    // }
    data: query
  })
}

export function eduAndTeachSelect(query) { // 教育教学情况查询
  return request({
    url: '/tecWorkTask/getTeaEduAward',
    method: 'get',
    params: query
  })
}

