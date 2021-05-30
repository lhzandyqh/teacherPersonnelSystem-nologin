import request from '@/utils/request'

// 获取合同快到期的人员
export function getPeopleConExpire() {
  return request({
    url: '/tea/getContractSoonExpire',
    method: 'get',
    // params: parems
  })
}

// 获取在岗人员
export function getPeopleOnjob() {
  return request({
    url: '/tea/getOnJob',
    method: 'get',
    // params: parems
  })
}

// 人事处按条件获取所有教师角色信息
export function searchTeacherByCondition(parems) {
  return request({
    url: '/tea/getContractByCondition',
    method: 'get',
    params: parems
  })
}

// 人事处添加新合同
export function personnelAddNewContract(parems) {
  return request({
    url: '/tea/addNewContract',
    method: 'post',
    params: parems
  })
}

// 人事处设置合同人员类别
export function personnelSetPeopleType(parems) {
  return request({
    url: '/tea/setPersonnelType',
    method: 'post',
    params: parems
  })
}

// 人事处设置合同工作状态
export function personnelSetWorkStatus(parems) {
  return request({
    url: '/tea/setWorkStatus',
    method: 'post',
    params: parems
  })
}

// 人事处获取离职员工
export function personnelGetLeavePeople(parems) {
  return request({
    url: '/tea/getRetiree',
    method: 'get',
    params: parems
  })
}

// 人事处修改合同状态
export function personnelChangeContractStatus(parems) {
  return request({
    url: '/tea/updateContract',
    method: 'post',
    params: parems
  })
}


