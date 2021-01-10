import request from '@/utils/request'

export function updateSocial(data) {
    return request({
      url: '/tecWorkTask/teaSocialTrainInfoSet',
      method: 'post',
      data
    })
  }
  // 教师培训信息
  export function getSocial(parems) {
    return request({
      url: '/tecWorkTask/teaSocialTrainInfoGetByTecUsername',
      method: 'get',
      params: parems
    })
  }

  export function updateSocialdo(data) {
    return request({
      url: '/tecWorkTask/teaSocialPracticeInfoSet',
      method: 'post',
      data
    })
  }
  // 教师培训do信息
  export function getSocialdo(parems) {
    return request({
      url: '/tecWorkTask/teaSocialPracticeInfosGetByTecUsername',
      method: 'get',
      params: parems
    })
  }
// 参与课题信息情况查询
export function getTeaParticiResearch(data) {
  return request({
    url: '/tecWorkTask/teaParticiResearchPrjInfosGetByTecUsername',
    method: 'get',
    params: data
  })
}

// 参与课题信息情况新增
export function addTeaParticiResearch(data) {
  return request({
    url: '/tecWorkTask/teaParticiResearchPrjInfoSet',
    method: 'post',
    data
  })
}

// 学术成果信息查询
export function getTeaPaperInfos(data) {
  return request({
    url: '/tecWorkTask/teaPaperInfosGetByTecUsername',
    method: 'get',
    params: data
  })
}

// 学术成果情况新增
export function addTeaPaperInfo(data) {
  return request({
    url: '/tecWorkTask/teaPaperInfoSet',
    method: 'post',
    data
  })
}

// 科研成果情况查询
export function getTeaSciAchieveInfos(data) {
  return request({
    url: '/tecWorkTask/teaSciAchieveInfosGetByTecUsername',
    method: 'get',
    params: data
  })
}

// 科研成果情况新增
export function addTeaSciAchieveInfo(data) {
  return request({
    url: '/tecWorkTask/teaSciAchieveInfoSet',
    method: 'post',
    data
  })
}


//教师权限审核历史学生管理工作
export function getStudentHistory(parems) {
  return request({
    url: '/tecWorkTaskAuditOne/teaStuManageAuditedInfosByTecUsername',
    method: 'get',
    params: parems
  })
}

//系部主管获取学生管理工作带审核列表
export function deptGetStudentAuditingList(parems) {
  return request({
    url: '/tecWorkTaskAuditOne/teaStuManageWorkWaitAuditOne',
    method: 'get',
    params: parems
  })
}

//系部主管获取学生管理工作详情
export function deptGetStudentAuditingListDetail(parems) {
  return request({
    url: '/tecWorkTaskAuditOne/teaStuManageWorkWaitAuditDetail',
    method: 'get',
    params: parems
  })
}

// 系部主管审核学生管理工作
export function deptAuditingStudent(parems) {
  return request({
    url: '/tecWorkTaskAuditOne/teaStuManageWorkAuditOne',
    method: 'post',
    params: parems
  })
}

//人事处获取学生管理工作待审核列表
export function perGetStudentAuditingList(parems) {
  return request({
    url: '/tecWorkTaskAuditOne/teaStuManageWorkInfosWaitAuditTwo',
    method: 'get',
    params: parems
  })
}

// 人事处审核学生管理工作
export function perAuditingStudent(parems) {
  return request({
    url: '/tecWorkTaskAuditOne/teaStuManageWorkAuditTwo',
    method: 'post',
    params: parems
  })
}

//教师获取科研与社会服务相关信息历史列表
export function teacherGetResearchHistory(parems) {
  return request({
    url: '/tecWorkTaskAuditOne/teaSciAndSocialServiceAuditedInfosByTecUsername',
    method: 'get',
    params: parems
  })
}

// 系部主任获取科研与社会服务待审核列表
export function deptGetAuditingResearchList(parems) {
  return request({
    url: '/tecWorkTaskAuditOne/teaSciAndSocialServiceInfoWaitAuditOne',
    method: 'get',
    params: parems
  })
}

// 系部获取科研与社会服务待审核详情
export function deptGetAuditingResearchDetail(parems) {
  return request({
    url: '/tecWorkTaskAuditOne/teaSciAndSocialServiceInfoDetail',
    method: 'get',
    params: parems
  })
}

// 系部审核科研与社会服务
export function deptBeginAuditingResearch(parems) {
  return request({
    url: '/tecWorkTaskAuditOne/teaSciAndSocialServiceInfoAuditOne',
    method: 'post',
    params: parems
  })
}

// 人事处获取科研与社会服务待审核列表
export function personnelGetAuditingResearchList(parems) {
  return request({
    url: '/tecWorkTaskAuditOne/teaSciAndSocialServiceInfosWaitAuditTwo',
    method: 'get',
    params: parems
  })
}

// 系部审核科研与社会服务
export function personnelBeginAuditingResearch(parems) {
  return request({
    url: '/tecWorkTaskAuditOne/teaSciAndSocialServiceInfosAuditTwo',
    method: 'post',
    params: parems
  })
}


//系部获取教学与专业发展待审核
export function deptGetTeachAuditingList(parems) {
  return request({
    url: '/tea/getCheckInfoByDept',
    method: 'get',
    params: parems
  })
}

// 系部获取教学与专业发展详情
export function getTeachAuditingItemDetail(parems) {
  return request({
    url: '/tea/getCheckDetailByDept',
    method: 'post',
    params: parems
  })
}

// 系部开始审核
export function deptBeginAuditing(parems) {
  return request({
    url: '/tea/deptCheck',
    method: 'post',
    params: parems
  })
}

//人事处获取教学与专业发展待审核
export function perGetTeachAuditingList(parems) {
  return request({
    url: '/tea/getCheckInfoByPer',
    method: 'get',
    params: parems
  })
}

// 人事处获取教学与专业发展详情
export function perGetTeachAuditingItemDetail(parems) {
  return request({
    url: '/tea/getCheckDetailByPersonnel',
    method: 'post',
    params: parems
  })
}

// 人事处开始审核
export function perBeginAuditing(parems) {
  return request({
    url: '/tea/PerCheck',
    method: 'post',
    params: parems
  })
}

// 教师获取教学与专业发展历史
export function teacherGetTeachHistory(parems) {
  return request({
    url: '/tea/getAllSubmittedInfoBySelf',
    method: 'get',
    params: parems
  })
}
