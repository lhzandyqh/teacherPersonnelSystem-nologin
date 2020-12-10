import request from '@/utils/request'

// 用户登陆获取个人信息
export function userGetPersonalInformation(parems) {
  return request({
    url: 'tea/getTeaInfoById',
    method: 'get',
    params: parems
  })
}

// 上传图片
export function uploadPicture(parems) {
  return request({
    url: '/upload/fileUpdate',
    method: 'post',
    data: parems
  })
}

// 修改基本信息
export function editBasicInformation(parems) {
  return request({
    url: 'tea/updateTeaBasicInfo',
    method: 'post',
    data: parems
  })
}

// 修改学历信息
export function editEducationInformation(parems) {
  return request({
    url: 'tea/updateTeaEduInfo',
    method: 'post',
    data: parems
  })
}

// 修改专业信息
export function editProfessionalInformation(parems) {
  return request({
    url: 'tea/updateTeaProfessionAbility',
    method: 'post',
    data: parems
  })
}

// 增加工作经历
export function addWorkInformation(parems) {
  return request({
    url: 'tea/teaWorkExperienceInfoSet',
    method: 'post',
    data: parems
  })
}

