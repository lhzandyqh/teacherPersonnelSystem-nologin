import request from '@/utils/request'

// 系部主管获取个人信息待审核列表
export function departmentGetInformationAuditingList(parems) {
  return request({
    url: 'tecWorkTaskAuditOne/teaInfoWaitAudit',
    method: 'get',
    params: parems
  })
}

// 根据id获取审核详情
export function getAuditDetailById(parems) {
  return request({
    url: 'tecWorkTaskAuditOne/teaInfoWaitAuditDetail',
    method: 'get',
    params: parems
  })
}

// 审核员审核(系部阶段)
export function beginAudit(parems) {
  return request({
    url: 'tecWorkTaskAuditOne/teaInfoAuditOne',
    method: 'post',
    params: parems
  })
}

// 检查个人信息数据库中是否有一条待审核表单的存在
export function ifHaveAuditData(parems) {
  return request({
    url: 'tecWorkTaskAuditOne/teaInfoUpdateStatus',
    method: 'get',
    params: parems
  })
}
