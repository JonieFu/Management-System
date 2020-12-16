import request from '@/utils/request'

export function getList(params) {
  console.log("发起了getList请求")
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
