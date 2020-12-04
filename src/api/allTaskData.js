import request from '@/utils/request'

export function updateSocial(parems) {
    return request({
      url: '/tecWorkTask/teaSocialTrainInfoSet',
      method: 'post',
      parems
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

  export function updateSocialdo(parems) {
    return request({
      url: '/tecWorkTask/teaSocialPracticeInfoSet',
      method: 'post',
      parems
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