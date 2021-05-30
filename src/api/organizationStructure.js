import request from '@/utils/request'

// 获取所有的组织结构信息
export function getAllOrganizationData() {
  return request({
    url: '/tea/getAllFrameworkDirectory',
    method: 'get',
    // params: parems
  })
}

// 新建组织
export function beginNewOrganization(parems) {
  return request({
    url: '/tea/addOneDirectory',
    method: 'post',
    params: parems
  })
}

// 删除组织
export function beginDeleteOrganization(parems) {
  return request({
    url: '/tea/removeOneDirectory',
    method: 'get',
    params: parems
  })
}

// 获取组织所有成员
export function getOrganizationAllMember(parems) {
  return request({
    url: '/tea/getFrameworkByDiId',
    method: 'get',
    params: parems
  })
}

// 从组织移除成员
export function removeMemberFromOrgById(parems) {
  return request({
    url: '/tea/removeFrameworkById',
    method: 'get',
    params: parems
  })
}

// 添加新的成员
export function addNewMember(parems) {
  return request({
    url: '/tea/insertOneTeaOfFramework',
    method: 'post',
    data: parems
  })
}

// 根据用户名查找成员
export function findMemberByName(parems) {
  return request({
    url: '/tea/getTeaOfFramework',
    method: 'get',
    params: parems
  })
}
