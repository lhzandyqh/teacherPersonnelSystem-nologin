import request from '@/utils/request'

// 按照项目名称查询积分配置
export function inquireScoreConfig(parems) {
  return request({
    url: '/api/scoreConfiguration/getAllScoreConfig',
    method: 'post',
    params: parems
  })
}

//  按照项目名称插入积分配置
export function addScoreConfig(parems) {
  return request({
    url: '/api/scoreConfiguration/scoreConfiguration',
    method: 'post',
    params: parems
  })
}

// 按照项目名称修改积分配置
export function updateScoreConfig(parems) {
  return request({
    url: '/api/scoreConfiguration/updateScore',
    method: 'post',
    params: parems
  })
}

//














