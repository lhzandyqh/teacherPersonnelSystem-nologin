import request from '@/utils/request'

// 获取所有的用户列表
export function getAllUserData() {
  return request({
    url: '/tea/getAllTeaRole',
    method: 'get',
    // params: parems
  })
}


// 人事处按条件获取所有教师角色信息
export function perGetAllAuthorityUser(parems) {
  return request({
    url: '/tea/getTeaRoleByDeptAndName',
    method: 'get',
    params: parems
  })
}

// 人事处修改教师权限
export function perEditUserAuthority(parems) {
  return request({
    url: '/tea/setTeaRole',
    method: 'post',
    params: parems
  })
}

// 获取所有的组织
export function perGetAllOrg() {
  return request({
    url: '/tea/getAllFrameworkDirectory',
    method: 'get',
  })
}

// 条件查询成员
export function perGetUserByCondition(parems) {
  return request({
    url: '/tea/getTeaRoleByDeptAndName',
    method: 'get',
    params: parems
  })
}

