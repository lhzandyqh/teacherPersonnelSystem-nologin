import request from '@/utils/request'

// 教师信息智能查询
export function teacherInformationQuery(parems) {
  return request({
    url: '/tea/teaSmartQuery',
    method: 'post',
    params: parems
  })
}
