import request from '@/utils/request'
// 教师承担辅导员工作信息查询
export function teaBeCounselorInfosGetByTecUsername(username) {
  return request({
    url: `/tecWorkTask/teaBeCounselorInfosGetByTecUsername?tecUsername=${username}`,
    method: 'get'
  })
}
// 教师承担辅导员工作信息新增
export function teaBeCounselorInfoSet(parems) {
    return request({
      url: '/tecWorkTask/teaBeCounselorInfoSet',
      method: 'post',
      data: parems
    })
}

export function teaInstructClubAwardInfosGetByUsername(username) {
    return request({
      url: `/tecWorkTask/teaInstructClubAwardInfosGetByUsername?tecUsername=${username}`,
      method: 'get'
    })
  }
  // 教师承担辅导员工作信息新增
  export function teaInstructClubInfoAwardInfoSet(parems) {
      return request({
        url: '/tecWorkTask/teaInstructClubInfoAwardInfoSet',
        method: 'post',
        data: parems
      })
  }

  export function teaAssistStuInfosGetByTecUsername(username) {
    return request({
      url: `/tecWorkTask/teaAssistStuInfosGetByTecUsername?tecUsername=${username}`,
      method: 'get'
    })
  }
  // 教师承担辅导员工作信息新增
  export function teaAssistStuInfoSet(parems) {
      return request({
        url: '/tecWorkTask/teaAssistStuInfoSet',
        method: 'post',
        data: parems
      })
  }

  export function uploadPicture(parems) {
    return request({
      url: '/upload/fileUpdate',
      method: 'post',
      data: parems
    })
}
