import request from '@/utils/request'

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
