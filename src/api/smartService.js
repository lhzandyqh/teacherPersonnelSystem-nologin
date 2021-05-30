import request from '@/utils/request'

// 获取所有的文件信息
export function getAllFileInfo() {
  return request({
    url: '/filelib/getAllFileInfo',
    method: 'get'
  })
}

// 增加上传文件信息
export function addFileInfo(parems) {
  return request({
    url: '/filelib/addOneFile',
    method: 'post',
    data: parems
  })
}

// 删除文件
export function deleteFileInfo(parems) {
  return request({
    url: '/filelib/deleteOneFile',
    method: 'get',
    params: parems
  })
}

