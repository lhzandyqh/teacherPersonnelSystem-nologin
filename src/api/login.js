import request from '@/utils/request'

// export function loginByUsername(username, password) {
//   const data = {
//     username,
//     password
//   }
//   return request({
//     url: '/login/login',
//     method: 'post',
//     data
//   })
// }

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function loginByUsername(parems) {
  return request({
    url: 'userlogin/getUserRoleInfo',
    method: 'get',
    params: parems
  })
}

// export function getUserInfo(params) {
//   return request({
//     url: 'userlogin/getUserRoleInfo',
//     method: 'post',
//     params: params
//   })
// }


// 获取所有的权限，用于展示或隐藏权限切换栏
export function getAllPermissions(params) {
  return request({
    url: 'userlogin/getUserAllRole',
    method: 'get',
    params: params
  })
}
