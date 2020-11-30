import request from '@/utils/request'
// 积分配置列表
export function integrationConfigList(token) {
  return request({
    url: '/api/pointcertificate',
    method: 'get',
    params: { token }
  })
}
// 积分详情
export function integrationInfoList(token) {
  return request({
    url: '/api/qualificationinfo',
    method: 'get',
    params: { token }
  })
}
// 积分详情查询
export function integrationSearch(parems) {
  return request({
    url: '/api/pointcertificate/search',
    method: 'get',
    params: parems
  })
}
// 新增积分
export function creatIntegration(parems) {
  return request({
    url: '/api/pointcertificate/insert',
    method: 'post',
    params: parems
  })
}
// 修改积分
export function updateIntegration(parems) {
  return request({
    url: '/api/pointcertificate/insert',
    method: 'post',
    params: parems
  })
}
// 教师信息
export function getTeacherInfo(parems) {
  return request({
    url: '/api/teacher',
    method: 'get',
    params: parems
  })
}
// 教师基本信息123
export function getTeacherBase(token) {
  return request({
    url: '/api/teacher/teacherbaseinfo',
    method: 'get',
    params: { token }
  })
}
// 修改教师信息
export function updateTeacherInfo(parems) {
  return request({
    url: '/api/teacher/update',
    method: 'post',
    params: parems
  })
}
// 资质信息
export function getAptitudeInfo(token) {
  return request({
    url: '/api/qualificationinfo',
    method: 'get',
    params: { token }
  })
}
// 资质查看
export function getAptitude(parmes) {
  return request({
    url: '/api/qualificationinfo/query',
    method: 'post',
    params: parmes
  })
}
// 资质新增
export function addAptitude(parmes) {
  return request({
    url: '/api/qualificationinfo/add_qualification',
    method: 'post',
    params: parmes
  })
}
// 资质信息删除
export function getAptitudeDelete(parmes) {
  return request({
    url: '/api/qualificationinfo/del',
    method: 'post',
    params: parmes
  })
}
// 审核列表
export function getAuditingList(token) {
  return request({
    url: '/api/qualificationauditlist',
    method: 'get',
    params: { token }
  })
}
// 审核列表查看
export function getAuditing(parmes) {
  return request({
    url: '/api/qualificationauditlist/show',
    method: 'post',
    params: parmes
  })
}

// 修改审核
export function editAuditing(parmes) {
  return request({
    url: '/api/qualificationauditlist/update',
    method: 'post',
    params: parmes
  })
}

// 审核历史
export function getAuditingHistory(token) {
  return request({
    url: '/api/qualificationhistory',
    method: 'get',
    params: { token }
  })
}

// 审核历史查看
export function getAuditingListHistory(parmes) {
  return request({
    url: '/api/qualificationhistory/show',
    method: 'post',
    params: parmes
  })
}

// 修改审核历史
export function editAuditingHistory(parmes) {
  return request({
    url: '/api/qualificationhistory/update',
    method: 'post',
    params: parmes
  })
}

// 统计信息
export function getCountListAll(token) {
  return request({
    url: '/api/scoreinfostaticBySubject/teacherRankall',
    method: 'get',
    params: { token }
  })
}

// 权限列表
export function getAuthorityList(token) {
  return request({
    url: '/api/userrole',
    method: 'get',
    params: { token }
  })
}

// 权限列表（带参数）
export function getAuthorityListWithPrams(parmes) {
  return request({
    url: '/api/userrole/getTecRoleInfo',
    method: 'get',
    params: parmes
  })
}

// 修改权限
export function editAuthority(parmes) {
  return request({
    url: '/api/userrole/setTeacherRole',
    method: 'post',
    params: parmes
  })
}

// 获取所有的教研组名称
export function getAllTeachGroup(token) {
  return request({
    url: '/api/getTecInfoLabel/getAllDeptName',
    method: 'get',
    params: { token }
  })
}

// 统计信息根据学科获取数据
export function getCountList(parems) {
  return request({
    url: '/api/scoreinfostaticBySubject/teacherRanksingle',
    method: 'get',
    params: parems
  })
}
// 统计信息积分概要统计
export function getCountListGaiyao(token) {
  return request({
    url: '/api/scoreinfostaticBySubject',
    method: 'get',
    params: { token }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}

// 配置教师权限（多个权限）
export function setManyRoles(parems) {
  return request({
    url: '/api/userrole/setTecRole',
    method: 'get',
    params: parems
  })
}
