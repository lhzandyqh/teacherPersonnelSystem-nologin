import request from '@/utils/request'

// 获取规划
export function getDevelopmentPlan(parems) {
  return request({
    url: '/tecWorkTask/teaDevelopmentPlan',
    method: 'get',
    params: parems
  })
}
