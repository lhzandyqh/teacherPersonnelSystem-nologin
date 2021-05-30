import request from '@/utils/request'

export function geTeacherWorkStatistic(parems) {
  return request({
    url: '/intelligentAnalysis/teaJobAccountDetail',
    method: 'get',
    params: parems
  })
}


// 教师考核得分
export function getTeacherEvaluationScore(parems) {
  return request({
    url: '/intelligentAnalysis/teaAssessmentScore',
    method: 'get',
    params: parems
  })
}

// 教师能力指标雷达图获取数据
export function getTeacherAbilityRadarData(parems) {
  return request({
    url: '/intelligentAnalysis/teaAbilitiesIndicator',
    method: 'get',
    params: parems
  })
}

// 获取教学与专业能力表的数据
export function getTeachAndMajorTableData(parems) {
  return request({
    url: '/intelligentAnalysis/teaTeachAndMajorAbilityStatistics',
    method: 'get',
    params: parems
  })
}

// 获取科研与社会服务能力表的数据
export function getResearchAndSocialTableData(parems) {
  return request({
    url: '/intelligentAnalysis/teaSciAndSocialServiceStatistics',
    method: 'get',
    params: parems
  })
}

// 获取学生管理能力表的数据
export function getStudentManageTableData(parems) {
  return request({
    url: '/intelligentAnalysis/teaStuManageWorkStatistics',
    method: 'get',
    params: parems
  })
}

// 获取师资队伍表的数据
export function getTeaherGroupTableData(parems) {
  return request({
    url: '/intelligentAnalysis/teaGroupsStatistics',
    method: 'get',
    params: parems
  })
}

// 师生比图数据
export function getTeacherStudentEchartsData(parems) {
  return request({
    url: '/intelligentAnalysis/teacherStudentRatio',
    method: 'get',
    params: parems
  })
}

// 教师性别比例图数据
export function getTeacherGenderEchartsData(parems) {
  return request({
    url: '/intelligentAnalysis/teacherSecRatio',
    method: 'get',
    params: parems
  })
}

// 双师比例图数据
export function getDoubleTeacherEchartsData(parems) {
  return request({
    url: '/intelligentAnalysis/doubleTeacherRatio',
    method: 'get',
    params: parems
  })
}

// 高级职称比例数据
export function getSeniorTeacherEchartsData(parems) {
  return request({
    url: '/intelligentAnalysis/teaSeniorTeacherRatio',
    method: 'get',
    params: parems
  })
}

// 年龄结构图数据
export function getAgeEchartsData(parems) {
  return request({
    url: '/intelligentAnalysis/teaAgeStructure',
    method: 'get',
    params: parems
  })
}

// 学历结构图数据
export function getXueliEchartsData(parems) {
  return request({
    url: '/intelligentAnalysis/teaEducationStructure',
    method: 'get',
    params: parems
  })
}

// 学位结构图数据
export function getXueweiEchartsData(parems) {
  return request({
    url: '/intelligentAnalysis/teaEducationStructure',
    method: 'get',
    params: parems
  })
}

// 职称结构图数据
export function getProfessEchartsData(parems) {
  return request({
    url: '/intelligentAnalysis/teaProfessTitleStructure',
    method: 'get',
    params: parems
  })
}

// 属性结构图数据
export function getshuxingEchartsData(parems) {
  return request({
    url: '/intelligentAnalysis/teaAttributeStructure',
    method: 'get',
    params: parems
  })
}

// 学缘结构图获取数据
export function getXueyuanEchartsData(parems) {
  return request({
    url: '/intelligentAnalysis/teaLearningStructure',
    method: 'get',
    params: parems
  })
}
