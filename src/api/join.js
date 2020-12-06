import request from '@/utils/request'
//7、参与建设情况新增
export function addConstruct(params) {
  return request({
    url: '/tecWorkTask/addTeaParticiConstruct',
    method: 'post',
    data:params
  })
}

//8、参与建设情况查询
export function getConstruct(params) {
  return request({
    url: '/tecWorkTask/getTeaParticiConstruct',
    method: 'get',
    params: params
  })
}

//9、参与教研项目情况新增
export function addResearch(params) {
  return request({
    url: '/tecWorkTask/addTeaParticiTeachResearch',
    method: 'post',
    data:params
  })
}

//10、参与教研项目情况查询
export function getResearch(params) {
  return request({
    url: '/tecWorkTask/getTeaParticiTeachResearch',
    method: 'get',
    params: params
  })
}

//11、参与编写教材情况新增
export function addbook(params) {
  return request({
    url: '/tecWorkTask/addTeaParticiCompileTextbook',
    method: 'post',
    data:params
  })
}

//12、参与编写教材情况查询
export function getbook(params) {
  return request({
    url: '/tecWorkTask/getTeaParticiCompileTextbook',
    method: 'get',
    data:params,
    params: params
  })
}




